import { Component, ElementRef, ViewChild } from '@angular/core';
import { formState } from '../../../models/exercise';
import { FormSuperclass } from '../../form-superclass';
import { MathLiveForm } from './math-live';
import { MathQuillLoader } from 'ngx-mathquill';
import * as MQ from 'ngx-mathquill';


@Component({
  selector: 'form-math-live',
  templateUrl: './math-live.component.html',
  styleUrls: ['./math-live.component.scss'],
})
export class MathLiveComponent extends FormSuperclass {

    initData(value: formState): void {
        this.mathLiveData = value.form as MathLiveForm;
        MathQuillLoader.loadMathQuill(mq => {
            this.MQ = mq;
        })
    }

    mathLiveData?: MathLiveForm;
    MQ : any;
    mathfield : any;

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        var element = document.getElementById('mq-input');
        if (element) {
            this.mathfield = this.MQ.MathField(element);
        }
    }
}