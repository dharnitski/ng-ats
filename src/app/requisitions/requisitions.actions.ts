import { createAction, props } from '@ngrx/store';
import { ReqItem } from './requisitions.model';

export const loadRequisitions = createAction(
  '[Reqs] Load Requisitions'
);

export const reqsLoaded = createAction(
  '[Reqs] Reqs List Loaded',
  props<{ reqs: ReqItem[] }>()
);

