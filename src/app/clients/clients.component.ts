import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../common/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  selectedClient;
  clients;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientsService.clients;
  }

  selectClient(client) {
    this.selectedClient = client;
  }
}
