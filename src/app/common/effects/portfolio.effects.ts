import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PortfolioEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  // @Effect() login$ = this.actions$
  //   // Listen for the 'LOGIN' action
  //   .ofType('LOGIN')
  //   // Map the payload into JSON to use as the request body
  //   .map(action => JSON.stringify(action.payload))
  //   .switchMap(payload => this.http.post('/auth', payload)
  //       // If successful, dispatch success action with result
  //       .map(res => ({type: 'LOGIN_SUCCESS', payload: res.json()}))
  //       // If request fails, dispatch failed action
  //       .catch(() => Observable.of({type: 'LOGIN_FAILED'}))
  //   );
}
