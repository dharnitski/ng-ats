import { createAction, props } from '@ngrx/store';
import { ReqItem, ReqFilter } from './requisitions.model';

export const reqFilterChanged = createAction(
  '[Reqs] Requisitions Filter Changed',
  props<{ filter: ReqFilter }>()
);

export const reqsLoaded = createAction(
  '[Reqs] Reqs List Loaded',
  props<{ requisitions: ReqItem[] }>()
);

export const reqSelected = createAction(
  '[Reqs] Req Selected',
  props<{ reqId: number }>()
);

export const reqLoaded = createAction(
  '[Reqs] Req Loaded',
  props<{ requisition: ReqItem }>()
);

