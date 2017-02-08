import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {
  symbol: Object = {};
  constructor() { }

  ngOnInit() {
  }

}
