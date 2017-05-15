import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client } from '../common/models/client.model';
import * as reducers from '../common/reducers';
import * as actions from '../common/actions/client.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;
  currentClient$: Observable<Client>;

  constructor(private store: Store<reducers.State>) {
    this.clients$ = store.select(reducers.getClients);
    this.currentClient$ = store.select(reducers.getSelectedClient);
  }

  ngOnInit() {
    this.store.dispatch(new actions.LoadAction());
    this.resetCurrentClient();
  }

  resetCurrentClient() {
    const newClient = { id: null, name: '', description: '', img: 'assets/user.jpg' };
    this.store.dispatch(new actions.SelectAction(newClient));
  }

  setCurrentClient(client) {
    this.store.dispatch(new actions.SelectAction(client));
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
    this.store.dispatch(new actions.CreateAction(client));
    this.resetCurrentClient();
  }

  updateClient(client) {
    this.store.dispatch(new actions.UpdateAction(client));
    this.resetCurrentClient();
  }

  deleteClient(client) {
    this.store.dispatch(new actions.DeleteAction(client.id));
    this.resetCurrentClient();
  }
}
