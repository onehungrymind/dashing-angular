import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RiskService } from '../../common/services/risk.service';
import { SymbolService } from '../../common/services/symbol.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() set portfolio(portfolio) {
    this.portfolioCopy = Object.assign({}, portfolio);
  }
  @Output() save: EventEmitter<any> = new EventEmitter();
  portfolioCopy: any = this.initPortfolio();
  risks: Array<any>;
  symbols: Array<any>;

  constructor(
    private riskService: RiskService,
    private symbolService: SymbolService
  ) { }

  ngOnInit() {
    Observable.combineLatest(this.riskService.all(), this.symbolService.all())
      .subscribe(bundle => {
        this.risks = bundle[0];
        this.symbols = bundle[1];
      });
  }

  initPortfolio() {
    return {
      name: '',
      symbol: undefined,
      risk: undefined,
      active: false
    };
  }

  cancel() {
    this.portfolioCopy = this.initPortfolio();
  }

  savePortfolio(event) {
    event.preventDefault();
    this.save.emit(this.portfolioCopy);
    this.portfolioCopy = this.initPortfolio();
  };
}
