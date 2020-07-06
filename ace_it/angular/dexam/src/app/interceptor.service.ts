import { Injectable } from '@angular/core';
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {IsLoadingService} from "@service-work/is-loading";
// import {Observable} from "rxjs";
import { finalize, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorService implements HttpInterceptor {
//
//   count = 0;
//
//   constructor(private loader: IsLoadingService ) { }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//     this.loader.add();
//
//     this.count++;
//
//     return next.handle(req)
//
//         .pipe ( tap (
//
//             event => console.log(event),
//
//             error => console.log( error )
//
//             ), finalize(() => {
//
//               // this.loader.remove();
//           console.log(this.count);
//
//             })
//         );
//   }
// }
// import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';


import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(private status: HTTPStatus, private loader: IsLoadingService) {}
  public count = 0;
  public stillLoading: Observable <boolean>;
  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        map(event => {
          // this.loader.add();
          // this.count++;
          console.log('added' + + ' ' + this.count + ' ' + req.url);
          return event;
        }),
        catchError(error => {
          return Observable.throw(error);
        }),
        finalize(() => {
          if (this.stillLoading) {
            console.log('removing' + + ' ' + this.count + ' ' + req.url);
            // this.loader.remove();
            this.stillLoading = this.loader.isLoading$();
            // this.count--;
          }
          console.log(this.stillLoading);
          this.status.setHttpStatus(false);
        })
    );
  }
}
