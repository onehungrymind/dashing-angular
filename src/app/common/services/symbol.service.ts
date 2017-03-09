import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';
import { Observable } from 'rxjs/Observable';
import { Symbol } from '../models/symbol.model';

@Injectable()
export class SymbolService {
  model = '/symbols';

  constructor(private http: Http) { }

  get url() {
    return ENDPOINT_URI + this.model;
  }

  all(): Observable<Array<Symbol>> {
    return this.http.get(this.url).map(res => res.json());
  };
}

