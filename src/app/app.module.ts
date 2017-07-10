import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PortfolioEffects, RiskEffects, StockEffects, SymbolEffects, ClientEffects } from './common/effects';

import { reducer } from './common/reducers';

import { PortfolioService, RiskService, StockService, SymbolService, ClientsService } from './common/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { StocksComponent } from './stocks/stocks.component';
import { PortfolioListComponent } from './portfolios/portfolio-list/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details/portfolio-details.component';
import { StockHistoryComponent } from './stocks/stock-history/stock-history.component';
import { SymbolsComponent } from './stocks/symbols/symbols.component';
import { PerformanceComponent } from './performance/performance.component';
import { ChartsModule } from 'ng2-charts';
import {ClientsComponent} from './clients/clients.component';
import {ClientsListComponent} from 'app/clients/clients-list/clients-list.component';
import {ClientDetailsComponent} from './clients/client-details/client-details.component';
import {ClientUiComponent} from 'app/clients/client-ui/client-ui.component';
import {ClientPortfoliosComponent} from './clients/client-portfolios/client-portfolios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfoliosComponent,
    StocksComponent,
    PortfolioListComponent,
    PortfolioDetailsComponent,
    StockHistoryComponent,
    SymbolsComponent,
    PerformanceComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientDetailsComponent,
    ClientUiComponent,
    ClientPortfoliosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    // must come AFTER `provideStore` call
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(PortfolioEffects),
    EffectsModule.run(RiskEffects),
    EffectsModule.run(StockEffects),
    EffectsModule.run(SymbolEffects),
    EffectsModule.run(ClientEffects),
    ChartsModule
  ],
  providers: [
    PortfolioService,
    StockService,
    RiskService,
    SymbolService,
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
