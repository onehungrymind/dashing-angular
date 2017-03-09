import { Action } from '@ngrx/store';
import { Stock } from '../models/stock.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Stock] Load'),
  LOAD_SUCCESS: type('[Stock] Load Success'),
  SELECT: type('[Stock] Select'),
  LOAD_HISTORY: type('[Stock] Load History'),
  LOAD_HISTORY_SUCCESS: type('[Stock] Load History SUCCESS'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Stock[]) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: string) { }
}

export class LoadHistoryAction implements Action {
  type = ActionTypes.LOAD_HISTORY;

  constructor(public payload: string) { }
}

export class LoadHistorySuccessAction implements Action {
  type = ActionTypes.LOAD_HISTORY_SUCCESS;

  constructor(public payload: Stock[]) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | LoadActionSuccess
  | SelectAction
  | LoadHistoryAction
  | LoadHistorySuccessAction;
