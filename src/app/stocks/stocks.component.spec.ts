import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, Input, Output, EventEmitter } from '@angular/core';
import { StocksComponent } from './stocks.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../common/reducers';

@Component({
  selector: 'app-performance',
  template: ''
})
class PerformanceComponentStub {
  @Input() history;
}

@Component({
  selector: 'app-symbols',
  template: ''
})
class SymbolsComponentStub {
  @Input() current;
  @Input() symbols;
  @Output() select = new EventEmitter();
}

@Component({
  selector: 'app-stock-history',
  template: ''
})
class StockHistoryComponentStub {
  @Input() history;
}

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(reducer) ],
      declarations: [ StocksComponent, PerformanceComponentStub, SymbolsComponentStub, StockHistoryComponentStub ]
    }).createComponent(StocksComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
