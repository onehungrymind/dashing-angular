import { Action } from '@ngrx/store';
import { Risk } from '../models/risk.model';

export interface State {
  risks: Risk[];
}

export const initialState: State = {
  risks: []
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
