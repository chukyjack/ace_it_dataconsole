import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {IMyOptions, MdbTableDirective, MdbTablePaginationComponent, ToastService} from 'ng-uikit-pro-standard';
import {ScheduleListService} from '../../components/schedule-list/schedule-list.service';
import {IsLoadingService} from '@service-work/is-loading';
import {SortPaginateTableService} from '../../components/sort-paginate-table/sort-paginate-table.service';
import {FormBuilder} from '@angular/forms';
import {CourseServiceService} from '../coursepage/course-service.service';
import {StudentListService} from '../../components/student-list/student-list.service';
import {ScheduleServiceService} from './schedule-service.service';
import {Appointment} from './appointment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  @ViewChild(MdbTableDirective, { static : true }) mdbTable: MdbTableDirective;
  // @ts-ignore
  @ViewChild(MdbTableDirective, { static : true }) mdbTable2: MdbTableDirective;
  // @ts-ignore
  @ViewChild(MdbTablePaginationComponent, { static : true }) mdbTablePagination: MdbTablePaginationComponent;
  // @ts-ignore
  @ViewChild('row', { static : true }) row: ElementRef;

  maxVisibleItems: number = 8;
  public elements: any = new Array(this.maxVisibleItems * 5);
  headElements = ['Name', 'Subject', 'Time', 'Location'];
  pendingHeadElements = ['Name', 'Subject', 'Time', 'Action'];

  searchText: string = '';
  previous: string;
  public schedules;
  pendingSchedules;
  public show = false;
  public session;
  public userId;
  public optionsTutors;
  public iconsSelect;
  public selectType;
  public optionsSubjects: Array<any>;
  public myDatePickerOptions: IMyOptions = {
    // Your options
  };
  public requestForm;
  public role;
  public showSpinner = false;
  submitted = false;


  constructor(
      private _scheduleService: ScheduleListService,
      private cdRef: ChangeDetectorRef,
      private loader: IsLoadingService,
      private _expandPaginateTableService: SortPaginateTableService,
      private formBuilder: FormBuilder,
      private _courseService: CourseServiceService,
      private _studentService: StudentListService,
      private _scheduleServices: ScheduleServiceService,
      private alertService: ToastService
  ) {
    this.requestForm = this.formBuilder.group({
      requested_user: '',
      subject: '',
      start_time: '',
      date: ''
    });
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {
    this.getSessionDetails();
    this.getSchedules();

    this.mdbTable.setDataSource(this.elements);
    console.log('setting data');
    console.log(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
    this.optionsTutors = this.getAssociatedUsers();
    this.optionsSubjects = [];
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
    // this.loader.remove();
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
    // this.mdbTable.removeRow(1);
    // this.mdbTable.getDataSource().forEach((el: any, index: any) => {
    //   el.id = (index + 1).toString();
    // });
    // this.emitDataSourceChange();
    // this.mdbTable.rowRemoved().subscribe((data: any) => {
    //   console.log(data);
    // });
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
          this.loader.add();
          this.schedules = Object.values(res)[1];
          // this.dataSource = new MatTableDataSource(this.schedules);
          this.elements = this.schedules.filter(this.filterConfirmedSchedule);
          this.pendingSchedules = this.schedules.filter(this.filterPendingSchedule);
          console.log(this.pendingSchedules);
          // console.log(this.elements);
          console.log(this.elements + 'elememts');
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        },
        err => console.error(err),
        () => this.loader.remove()
    );
  }
  confirmSchedule(id, data) {
    const dataStatus = {
      status: 1
    };
    // this.loader.add();
    this._scheduleService.confirm(id, dataStatus).subscribe(
        res => {
          console.log(res);
          console.log(this.elements);
          console.log(this.elements + 'elememts');
        },
        err => console.error(err),
        // () => this.isLoadingService.remove()
        () => this.removeAcceptedSchedule(id)
    );
    this.removeAcceptedSchedule(id);
    const options = {positionClass: 'md-toast-bottom-right', progressBar: true };
    this.alertService.success('Appointment accepted.', 'Success!', options);
  }
  filterPendingSchedule(schedule) {
    return schedule.status === 'pending';
  }
  removeAcceptedSchedule(id) {
    this.pendingSchedules = this.pendingSchedules.filter(this.filterOutId(id));
    console.log(this.pendingSchedules.length + 'New pendings length ####### #####');
  }
  // filterOutId(schedule, id){
  //   return schedule.id !== id;
  // }
  filterOutId(id) {
    return function(schedule) {
      return schedule.id !== id;
    };
  }


  filterConfirmedSchedule(schedule) {
    return schedule.status === 'confirmed';
  }
  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          this.session = res;
          this.userId = res.id;
          this.role = res.role;
          console.log(this.session);

        },
        err => console.error(err),
        () => this.setSelectType()
    );
  }
  formatDateTime(date: string) {
    console.log(date);
    const newdate = date.replace(/-/gi, ':');
    console.log(newdate);
    return newdate;
  }
  getAssociatedCourses(user) {
    console.log(this.optionsTutors);
    console.log('opption was seletecd' + ' ' + user);
    console.log('opption was seletecd' + ' ' + user);
    user = {'other_user': user};
    this._courseService.listUserCourses(user).subscribe(
        res => {
          this.optionsSubjects = this.formatData(res);
        },
        err => console.log(err),
        () => console.log('success!')
    );
  }
  getAssociatedUsers() {
    this._studentService.getAssociatedUsers().subscribe(
        res => {
          this.optionsTutors = res;
          console.log(res);
        },
        err => console.error(err),
        () => console.log('successfully got associated users')
    );
  }
  formatData(data: Array<any>) {
    const finalData = [];
    for (let i = 0; i < data.length; i++) {
      finalData.push({'label' : data[i].subject__name, 'value' : data[i].subject} );
    }
    return finalData;
  }
  setSelectType() {
    console.log('user role is ' + this.role);
    if (this.role === 'tutor') {
      this.selectType = 'Student';
    } else if (this.role === 'student') {
      this.selectType = 'Tutor';
    } else {
      this.selectType = 'User';
    }
  }
  createAppointment(appointment) {
    this._scheduleServices.postSchedule(appointment).subscribe(
        res => {
          console.log(res);
          this.showSpinner = true;
        },
        err => console.error(err),
        () => {console.log('successfully accepted');
          this.showSpinner = false;
          this.pendingSchedules.push(appointment);
          console.log('successfully accepted this opportunity');
        }
    );
  }
  onSubmit(data) {
    const appointment = new Appointment(data);
    this.submitted = true;

    console.log(data + ' ' + 'new appointment data');
    this.createAppointment(appointment);
    console.log('suceesfulyy ######### submitted')
    const options = {positionClass: 'md-toast-bottom-right', progressBar: true };
    this.alertService.success('Request successfully sent.', 'Success!', options);
  }

}


