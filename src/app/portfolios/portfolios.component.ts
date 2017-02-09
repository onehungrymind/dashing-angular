import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from "../shared/portfolio.service";
import { Observable } from "rxjs";
import * as _ from 'lodash';
@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  currentPortfolio: any;
  portfolios: Array<any>;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getPortfolios();
  }

  getPortfolios() {
    this.portfolioService.all()
      .subscribe(portfolios => {
        this.portfolios = portfolios;
      });
  }

  createPortfolio(portfolio) {
    this.portfolioService.create(portfolio)
      .subscribe(response => {
        this.getPortfolios();
      });
  }

  updatePortfolio(portfolio) {
    this.portfolioService.update(portfolio)
      .subscribe(response => {
        this.getPortfolios();
      });
  }

  savePortfolio(portfolio) {
    if (!portfolio.id) {
      this.createPortfolio(portfolio);
    } else {
      this.updatePortfolio(portfolio);
    }
  };

  deletePortfolio(id) {
    this.portfolioService.delete(id)
      .subscribe(() => {
        this.getPortfolios();
      });
  };

  setCurrentPortfolio(portfolio) {
    this.currentPortfolio = portfolio;
  };
}
