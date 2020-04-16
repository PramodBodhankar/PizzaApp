import { TestBed } from '@angular/core/testing';

import { PizzServiceService } from './pizz-service.service';

describe('PizzServiceService', () => {
  let service: PizzServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
