import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from 'src/app/pages/jobs/models';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  @Input() jobs: JobModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
