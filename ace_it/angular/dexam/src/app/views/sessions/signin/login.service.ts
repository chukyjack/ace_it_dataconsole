import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "./user";
import {ActivatedRoute, Router} from "@angular/router";
import {APIURL} from "../../helpers/api";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public returnUrl;
  public urlForRole;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.urlForRole;
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

   login(username: string, password: string) {
    console.log(username+ ' '+ password);
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Accept': 'application/json'
          })
      };
    return this.http.post<any>(APIURL + '/api/v1/user/login/', {
      username: username,
      password: password
    }, httpOptions).subscribe(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.urlForRole = this.getRouteForRole(user);
        // navigate to home page for user role or to page which user tried to access before hitting login page
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.urlForRole;
        this.router.navigate([this.returnUrl]);
      }
      return user;
    });
  }

  getRouteForRole(user) {
    let route = '/landing/v9';
    if (user.role === 'tutor') {
      route =  '/landing/opportunities';
    } else if (user.role === 'student') {
      route = '/landing/schedule';
    }
    return route;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    // remove user from local storage to log user out
    this.http.get('/api/v1/user/logout/').subscribe(user => {
      // login successful if there's a jwt token in the response
      console.log('logged out');
    },
        err => console.error(err),
        () => console.log('logged out')
    );
    this.router.navigate(['/landing/v9']);
  }
}

class LoginSessionDetails {
  user_id: number;
  username: string;
  token: string;
}
