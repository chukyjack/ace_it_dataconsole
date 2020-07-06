import {Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef} from '@angular/core';
// import {MatTableDataSource} from "@angular/material/table";
// import {Opportunity} from "../opportunity/opportunity";
// import {MatPaginator} from "@angular/material/paginator";
// import {MatSort} from "@angular/material/sort";
import {ScheduleListService} from "./schedule-list.service";
import {Schedule} from './schedule';
import { MdbTableDirective, MdbTablePaginationComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  // templateUrl: '../sort-paginate-table/sort-paginate-table.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit, AfterViewInit {
    @ViewChild(MdbTableDirective, { read : true }) mdbTable: MdbTableDirective;
    @ViewChild(MdbTablePaginationComponent, { read : true }) mdbTablePagination: MdbTablePaginationComponent;
    @ViewChild('row', { read : true }) row: ElementRef;

    maxVisibleItems: number = 8;
    public elements: any = new Array(this.maxVisibleItems * 5);
    headElements = ['Name', 'Subject', 'Time', 'Location'];

    searchText: string = '';
    previous: string;
    public schedules;
    checker;



    constructor(private _scheduleService: ScheduleListService, private cdRef: ChangeDetectorRef) {
    }

    @HostListener('input') oninput() {
        this.mdbTablePagination.searchText = this.searchText;
    }

    ngOnInit() {
        this.getSchedules();

        this.mdbTable.setDataSource(this.elements);
        console.log('setting data');
        console.log(this.elements);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
    }

    ngAfterViewInit() {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    }

    addNewRow() {
        this.mdbTable.addRow({
            id: this.elements.length.toString(),
            first: 'Wpis ' + this.elements.length,
            last: 'Last ' + this.elements.length,
            handle: 'Handle ' + this.elements.length
        });
        this.emitDataSourceChange();
    }

    addNewRowAfter() {
        this.mdbTable.addRowAfter(1, {id: '2', first: 'Nowy', last: 'Row', handle: 'Kopytkowy'});
        this.mdbTable.getDataSource().forEach((el: any, index: any) => {
            el.id = (index + 1).toString();
        });
        this.emitDataSourceChange();
    }

    removeLastRow() {
        this.mdbTable.removeLastRow();
        this.emitDataSourceChange();
        this.mdbTable.rowRemoved().subscribe((data: any) => {
            console.log(data);
        });
    }

    removeRow() {
        this.mdbTable.removeRow(1);
        this.mdbTable.getDataSource().forEach((el: any, index: any) => {
            el.id = (index + 1).toString();
        });
        this.emitDataSourceChange();
        this.mdbTable.rowRemoved().subscribe((data: any) => {
            console.log(data);
        });
    }

    emitDataSourceChange() {
        this.mdbTable.dataSourceChange().subscribe((data: any) => {
            console.log(data);
        });
    }

    searchItems() {
        const prev = this.mdbTable.getDataSource();

        if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.elements = this.mdbTable.getDataSource();
        }

        if (this.searchText) {
            this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
        }

        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();

        this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
            this.mdbTablePagination.calculateFirstItemIndex();
            this.mdbTablePagination.calculateLastItemIndex();
        });
    }
    getSchedules() {
        this._scheduleService.list().subscribe(
            res => {
                console.log(res);
                this.schedules = Object.values(res)[1];
                // this.dataSource = new MatTableDataSource(this.schedules);
                this.elements = this.schedules;
                console.log(this.elements);
                // console.log(this.elements);
                console.log(this.elements + 'elememts');
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            },
            err => console.error(err),
            () => console.log('successfully got schedules')
        );
    }
}


  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

// }
