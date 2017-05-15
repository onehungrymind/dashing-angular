import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Client] Load'),
  LOAD_SUCCESS: type('[Client] Load Success'),
  CREATE: type('[Client] Create'),
  UPDATE: type('[Client] Update'),
  DELETE: type('[Client] Delete'),
  SELECT: type('[Client] Select'),
  CLEAR: type('[Client] Clear'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Client[]) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: Client) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Client) { }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: string) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: Client) { }
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
