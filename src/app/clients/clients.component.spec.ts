import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducer } from '../common/reducers';

import { ClientsComponent } from './clients.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-clients-list',
  template: ''
})
class ClientsListComponentStub {
  @Input() clients;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

@Component({
  selector: 'app-client-portfolios',
  template: ''
})
class ClientPortfoliosComponentStub {
  @Input() clients;
}

@Component({
  selector: 'app-client-details',
  template: ''
})
class ClientDetailsComponentStub {
  @Input() client;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(reducer) ],
      declarations: [
        ClientsComponent,
        ClientsListComponentStub,
        ClientPortfoliosComponentStub,
        ClientDetailsComponentStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
