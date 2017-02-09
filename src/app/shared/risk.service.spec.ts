/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RiskService } from './risk.service';

describe('RiskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiskService]
    });
  });

  it('should ...', inject([RiskService], (service: RiskService) => {
    expect(service).toBeTruthy();
  }));
});
