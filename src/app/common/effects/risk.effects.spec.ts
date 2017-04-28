import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { RiskEffects } from './risk.effects';
import { Observable } from 'rxjs/Observable';
import { RiskService } from '../services/risk.service';
import * as actions from '../actions/risk.actions';

describe('Risk Effects', () => {
  let runner: EffectsRunner;
  let riskEffects: RiskEffects;
  let service: any;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {provide: RiskService, useValue: jasmine.createSpyObj('riskService', ['all'])},
      RiskEffects
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    riskEffects = TestBed.get(RiskEffects);
    service = TestBed.get(RiskService);
  });

  it('$load should return an actions.LoadActionSuccess, with risks', () => {
    const risks = [{id: 'string', description: 'string'}];
    const expected = new actions.LoadActionSuccess(risks);
    service.all.and.returnValue(Observable.of(risks));
    runner.queue(new actions.LoadAction());

    riskEffects.load$.subscribe(result => {
      expect(result).toEqual(expected);
    });
  });
});
