import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { PortfolioEffects } from './portfolio.effects';
import { Observable } from 'rxjs/Observable';
import { PortfolioService } from '../services/portfolio.service';
import * as actions from '../actions/portfolio.actions';
import 'rxjs/add/observable/of';

describe('portfolio Effects', () => {
  let runner: EffectsRunner;
  let portfolioEffects: PortfolioEffects;
  let service: any;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {provide: PortfolioService, useValue: jasmine.createSpyObj('portfolioService', ['all', 'create', 'update', 'delete'])},
      PortfolioEffects
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    portfolioEffects = TestBed.get(PortfolioEffects);
    service = TestBed.get(PortfolioService);
  });

  it('$load should return an actions.LoadActionSuccess, with portfolios', () => {
    const portfolios = [{id: 'string', name: 'string', symbol: 'string', risk: 1, active: true}];
    const expected = new actions.LoadActionSuccess(portfolios);
    service.all.and.returnValue(Observable.of(portfolios));
    runner.queue(new actions.LoadAction());

    portfolioEffects.load$.subscribe(result => {
      expect(result).toEqual(expected);
    });
  });

  it('$create should return an actions.LoadAction', () => {
    const portfolio = {id: 'string', name: 'string', symbol: 'string', risk: 1, active: true};
    const expected = new actions.LoadAction();
    service.create.and.returnValue(Observable.of(portfolio));
    runner.queue(new actions.CreateAction(portfolio));

    portfolioEffects.create$.subscribe(result => {
      expect(result).toEqual(expected);
      expect(service.create).toHaveBeenCalledWith(portfolio);
    });
  });

  it('$update should return an actions.LoadAction', () => {
    const portfolio = {id: 'string', name: 'string', symbol: 'string', risk: 1, active: true};
    const expected = new actions.LoadAction();
    service.update.and.returnValue(Observable.of(portfolio));
    runner.queue(new actions.UpdateAction(portfolio));

    portfolioEffects.update$.subscribe(result => {
      expect(result).toEqual(expected);
      expect(service.update).toHaveBeenCalledWith(portfolio);
    });
  });

  it('$delete should return an actions.LoadAction', () => {
    const portfolioId = 'string';
    const expected = new actions.LoadAction();
    service.delete.and.returnValue(Observable.of({}));
    runner.queue(new actions.DeleteAction(portfolioId));

    portfolioEffects.delete$.subscribe(result => {
      expect(result).toEqual(expected);
      expect(service.delete).toHaveBeenCalledWith(portfolioId);
    });
  });
});
