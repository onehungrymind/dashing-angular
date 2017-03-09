import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Symbol } from '../../common/models/symbol.model';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent {
  @Input() current: Symbol;
  @Input() symbols: Symbol[];
  @Output() select: EventEmitter<any> = new EventEmitter();
}
