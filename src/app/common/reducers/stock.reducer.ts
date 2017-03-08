import { Action } from '@ngrx/store';
import { Stock } from '../models/stock.model';

export interface State {
  stocks: Stock[];
}

export const initialState: State = {
  stocks: []
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
