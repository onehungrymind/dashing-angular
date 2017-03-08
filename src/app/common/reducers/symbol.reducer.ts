import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Symbol } from '../models/symbol.model';
import * as actions from '../actions/symbol.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Symbol};
}

export const initialState: State = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const symbols = action.payload;
      const ids = symbols.map(portfolio => portfolio.id);
      const entities = symbols.reduce((entities: { [id: string]: Symbol }, symbol: Symbol) => {
        return Object.assign(entities, {
          [symbol.id]: symbol
        });
      }, {});

      return {
        ids,
        entities
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

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});