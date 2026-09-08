import { TestBed } from '@angular/core/testing';

import { CurriculumFormStore } from './curriculum-form-store';

describe('CurriculumFormStore', () => {
  let service: CurriculumFormStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumFormStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
