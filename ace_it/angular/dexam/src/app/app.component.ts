import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {MatProgressSpinnerModule} from '@angular/material';
import {Observable} from "rxjs";
import {IsLoadingService} from "@service-work/is-loading";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "dexam";
  isLoading: Observable<boolean>;
  constructor(private router: Router, private isLoadingService: IsLoadingService) {}

  ngOnInit() {
    this.isLoading = this.isLoadingService.isLoading$();

    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  // onActivate(event) {
  //   window.scroll(0, 0);
  // }
}
