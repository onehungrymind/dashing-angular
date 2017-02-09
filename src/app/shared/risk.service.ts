import { Injectable } from '@angular/core';
import { ENDPOINT_URI } from "./constants";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class RiskService {
  data: any;
  model: string = '/risks';
  get url() {
    return ENDPOINT_URI + this.model;
  }

  constructor(private http: Http) { }

  all() {
    return this.http.get(this.url).map(res => res.json());
  };

}
