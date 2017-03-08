import { Action } from '@ngrx/store';
import { Symbol } from '../models/symbol.model';

export interface State {
  symbols: Symbol[];
}

export const initialState: State = {
  symbols: []
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
