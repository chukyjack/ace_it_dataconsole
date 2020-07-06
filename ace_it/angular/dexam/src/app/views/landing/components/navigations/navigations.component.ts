import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../sessions/signin/login.service";

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent implements OnInit {
  public user;

  constructor(private _loginService : LoginService) {
    this.user = this._loginService.currentUserValue;
  }

  ngOnInit() {
  }

}
