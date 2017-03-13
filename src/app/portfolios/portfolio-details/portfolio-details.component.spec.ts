import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../common/reducers';

describe('PortfolioDetailsComponent', () => {
  let component: PortfolioDetailsComponent;
  let fixture: ComponentFixture<PortfolioDetailsComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ MaterialModule, FormsModule, StoreModule.provideStore(reducer) ],
      declarations: [ PortfolioDetailsComponent ]
    }).createComponent(PortfolioDetailsComponent);

    component = fixture.componentInstance;
    component.currentPortfolio = { id: 'string', name: 'string', symbol: 'string', risk: 1, active: true };
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
