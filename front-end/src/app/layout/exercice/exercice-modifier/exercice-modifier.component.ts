import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { exercice } from '../models/exercice';

@Component({
  selector: 'app-exercice-modifier',
  templateUrl: './exercice-modifier.component.html',
  styleUrls: ['./exercice-modifier.component.scss']
})
export class ExerciceModifierComponent implements OnInit {
  form = new FormGroup({});
  @Input() model ?: exercice;
  @Output() modelChange = new EventEmitter<exercice>()

  options: FormlyFormOptions = {};

  
  fields : FormlyFieldConfig[] = [
    {
      key: 'author',
      type: 'input',
      props: {
        label: 'Auteur',
        placeholder: 'Entrez une valeur',
        required: true,
      }
    },
    {
      key: 'version',
      type: 'input',
      props: {
        label: 'Version',
        placeholder: 'Entrez une valeur',
        required: true,
      }
    },
    {
      key: 'templates.templateSelector',
      type: 'input',
      props: {
        label: 'Selecteur de Template',
        placeholder: 'Entrez une valeur',
        required: true,
      }
    },
    {
      key: 'templates.titleProperties.titlePlacement',
      type: 'select',
      props: {
        label: 'Position du titre',
        options: [
          { label: 'left', value: 'left' },
          { label: 'center', value: 'center' },
          { label: 'right', value: 'right' },
        ],
        required: true,
      }
    },
    {
      key: 'process.title',
      type: 'input',
      props: {
        label: 'Titre exercice',
        placeholder: 'Entrez une valeur',
        required: true,
      }
    },
    {
      key: 'process.statement',
      type: 'input',
      props: {
        label: 'Enoncé exercice',
        placeholder: 'Entrez une valeur (markdown)',
        required: true,
      }
    },
    {
      key: 'process.formState.selector',
      type: 'select',
      props: {
        label: 'Type d\'exercice',
        options: [
          { label: 'radioGroup', value: 'radioGroup' },
          { label: 'inputBox', value: 'inputBox' },
          { label: 'codeEditor', value: 'codeEditor' },
        ],
        required: true,
      }
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(model : any) {
    this.modelChange.emit(model);
  }
}
