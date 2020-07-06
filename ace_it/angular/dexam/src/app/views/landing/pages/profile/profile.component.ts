import { Component, OnInit } from '@angular/core';
import {SortPaginateTableService} from "../../components/sort-paginate-table/sort-paginate-table.service";
import {FormBuilder} from "@angular/forms";
import {Appointment} from "../../components/schedule-form/schedule-form.component";
import {ProfileService} from "./profile.service";
import {CourseServiceService} from "../coursepage/course-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public session;
  public profileDetails;
  public profileForm;
  public registerCourseForm;
  public disableInput = true;
  public buttonLabel = 'Edit Profile';
  public courses;
  public unregisteredCourses;
  public newCoursesToregister = [];

  constructor(
      private _expandPaginateTableService: SortPaginateTableService,
      private formBuilder: FormBuilder,
      private profileService: ProfileService,
      private _courseService: CourseServiceService
  ) {

  }

  ngOnInit() {
    this.getSessionDetails();
    this.courses = this.getCourses();
    this.getUnregisteredCourses();
    this.profileForm = this.formBuilder.group({
      username: this.session.username,
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
      aboutMe: '',
    });
    this.registerCourseForm = this.formBuilder.group({
          course: 'Enter course',
      });

  }

  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          console.log(typeof(res));
          // this.profileDetails = JSON.parse(JSON.stringify(res));
          this.profileDetails = Object.assign({}, res);
          this.session = res;
          // this.userId = res['user_id'];
          console.log('this is th session');
          console.log('this is th session');
          console.log(this.session);

        },
        err => console.error(err),
        () => console.log('successful')
    );
  }

  save() {
      this.profileService.updateProfile(this.session).subscribe(
        res => {
            console.log(Object.values(res));
            console.log('    ');
            console.log(JSON.stringify(res));
            console.log(typeof(res));
            // this.profileDetails = JSON.parse(JSON.stringify(res));
            this.profileDetails = Object.assign({}, res);
            this.session = res;
            // this.userId = res['user_id'];
            console.log('this is th session');
            console.log('this is th session');
            console.log(this.session);
            return res;

        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
  onSubmit() {
    // const appointment = new Appointment(data);
    // this.submitted = true;
    // console.log(JSON.stringify(data));
    // console.log(data + ' ' + 'new appointment data');
    // this.createAppointment(appointment);
    console.log(this.session);
  }
  editForm() {
      this.disableInput = this.disableInput !== true;
      console.log(this.disableInput);
      if (! this.disableInput) {
          this.buttonLabel = 'Cancel';
      } else { this.buttonLabel = 'Edit Profile'; }
  }
  getCourses() {
      this._courseService.listMyCourses().subscribe(
          res => {

              this.courses = res;
              // this.userId = res['user_id'];
              console.log('this is th session');
              console.log('this is th session');
              console.log(this.courses);

          },
          err => console.error(err),
          () => console.log('successful')
      );
  }
getUnregisteredCourses() {
    this._courseService.listUnregisteredCourses().subscribe(
        res => {

            this.unregisteredCourses = res;
            // this.userId = res['user_id'];
            console.log('this is th session');
            console.log('this is th session');
            console.log(this.courses);

        },
        err => console.error(err),
        () => console.log('successful')
    );
}
    registerCourse() {
        // const appointment = new Appointment(data);
        // this.submitted = true;
        // console.log(JSON.stringify(data));
        // console.log(data + ' ' + 'new appointment data');
        // this.createAppointment(appointment);
        // console.log(data);
        console.log(this.unregisteredCourses);
        const data = {'new_courses': this.newCoursesToregister};
        this._courseService.RegisterNewCourses(data).subscribe(
            res => {

                console.log('this is th session');
                console.log('this is th session');
                console.log(data);

            },
            err => console.error(err),
            () => console.log('successful')
        );
    }
    addCourse(data) {
      this.newCoursesToregister.push(data.value);
      console.log(this.newCoursesToregister);
    }
    removeCourse(data) {
      const index = this.newCoursesToregister.indexOf(data.value);
      if (index !== -1) {
          this.newCoursesToregister.splice(index, 1);
      }
      console.log(this.newCoursesToregister);
    }
}
