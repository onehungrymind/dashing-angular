import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as reducers from '../common/reducers';
import { Portfolio } from '../common/models/portfolio.model';
import { Stock } from '../common/models/stock.model';

import * as portfolioActions from '../common/actions/portfolio.actions';
import * as stockActions from '../common/actions/stock.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  portfolios$: Observable<Portfolio[]>;
  stockHistory$: Observable<Array<Stock>>;

  constructor(
    private store: Store<reducers.State>
  ) {
    this.portfolios$ = this.store.select(reducers.getPortfolios);
    this.stockHistory$ = this.store.select(reducers.getStockHistory);
  }

  ngOnInit() {
    this.store.dispatch(new portfolioActions.LoadAction());
    this.store.dispatch(new stockActions.LoadAction());
  }
}
