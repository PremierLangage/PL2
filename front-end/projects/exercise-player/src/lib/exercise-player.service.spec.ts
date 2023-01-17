import { TestBed } from '@angular/core/testing';

import { ExercisePlayerService } from './exercise-player.service';

describe('ExercisePlayerService', () => {
  let service: ExercisePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
