import { TestBed } from '@angular/core/testing';

import { DataFetch } from './dataFetch.service';

describe('DataFetch', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFetch = TestBed.get(DataFetch);
    expect(service).toBeTruthy();
  });
});
