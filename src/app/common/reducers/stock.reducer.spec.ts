import { initialState, reducer } from './stock.reducer';
import { type } from '../util';
import * as actions from '../actions/stock.actions';

describe('Stock reducer', () => {
  it('should return state by default', () => {
    const result = reducer(initialState, {type: type('[Stock] Default')});
    expect(result).toBe(initialState);
  });

  it('LOAD_SUCCESS should populate stocks', () => {
    const payload = [{id: 'string', symbol: 'string', date: 'string', open: 1, close: 1, volume: 1}];
    const type = actions.ActionTypes.LOAD_SUCCESS;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.ids).toEqual(['string']);
    expect(result.entities).toEqual({'string': payload[0]});
  });

  it('SELECT should set current stock', () => {
    const payload = {id: '1'};
    const type = actions.ActionTypes.SELECT;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.selectedStockId).toBe(payload.id);
  });
});
