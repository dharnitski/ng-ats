import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as candActions from './candidates-shared.actions';
import { CandFilter, CandItem } from './candidates-shared.model';

export const candidatesFeatureKey = 'candidates';

export interface CandState {
  candidates: CandItem[];
  filter: CandFilter;
  candidate: CandItem;
}

export interface State extends fromRoot.State {
  candidates: CandState;
}

const initialState: CandState = {
  candidates: [],
  filter: {
    reqId: null,
  },
  candidate: null
};

const candReducer = createReducer(
  initialState,
  on(candActions.candidatesLoaded, (state, { candidates }) => ({ ...state, candidates })),
);

export function reducer(state: CandState | undefined, action: Action) {
  return candReducer(state, action);
}

export const selectFeature = (state: State) => state.candidates;

export const selectCandidates = createSelector(
  selectFeature,
  (state: CandState) => state.candidates
);

export const selectCandidate = createSelector(
  selectFeature,
  (state: CandState) => state.candidate
);

export const selectFilter = createSelector(
  selectFeature,
  (state: CandState) => state.filter
);

