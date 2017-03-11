/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { StockService } from './stock.service';
import { Http } from '@angular/http';

class HttpStub {}

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockService,
        { provide: Http, useClass: HttpStub }
      ]
    });
  });

  it('should ...', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
