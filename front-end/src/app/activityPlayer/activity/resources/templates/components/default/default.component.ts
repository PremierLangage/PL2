import { Component, OnInit } from '@angular/core';
import { exerciceLoadingData } from 'src/app/activityPlayer/activity/models/activity';
import { TemplateSuperclass } from '../../template-superclass';

@Component({
  selector: 'activity-templates-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends TemplateSuperclass {
  isCollapsed= false;
}