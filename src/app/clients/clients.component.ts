import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client } from '../common/models/client.model';
import * as reducers from '../common/reducers';
import * as clientActions from '../common/actions/client.actions';
import * as portfolioActions from '../common/actions/portfolio.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;
  currentClient$: Observable<Client>;
  clientPortfolios$: Observable<Client[]>;

  constructor(private store: Store<reducers.State>) {
    this.clients$ = store.select(reducers.getClients);
    this.currentClient$ = store.select(reducers.getSelectedClient);
    this.clientPortfolios$ = store.select(reducers.getClientPortfolios);
  }

  ngOnInit() {
    this.store.dispatch(new clientActions.LoadAction());
    this.store.dispatch(new portfolioActions.LoadAction());
    this.resetCurrentClient();
  }

  resetCurrentClient() {
    const newClient = { id: null, name: '', description: '', img: 'assets/user.jpg', portfolios: [] };
    this.store.dispatch(new clientActions.SelectAction(newClient));
  }

  setCurrentClient(client) {
    this.store.dispatch(new clientActions.SelectAction(client));
  }

  cancel() {
    this.resetCurrentClient();
  }

  saveClient(client) {
    if (!client.id) {
      this.createClient(client);
    } else {
      this.updateClient(client);
    }
  }

  createClient(client) {
    this.store.dispatch(new clientActions.CreateAction(client));
    this.resetCurrentClient();
  }

  updateClient(client) {
    this.store.dispatch(new clientActions.UpdateAction(client));
    this.resetCurrentClient();
  }

  deleteClient(client) {
    this.store.dispatch(new clientActions.DeleteAction(client.id));
    this.resetCurrentClient();
  }
}
