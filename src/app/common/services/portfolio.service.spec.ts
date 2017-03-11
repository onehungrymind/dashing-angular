/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';
import { Http } from '@angular/http';

class HttpStub {}

describe('PortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PortfolioService,
        { provide: Http, useClass: HttpStub }
      ]
    });
  });

  it('should ...', inject([PortfolioService], (service: PortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
