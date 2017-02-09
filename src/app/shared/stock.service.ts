import { Injectable } from '@angular/core';
import { ENDPOINT_URI } from "./constants";
import { Http } from "@angular/http";

@Injectable()
export class StockService {
  model: string = '/stocks';

  constructor(private http: Http) { }

  getURL(symbol) {
    return `${ENDPOINT_URI}${this.model}?Symbol=${symbol}`;
  }

  getStocks (symbol) {
    return this.http.get(this.getURL(symbol)).map(res => res.json());
  };
}
