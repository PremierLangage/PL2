import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Exercise } from "../models/exercise";

@Component({
    template: ''
  })
  export class EpLayoutProviderSuperClass {
    @Input() exercise!: Exercise;
    @Output() exerciseChange = new EventEmitter<Exercise>();
  }