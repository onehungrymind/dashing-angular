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
    case actions.ActionTypes.LOAD:
      return {
        clients: action.payload,
        selectedClient: state.selectedClient
      };
    case actions.ActionTypes.CREATE:
      return {
        clients: [...state.clients, action.payload],
        selectedClient: state.selectedClient
      };
    case actions.ActionTypes.UPDATE:
      return {
        clients: state.clients.map(client => {
          return (client.id === action.payload.id)
            ? Object.assign({}, action.payload)
            : client;
        }),
        selectedClient: state.selectedClient
      };
    case actions.ActionTypes.DELETE:
      return {
        clients: state.clients.filter(client => client.id !== action.payload.id),
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
