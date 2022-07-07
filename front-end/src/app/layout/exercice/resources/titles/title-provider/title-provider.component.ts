import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { exercice } from 'src/app/models/exercice';

@Component({
  selector: 'app-title-provider',
  templateUrl: './title-provider.component.html',
})
export class TitleProviderComponent implements AfterContentInit {
  @Input() exercice?: exercice;

  title?: string;
  author?: string;
  version?: string;

  ngAfterContentInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.title = this.exercice?.process.title;
    this.author = this.exercice?.author;
    this.version = this.exercice?.version;
  }
}

  // @ViewChild('titleLoader') titleLoader?: ElementRef<HTMLElement>;
  
  // constructor() { }


  // ngAfterViewInit(): void {
  //   console.log(JSON.stringify(this.exercice));
  //   let t = document.createElement(
  //     "exercice-title-" + this.exercice?.templates.titleSelector as string
  //   ) as any;

  //   if (t) {
  //       t.title = this.exercice?.process.title;
  //       t.author = this.exercice?.author;
  //       t.version = this.exercice?.version;

  //       this.titleLoader?.nativeElement.appendChild(t as any);
  //   }
  // }