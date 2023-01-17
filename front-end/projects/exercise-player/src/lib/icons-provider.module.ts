import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  BookFill,
  BookOutline,
  TagOutline,
  TagsOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  BookFill,BookOutline,
  TagOutline,
  TagsOutline
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
