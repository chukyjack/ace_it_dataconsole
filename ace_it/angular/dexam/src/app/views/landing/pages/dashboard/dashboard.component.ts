import {Component, EventEmitter, OnInit} from '@angular/core';
import {concat, Observable, Subject} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {UploadFile, UploadInput, humanizeBytes, UploadOutput, IMyOptions} from "ng-uikit-pro-standard";
import {ScheduleServiceService} from "../schedule/schedule-service.service";
import {SortPaginateTableService} from "../../components/sort-paginate-table/sort-paginate-table.service";
import {FileUploadService} from "../../components/file-upload/file-upload.service";
import {HttpClient} from "@angular/common/http";
import {CourseServiceService} from "../coursepage/course-service.service";
import {LoginService} from "../../../sessions/signin/login.service";
import {Router} from "@angular/router";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText = new Subject();
  results: Observable<string[]>;
  public data: any = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
  ];
  fileToUpload: File = null;
  allfileToUpload: FileList = null;
  files: any[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  pendingHeadElements = ['Name', 'Subject', 'Time', 'Action'];
  pendingSchedules;
  public userId;
  public gigId;
  public myDatePickerOptions: IMyOptions = {
    // Your options
  };
  public deadline = '12:00';
  public pay = 50;
  public projectInfo = '';
  public sessionUnit;
  public NewsessionUnit = null;
  constructor(
      private _scheduleService: ScheduleServiceService,
      private _expandPaginateTableService: SortPaginateTableService,
      private uploadservice: FileUploadService,
      private http: HttpClient,
      private _courseService: CourseServiceService,
      private loginService: LoginService,
      private router: Router,
      private profileService: ProfileService
  ) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.getSessionDetails();
    this.getAllCourses();
    this.results = this.searchText.pipe(
        startWith(''),
        map((value: string) => this.filter(value))
    );
    this.getSchedules();

  }
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i ++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }
    }
    return files;
  }

  startUpload(): void {
    console.log(this.pay);
    console.log(this.deadline);
    console.log(this.projectInfo);
    const file1 = this.files[0];
    const file2 = this.files[1];
    const formData = new FormData();
    const gigData = {
      'owner_id': this.userId,
      'pay': this.pay.toString(),
      'description': this.projectInfo,
      'deadline': this.deadline
    };

    this.uploadservice.postGig(gigData).subscribe(
        res => {
          console.log(Object.values(res));
          this.gigId = res['id'];
        },
        err => console.error(err),
        () => this.uploadFiles(this.gigId, this.files)
    );

  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
  }

  getSchedules() {
    this._scheduleService.getPendingSchedule().subscribe(
        res => {
          console.log(res);
          this.pendingSchedules = Object.values(res)[1];
        },
        err => console.error(err),
    );
  }
  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          this.userId = res['id'];
          this.sessionUnit = res['session_unit'];
          console.log('this is th session');
          console.log('this is th session');

        },
        err => console.error(err),
        () => console.log('successful')
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.allfileToUpload = files;
  }

  uploadFiles(gig_id, files) {
    const requests = [];
    for (let i = 0; i < files.length; i++) {
      const event: UploadInput = {
        type: 'uploadFile',
        url: 'api/v1/gig/upload_file/',
        method: 'POST',
        data: {gig_id: gig_id},
        file: files[i],
      };
      console.log('files');
      console.log(files);
      console.log('files');
      requests.push(this.uploadInput.emit(event));
    }
    concat(...requests);
  }
  getAllCourses() {
    this._courseService.listAllCourses().subscribe(
        res => {
          this.data = res;
        },
        err => console.log(err),
        () => console.log('success!')
    );
  }

  addUnit(amount) {
    const data = {
      'requested_session_unit': amount
    };
    console.log('added time');
    this.profileService.addSessionUnit(data).subscribe(
        res => {
          console.log(res);
          this.NewsessionUnit = res['new_session_unit'];
        },
        err => console.error(err),
        () => this.sessionUnit = this.updateUnitAfterRequest(this.NewsessionUnit)
    );
  }
  updateUnitAfterRequest(newSessionUnit) {
    return (newSessionUnit ? newSessionUnit : this.sessionUnit);
  }
  logOut() {
    this.loginService.logout();
    console.log('log user out');
    this.router.navigate(['/sessions/signin']);
  }

}

