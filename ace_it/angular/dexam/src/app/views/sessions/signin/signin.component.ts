import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import {Router} from '@angular/router';
import {LoginService} from "./login.service";
import {SessionTokenService} from "./session-token.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
  public username;
  public password;
  public currentUser;

  constructor(private loginService: LoginService, private sessionToken: SessionTokenService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin() {
    this.loginService.login(
        this.username,
        this.password
    );
    this.currentUser = this.loginService.currentUserValue;
    console.log('outside is true');
    console.log(this.loginService.currentUserValue);
    // if (this.currentUser.token) {
    //     console.log('this is true');
    //     console.log(this.loginService.currentUser);
    //   this.sessionToken.setToken(this.currentUser.token);
    //   if (this.currentUser.role === 'tutor') {
    //       this.router.navigateByUrl('/landing/opportunities');
    //   } else if (this.currentUser.role === 'student') {
    //       this.router.navigateByUrl('/landing/schedule');
    //   } else {
    //       this.router.navigateByUrl('/landing/v9');
    //   }
    // }
  }
}
