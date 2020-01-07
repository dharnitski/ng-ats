import { createAction, props } from '@ngrx/store';
import { ReqItem } from './requisitions.model';



export const loadRequisitions = createAction(
  '[Reqs] Load Requisitions'
);

export const reqsLoaded = createAction(
  '[Reqs] Reqs List Loaded',
  props<{ requisitions: ReqItem[] }>()
);

export const reqSelectedType = '[Reqs] Req Selected';

export const reqSelected = createAction(
  reqSelectedType,
  props<{ reqId: number }>()
);

export const reqLoaded = createAction(
  '[Reqs] Req Loaded',
  props<{ requisition: ReqItem }>()
);

