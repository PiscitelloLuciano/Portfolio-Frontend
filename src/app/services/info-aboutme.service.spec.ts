import { TestBed } from '@angular/core/testing';

import { InfoAboutmeService } from './info-aboutme.service';

describe('InfoAboutmeService', () => {
  let service: InfoAboutmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAboutmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
