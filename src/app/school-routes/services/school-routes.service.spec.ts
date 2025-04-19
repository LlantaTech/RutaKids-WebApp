import { TestBed } from '@angular/core/testing';

import { SchoolRoutesService } from './school-routes.service';

describe('SchoolRoutesService', () => {
  let service: SchoolRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
