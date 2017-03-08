/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
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
