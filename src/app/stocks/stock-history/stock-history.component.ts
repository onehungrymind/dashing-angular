import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { StockService } from "../../shared/stock.service";
import { SymbolService } from "../../shared/symbol.service";
import { Observable } from "rxjs";
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnChanges {
  history: Array<any>;
  @Input() current: string;

  constructor(private stockService: StockService) {
  }

  ngOnChanges(changes) {
    this.stockService.getStocks(this.current)
      .map(res => res.slice(0, 10))
      .subscribe(res => this.history = res);
  }
}

