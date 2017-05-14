import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../common/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients;
  currentClient;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientsService.clients;
    this.currentClient = this.resetCurrentClient();
  }

  resetCurrentClient() {
    return { id: null, name: '', description: '', img: '' };
  }

  setCurrentClient(client) {
    console.log('SELECTING CLIENT', client);
    this.currentClient = client;
  }

  cancel() {
    this.currentClient = this.resetCurrentClient();
  }

  saveClient(client) {
    if (!client.id) {
      this.createClient(client);
    } else {
      this.updateClient(client);
    }

    this.resetCurrentClient();
  }

  createClient(client) {
    console.log('CREATING CLIENT', client);
  }

  updateClient(client) {
    console.log('UPDATING CLIENT', client);
  }

  deleteClient(clientId) {
    console.log('DELETING CLIENT', clientId);
  }
}
