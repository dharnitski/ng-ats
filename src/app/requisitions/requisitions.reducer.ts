import { Action, createReducer, on } from '@ngrx/store';
import * as reqActions from './requisitions.actions';
import * as fromRoot from '../reducers/index';
import { ReqItem } from './requisitions.model';

export const requisitionsFeatureKey = 'reqs';

export interface ReqsState {
  requisitions: ReqItem[];
}

export interface State extends fromRoot.State {
  req: ReqsState;
}

const initialState: ReqsState = {
  requisitions: []
};

const reqsReducer = createReducer(
  initialState,
);

export function reducer(state: ReqsState | undefined, action: Action) {
  return reqsReducer(state, action);
}
