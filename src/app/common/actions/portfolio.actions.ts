import { Action } from '@ngrx/store';
import { Portfolio } from '../models/portfolio.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Portfolio] Load'),
  LOAD_SUCCESS: type('[Portfolio] Load Success'),
  SELECT: type('[Portfolio] Select'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Portfolio[]) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | LoadActionSuccess
  | SelectAction;
