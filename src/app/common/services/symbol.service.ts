import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SymbolService {
  data: any;
  currentSymbol: any;
  model = '/symbols';

  constructor(private http: Http) { }

  get url() {
    return ENDPOINT_URI + this.model;
  }

  all() {
    return this.http.get(this.url).map(res => res.json());
  };

  setCurrentSymbol(symbol) {
    this.currentSymbol = symbol;
  };

  getCurrentSymbol() {
    return this.currentSymbol || 'AAPL';
  };
}

