import { Component, EventEmitter, Input, Output } from "@angular/core";
 
 
@Component({
 selector: "app-job-list",
 template: `<h1>Jobs</h1>
             <ul><li *ngFor="let job of jobs"
                    (click)="delete.emit(job)">
                  <h3> {{populateName(job.lastname, job.firstname)}} </h3>
	           <p>{{job.description}} </p>
	      </li></ul> `
})
export class JobsListComponent {
 @Input() jobs: any[];
 
 public populateName(firstname: string, lastname: string) {
   return `${firstname} ${lastname}`;
 }
}