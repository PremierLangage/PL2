import { Component } from '@angular/core';

@Component({
  selector: 'app-activityPage',
  templateUrl: './activityPage.component.html',
})
export class ActivityPageComponent {
  private choice : "player" | "reviewer" = "player";
}
