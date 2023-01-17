import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePlayerComponent } from './exercise-player.component';

describe('ExercisePlayerComponent', () => {
  let component: ExercisePlayerComponent;
  let fixture: ComponentFixture<ExercisePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
