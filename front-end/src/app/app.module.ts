import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityService} from './activity/activity.service';
import { CourseListComponent } from './course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, CourseComponent, ActivityComponent,CourseListComponent],
  imports: [BrowserModule, BrowserAnimationsModule,AppRoutingModule, HttpClientModule,MatCardModule,MatExpansionModule,MatSidenavModule,MatCheckboxModule,MatIconModule],
  providers: [ActivityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
