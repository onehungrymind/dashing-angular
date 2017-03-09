import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SymbolService {
  model = '/symbols';

  // DELETE
  currentSymbol: any;

  constructor(private http: Http) { }

  get url() {
    return ENDPOINT_URI + this.model;
  }

  all(): Observable<Array<Symbol>> {
    return this.http.get(this.url).map(res => res.json());
  };

  // DELETE
  setCurrentSymbol(symbol) {
    this.currentSymbol = symbol;
  };

  getCurrentSymbol() {
    return this.currentSymbol || 'AAPL';
  };
}

