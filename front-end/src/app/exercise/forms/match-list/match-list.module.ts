import { NgModule, Type } from '@angular/core';
import { NgeMarkdownModule } from '@mcisse/nge/markdown';
import { BaseModule } from '../../shared/components/base/base.module';
import { MatchListComponent } from './match-list.component';


@NgModule({
    declarations: [MatchListComponent],
    imports: [
        BaseModule,
        NgeMarkdownModule,
    ],
    exports: [MatchListComponent],
})
export class MatchListModule {
    customElementComponent: Type<any> = MatchListComponent;
}
