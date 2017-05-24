import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';

import * as clients from './clients.reducer';
import * as portfolios from './portfolio.reducer';
import * as stocks from './stock.reducer';
import * as risks from './risk.reducer';
import * as symbols from './symbol.reducer';

export interface State {
  clients: clients.State;
  portfolios: portfolios.State;
  stocks: stocks.State;
  risks: risks.State;
  symbols: symbols.State;
}

const reducers = {
  clients: clients.reducer,
  portfolios: portfolios.reducer,
  stocks: stocks.reducer,
  risks: risks.reducer,
  symbols: symbols.reducer
};

const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// -------------------------------------------------------------------
// Portfolio Selectors
// -------------------------------------------------------------------
export const getPortfoliosState = (state: State) => state.portfolios;
export const getPortfolioIds = createSelector(getPortfoliosState, portfolios.getIds);
export const getPortfolioEntities = createSelector(getPortfoliosState, portfolios.getEntities);
export const getSelectedPortfolio = createSelector(getPortfoliosState, portfolios.getSelected);
export const getPortfolios = createSelector(getPortfolioEntities, getPortfolioIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

// -------------------------------------------------------------------
// Risk Selectors
// -------------------------------------------------------------------
export const getRisksState = (state: State) => state.risks;
export const getRiskIds = createSelector(getRisksState, risks.getIds);
export const getRiskEntities = createSelector(getRisksState, risks.getEntities);
export const getRisks = createSelector(getRiskEntities, getRiskIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

// -------------------------------------------------------------------
// Symbol Selectors
// -------------------------------------------------------------------
export const getSymbolsState = (state: State) => state.symbols;
export const getSymbolIds = createSelector(getSymbolsState, symbols.getIds);
export const getSymbolEntities = createSelector(getSymbolsState, symbols.getEntities);
export const getSelectedSymbol = createSelector(getSymbolsState, symbols.getSelected);
export const getSymbols = createSelector(getSymbolEntities, getSymbolIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

// -------------------------------------------------------------------
// Stock Selectors
// -------------------------------------------------------------------
export const getStocksState = (state: State) => state.stocks;
export const getStockIds = createSelector(getStocksState, stocks.getIds);
export const getStockEntities = createSelector(getStocksState, stocks.getEntities);
export const getStocks = createSelector(getStockEntities, getStockIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
export const getStockHistory = createSelector(getStocks, getSelectedSymbol, (stocks, symbol) => {
  return !symbol ? stocks : stocks.filter(stock => stock.symbol === symbol.code);
});

// -------------------------------------------------------------------
// Clients Selectors
// -------------------------------------------------------------------
export const getClientsState = (state: State) => state.clients;
export const getClientIds = createSelector(getClientsState, clients.getIds);
export const getClientEntities = createSelector(getClientsState, clients.getEntities);
export const getSelectedClient = createSelector(getClientsState, clients.getSelected);
export const getClients = createSelector(getClientEntities, getClientIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
export const getClientPortfolios = createSelector(getClients, getPortfolios, (clients, portfolios) => {
  // loop over every client
  return clients.map(client => {
    // loop over every client portfolio
    const clientPortfolios = client.portfolios.map(portfolio => {
      // find the corresponding portfolio
      return portfolios.find(p => p.id === portfolio);
    });

    return Object.assign({}, client, { portfolios: clientPortfolios });
  });
});

