import { inject, TestBed } from '@angular/core/testing';
import { StockService } from './stock.service';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ENDPOINT_URI } from '../constants';

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [StockService]
    });
  });

  it('model should be `/stocks`', inject([StockService], (service: StockService) => {
    expect(service.model).toBe('/stocks');
  }));

  it('#getUrl should return endpoint + model', inject([StockService], (service: StockService) => {
    const url = service.getURL();

    expect(url).toBe(ENDPOINT_URI + service.model);
  }));

  it('#all should fetch all stocks', inject([StockService, Http], (service: StockService, http: Http) => {
    const spy = spyOn(http, 'get').and.returnValue(Observable.of([{}]));
    service.all();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.mostRecent().args[0]).toContain(service.model);
  }));

  it('#getStockHistory should fetch stocks for given symbol', inject([StockService, Http], (service: StockService, http: Http) => {
    const spy = spyOn(http, 'get').and.returnValue(Observable.of([{}]));
    service.getStockHistory('MSFT');
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.mostRecent().args[0]).toContain(`${service.model}?symbol=MSFT`);
  }));
});
