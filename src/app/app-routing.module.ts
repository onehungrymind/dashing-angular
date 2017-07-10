import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { StocksComponent } from './stocks/stocks.component';
import { ClientsComponent } from './clients/clients.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'portfolios', component: PortfoliosComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'clients', component: ClientsComponent},
  {path: '**', redirectTo: '/clients', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
