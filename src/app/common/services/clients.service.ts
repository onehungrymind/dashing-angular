import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';

@Injectable()
export class ClientsService {
  model = '/clients';

  constructor(private http: Http) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  all() {
    return this.http.get(this.url)
      .map(res => res.json());
  };

  create(client) {
    return this.http.post(this.url, client);
  };

  update(client) {
    return this.http.put(`${this.url}/${client.id}`, client);
  };

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  };
}

