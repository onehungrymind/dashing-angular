/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SymbolService } from './symbol.service';

describe('SymbolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SymbolService]
    });
  });

  it('should ...', inject([SymbolService], (service: SymbolService) => {
    expect(service).toBeTruthy();
  }));
});
