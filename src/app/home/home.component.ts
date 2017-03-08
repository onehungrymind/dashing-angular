import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../common/services/portfolio.service';
import { SymbolService } from '../common/services/symbol.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  portfolios: any;
  currentSymbol: string;

  constructor(
    private portfolioService: PortfolioService,
    private symbolService: SymbolService
  ) { }

  ngOnInit() {
    this.getPortfolios();
    this.currentSymbol = this.symbolService.getCurrentSymbol();
  }

  getPortfolios() {
    this.portfolios = this.portfolioService.all();
  }
}
