import { inject, TestBed } from '@angular/core/testing';
import { RiskService } from './risk.service';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('RiskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [RiskService]
    });
  });

  it('model should be `/risks`', inject([RiskService], (service: RiskService) => {
    expect(service.model).toBe('/risks');
  }));

  it('#all should fetch all risks', inject([RiskService, Http], (service: RiskService, http: Http) => {
    const spy = spyOn(http, 'get').and.returnValue(Observable.of([{}]));
    service.all();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.mostRecent().args[0]).toContain(service.model);
  }));
});
