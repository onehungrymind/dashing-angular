import { Injectable } from '@angular/core';
import { ENDPOINT_URI } from '../constants';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Stock } from '../models/stock.model';

@Injectable()
export class StockService {
  model = '/stocks';

  constructor(private http: Http) { }

  getURL() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  all(): Observable<Array<Stock>> {
    return this.http.get(this.getURL())
      .map(res => res.json());
  };

  getStockHistory(symbol) {
    return this.http.get(`${this.getURL()}?symbol=${symbol}`).map(res => res.json());
  };
}
