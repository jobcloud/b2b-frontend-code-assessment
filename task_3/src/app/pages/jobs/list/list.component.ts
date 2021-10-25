import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  State,
  selectAllJobs,
} from "../../../shared/state";
import { JobModel, JobRequiredProps } from "../models";
import { JobsPageActions } from "../actions";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  jobs$: Observable<JobModel[]>;

  constructor(private store: Store<State>) {
    this.jobs$ = store.select(selectAllJobs);

  }

  ngOnInit(): void {
    this.store.dispatch(JobsPageActions.enter());
  }

}
