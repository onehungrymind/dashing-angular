import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as stock from '../actions/stock.actions';
import { StockService } from '../services/stock.service';

@Injectable()
export class StockEffects {
  @Effect() load$ = this.actions$
    .ofType(stock.ActionTypes.LOAD)
    .switchMap(() => this.stockService.all())
    .map(stocks => new stock.LoadActionSuccess(stocks))
  ;

  @Effect() loadHistory$ = this.actions$
    .ofType(stock.ActionTypes.LOAD_HISTORY)
    .map(action => action.payload)
    .switchMap(symbol => this.stockService.getStockHistory(symbol))
    .map(stocks => new stock.LoadHistorySuccessAction(stocks))
  ;

  constructor(
    private stockService: StockService,
    private actions$: Actions
  ) { }
}
