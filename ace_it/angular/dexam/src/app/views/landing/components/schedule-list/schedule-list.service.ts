import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Opportunity} from '../opportunity/opportunity';
import {Appointment} from "../schedule-form/schedule-form.component";
import {APIURL} from "../../../helpers/api";

@Injectable({
  providedIn: 'root'
})
export class ScheduleListService {

  constructor(private http: HttpClient) { }
  list(): Observable<Schedule[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Schedule[]>('/api/v1/schedule');
  }
  confirm(id, data) {
    // TODO: send the message _after_ fetching the sessions
    return this.http.patch('/api/v1/schedule/' + id + '/', data);
  }
}

export class Schedule {
  student: number;
  subject: string;
  date: string;
  start_time: string;
  location: string;
  type: number;
}
