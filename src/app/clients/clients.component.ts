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
    this.getClients();
    this.resetCurrentClient();
  }

  resetCurrentClient() {
    this.currentClient = { id: null, name: '', description: '', img: 'assets/user.jpg' };
  }

  setCurrentClient(client) {
    this.currentClient = client;
  }

  cancel() {
    this.resetCurrentClient();
  }

  getClients() {
    this.clientsService.all()
      .subscribe(clients => this.clients = clients);
  }

  saveClient(client) {
    if (!client.id) {
      this.createClient(client);
    } else {
      this.updateClient(client);
    }
  }

  createClient(client) {
    this.clientsService.create(client)
      .subscribe(response => {
        // add locally
        const newClient = JSON.parse(response.text());
        this.clients.push(newClient);

        this.resetCurrentClient();
      });
  }

  updateClient(client) {
    this.clientsService.update(client)
      .subscribe(response => {
        // update locally
        this.clients.forEach((c, index) => {
          if (c.id === client.id) {
            this.clients.splice(index, 1, client);
          }
        });

        this.resetCurrentClient();
      });
  }

  deleteClient(client) {
    this.clientsService.delete(client.id)
      .subscribe(response => {
        // update locally
        this.clients.forEach((c, index) => {
          if (c.id === client.id) {
            this.clients.splice(index, 1);
          }
        });

        this.resetCurrentClient();
      });
  }
}
