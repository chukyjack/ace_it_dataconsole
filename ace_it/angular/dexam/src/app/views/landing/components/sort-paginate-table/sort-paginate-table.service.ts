import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Opportunity} from "../opportunity/opportunity";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {SessionData, ProfileData} from "./sort-paginate-table.component";
import {APIURL} from "../../../helpers/api";

@Injectable({
  providedIn: 'root'
})
export class SortPaginateTableService {

  constructor(private http: HttpClient) { }
  list() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    // TODO: send the message _after_ fetching the sessions
    return this.http.get('/api/v1/session', httpOptions);
  }
  create(data) {
    // TODO: send the message _after_ fetching the sessions
    return this.http.post('/api/v1/session', data);
  }

  acceptOpportunity (sessionData: any): Observable<SessionData> {
    return this.http.patch<SessionData>('/api/v1/session/accept_opportunity/', sessionData);
    // .pipe(
    //     catchError(err => {return Observable<>;};)
    // );
  }
  // acceptOpportunity (sessionData: SessionData): Observable<SessionData> {
  //   return this.http.patch<SessionData>(sessionData.resource_uri, sessionData);
  //   // .pipe(
  //   //     catchError(err => {return Observable<>;};)
  //   // );
  // }

  setUserSessionDetails(): Observable<ProfileData> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<ProfileData>('/api/v1/user/user_session_details');
  }

  testUpload(files): Observable<ProfileData> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.post<ProfileData>('/api/v1/user/', files, {headers: {
            'Content-Type': 'file'
        },});
  }
}
