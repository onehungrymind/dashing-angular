import { Action } from '@ngrx/store';
import { Symbol } from '../models/symbol.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Symbol] Load'),
  LOAD_SUCCESS: type('[Symbol] Load Success'),
  SELECT: type('[Symbol] Select'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Symbol[]) { }
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
