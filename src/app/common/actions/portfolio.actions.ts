import { Action } from '@ngrx/store';
import { Portfolio } from '../models/portfolio.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Portfolio] Load'),
  LOAD_SUCCESS: type('[Portfolio] Load Success'),
  CREATE: type('[Portfolio] Create'),
  UPDATE: type('[Portfolio] Update'),
  DELETE: type('[Portfolio] Delete'),
  SELECT: type('[Portfolio] Select'),
  CLEAR: type('[Portfolio] Clear'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Portfolio[]) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: Portfolio) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Portfolio) { }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: string) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: Portfolio) { }
}

export class ClearAction implements Action {
  type = ActionTypes.CLEAR;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | LoadActionSuccess
  | CreateAction
  | UpdateAction
  | DeleteAction
  | SelectAction
  | ClearAction;
