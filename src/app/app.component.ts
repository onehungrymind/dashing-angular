import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as reducers from './common/reducers';
import * as clientActions from './common/actions/client.actions';
import * as portfolioActions from './common/actions/portfolio.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/portfolios', icon: 'work', label: 'Portfolios'},
    { path: '/stocks', icon: 'trending_up', label: 'Stocks'},
    { path: '/clients', icon: 'face', label: 'Clients'}
  ];

  constructor(private store: Store<reducers.State>) { }

  ngOnInit() {
    this.store.dispatch(new clientActions.LoadAction());
    this.store.dispatch(new portfolioActions.LoadAction());
  }
}
