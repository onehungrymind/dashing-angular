import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Portfolio } from '../models/portfolio.model';
import * as actions from '../actions/portfolio.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Portfolio};
  selectedPortfolioId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedPortfolioId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const portfolios = action.payload;
      const ids = portfolios.map(portfolio => portfolio.id);
      const entities = portfolios.reduce((entities: { [id: string]: Portfolio }, portfolio: Portfolio) => {
        return Object.assign(entities, {
          [portfolio.id]: portfolio
        });
      }, {});

      return {
        ids,
        entities,
        selectedPortfolioId: state.selectedPortfolioId
      };
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedPortfolioId: action.payload.id
      };
    case actions.ActionTypes.CLEAR:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedPortfolioId: null
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

export const getSelectedId = (state: State) => state.selectedPortfolioId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
