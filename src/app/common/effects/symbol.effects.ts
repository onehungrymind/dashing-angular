import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as symbol from '../actions/symbol.actions';
import { SymbolService } from '../services/symbol.service';

@Injectable()
export class SymbolEffects {
  @Effect() load$ = this.actions$
    .ofType(symbol.ActionTypes.LOAD)
    .switchMap(() => this.symbolService.all())
    .map(symbols => new symbol.LoadActionSuccess(symbols))
  ;

  constructor(
    private symbolService: SymbolService,
    private actions$: Actions
  ) { }
}
