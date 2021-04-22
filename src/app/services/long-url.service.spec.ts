import { TestBed } from '@angular/core/testing';

import { LongUrlService } from './long-url.service';

describe('LongUrlService', () => {
  let service: LongUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
