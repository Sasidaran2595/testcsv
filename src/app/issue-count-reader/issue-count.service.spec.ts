import { TestBed } from '@angular/core/testing';

import { IssueCountService } from './issue-count.service';

describe('IssueCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueCountService = TestBed.get(IssueCountService);
    expect(service).toBeTruthy();
  });
});
