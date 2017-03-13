import { initialState, reducer } from './risk.reducer';
import { type } from '../util';

import * as actions from '../actions/risk.actions';

describe('Risk reducer', () => {
  it('should return state by default', () => {
    const result = reducer(initialState, {type: type('[Risk] Default')});
    expect(result).toBe(initialState);
  });

  it('LOAD_SUCCESS should populate risks', () => {
    const payload = [{id: 'string', description: 'string'}];
    const type = actions.ActionTypes.LOAD_SUCCESS;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.ids).toEqual(['string']);
    expect(result.entities).toEqual({'string': payload[0]});
  });
});
