import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';
import * as actions from '../actions/client.actions';

export interface State {
  clients: Client[];
  selectedClient: Client | null;
}

export const initialState: State = {
  clients: [],
  selectedClient: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      return {
        clients: action.payload,
        selectedClient: state.selectedClient
      };
    case actions.ActionTypes.SELECT:
      return {
        clients: state.clients,
        selectedClient: action.payload
      };
    case actions.ActionTypes.CLEAR:
      return {
        clients: state.clients,
        selectedClient: null
      };
    default: {
      return state;
    }
  }
}
