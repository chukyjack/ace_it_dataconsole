import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatFormField} from '@angular/material/form-field';
import {SortPaginateTableService} from './sort-paginate-table.service';
// import {OpportunityService} from '../opportunity/opportunity.service";


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
export class SessionData {
  id: number;
  type: number;
  location: string;
  duration: number;
  subject: string;
  distance: number;
  resource_uri: string;
}

export class ProfileData {
  id: number;
  token: string;
  username: string;
  email: string;
  frist_name: string;
  last_name: string;
  address: string;
  city: string;
  zipcode: number;
  country: string;
  about_me: string;
  role: string;
}

/** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
//   'aqua', 'blue', 'navy', 'black', 'gray'
// ];
// const NAMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];

@Component({
  selector: 'app-sort-paginate-table',
  templateUrl: './sort-paginate-table.component.html',
  styleUrls: ['./sort-paginate-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SortPaginateTableComponent implements OnInit {
  public opportunities;
  public opportunities1;
  displayedColumns: string[] = ['id', 'type', 'location', 'duration', 'accept'];
  dataSource: MatTableDataSource<SessionData>;
  expandedElement: PeriodicElement;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _sortPaginateTableService: SortPaginateTableService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    console.log(this.opportunities);
    console.log(typeof this.opportunities);
    // console.log(typeof opportunities1)
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.opportunities1 = this.getData();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    console.log(this.opportunities1 + 'oppotunity 1');
  }

  getData() {
    this._sortPaginateTableService.list().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          this.opportunities = Array.from(Object.values(res)[1]);
          this.dataSource = new MatTableDataSource(this.opportunities);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
