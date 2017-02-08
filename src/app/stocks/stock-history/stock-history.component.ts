import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {
  quote: Object = {};
  constructor() { }

  ngOnInit() {
  }

}
