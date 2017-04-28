import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StockHistoryComponent } from './stock-history.component';
import { MaterialModule } from '@angular/material';

describe('StockHistoryComponent', () => {
  let component: StockHistoryComponent;
  let fixture: ComponentFixture<StockHistoryComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ StockHistoryComponent ]
    }).createComponent(StockHistoryComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
