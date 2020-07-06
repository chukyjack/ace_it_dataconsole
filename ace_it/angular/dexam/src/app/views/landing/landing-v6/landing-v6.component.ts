import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v6',
  templateUrl: './landing-v6.component.html',
  styleUrls: ['./landing-v6.component.scss']
})
export class LandingV6Component implements OnInit {


  backgroundColor = "landing-teal"
  showCustomizer = false;
  constructor() { }

  ngOnInit() {
  }

  changeBg(colorName) {
    this.backgroundColor = "landing-" + colorName;
  }
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;

  }

}
