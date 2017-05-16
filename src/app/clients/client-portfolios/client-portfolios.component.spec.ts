import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortfoliosComponent } from './client-portfolios.component';

describe('ClientPortfoliosComponent', () => {
  let component: ClientPortfoliosComponent;
  let fixture: ComponentFixture<ClientPortfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPortfoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
