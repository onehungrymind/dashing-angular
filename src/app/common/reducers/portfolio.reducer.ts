import { Action } from '@ngrx/store';
import { Portfolio } from '../models/portfolio.model';

export interface State {
  portfolios: Portfolio[];
}

export const initialState: State = {
  portfolios: []
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
