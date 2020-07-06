import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SortPaginateTableService} from '../../components/sort-paginate-table/sort-paginate-table.service';
import {IMyOptions, MdbTableDirective, MdbTablePaginationComponent, ToastService} from "ng-uikit-pro-standard";
import {FormBuilder} from "@angular/forms";
import {AlertService} from "../../../helpers/alert.service";
// import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit, AfterViewInit {
    // @ts-ignore
    @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
    // @ts-ignore
    @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
    // @ts-ignore
    @ViewChild('row', { static: true }) row: ElementRef;

    maxVisibleItems: number = 20;
    public elements: any = new Array(this.maxVisibleItems * 5);
    headElements = ['Subject', 'Start date', 'Distance', 'Action'];

    searchText: string = '';
    previous: string;
    public schedules;
    checker;


    public opportunities;
    public session;
    public userId;
    public requestForm;
    public availabilityForm;
    public myDatePickerOptions: IMyOptions = {
        // Your options
    };
    editField: string;
    availabilityList: Array<any> = [];

    awaitingPersonList: Array<any> = [
        { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
        { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
        { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
        { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
        { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
    ];
    optionsDays: Array<any> = [
        { label: 'Sunday', value: 'Sunday'},
        { label: 'Monday', value: 'Monday'},
        { label: 'Tuesday', value: 'Tuesday'},
        { label: 'Wednesday', value: 'Wednesday'},
        { label: 'Thursday', value: 'Thursday'},
        { label: 'Friday', value: 'Friday'},
        { label: 'Saturday', value: 'Saturday'},
    ];
    optionsTimes: Array<any> = this.getTimes();

    constructor(
        private _expandPaginateTableService: SortPaginateTableService,
        private cdRef: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        private alertService: ToastService
    ) {
        this.requestForm = this.formBuilder.group({
            requested_user: '',
            start_time: '12:00',
            date: ''
        });
        this.availabilityForm = this.formBuilder.group({
            day: 'Sunday',
            start_time: '12:00AM',
            end_time: '11:30PM'
        });
    }

    ngOnInit() {
    this.getOpportunities();
    this.getSessionDetails();

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
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

    getOpportunities() {
    this._expandPaginateTableService.list().subscribe(
        res => {
          // console.log(Object.values(res));
          // console.log('    ');
          // console.log(JSON.stringify(res));
          this.opportunities = Object.values(res)[1];
          this.elements = this.opportunities;
            console.log('oppeotunities i got now');
          console.log(this.elements);
          console.log('oppeotunities i got now');
        },
        err => console.error(err),
        () => console.log('successful')
    );
    }
    acceptOpportunity(opportunity) {
    opportunity.tutor = this.userId;
    const data = {
        'tutor' : opportunity.tutor,
        'session' : opportunity.id,
        'preferred_availability' : this.availabilityList
    };
    // opportunity.interested_tutors.push(this.userId);
    console.log('this is the user id');
    console.log(this.userId);
    console.log('this is the user id');
    this._expandPaginateTableService.acceptOpportunity(data).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err),
        () => this.processSuccessful(opportunity.id)
    );
    }
    processSuccessful(id) {
        // tslint:disable-next-line:max-line-length
        const options = {positionClass: 'md-toast-bottom-right', progressBar: true };
        this.alertService.success('Request successfully sent.', 'Success!', options);
        this.removeAcceptedOpportunity(id);
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
    updateList(id: number, property: string, event: any) {
        this.availabilityList[id][property] = event.target.textContent;
    }

    remove(id: any) {
        // this.awaitingPersonList.push(this.availabilityList[id]);
        this.availabilityList.splice(id, 1);
    }

    add(data) {
        // if (this.awaitingPersonList.length > 0) {
        //     const person = this.awaitingPersonList[0];
        //     this.availabilityList.push(person);
        //     // this.awaitingPersonList.splice(0, 1);
        // }
        this.availabilityList.push(data);
    }

    changeValue(id: number, property: string, event: any) {
        this.editField = event.target.textContent;
    }
    getTimes() {
        const x = 30; // minutes interval
        const times = []; // time array
        let tt = 0; // start time
        const ap = ['AM', 'PM']; // AM-PM
        for (let i = 0; tt < 24 * 60; i++) {
            const hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
            let newHour = ( '0' + (hh % 12)).slice(-2);
            if (newHour === '00') {
                newHour = '12';
            }
            const mm = (tt % 60); // getting minutes of the hour in 0-55 format
            times[i] = {
                label : newHour + ':' + ( '0' + mm).slice(-2) + ap[Math.floor(hh / 12)],
                value : newHour + ':' + ( '0' + mm).slice(-2) + ap[Math.floor(hh / 12)]
            };
            tt = tt + x;
        }
        return times;
    }
    removeAcceptedOpportunity(id) {
        this.elements  = this.elements.filter(this.filterOutId(id));
    }
    filterOutId(id) {
        return function(opportunity) {
            return opportunity.id !== id;
        };
    }
}
