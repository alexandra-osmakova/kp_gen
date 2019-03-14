import { TestBed } from '@angular/core/testing';

import { PagesIndexService } from './pages-index.service';

describe('PagesIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesIndexService = TestBed.get(PagesIndexService);
    expect(service).toBeTruthy();
  });
});
