import {Component, OnInit, ViewChild} from '@angular/core';
// import {InteractionMode} from "igniteui-angular";
import {SortPaginateTableService} from "../sort-paginate-table/sort-paginate-table.service";
import {ScheduleServiceService} from "../../pages/schedule/schedule-service.service";
import {StudentListService} from "../student-list/student-list.service";
import {IMyOptions} from "ng-uikit-pro-standard";
import {CourseServiceService} from "../../pages/coursepage/course-service.service";
import {FormBuilder} from "@angular/forms";
import {ScheduleComponent} from "../../pages/schedule/schedule.component";


@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {
  // @ts-ignore
  @ViewChild(ScheduleComponent, {static: true}) Schedule: ScheduleComponent;
  public session;
  public userId;
  public role;
  public myStudents;
  // public mode: InteractionMode = InteractionMode.DropDown;
  // public format: string = 'hh:mm tt';
  // public time: string = '12:00AM';
  submitted = false;
  public showSpinner = false;
  public optionsTutors;
  public iconsSelect;
  public selectType;
  public optionsSubjects: Array<any>;
  public myDatePickerOptions: IMyOptions = {
        // Your options
    };
  public requestForm;
  // optionsSelect: Array<any>;
  // public date: Date = new Date(2018, 10, 27, 17, 45, 0, 0);


    // tslint:disable-next-line:max-line-length
  constructor(
      private _scheduleService: ScheduleServiceService,
      private _studentService: StudentListService,
      private _expandPaginateTableService: SortPaginateTableService,
      private _courseService: CourseServiceService,
      private formBuilder: FormBuilder,
  ) {
      this.requestForm = this.formBuilder.group({
          requested_user: '',
          subject: '',
          start_time: '12:00',
          date: ''
      });
  }

  ngOnInit() {
      this.optionsTutors = this.getAssociatedUsers();
      this.optionsSubjects = [];
      this.iconsSelect = [
          { value: '1', label: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
          { value: '2', label: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
          { value: '3', label: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' },
      ];
    this.getStudents();
    this.getSessionDetails();
    // this.setSelectType();
  }
  onSubmit(data) {
      const appointment = new Appointment(data);
      this.submitted = true;

      console.log(data + ' ' + 'new appointment data');
      this.createAppointment(appointment);
  }

  createAppointment(appointment) {
    this._scheduleService.postSchedule(appointment).subscribe(
        res => {
          console.log(res);
          this.showSpinner = true;
        },
        err => console.error(err),
        () => {console.log('succesfully accepted');
        this.showSpinner = false;
        this.Schedule.pendingSchedules.push(appointment);
        }
    );
    console.log('accepted opportunity' + JSON.stringify(appointment));
  }
  getStudents() {
    this._studentService.allstudents().subscribe(
        res => {
          this.myStudents = Object.values(res)[1];
          console.log(this.myStudents);
        },
        err => console.error(err),
        () => console.log('successfully got students')
    );
  }
    getSessionDetails() {
        this._expandPaginateTableService.setUserSessionDetails().subscribe(
            res => {
                this.session = res;
                this.userId = res['user_id'];
                this.role = res['role'];

            },
            err => console.error(err),
            () => this.setSelectType()
        );
    }
    setSelectType() {
      console.log('user role is ' + this.role);
      if (this.role === 'tutor') {
          this.selectType = 'Select student';
      } else if (this.role === 'student') {
          this.selectType = 'Select tutor';
      } else {
          this.selectType = 'Select user';
      }
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

}

export class Appointment {
    constructor(data) {
        this.requested_user = data.requested_user;
        this.start_time = this.formatDateTime(data.date + ':' + data.start_time);
        this.subject = data.subject;
    }
  requested_user: number;
  subject: number;
  start_time: string;

    formatDateTime(date: string) {
        console.log(date);
        const newdate = date.replace(/-/gi, ':');
        console.log(newdate);
        return newdate;
    }
}

