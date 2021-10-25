import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, exhaustMap } from "rxjs/operators";
import { JobsService } from "../services";
import { JobsPageActions, JobsApiActions } from "../actions";

@Injectable()
export class JobsApiEffects {
  constructor(private jobsService: JobsService, private actions$: Actions) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsPageActions.enter),
      exhaustMap(() =>
      {
        return this.jobsService
        .all()
        .pipe(map(jobs => JobsApiActions.jobsLoaded({ jobs })))
      }

      )
    )
  );

}
