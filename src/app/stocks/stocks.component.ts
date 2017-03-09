import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Stock } from '../common/models/stock.model';
import { Symbol } from '../common/models/symbol.model';

import * as reducers from '../common/reducers';
import * as symbolActions from '../common/actions/symbol.actions';
import * as stockActions from '../common/actions/stock.actions';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  symbols$: Observable<Array<Symbol>>;
  currentSymbol$: Observable<Symbol>;
  stockHistory$: Observable<Array<Stock>>;

  constructor(
    private store: Store<reducers.State>
  ) {
    this.symbols$ = this.store.select(reducers.getSymbols);
    this.currentSymbol$ = this.store.select(reducers.getSelectedSymbol);
    this.stockHistory$ = this.store.select(reducers.getStockHistory);
  }

  ngOnInit() {
    this.store.dispatch(new symbolActions.LoadAction());
    this.store.dispatch(new stockActions.LoadAction());
  }

  setCurrentSymbol(symbol) {
    this.store.dispatch(new symbolActions.SelectAction(symbol));
  }
}
