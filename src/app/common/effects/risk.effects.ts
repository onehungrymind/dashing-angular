import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as risk from '../actions/risk.actions';
import { RiskService } from '../services/risk.service';

@Injectable()
export class RiskEffects {
  @Effect() load$ = this.actions$
    .ofType(risk.ActionTypes.LOAD)
    .switchMap(() => this.riskService.all())
    .map(risks => new risk.LoadActionSuccess(risks))
  ;

  constructor(
    private riskService: RiskService,
    private actions$: Actions
  ) { }
}
