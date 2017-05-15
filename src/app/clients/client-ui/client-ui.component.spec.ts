import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUiComponent } from './client-ui.component';

describe('ClientUiComponent', () => {
  let component: ClientUiComponent;
  let fixture: ComponentFixture<ClientUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
