import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v4',
  templateUrl: './landing-v4.component.html',
  styleUrls: ['./landing-v4.component.scss']
})
export class LandingV4Component implements OnInit {


  backgroundColor = "landing-indigo"
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
