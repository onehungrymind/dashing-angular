/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input, Output, EventEmitter } from '@angular/core';

import { PortfoliosComponent } from './portfolios.component';

import { StoreModule } from "@ngrx/store";
import { reducer } from "../common/reducers";

@Component({
  selector: 'app-portfolio-list',
  template: ''
})
class PortfolioListComponentStub {
  @Input() portfolios; @Input() disableActions;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
}

@Component({
  selector: 'app-portfolio-details',
  template: ''
})
class PortfolioDetailsComponentStub {
  @Input() portfolio;
  @Output() save = new EventEmitter();
}

describe('PortfoliosComponent', () => {
  let component: PortfoliosComponent;
  let fixture: ComponentFixture<PortfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(reducer) ],
      declarations: [ PortfoliosComponent, PortfolioListComponentStub, PortfolioDetailsComponentStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
