import { TestBed } from '@angular/core/testing';

import { SearchInputFilterService } from './search-input-filter.service';

describe('SearchInputFilterService', () => {
  let service: SearchInputFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchInputFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
