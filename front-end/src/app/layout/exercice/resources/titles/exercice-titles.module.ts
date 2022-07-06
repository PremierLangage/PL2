import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TitleProviderComponent } from './title-provider/title-provider.component';
import { DefaultLeftComponent } from './components/default-left/default-left.component';


@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTypographyModule
  ],
  declarations: [
    TitleProviderComponent,
    DefaultComponent,
    DefaultLeftComponent
  ],
  exports: [
    TitleProviderComponent
  ]
})
export class ExerciceTitlesModule { }
