import { TestBed } from '@angular/core/testing';

import { SchoolTransportationService } from './school-transportation.service';

describe('SchoolTransportationService', () => {
  let service: SchoolTransportationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolTransportationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
