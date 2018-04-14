import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { HeroEffects } from './hero.effects';

describe('HeroService', () => {
  let actions$: Observable<any>;
  let effects: HeroEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(HeroEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
