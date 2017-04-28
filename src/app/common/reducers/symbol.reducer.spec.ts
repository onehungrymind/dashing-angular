import { initialState, reducer } from './symbol.reducer';
import { type } from '../util';
import * as actions from '../actions/symbol.actions';

describe('Symbol reducer', () => {
  it('should return state by default', () => {
    const result = reducer(initialState, {type: type('[Symbol] Default')});
    expect(result).toBe(initialState);
  });

  it('LOAD_SUCCESS should populate symbols', () => {
    const payload = [{id: 'string', code: 'string', entity: 'string'}];
    const type = actions.ActionTypes.LOAD_SUCCESS;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.ids).toEqual(['string']);
    expect(result.entities).toEqual({'string': payload[0]});
  });

  it('SELECT should set current symbol', () => {
    const payload = '1';
    const type = actions.ActionTypes.SELECT;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.selectedSymbolId).toBe(payload);
  });
});
