import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as uuid from "uuid/v4";
import { JobModel, JobRequiredProps } from "../models";


const BASE_URL = "http://localhost:8000/jobs";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class JobsService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<JobModel[]>(BASE_URL);
  }

  load(id: string) {
    return this.http.get<JobModel>(`${BASE_URL}/${id}`);
  }

  create(jobProps: JobRequiredProps) {
    const Job: JobModel = {
      id: uuid(),
      ...jobProps
    };

    return this.http.post<JobModel>(
      `${BASE_URL}`,
      JSON.stringify(Job),
      HEADER
    );
  }

  update(id: string, updates: JobRequiredProps) {
    return this.http.patch<JobModel>(
      `${BASE_URL}/${id}`,
      JSON.stringify(updates),
      HEADER
    );
  }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

}
