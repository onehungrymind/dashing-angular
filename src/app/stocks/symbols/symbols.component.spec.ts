import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SymbolsComponent } from './symbols.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('SymbolsComponent', () => {
  let component: SymbolsComponent;
  let fixture: ComponentFixture<SymbolsComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ MaterialModule, FormsModule ],
      declarations: [ SymbolsComponent ]
    }).createComponent(SymbolsComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
});
