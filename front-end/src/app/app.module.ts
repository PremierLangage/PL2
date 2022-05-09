import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityService} from './activity/activity.service';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseService} from './exercise/exercise.service';
import { CourseListComponent } from './course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from './icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent, CourseComponent, ActivityComponent,CourseListComponent, ExerciseComponent],
  imports: [BrowserModule, BrowserAnimationsModule,AppRoutingModule, HttpClientModule,MatCardModule,MatExpansionModule,MatSidenavModule,MatCheckboxModule,MatIconModule,NzLayoutModule,NzBreadCrumbModule, FormsModule, IconsProviderModule, NzMenuModule],
  providers: [ActivityService, ExerciseService, { provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
