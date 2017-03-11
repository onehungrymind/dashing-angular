/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { RiskService } from './risk.service';
import { Http } from '@angular/http';

class HttpStub {}

describe('RiskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RiskService,
        { provide: Http, useClass: HttpStub }
      ]
    });
  });

  it('should ...', inject([RiskService], (service: RiskService) => {
    expect(service).toBeTruthy();
  }));
});
