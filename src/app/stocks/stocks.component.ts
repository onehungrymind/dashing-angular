import { Component, OnInit } from '@angular/core';
import { SymbolService } from "../shared/symbol.service";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  currentSymbol: string = this.symbolService.getCurrentSymbol();
  constructor(private symbolService: SymbolService) { }

  ngOnInit() {
  }

  setCurrentSymbol(symbol) {
    this.currentSymbol = symbol;
    this.symbolService.setCurrentSymbol(symbol);
  }

}
