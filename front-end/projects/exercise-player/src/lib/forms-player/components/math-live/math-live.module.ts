import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MarkdownModule } from 'ngx-markdown';
import { MathLiveComponent } from "./math-live.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MarkdownModule.forRoot(),
    ],
    declarations : [
        MathLiveComponent
    ],
    exports : [
        MathLiveComponent
    ]
})
export class MathLiveModule { }