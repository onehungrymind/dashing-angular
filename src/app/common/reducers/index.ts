import { ActionReducer, combineReducers, State } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';

import * as portfolios from './portfolio.reducer';
import * as stocks from './stock.reducer';
import * as risks from './risk.reducer';
import * as symbols from './symbol.reducer';

export interface State {
  portfolios: portfolios.State;
  stocks: stocks.State;
  risks: risks.State;
  symbols: symbols.State;
}

const reducers = {
  portfolios: portfolios.reducer,
  stocks: stocks.reducer,
  risks: risks.reducer,
  symbols: symbols.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
