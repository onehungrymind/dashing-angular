import { inject, TestBed } from '@angular/core/testing';
import { SymbolService } from './symbol.service';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('SymbolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [SymbolService]
    });
  });

  it('model should be `/symbols`', inject([SymbolService], (service: SymbolService) => {
    expect(service.model).toBe('/symbols');
  }));

  it('#all should fetch all symbols', inject([SymbolService, Http], (service: SymbolService, http: Http) => {
    const spy = spyOn(http, 'get').and.returnValue(Observable.of([{}]));
    service.all();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.mostRecent().args[0]).toContain(service.model);
  }));
});
