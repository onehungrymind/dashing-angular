/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input, Output, EventEmitter } from '@angular/core';

import { StoreModule, Store } from "@ngrx/store";
import { reducer } from "../common/reducers";

import { HomeComponent } from './home.component';

@Component({
  selector: 'app-portfolio-list',
  template: ''
})
class PortfolioListComponentStub {
  @Input() portfolios;
  @Input() disableActions;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
}

@Component({
  selector: 'app-stock-history',
  template: ''
})
class StockHistoryComponentStub {
  @Input() history;
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(reducer) ],
      declarations: [ HomeComponent, StockHistoryComponentStub, PortfolioListComponentStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
