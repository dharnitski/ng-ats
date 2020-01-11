import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as reqActions from './requisitions.actions';
import * as fromRoot from '../reducers';
import { ReqItem, ReqFilter } from './requisitions.model';

export const requisitionsFeatureKey = 'requisitions';

export interface ReqsState {

  // requisitions in Req List
  requisitions: ReqItem[];

  // Current Requisition
  // todo: use different type to support more details
  // todo: split into sections if necessary
  requisition: ReqItem;

  // requisitions search filter - everything that affects reqs list retrieval logic
  filter: ReqFilter
}

export interface State extends fromRoot.State {
  requisitions: ReqsState;
}

const initialState: ReqsState = {
  requisitions: [],
  requisition: null,
  filter: {
    keywords: null,
  }
};

const reqsReducer = createReducer(
  initialState,
  on(reqActions.reqsLoaded, (state, { requisitions }) => ({ ...state, requisitions })),
  on(reqActions.reqLoaded, (state, { requisition }) => ({ ...state, requisition })),
  on(reqActions.reqFilterChanged, (state, { filter }) => ({ ...state, filter }))
);

export function reducer(state: ReqsState | undefined, action: Action) {
  return reqsReducer(state, action);
}

export const selectFeature = (state: State) => state.requisitions;

export const selectRequisitions = createSelector(
  selectFeature,
  (state: ReqsState) => state.requisitions
);

export const selectCurrentReq = createSelector(
  selectFeature,
  (state: ReqsState) => state.requisition
);

export const selectReqFilter = createSelector(
  selectFeature,
  (state: ReqsState) => state.filter
);

export const selectReqFilterKeywords = createSelector(
  selectReqFilter,
  (state: ReqFilter) => state.keywords
);



