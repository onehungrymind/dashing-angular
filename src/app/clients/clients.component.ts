import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  selectedClient;
  clients = [
    {
      'id': 1,
      'img': 'assets/user.jpg',
      'name': 'John Doe',
      'description': 'Going places'
    },
    {
      'id': 2,
      'img': 'assets/user.jpg',
      'name': 'Jane Smith',
      'description': 'Risk averse'
    },
    {
      'id': 3,
      'img': 'assets/user.jpg',
      'name': 'Matt Jones',
      'description': 'High roller',
    }];

  constructor() { }

  ngOnInit() {
  }

  selectClient(client) {
    this.selectedClient = client;
  }
}
