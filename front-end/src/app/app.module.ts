import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconModule } from '@ant-design/icons-angular';
import { CssPipeModule } from './pipes/CssPipe.pipe';
import { NgeMonacoModule } from '@cisstech/nge/monaco';
import { ActivityModule } from './activityPlayer/activity/activity.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent, 
    CourseComponent, 
    CourseListComponent,

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    IconsProviderModule, 
    NzLayoutModule, 
    NzMenuModule,
    IconModule,
    CssPipeModule,
    ActivityModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
