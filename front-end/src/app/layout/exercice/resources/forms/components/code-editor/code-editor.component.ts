import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Injector,
    Input,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import {
    ACTION_GOTO_LINE,
    ACTION_INDENT_USING_SPACES,
    ACTION_QUICK_COMMAND,
} from '@cisstech/nge/monaco';
import { formState } from 'src/app/layout/exercice/models/exercice';
import { FormSuperclass } from '../../form-superclass';
import { CodeEditorForm } from './code-editor';

@Component({
selector: 'form-code-editor',
templateUrl: './code-editor.component.html',
styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent extends FormSuperclass implements AfterViewChecked, OnDestroy {


    initData(value: formState): void {
        this.codeEditorData = value.form as CodeEditorForm;
        this.initialCode = this.codeEditorData.code;
    }

    codeEditorData?: CodeEditorForm;

    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;
    private editor?: monaco.editor.IStandaloneCodeEditor;
    private width = 0;
    private height = 0;

    @ViewChild('footer', { static: true })
    footer!: ElementRef<HTMLElement>;

    initialCode = '';
    cursor: monaco.IPosition = {
        column: 0,
        lineNumber: 0,
    };
    decorations: any[] = [];

    constructor(
        readonly injector: Injector,
    ) {
        super();
    }
    onCreateEditor(editor: monaco.editor.IEditor) {
        this.editor = editor as monaco.editor.IStandaloneCodeEditor;

        this.editor.updateOptions({
            minimap: {
                side: 'right'
            }
        });

        editor.setModel(
            (this.model =
                this.model ||
                monaco.editor.createModel(
                    this.codeEditorData?.code || '',
                    this.codeEditorData?.language || 'plaintext'
                ))
        );


        // LISTENERS

        // OUTPUT LINK
        this.disposables.push(
            this.model.onDidChangeContent(() => {
                this.output = this.model?.getValue();
            })
        );
        // CURSOR ACTUALISATION
        this.disposables.push(
            this.editor.onDidChangeCursorPosition((e) => {
                this.cursor = e.position;
            })
        );

    }

    ngAfterViewChecked() {
        if (!this.editor || !this.footer) return;

        const rect = this.footer.nativeElement.getBoundingClientRect();
        if (!rect) return;

        const { width, height } = rect;
        if (this.width !== width || this.height !== height) {
            this.editor?.layout();
            this.width = width;
            this.height = height;
        }
    }

    ngOnDestroy() {
        this.disposables.forEach((d) => d.dispose());
    }


    reset() {
        if (this.codeEditorData)
            this.model?.setValue(this.initialCode);
    }

    goToLine() {
        if (!this.editor) return;
        const action = this.editor.getAction(ACTION_GOTO_LINE);
        this.editor.focus();
        action.run();
    }

    quickCommand() {
        if (!this.editor) return;
        const action = this.editor.getAction(ACTION_QUICK_COMMAND);
        this.editor.focus();
        action.run();
    }

    changeIndent() {
        if (!this.editor) return;
        const action = this.editor.getAction(ACTION_INDENT_USING_SPACES);
        this.editor.focus();
        action.run();
    }
}
