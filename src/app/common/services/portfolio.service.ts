import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';
import { Observable } from 'rxjs/Observable';
import { Portfolio } from '../models/portfolio.model';

@Injectable()
export class PortfolioService {
  model = '/portfolios';

  constructor(private http: Http) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  all(): Observable<Array<Portfolio>> {
    return this.http.get(this.url)
      .map(res => res.json());
  };

  create(portfolio) {
    return this.http.post(this.url, portfolio);
  };

  update(portfolio) {
    return this.http.put(`${this.url}/${portfolio.id}`, portfolio);
  };

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  };
}

