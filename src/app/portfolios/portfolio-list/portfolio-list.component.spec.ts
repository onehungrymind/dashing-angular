import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { PortfolioListComponent } from './portfolio-list.component';
import { By } from '@angular/platform-browser';
import { Portfolio } from '../../common/models/portfolio.model';

describe('PortfolioListComponent', () => {
  let component: PortfolioListComponent;
  let fixture: ComponentFixture<PortfolioListComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ PortfolioListComponent ]
    }).createComponent(PortfolioListComponent);

    component = fixture.componentInstance;
    component.portfolios = [{id: 'asdf', name: 'name', symbol: 'symbol', risk: 1, active: true}];
    component.readOnly = true;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should contain an h3 with portfolio name and symbol', () => {
    const portfolio = component.portfolios[0];
    const h3 = de.query(By.css('md-list-item h3'));

    expect(h3.nativeElement.innerText).toBe(`${portfolio.name} | ${portfolio.symbol}`);
  });

  it('should show/hide button based on `readOnly` input', () => {
    let button = de.query(By.css('md-list-item button'));
    expect(button).toBeNull();

    component.readOnly = false;
    fixture.detectChanges();
    button = de.query(By.css('md-list-item button'));

    expect(button).not.toBeNull();
  });

  it('`select` event should be raised on item click', () => {
    let selected: Portfolio;
    const expected = component.portfolios[0];

    const li = de.query(By.css('md-list-item'));
    component.select.subscribe((portfolio: Portfolio) => selected = portfolio);

    li.triggerEventHandler('click', null);
    expect(selected).toBe(expected);
  });

  it('`delete` event should be raised on button click', () => {
    let deletedId: string;
    const expectedId = component.portfolios[0].id;

    component.readOnly = false;
    fixture.detectChanges();
    component.delete.subscribe((id: string) => deletedId = id);
    const deleteButton = de.query(By.css('md-list-item button'));

    deleteButton.triggerEventHandler('click', {stopImmediatePropagation: () => {}});
    expect(deletedId).toBe(expectedId);
  });
});
