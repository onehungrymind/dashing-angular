import { Component, Input } from '@angular/core';
import { Stock } from '../../common/models/stock.model';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent {
  @Input() history: Stock[];
}
