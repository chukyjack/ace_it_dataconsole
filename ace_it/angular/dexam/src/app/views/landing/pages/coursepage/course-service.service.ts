import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Opportunity} from "../../components/opportunity/opportunity";
import {APIURL} from "../../../helpers/api";

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) { }

  listAllCourses(): Observable<Course[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Course[]>('/api/v1/course');
  }
  listUserCourses(params): Observable<Course[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Course[]>('/api/v1/course/registered_courses', {params: params});
  }
  listMyCourses(): Observable<Course[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Course[]>('/api/v1/course/registered_courses');
  }
  listUnregisteredCourses(): Observable<Course[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.get<Course[]>('/api/v1/course/unregistered_courses');
  }
  RegisterNewCourses(data): Observable<Course[]> {
    // TODO: send the message _after_ fetching the sessions
    return this.http.patch<Course[]>('/api/v1/course/register_for_new_courses/', data);
  }
}

export class Course {
  id: number;
  name: string;
}
