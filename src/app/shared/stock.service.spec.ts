/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockService } from './stock.service';

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockService]
    });
  });

  it('should ...', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
