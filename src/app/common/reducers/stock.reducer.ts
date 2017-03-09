import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Stock } from '../models/stock.model';
import * as actions from '../actions/stock.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Stock};
  selectedStockId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedStockId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const stocks = action.payload;
      const ids = stocks.map(stocks => stocks.id);
      const entities = stocks.reduce((entities: { [id: string]: Stock }, stocks: Stock) => {
        return Object.assign(entities, {
          [stocks.id]: stocks
        });
      }, {});

      return {
        ids,
        entities,
        selectedStockId: state.selectedStockId
      };
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedStockId: action.payload.id
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

export const getSelectedId = (state: State) => state.selectedStockId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
