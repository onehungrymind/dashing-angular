import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Portfolio } from '../../common/models/portfolio.model';
import { Risk } from '../../common/models/risk.model';
import { Symbol } from '../../common/models/symbol.model';

import * as reducers from '../../common/reducers';
import * as riskActions from '../../common/actions/risk.actions';
import * as symbolActions from '../../common/actions/symbol.actions';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() set portfolio(portfolio) {
    this.currentPortfolio = Object.assign({}, portfolio);
  }
  @Output() save: EventEmitter<any> = new EventEmitter();
  currentPortfolio: Portfolio = this.initPortfolio();

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
    this.currentPortfolio = this.initPortfolio();
  }

  savePortfolio(event) {
    event.preventDefault();
    this.save.emit(this.currentPortfolio);
    this.currentPortfolio = this.initPortfolio();
  };

  initPortfolio(): Portfolio {
    return {
      id: null,
      name: '',
      symbol: null,
      risk: null,
      active: false
    };
  }
}
