import { initialState, reducer, getSelectedId } from './clients.reducer';
import { type } from '../util';
import * as actions from '../actions/client.actions';

describe('Client reducer', () => {
  it('should return state by default', () => {
    const result = reducer(initialState, {type: type('[Client] Default')});
    expect(result).toBe(initialState);
  });

  it('LOAD_SUCCESS should populate clients', () => {
    const payload = [{ id: 'string', name: 'string', description: 'string', portfolios: []}];
    const type = actions.ActionTypes.LOAD_SUCCESS;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.ids).toEqual(['string']);
    expect(result.entities).toEqual({'string': payload[0]});
  });

  it('SELECT should set the current client', () => {
    const payload = {id: '1'};
    const type = actions.ActionTypes.SELECT;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.selectedClientId).toBe(payload.id);
    expect(getSelectedId(result)).toBe(payload.id);
  });

  it('CLEAR should set current client to null', () => {
    const result = reducer(initialState, {type: actions.ActionTypes.CLEAR});
    expect(result.selectedClientId).toBe(null);
  });
});
