import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../shared';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
  }

}
