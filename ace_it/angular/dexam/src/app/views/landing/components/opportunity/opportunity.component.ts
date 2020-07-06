import {Component, OnInit, ViewChild} from '@angular/core';
import {OpportunityService} from './opportunity.service';
import {throwError} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Opportunity} from './opportunity';


@Component({
  selector: 'app-opportunity',
  templateUrl: '../sort-paginate-table/sort-paginate-table.component.html',
  styleUrls: ['../sort-paginate-table/sort-paginate-table.component.scss']
})
export class OpportunityComponent implements OnInit {
  public opportunities;
  public opportunities1;
  displayedColumns: string[] = ['id', 'type', 'location', 'duration'];
  dataSource: MatTableDataSource<Opportunity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _opportunityService: OpportunityService) { }

  ngOnInit() {
    this.getOpportunities();
  }

  getOpportunities() {
    this._opportunityService.list().subscribe(
        res => {
          this.opportunities = Object.values(res)[1];
          this.dataSource = new MatTableDataSource(this.opportunities);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => console.error(err),
        () => console.log('successfully got opportunities')
    );
  }
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }
  }


}
