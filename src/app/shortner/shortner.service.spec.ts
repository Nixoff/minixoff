/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShortnerService } from './shortner.service';

describe('Service: Shortner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortnerService]
    });
  });

  it('should ...', inject([ShortnerService], (service: ShortnerService) => {
    expect(service).toBeTruthy();
  }));
});
