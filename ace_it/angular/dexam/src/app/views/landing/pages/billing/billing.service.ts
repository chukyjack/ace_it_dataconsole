import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Appointment} from "../../components/schedule-form/schedule-form.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }
  getBilledSchedule(): Observable<Bill[]> {
    // TODO: send the message _after_ fetching the schedule
    return this.http.get<Bill[]>('/api/v1/bill/');
  }
  postBill(data): Observable<Invoice[]> {
    // TODO: send the message _after_ fetching the schedule
    return this.http.post<Invoice[]>('/api/v1/bill/', data);
  }
}
export interface Bill {
  details: string;
  is_paid: string;
  bill_date: string;
}
export interface Invoice {
  extra_info: string;
  schedule: string;
  amount: string;
}
