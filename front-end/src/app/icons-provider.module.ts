import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  SolutionOutline,
  NumberOutline,
  TrophyOutline,
  SmileOutline,
  MehOutline,
  FrownOutline,
  ReadOutline,
  SmileFill,
  MehFill,
  FrownFill,
  CheckCircleFill,
  CloseCircleFill
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline, 
  MenuUnfoldOutline, 
  DashboardOutline, 
  FormOutline, 
  SolutionOutline, 
  NumberOutline, 
  TrophyOutline,
  SmileOutline,
  MehOutline,
  FrownOutline,
  ReadOutline,
  SolutionOutline,
  SmileFill,
  MehFill,
  FrownFill,
  CheckCircleFill,
  CloseCircleFill,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
