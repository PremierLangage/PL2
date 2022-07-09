import { Component, HostBinding, Input } from '@angular/core';
import { exercice, titleProperties } from 'src/app/models/exercice';


@Component({
  selector: 'app-exercice-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {


  @Input() set exercice(value: exercice | undefined) {
    switch (value?.templates.titleProperties.titlePlacement) {
      case "left": this.titlealignement = "flex-start"; break;
      case "right": this.titlealignement = "flex-end"; break;
      default: this.titlealignement = "center";
    }
    this.title = value?.process.title ?? "chargement";
    this.version = value?.version ?? "chargement";
    this.author = value?.author ?? "chargement";
  }

  @HostBinding("style.--titleAlignment")
  titlealignement : string = "center";

  title:    string = "";
  version:  string = "";
  author:   string = "";
}
