import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as reqActions from './requisitions.actions';
import * as fromRoot from '../reducers';
import { ReqItem } from './requisitions.model';

export const requisitionsFeatureKey = 'requisitions';

export interface ReqsState {
  requisitions: ReqItem[];
  requisition: ReqItem;
}

export interface State extends fromRoot.State {
  requisitions: ReqsState;
}

const initialState: ReqsState = {
  requisitions: [],
  requisition: null
};

const reqsReducer = createReducer(
  initialState,
  on(reqActions.reqsLoaded, (state, { requisitions }) => ({ ...state, requisitions })),
  on(reqActions.reqLoaded, (state, { requisition }) => ({ ...state, requisition }))
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
