import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { StockEffects } from './stock.effects';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';
import * as actions from '../actions/stock.actions';

describe('Stock Effects', () => {
  let runner: EffectsRunner;
  let stockEffects: StockEffects;
  let service: any;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {provide: StockService, useValue: jasmine.createSpyObj('stockService', ['all', 'getStockHistory'])},
      StockEffects
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    stockEffects = TestBed.get(StockEffects);
    service = TestBed.get(StockService);
  });

  it('$load should return an actions.LoadActionSuccess, with stocks', () => {
    const stocks = [{id: 'string', symbol: 'string', date: 'string', open: 1, close: 1, volume: 1}];
    const expected = new actions.LoadActionSuccess(stocks);
    service.all.and.returnValue(Observable.of(stocks));
    runner.queue(new actions.LoadAction());

    stockEffects.load$.subscribe(result => {
      expect(result).toEqual(expected);
    });
  });

  it('$loadHistory should return an actions.LoadHistorySuccessAction, with stocks', () => {
    const stocks = [{id: 'string', symbol: 'string', date: 'string', open: 1, close: 1, volume: 1}];
    const symbol = 'AAPL';
    const expected = new actions.LoadHistorySuccessAction(stocks);
    service.getStockHistory.and.returnValue(Observable.of(stocks));
    runner.queue(new actions.LoadHistoryAction(symbol));

    stockEffects.loadHistory$.subscribe(result => {
      expect(result).toEqual(expected);
      expect(service.getStockHistory).toHaveBeenCalledWith(symbol);
    });
  });
});
