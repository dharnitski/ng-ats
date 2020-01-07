import { createAction, props } from '@ngrx/store';
import { CandFilter } from './candidates-shared.model';

export const candFilterChanged = createAction(
  '[Cand] Candidates Filter Changed',
  props<{ filter: CandFilter }>()
);
