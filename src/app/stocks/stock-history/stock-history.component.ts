import { Component, Input, OnChanges } from '@angular/core';
import { StockService } from '../../common/services/stock.service';
import 'rxjs/add/operator/map';

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

