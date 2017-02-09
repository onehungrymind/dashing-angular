import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { StocksComponent } from './stocks/stocks.component';
import { PortfolioListComponent } from './portfolios/portfolio-list/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details/portfolio-details.component';
import { ActivePortfoliosComponent } from './portfolios/active-portfolios/active-portfolios.component';
import { PortfoliosByRiskComponent } from './portfolios/portfolios-by-risk/portfolios-by-risk.component';
import { StockHistoryComponent } from './stocks/stock-history/stock-history.component';
import { SymbolsComponent } from './stocks/symbols/symbols.component';
import { PerformanceComponent } from './performance/performance.component';

import {
  PortfolioService,
  StockService,
  RiskService,
  SymbolService
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfoliosComponent,
    StocksComponent,
    PortfolioListComponent,
    PortfolioDetailsComponent,
    ActivePortfoliosComponent,
    PortfoliosByRiskComponent,
    StockHistoryComponent,
    SymbolsComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PortfolioService,
    StockService,
    RiskService,
    SymbolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
