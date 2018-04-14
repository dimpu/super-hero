import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromHero from '../hero/hero.reducer';

export interface State {
  heros: fromHero.State
}

export const reducers: ActionReducerMap<State> = {
  heros: fromHero.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
