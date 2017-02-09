import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SymbolService } from "../../shared/symbol.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {
  symbols: Observable<Array<any>>;
  @Input() current: any;
  @Output() setCurrentSymbol: EventEmitter<any> = new EventEmitter();
  constructor(private symbolService: SymbolService) { }

  ngOnInit() {
    this.symbols = this.symbolService.all();
  }

}
