import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from "ng-uikit-pro-standard";
import {StudentListService} from "../../components/student-list/student-list.service";

@Component({
  selector: 'app-tutorpage',
  templateUrl: './tutorpage.component.html',
  styleUrls: ['./tutorpage.component.scss']
})
export class TutorpageComponent implements OnInit {
// @ts-ignore
  @ViewChild(MdbTableDirective, { static : true }) mdbTable: MdbTableDirective;
  // @ts-ignore
  @ViewChild(MdbTablePaginationComponent, { static : true }) mdbTablePagination: MdbTablePaginationComponent;
  // @ts-ignore
  @ViewChild('row', { static : true }) row: ElementRef;

  public elements: any = [];
  headElements = ['Name', 'Contact', 'Subject', ''];
  maxVisibleItems: number = 10;
  public associatedUsers: any = new Array(this.maxVisibleItems * 5);

  searchText: string = '';
  previous: string;
  public schedules;
  checker;
  public opportunities;
  public session;
  public userId;

  backgroundColor = 'landing-blue';
  constructor(private cdRef: ChangeDetectorRef, private _users: StudentListService) { }

  ngOnInit() {
    this.getAssociatedUsers();
    this.mdbTable.setDataSource(this.associatedUsers);
    console.log('setting data');
    console.log(this.elements);
    this.associatedUsers = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
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
  getAssociatedUsers() {
    this._users.allstudents().subscribe(
        res => {
          this.associatedUsers = Object.values(res)[1];
          console.log(res);
        },
        err => console.error(err),
        () => console.log('successfully got associated users')
    );
  }

}
