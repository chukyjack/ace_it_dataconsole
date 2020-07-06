import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// import {SessionData} from "../../components/sort-paginate-table/sort-paginate-table.component";
import {HttpClient} from "@angular/common/http";
import {UserData} from "../../components/sort-paginate-table/sort-paginate-table.component";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateProfile (data: any): Observable<UserData> {
    return this.http.patch<UserData>('/api/v1/user/' + data.id + '/', data);
    // .pipe(
    //     catchError(err => {return Observable<>;};)
    // );
  }
  addSessionUnit (data: any) {
    return this.http.patch('/api/v1/user/add_session_unit/', data);
    // .pipe(
    //     catchError(err => {return Observable<>;};)
    // );
  }
}
