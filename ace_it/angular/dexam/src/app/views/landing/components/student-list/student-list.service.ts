import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Student, Associates} from "./student";
import {APIURL} from "../../../helpers/api";

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor(private http: HttpClient) { }
  allstudents(): Observable<Student[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Student[]>('/api/v1/user');
  }

  // @ts-ignore
  getAssociatedUsers(): Observable<Associates[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Associates[]>('/api/v1/user/get_associated_users');
  }
}
