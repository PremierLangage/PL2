import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExerciceListProviderComponent } from './exercice-list-provider/exercice-list-provider.component';
import { DefaultComponent } from './components/default/default.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';



const TEMPLATE_DECLARATION = [
  DefaultComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    NzDividerModule,
    NzTypographyModule,
    NzRateModule,
    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule
  ],
  declarations: [
    ExerciceListProviderComponent,
    ...TEMPLATE_DECLARATION
  ],
  exports: [
    ExerciceListProviderComponent
  ]
})
export class ExerciceListModule { }
