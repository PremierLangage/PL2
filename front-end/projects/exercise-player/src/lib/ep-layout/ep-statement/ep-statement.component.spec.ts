/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpStatementComponent } from './ep-statement.component';

describe('EpStatementComponent', () => {
  let component: EpStatementComponent;
  let fixture: ComponentFixture<EpStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
