import { inject, TestBed } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ClientsService]
    });
  });

  it('should ...', inject([ClientsService], (service: ClientsService) => {
    expect(service).toBeTruthy();
  }));
});
