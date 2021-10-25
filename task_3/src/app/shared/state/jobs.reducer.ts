import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { JobModel } from "../../pages/jobs/models";
import { JobsPageActions, JobsApiActions } from "../../pages/jobs/actions";



export interface State {
  collection: JobModel[];
  activeJobId: string | null;
}

export const initialState: State = {
  collection: [],
  activeJobId: null
};

export const jobsReducer = createReducer(
  initialState,
  on(JobsPageActions.enter, state => {
    return {
      ...state,
      activeJobId: null
    };
  }),
  on(JobsApiActions.jobsLoaded, (state, action) => {
    return {
      ...state,
      collection: action.jobs
    };
  }),

);

export function reducer(state: State | undefined, action: Action) {
  return jobsReducer(state, action);
}

export const selectAll = (state: State) => state.collection;

