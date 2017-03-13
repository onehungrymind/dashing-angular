import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, Input, Output, EventEmitter } from '@angular/core';
import { PortfoliosComponent } from './portfolios.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../common/reducers';

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
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(reducer) ],
      declarations: [ PortfoliosComponent, PortfolioListComponentStub, PortfolioDetailsComponentStub ]
    }).createComponent(PortfoliosComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
