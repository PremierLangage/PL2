import {
    apply,
    chain,
    mergeWith,
    move,
    Rule,
    template,
    Tree,
    url,
    SchematicsException
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Change, findNodes, InsertChange, insertImport } from '@nrwl/workspace/src/utils/ast-utils';

// import { Change, InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/workspace';

import { join } from 'path';
import * as ts from 'typescript';


function readSourceFile(tree: Tree, filePath: string) {
    const registryFileContent = tree.read(filePath)?.toString('utf8') as string;
    return ts.createSourceFile(
        filePath.split('/').pop() as string,
        registryFileContent,
        ts.ScriptTarget.Latest,
        true
    );
}

function addImport(args: {
    tree: Tree,
    filePath: string;
    symbolName: string,
    importPath: string,
}): Rule {
    const source = readSourceFile(
        args.tree,
        args.filePath,
    );

    const change = insertImport(
        source,
        args.filePath,
        args.symbolName,
        args.importPath
    ) as InsertChange;

    return tree => {
        const recorder = tree.beginUpdate(args.filePath);
        recorder.insertLeft(change.pos, change.toAdd);
        tree.commitUpdate(recorder);
        return tree;
    };
}

function addElementInArray(args: {
    tree: Tree,
    arrayName: string;
    filePath: string;
    toAdd: string
}): Rule {
    return tree => {
        const source = readSourceFile(
            args.tree,
            args.filePath,
        );
        const keywords = findNodes(source, ts.SyntaxKind.VariableStatement);
        const changes: Change[] = [];
        for (const keyword of keywords) {
            if (ts.isVariableStatement(keyword)) {
                const [ declaration ] = keyword.declarationList.declarations;
                if (
                    ts.isVariableDeclaration(declaration) &&
                    declaration.initializer &&
                    declaration.name.getText() === args.arrayName
                ) {
                    const node = declaration.initializer.getChildAt(1);
                    const lastToken = node.getLastToken();
                    let commas = ',';
                    let pos = node.getEnd() + 1;
                    if (lastToken) {
                        let trailingCommaFound = false;
                        if (lastToken.kind === ts.SyntaxKind.CommaToken) {
                            trailingCommaFound = true;
                        } else {
                            changes.push(new InsertChange(args.filePath, lastToken.getEnd(), ','));
                        }
                        commas = trailingCommaFound ? ',' : '';
                        pos = lastToken.getEnd() + 1;
                    }
                    changes.push(new InsertChange(
                        args.filePath,
                        pos,
                        args.toAdd + commas + '\n'
                    ));
                    break;
                }
            }
        };
        const recorder = tree.beginUpdate(args.filePath);
        for (const change of changes) {
            if (change instanceof InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}

function addComponentToRegistry(tree: Tree, schema: SchematicOptions): Rule {
    const className = strings.classify(schema.name);
    const selector = "wc-" + schema.name;
    const toAdd = `    { selector: '${selector}', module: () => import( /* webpackChunkName: "${selector}" */ '${schema.modulePath}.module').then(m => m.${className}Module) }`;
    return addElementInArray({
        tree,
        toAdd,
        filePath: schema.registryFilePath,
        arrayName: 'WEB_COMPONENTS_BUNDLES',
    });
}

function addComponentToProviders(tree: Tree, schema: SchematicOptions): Rule {
    const className = strings.classify(schema.name);
    const toAdd = `    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: ${className}ComponentDefinition }`;
    return addElementInArray({
        tree,
        toAdd,
        filePath: schema.registryFilePath,
        arrayName: 'WEB_COMPONENTS_REGISTRY',
    });
}

export default function (schema: SchematicOptions): Rule {
    if (!schema.name) {
        throw new SchematicsException('name option is required.');
    }
    if (!schema.type) {
        throw new SchematicsException('type option is required.');
    }

    return async (tree: Tree) => {
        const workspace = await getWorkspace(tree);

        const project = workspace.projects.get('feature-web-component');
        if (!project) {
            throw new Error('Could not find project "feature-web-component".');
        }

        const sourceRoot = project.sourceRoot as string;

        schema.name = strings.dasherize(schema.name);
        if (schema.name.startsWith('wc-')) {
            schema.name = schema.name.substring(3, schema.name.length)
        }

        schema.modulePath = `./${schema.type}s/${schema.name}/${schema.name}`;
        schema.registryFilePath = 'libs/feature/web-component/src/lib/web-component-registry.ts';

        console.log(schema);
        const sources = apply(url('./files'), [
            template({
                ...strings,
                ...schema,
            }),
            move(join(sourceRoot, 'lib', schema.type + 's', schema.name)),
        ]);

        return chain([
            addImport({
                tree,
                filePath: schema.registryFilePath,
                symbolName: `${strings.classify(schema.name)}ComponentDefinition`,
                importPath: schema.modulePath,
            }),
            addComponentToRegistry(tree, schema),
            addComponentToProviders(tree, schema),
            mergeWith(sources)
        ]);
    };
}

export interface SchematicOptions {
    name: string;
    type: 'form' | 'widget';
    registryFilePath: string;
    registryFileName: string;
    modulePath: string;
}
