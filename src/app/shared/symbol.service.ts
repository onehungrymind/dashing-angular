import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ENDPOINT_URI } from "./constants";
import { Observable } from "rxjs";

@Injectable()
export class SymbolService {
  data: any;
  currentSymbol: any;
  model: string = '/symbols';

  get url() {
    return ENDPOINT_URI + this.model;
  }

  constructor(private http: Http) { }

  all() {
    return this.http.get(this.url).map(res => res.json());
  };

  setCurrentSymbol(symbol) {
    this.currentSymbol = symbol;
    // $rootScope.$broadcast('setSymbol', symbol);
  };

  getCurrentSymbol() {
    return this.currentSymbol;
  };
}

