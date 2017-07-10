import { initialState, reducer, getSelectedId } from './portfolio.reducer';
import { type } from '../util';
import * as actions from '../actions/portfolio.actions';

describe('Portfolio reducer', () => {
  it('should return state by default', () => {
    const result = reducer(initialState, {type: type('[Portfolio] Default')});
    expect(result).toBe(initialState);
  });

  it('LOAD_SUCCESS should populate portfolios', () => {
    const payload = [{id: 'string', name: 'string', symbol: 'string', risk: 1, active: true}];
    const type = actions.ActionTypes.LOAD_SUCCESS;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.ids).toEqual(['string']);
    expect(result.entities).toEqual({'string': payload[0]});
  });

  it('SELECT should set the current portfolio', () => {
    const payload = {id: '1'};
    const type = actions.ActionTypes.SELECT;
    const action = {payload, type};

    const result = reducer(initialState, action);
    expect(result.selectedPortfolioId).toBe(payload.id);
    expect(getSelectedId(result)).toBe(payload.id);
  });

  it('CLEAR should set current portfolio to null', () => {
    const result = reducer(initialState, {type: actions.ActionTypes.CLEAR});
    expect(result.selectedPortfolioId).toBe(null);
  });
});
