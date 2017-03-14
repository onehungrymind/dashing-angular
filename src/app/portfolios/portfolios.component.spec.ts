import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, Input, Output, EventEmitter } from '@angular/core';
import { PortfoliosComponent } from './portfolios.component';

import { StoreModule, Store } from '@ngrx/store';
import { reducer } from '../common/reducers';

import { Portfolio } from '../common/models/portfolio.model';
import * as actions from '../common/actions/portfolio.actions';
import * as reducers from '../common/reducers';

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
  let store: Store<reducers.State>;

  const defaultPortfolio: Portfolio = {id: 'string', name: 'string', symbol: 'string', risk: 1, active: true};

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(reducer) ],
      declarations: [ PortfoliosComponent, PortfolioListComponentStub, PortfolioDetailsComponentStub ]
    }).createComponent(PortfoliosComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    store = de.injector.get(Store);

    spyOn(store, 'dispatch');
  });

  it('dispatches an actions.LoadAction on init', () => {
    component.ngOnInit();
    const action = new actions.LoadAction();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('#setCurrentPortfolio dispatches an actions.SelectAction with a portfolio', () => {
    component.setCurrentPortfolio(defaultPortfolio);
    const action = new actions.SelectAction(defaultPortfolio);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('#createPortfolio dispatches an actions.CreateAction with a portfolio', () => {
    const portfolio = Object.assign({}, defaultPortfolio);
    portfolio.id = null;

    component.createPortfolio(portfolio);
    const action = new actions.CreateAction(portfolio);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('#updatePortfolio dispatches an actions.UpdateAction with a portfolio', () => {
    component.updatePortfolio(defaultPortfolio);
    const action = new actions.UpdateAction(defaultPortfolio);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('#savePortfolio calls #createPortfolio if `id` is falsy', () => {
    spyOn(component, 'createPortfolio');
    const portfolio = Object.assign({}, defaultPortfolio);
    portfolio.id = null;

    component.savePortfolio(portfolio);
    expect(component.createPortfolio).toHaveBeenCalledWith(portfolio);
  });

  it('#savePortfolio calls #updatePortfolio if `id` is truthy', () => {
    spyOn(component, 'updatePortfolio');
    component.savePortfolio(defaultPortfolio);
    expect(component.updatePortfolio).toHaveBeenCalledWith(defaultPortfolio);

  });

  it('#deletePortfolio dispatches an actions.DeleteAction with a portfolioId', () => {
    component.deletePortfolio(defaultPortfolio.id);
    const action = new actions.DeleteAction(defaultPortfolio.id);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
