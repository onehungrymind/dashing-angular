import { Injectable } from '@angular/core';
import { ENDPOINT_URI } from '../constants';
import { Http } from '@angular/http';

@Injectable()
export class RiskService {
  model = '/risks';

  constructor(private http: Http) { }

  get url() {
    return ENDPOINT_URI + this.model;
  }

  all() {
    return this.http.get(this.url).map(res => res.json());
  };
}
