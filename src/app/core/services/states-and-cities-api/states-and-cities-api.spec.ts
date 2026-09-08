import { TestBed } from '@angular/core/testing';

import { StatesAndCitiesApi } from './states-and-cities-api';

describe('StatesAndCitiesApi', () => {
  let service: StatesAndCitiesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesAndCitiesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
