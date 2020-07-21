import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gig} from "./state/gig.model";
import {Observable, Subject} from "rxjs";
import {GigsQuery} from "./state/gigs.query";
import {GigsService} from "./state/gigs.service";
import {SortPaginateTableService} from "../../components/sort-paginate-table/sort-paginate-table.service";

@Component({
  selector: 'app-quick-gigs',
  templateUrl: './quick-gigs.component.html',
  // template: `
  //   <div class="container">
  //
  //     <app-infinite-scroll (scrolled)="onScroll()" style="height: 400px; overflow-y: auto">
  //       <app-gig *ngFor="let gig of gigs$ | async" [gig]="gig"></app-gig>
  //
  //       <div class="alert alert-dark"*ngIf="isLoading$ | async">
  //         Fetching tweets...
  //       </div>
  //     </app-infinite-scroll>
  //
  //   </div>
  // `,
  styleUrls: ['./quick-gigs.component.scss']
})
export class QuickGigsComponent implements OnInit,  OnDestroy {
  gigs$: Observable<Gig[]>;
  gigs1: Observable<Gig[]>;
  isLoading: boolean;
  hasMore: boolean;
  public OutGigs;
  public userId;
  public realGigs = [];

  constructor(
      private gigsQuery: GigsQuery,
      private gigsService: GigsService,
      private _expandPaginateTableService: SortPaginateTableService
  ) { }

  ngOnInit() {
    console.log('gigs value 1');
    this.getMyData();
    this.getSessionDetails();
    console.log('this is gigs');
    console.log(this.gigs1);
    console.log('this is gigs');
    this.hasMore = this.gigsService.page.hasMore;

    // this.isLoading$ = this.gigsQuery.selectLoading();
  }

  onScroll() {
    this.isLoading = this.gigsService.isLoading = true;
    this.hasMore = this.gigsService.page.hasMore;
    this.fetchGigs();
  }

  private fetchGigs() {
    if (this.gigsService.page.hasMore) {
      this.isLoading = this.gigsService.isLoading = true;
      this.realGigs = this.gigsService.get(this.gigs1, this.gigsService.page.nextPage);
    }
    console.log('final gigs to display');
    console.log(this.realGigs);
    this.isLoading = this.gigsService.isLoading = false;
    this.hasMore = this.gigsService.page.hasMore;
  }
  ngOnDestroy() {
    this.gigsService.reset();
    this.hasMore = this.gigsService.page.hasMore;
  }
  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
          this.userId = res['id'];
          console.log('this is th session');
          console.log('this is th session');

        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
  getMyData() {
    this.isLoading = this.gigsService.isLoading = true;
    this.hasMore = this.gigsService.page.hasMore;
    this.gigsService.list().subscribe(
        res => {
          console.log(res);
          this.gigs1 = Object.values(res)[1];
          console.log(this.gigs1);
        },
        err => console.error(err),
        () =>
            this.fetchGigs()
    );
    // this.gigsService.data = this.gigs1;
  }
  acceptGig(gigID) {
    const data = {
      'tutor' : this.userId,
      'gig' : gigID,
    };
    this.gigsService.acceptGig(data).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err),
        () => console.log('succesfully accepted')
    );
  }
}
