import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as portfolio from '../actions/portfolio.actions';
import { PortfolioService } from '../services/portfolio.service';

@Injectable()
export class PortfolioEffects {
  @Effect() load$ = this.actions$
    .ofType(portfolio.ActionTypes.LOAD)
    .switchMap(() => this.portfolioService.all())
    .map(portfolios => new portfolio.LoadActionSuccess(portfolios))
  ;

  @Effect() create$ = this.actions$
    .ofType(portfolio.ActionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(portfolio => this.portfolioService.create(portfolio))
    .map(result => new portfolio.LoadAction())
  ;

  @Effect() update$ = this.actions$
    .ofType(portfolio.ActionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(portfolio => this.portfolioService.update(portfolio))
    .map(result => new portfolio.LoadAction())
  ;

  @Effect() delete$ = this.actions$
    .ofType(portfolio.ActionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(portfolioId => this.portfolioService.delete(portfolioId))
    .map(result => new portfolio.LoadAction())
  ;

  constructor(
    private portfolioService: PortfolioService,
    private actions$: Actions
  ) { }
}
