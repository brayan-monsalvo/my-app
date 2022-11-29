import { TestBed } from '@angular/core/testing';

import { RutapostService } from './rutapost.service';

describe('RutapostService', () => {
  let service: RutapostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutapostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
