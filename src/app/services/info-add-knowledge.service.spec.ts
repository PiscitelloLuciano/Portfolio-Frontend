import { TestBed } from '@angular/core/testing';

import { InfoAddKnowledgeService } from './info-add-knowledge.service';

describe('InfoAddKnowledgeService', () => {
  let service: InfoAddKnowledgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAddKnowledgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
