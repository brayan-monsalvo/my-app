import { TestBed } from '@angular/core/testing';

import { BasegetService } from './baseget.service';

describe('BasegetService', () => {
  let service: BasegetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasegetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
