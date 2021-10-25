import { createAction, props } from "@ngrx/store";
import { JobModel } from "../models";

export const jobsLoaded = createAction(
  "[Jobs API] Jobs Loaded Success",
  props<{ jobs: JobModel[] }>()
);
