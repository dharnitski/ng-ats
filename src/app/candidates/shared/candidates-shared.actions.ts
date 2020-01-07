import { createAction, props } from '@ngrx/store';
import { CandFilter, CandItem } from './candidates-shared.model';

export const candFilterChanged = createAction(
  '[Cand] Candidates Filter Changed',
  props<{ filter: CandFilter }>()
);

export const candidatesLoaded = createAction(
  '[Cand] Candidates Loaded',
  props<{ candidates: CandItem[] }>()
);
