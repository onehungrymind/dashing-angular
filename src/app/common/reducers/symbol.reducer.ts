import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Symbol } from '../models/symbol.model';
import * as actions from '../actions/symbol.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Symbol};
  selectedSymbolId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedSymbolId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const portfolios = action.payload;
      const ids = portfolios.map(portfolio => portfolio.id);
      const entities = portfolios.reduce((entities: { [id: string]: Symbol }, portfolio: Symbol) => {
        return Object.assign(entities, {
          [portfolio.id]: portfolio
        });
      }, {});

      return {
        ids,
        entities,
        selectedSymbolId: state.selectedSymbolId
      };
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedSymbolId: action.payload
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

export const getSelectedId = (state: State) => state.selectedSymbolId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
