import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as client from '../actions/client.actions';
import { ClientsService } from '../services/clients.service';

@Injectable()
export class ClientEffects {
  @Effect() load$ = this.actions$
    .ofType(client.ActionTypes.LOAD)
    .switchMap(() => this.clientService.all())
    .map(clients => new client.LoadActionSuccess(clients))
  ;

  @Effect() create$ = this.actions$
    .ofType(client.ActionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(client => this.clientService.create(client))
    .map(result => new client.LoadAction())
  ;

  @Effect() update$ = this.actions$
    .ofType(client.ActionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(client => this.clientService.update(client))
    .map(result => new client.LoadAction())
  ;

  @Effect() delete$ = this.actions$
    .ofType(client.ActionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(clientId => this.clientService.delete(clientId))
    .map(result => new client.LoadAction())
  ;

  constructor(
    private clientService: ClientsService,
    private actions$: Actions
  ) { }
}
