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
  constructor(
    private portfolioService: PortfolioService,
    private actions$: Actions
  ) { }

  @Effect() load$ = this.actions$
    .ofType(portfolio.ActionTypes.LOAD)
    .switchMap(() => this.portfolioService.all())
    .map(portfolios => new portfolio.LoadActionSuccess(portfolios))
  ;
}
