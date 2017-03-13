import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Risk } from '../models/risk.model';
import * as actions from '../actions/risk.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Risk};
}

export const initialState: State = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const risks = action.payload;
      const ids = risks.map(risk => risk.id);
      const entities = risks.reduce((entities: { [id: string]: Risk }, risk: Risk) => {
        return Object.assign(entities, {
          [risk.id]: risk
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
