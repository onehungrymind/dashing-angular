import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Portfolio } from '../../common/models/portfolio.model';
import { Risk } from '../../common/models/risk.model';
import { Symbol } from '../../common/models/symbol.model';

import * as reducers from '../../common/reducers';
import * as riskActions from '../../common/actions/risk.actions';
import * as symbolActions from '../../common/actions/symbol.actions';
import * as portfolioActions from '../../common/actions/portfolio.actions';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() set portfolio(portfolio) {
    this.currentPortfolio = Object.assign({}, portfolio);
    if (portfolio) {
      this.originalName = portfolio.name;
    }
  }
  @Output() save: EventEmitter<any> = new EventEmitter();
  currentPortfolio: Portfolio;
  originalName: string;

  risks$: Observable<Array<Risk>>;
  symbols$: Observable<Array<Symbol>>;

  constructor(
    private store: Store<reducers.State>
  ) {
    this.risks$ = store.select(reducers.getRisks);
    this.symbols$ = store.select(reducers.getSymbols);
  }

  ngOnInit() {
    this.store.dispatch(new riskActions.LoadAction());
    this.store.dispatch(new symbolActions.LoadAction());
  }

  cancel() {
    this.store.dispatch(new portfolioActions.ClearAction());
  }

  savePortfolio(portfolio) {
    this.save.emit(portfolio);
    this.cancel();
  };
}
