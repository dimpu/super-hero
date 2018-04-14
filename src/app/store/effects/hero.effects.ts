import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { mergeMap, switchMap, map, catchError, tap } from 'rxjs/operators';
import { defer } from 'rxjs/observable/defer';
import * as HeroActions from '../hero/hero.actions';


@Injectable()
export class HeroEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) {}

   // Listen for the 'LOGIN' action
   @Effect({ dispatch: false }) fetch$: Observable<Action> = this.actions$.pipe(
    ofType(HeroActions.HeroActionTypes.FetchHeros),
    mergeMap(action => {
      return this.http.get('/api/heroes').pipe(
       
        // If successful, dispatch success action with result
        map((data:any) => ({ type: '[Hero] Load Heros', payload: data })),
        // switchMap((data:any) => new HeroActions.LoadHeros(data) ),
        // If request fails, dispatch failed action
        catchError(() => { console.log("err");return of({ type: 'FETCH_HEROS_FAILED' })})
      )
    }
    )
  );


  @Effect({ dispatch: false }) init$: Observable<Action> = defer(()=>{
    // () => of(null)).pipe(
    // tap(() => console.log('init$')),
    console.log('INIT');
    return of(new HeroActions.FetchHeros());
  });
  


}
