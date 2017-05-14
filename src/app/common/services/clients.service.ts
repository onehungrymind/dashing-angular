import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {
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
}
