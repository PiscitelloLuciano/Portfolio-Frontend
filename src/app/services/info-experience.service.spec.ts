import { TestBed } from '@angular/core/testing';

import { InfoExperienceService } from './info-experience.service';

describe('InfoExperienceService', () => {
  let service: InfoExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
