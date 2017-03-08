import { Action } from '@ngrx/store';
import { Stock } from '../models/stock.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Stock] Load'),
  SELECT: type('[Stock] Select'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Stock) { }
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
  | SelectAction;
