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

import { CodeEditorModule } from "./components/code-editor/code-editor.module";
import { FormlyformModule } from "./components/formlyform/formlyform.module";
import { InputBoxModule } from "./components/input-box/input-box.module";
import { RadioGroupModule } from "./components/radio-group/radio-group.module";
import { FormsProviderComponent } from "./forms-provider/forms-provider.component";

const FORMS_DECLARATIONS = [
    RadioGroupModule,
    InputBoxModule,
    CodeEditorModule,
    FormlyformModule,
];

@NgModule({
    imports: [
        CommonModule,
        NzIconModule,
        NzTypographyModule,
        NzResultModule,
        NzAffixModule,
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
export class ExerciceFormsModule {
}
