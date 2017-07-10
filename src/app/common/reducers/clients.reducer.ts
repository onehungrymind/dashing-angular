import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';
import * as actions from '../actions/client.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Client};
  selectedClientId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedClientId: null
};

export const totalPortfolioCount = (client: Client) => client.portfolios ? client.portfolios.length : 0;

export const makeClientKeys = (clients: Client[]) => clients.map(client => client.id);

export const transformClientsPortfolioCount =
  (clients: Client[]) => clients.map((client: Client): Client => {
    return Object.assign({}, client, { totalPortfolioCount: client.portfolios.length });
  });

export const makeClientEntities = (clients: Client[]) => clients.reduce((entities: { [id: string]: Client }, client: Client) => {
  return Object.assign(entities, {
    [client.id]: client
  });
}, {});

export const processClients = (state: State, action: Action): State => {
  const clients = transformClientsPortfolioCount(action.payload);

  return {
    ids: makeClientKeys(clients),
    entities: makeClientEntities(clients),
    selectedClientId: state.selectedClientId
  };
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      return processClients(state, action);
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedClientId: action.payload.id
      };
    case actions.ActionTypes.CLEAR:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedClientId: null
      };
    default: {
      return state;
    }
  }
}

// -------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------
export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedClientId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});
