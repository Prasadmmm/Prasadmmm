import { TestBed } from '@angular/core/testing';

import { FinanceCalcsService } from './finance-calcs.service';


describe('FinanceCalcsService', () => {
  let service: FinanceCalcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceCalcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
