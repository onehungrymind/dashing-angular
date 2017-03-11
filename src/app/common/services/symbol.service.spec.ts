/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { SymbolService } from './symbol.service';
import { Http } from '@angular/http';

class HttpStub {}

describe('SymbolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SymbolService,
        { provide: Http, useClass: HttpStub }
      ]
    });
  });

  it('should ...', inject([SymbolService], (service: SymbolService) => {
    expect(service).toBeTruthy();
  }));
});
