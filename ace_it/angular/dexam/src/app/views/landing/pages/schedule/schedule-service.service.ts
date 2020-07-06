import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../../components/schedule-form/schedule-form.component";
import {APIURL} from "../../../helpers/api";

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  constructor(private http: HttpClient) { }

  postSchedule (data: Appointment): Observable<Appointment> {
    console.log(data);
    return this.http.post<Appointment>(APIURL + '/api/v1/schedule/', data);
    // .pipe(
    //     catchError(err => {return Observable<>;};)
    // );
  }
  getPendingSchedule(): Observable<Appointment[]> {
    // TODO: send the message _after_ fetching the schedule
    return this.http.get<Appointment[]>(APIURL + '/api/v1/schedule/?status=0');
  }
  getUnbilledSchedule(student): Observable<Appointment[]> {
    // TODO: send the message _after_ fetching the schedule
    return this.http.get<Appointment[]>(APIURL + '/api/v1/schedule/unbilled_schedules/', {params: {'student_id': student}});
  }

}
