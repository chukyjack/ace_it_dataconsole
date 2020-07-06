import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Schedule} from "../schedule-list/schedule";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {StudentListService} from "./student-list.service";

@Component({
  selector: 'app-student-list',
  templateUrl: '../sort-paginate-table/sort-paginate-table.component.html',
  styleUrls: ['../sort-paginate-table/sort-paginate-table.component.scss']
})
export class StudentListComponent implements OnInit {
  public students;
  displayedColumns: string[] = ['username', 'contact', 'course', 'hobbies'];
  dataSource: MatTableDataSource<Schedule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _studentService: StudentListService ) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this._studentService.allstudents().subscribe(
        res => {
          this.students = Object.values(res)[1];
          this.dataSource = new MatTableDataSource(this.students);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => console.error(err),
        () => console.log('successfully got students')
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
