import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { SymbolEffects } from './symbol.effects';
import { Observable } from 'rxjs/Observable';
import { SymbolService } from '../services/symbol.service';
import * as actions from '../actions/symbol.actions';

describe('Symbol Effects', () => {
  let runner: EffectsRunner;
  let symbolEffects: SymbolEffects;
  let service: any;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {provide: SymbolService, useValue: jasmine.createSpyObj('symbolService', ['all'])},
      SymbolEffects
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    symbolEffects = TestBed.get(SymbolEffects);
    service = TestBed.get(SymbolService);
  });

  it('$load should return an actions.LoadActionSuccess, with symbols', () => {
    const symbols = [{id: 'string', code: 'string', entity: 'string'}];
    const expected = new actions.LoadActionSuccess(symbols);
    service.all.and.returnValue(Observable.of(symbols));
    runner.queue(new actions.LoadAction());

    symbolEffects.load$.subscribe(result => {
      expect(result).toEqual(expected);
    });
  });
});
