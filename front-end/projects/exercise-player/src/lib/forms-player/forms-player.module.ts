import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { RadioGroupModule } from "./components/radio-group/radio-group.module";
import { FormsProviderComponent } from "./forms-provider/forms-provider.component";
import { InputBoxModule } from "./components/input-box/input-box.module";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { CodeEditorModule } from "./components/code-editor/code-editor.module";

const FORMS_DECLARATIONS = [
    RadioGroupModule,
    InputBoxModule,
    CodeEditorModule,
    // FormlyformModule,
];

@NgModule({
    imports: [
        CommonModule,
        NzIconModule,
        NzTypographyModule,
        NzResultModule,
        NzAffixModule,
        NzDividerModule,
        NzButtonModule,
        NzSpaceModule,
        NzSkeletonModule,
        NzSpinModule,
        NzMessageModule,
        // COMPONENTS :
        ...FORMS_DECLARATIONS,
    ],
    declarations: [
        FormsProviderComponent,
    ],
    exports: [
        FormsProviderComponent,
    ]
})
export class FormsPlayerModule {
}
