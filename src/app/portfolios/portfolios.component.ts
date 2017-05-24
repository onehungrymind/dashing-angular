import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Portfolio } from '../common/models/portfolio.model';
import * as reducers from '../common/reducers';
import * as actions from '../common/actions/portfolio.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  portfolios$: Observable<Portfolio[]>;
  currentPortfolio$: Observable<Portfolio>;

  constructor(private store: Store<reducers.State>) {
    this.portfolios$ = store.select(reducers.getPortfolios);
    this.currentPortfolio$ = store.select(reducers.getSelectedPortfolio);
  }

  ngOnInit() {
    this.store.dispatch(new actions.LoadAction());
  }

  setCurrentPortfolio(portfolio) {
    this.store.dispatch(new actions.SelectAction(portfolio));
  }

  createPortfolio(portfolio) {
    this.store.dispatch(new actions.CreateAction(portfolio));
  }

  updatePortfolio(portfolio) {
    this.store.dispatch(new actions.UpdateAction(portfolio));
  }

  savePortfolio(portfolio) {
    if (!portfolio.id) {
      this.createPortfolio(portfolio);
    } else {
      this.updatePortfolio(portfolio);
    }
  }

  deletePortfolio(portfolioId) {
    this.store.dispatch(new actions.DeleteAction(portfolioId));
  }
}
