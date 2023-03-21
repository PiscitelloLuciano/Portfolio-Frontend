import { TestBed } from '@angular/core/testing';

import { InfoEducationService } from './info-education.service';

describe('InfoEducationService', () => {
  let service: InfoEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
