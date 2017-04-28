import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';
import { Portfolio } from '../../common/models/portfolio.model';

import { reducer } from '../../common/reducers';
import * as reducers from '../../common/reducers';
import * as riskActions from '../../common/actions/risk.actions';
import * as symbolActions from '../../common/actions/symbol.actions';
import * as portfolioActions from '../../common/actions/portfolio.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PortfolioDetailsComponent', () => {
  let component: PortfolioDetailsComponent;
  let fixture: ComponentFixture<PortfolioDetailsComponent>;
  let de: DebugElement;
  let store: Store<reducers.State>;
  let inputPortfolio: Portfolio;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ MaterialModule, BrowserAnimationsModule, FormsModule, StoreModule.provideStore(reducer) ],
      declarations: [ PortfolioDetailsComponent ]
    }).createComponent(PortfolioDetailsComponent);

    inputPortfolio = { id: 'string', name: 'string', symbol: 'string', risk: 1, active: true };
    component = fixture.componentInstance;
    component.portfolio = inputPortfolio;
    de = fixture.debugElement;

    store = de.injector.get(Store);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should set `currentPortfolio` and `originalName` based on `portfolio` input', () => {
    expect(component.currentPortfolio).toEqual(inputPortfolio);
    expect(component.originalName).toBe(inputPortfolio.name);
  });

  it('should dispatch LoadAction on riskActions and symbolActions on init', () => {
    const riskLoadAction = new riskActions.LoadAction();
    const symbolLoadAction = new symbolActions.LoadAction();
    expect(store.dispatch).toHaveBeenCalledWith(riskLoadAction);
    expect(store.dispatch).toHaveBeenCalledWith(symbolLoadAction);
  });

  it('#cancel should dispatch ClearAction on portfolioActions', () => {
    const action = new portfolioActions.ClearAction();
    component.cancel();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('#savePortfolio should raise `save` event with currentPortfolio, then call #cancel', () => {
    spyOn(component, 'cancel');
    const event = {preventDefault: () => {}};
    let saved: Portfolio;
    component.save.subscribe((portfolio: Portfolio) => saved = portfolio);
    component.savePortfolio(event);

    expect(component.cancel).toHaveBeenCalled();
    expect(saved).toEqual(inputPortfolio);
  });
});
