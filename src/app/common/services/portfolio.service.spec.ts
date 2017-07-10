import { inject, TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const mockPortfolio = {
  name: 'string',
  symbol: 'string',
  risk: 1,
  active: true
};

describe('PortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [PortfolioService]
    });
  });

  it('model should be `/portfolios`', inject([PortfolioService], (service: PortfolioService) => {
    expect(service.model).toBe('/portfolios');
  }));

  it('#all should fetch all portfolios', inject([PortfolioService, Http], (service: PortfolioService, http: Http) => {
    const spy = spyOn(http, 'get').and.returnValue(Observable.of([{}]));
    service.all();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.mostRecent().args[0]).toContain(service.model);
  }));

  it('#create should post a new portfolio', inject([PortfolioService, Http], (service: PortfolioService, http: Http) => {
    const spy = spyOn(http, 'post');
    service.create(mockPortfolio);
    expect(spy).toHaveBeenCalledWith(service.url, mockPortfolio);
  }));

  it('#update should put an existing portfolio', inject([PortfolioService, Http], (service: PortfolioService, http: Http) => {
    mockPortfolio['id'] = 'string';
    const spy = spyOn(http, 'put');
    service.update(mockPortfolio);
    expect(spy).toHaveBeenCalledWith(`${service.url}/${mockPortfolio['id']}`, mockPortfolio);
  }));

  it('#update should put an existing portfolio', inject([PortfolioService, Http], (service: PortfolioService, http: Http) => {
    mockPortfolio['id'] = 'string';
    const spy = spyOn(http, 'put');
    service.update(mockPortfolio);
    expect(spy).toHaveBeenCalledWith(`${service.url}/${mockPortfolio['id']}`, mockPortfolio);
  }));

  it('#delete should delete an existing portfolio', inject([PortfolioService, Http], (service: PortfolioService, http: Http) => {
    const spy = spyOn(http, 'delete');
    const mockID = 'string';
    service.delete(mockID);
    expect(spy).toHaveBeenCalledWith(`${service.url}/${mockID}`);
  }));
});
