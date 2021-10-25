import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";

import * as fromJobs from "./jobs.reducer";

export interface State {
  jobs: fromJobs.State;
}

export const reducers: ActionReducerMap<State> = {
  jobs: fromJobs.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Jobs Selectors
 */
export const selectJobsState = (state: State) => state.jobs;
export const selectAllJobs = createSelector(
  selectJobsState,
  fromJobs.selectAll
);
