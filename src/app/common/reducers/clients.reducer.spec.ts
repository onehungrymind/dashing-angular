import { initialState, reducer, getSelectedId,
  getTotalPortfolioCount,
  transformClientsWithTotalPortfolioCount} from './clients.reducer';
import { type } from '../util';
import * as actions from '../actions/client.actions';
import {Client} from '../models/client.model';

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

  it('should return total portfolio count for a client', () => {
    let client: Client = { id: 'string', name: 'string',
        description: 'string', portfolios: [{}, {}]};

    expect(getTotalPortfolioCount(client)).toBe(2);

    client = { id: 'string', name: 'string',
      description: 'string', portfolios: undefined};

    expect(getTotalPortfolioCount(client)).toBe(0);
  });

  it('should update clients with total portfolio counts', () => {
    const clients: Client[] = [
      { id: 'string', name: 'string', description: 'string', portfolios: [{}, {}]},
      { id: 'string', name: 'string', description: 'string', portfolios: [{}, {}, {}]},
      { id: 'string', name: 'string', description: 'string', portfolios: undefined }
    ];

    const updatedClients: Client[] = [
      { id: 'string', name: 'string', description: 'string', portfolios: [{}, {}], totalPortfolioCount: 2},
      { id: 'string', name: 'string', description: 'string', portfolios: [{}, {}, {}], totalPortfolioCount: 3},
      { id: 'string', name: 'string', description: 'string', portfolios: undefined, totalPortfolioCount: 0}
    ];

    expect(transformClientsWithTotalPortfolioCount(clients)).toEqual(updatedClients);
  });
});
