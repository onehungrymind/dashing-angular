import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { PortfolioListComponent } from './portfolio-list.component';

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
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
