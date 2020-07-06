import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SortPaginateTableService} from "../../components/sort-paginate-table/sort-paginate-table.service";
import {IMyOptions, MdbTableDirective, MdbTablePaginationComponent, ToastService} from "ng-uikit-pro-standard";
import {FormBuilder} from "@angular/forms";
import {Appointment} from "../../components/schedule-form/schedule-form.component";
import {StudentListService} from "../../components/student-list/student-list.service";
import {ScheduleServiceService} from "../schedule/schedule-service.service";
import {BillingService} from "./billing.service";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  public opportunities;
  public session;
  public userId;
    // @ts-ignore
    @ViewChild(MdbTableDirective, { static : true }) mdbTable: MdbTableDirective;
    // @ts-ignore
    @ViewChild(MdbTableDirective, { static : true }) mdbTable2: MdbTableDirective;
    // @ts-ignore
    @ViewChild(MdbTablePaginationComponent, { static : true }) mdbTablePagination: MdbTablePaginationComponent;
    // @ts-ignore
    @ViewChild('row', { static : true }) row: ElementRef;

    maxVisibleItems: number = 8;
    public bills: any = new Array(this.maxVisibleItems * 5);
    headElements = ['Details', 'Date', 'Status'];
    public optionsStudents;
    public optionsTutors;
    public optionsSessions: Array<any>;

    public billForm;
    public selectType = 'Select student';
    optionsSelect: Array<any>;

  constructor(
      private _expandPaginateTableService: SortPaginateTableService,
      private formBuilder: FormBuilder,
      private _studentService: StudentListService,
      private _scheduleService: ScheduleServiceService,
      private _billingService: BillingService,
      private alertService: ToastService
  ) {
      this.billForm = this.formBuilder.group({
          students: '',
          amount: '',
          extra_info: '',
          session: '',

      });
  }

  ngOnInit() {
    this.optionsStudents = this.getAssociatedUsers();
    this.getOpportunities();
    this.getOpportunities();
    this.getBillingHistory();
    this.getSessionDetails();
    this.getAssociatedUsers();
    // this.optionsStudents = [
    //     { value: '1', label: 'Option 1'},
    //     { value: '2', label: 'Option 2'},
    //     { value: '3', label: 'Option 3'},
    // ];
    this.optionsTutors = [
        { value: '1', label: 'Option 1'},
        { value: '2', label: 'Option 2'},
        { value: '3', label: 'Option 3'},
    ];
      this.optionsSelect = [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
      ];
  }

  getOpportunities() {
    this._expandPaginateTableService.list().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          this.opportunities = Array.from(Object.values(res)[1]);
        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
  acceptOpportunity(opportunity) {
    opportunity.tutor = this.userId;
    console.log('this is the user id');
    console.log(this.userId);
    console.log('this is the user id');
    this._expandPaginateTableService.acceptOpportunity(opportunity).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err),
        () => console.log('succesfully accepted')
    );
    console.log('accepted opportunity' + JSON.stringify(opportunity));
  }
  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          this.session = res;
          this.userId = res['user_id'];
          console.log('this is th session');
          console.log('this is th session');
          console.log(this.session);

        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
  getAssociatedSession(student) {
      this._scheduleService.getUnbilledSchedule(student).subscribe(
          res => {
              this.optionsSessions = res;
              console.log(res);
          },
          err => console.error(err),
          () => console.log('successfully got associated sessions')
      );
    }
    sendInvoice(data) {
        const options = {positionClass: 'md-toast-bottom-right', progressBar: true };
        this._billingService.postBill(data).subscribe(
            res => {
                // this.bills = Object.values(res)[1];
                console.log(res);
            },
            err => {console.error(err);
                this.alertService.error('Invoice already sent', 'Error!', options); },
            () => {console.log('successfully created invoice');
            this.alertService.success('Request successfully sent.', 'Success!', options); }
        );
    }
  getAssociatedUsers() {
        this._studentService.getAssociatedUsers().subscribe(
            res => {
                this.optionsStudents = res;
                console.log(res);
            },
            err => console.error(err),
            () => console.log('successfully got associated users')
        );
    }
    getBillingHistory() {
        this._billingService.getBilledSchedule().subscribe(
            res => {
                this.bills = Object.values(res)[1];
                console.log(res);
            },
            err => console.error(err),
            () => console.log('successfully got bills')
        );
    }
}
