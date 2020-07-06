import { Component, OnInit } from '@angular/core';
import {SortPaginateTableService} from "../../components/sort-paginate-table/sort-paginate-table.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-userprofilepage',
  templateUrl: './userprofilepage.component.html',
  styleUrls: ['./userprofilepage.component.scss']
})
export class UserprofilepageComponent implements OnInit {
  public session;
  public profileForm;

  constructor(private _expandPaginateTableService: SortPaginateTableService, private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
      aboutMe: '',
    });
  }

  ngOnInit() {

  }

  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
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

}
