/* tslint:disable:no-unused-variable */

import 'hammerjs';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { Component, Directive, Input } from "@angular/core";

@Directive({
  selector: '[routerLink]'
})
class RouterLinkDirectiveStub {
  @Input() routerLink;
}

@Component({
  selector: 'router-outlet',
  template: ''
})
class RouterOutletComponentStub {}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ AppComponent, RouterOutletComponentStub, RouterLinkDirectiveStub ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));
});
