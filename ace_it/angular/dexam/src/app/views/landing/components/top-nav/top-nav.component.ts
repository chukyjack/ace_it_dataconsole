import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../sessions/signin/login.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  logOut() {
    this.loginService.logout();
  }

}
