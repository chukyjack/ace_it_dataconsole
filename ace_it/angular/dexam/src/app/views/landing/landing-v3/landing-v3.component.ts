import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v3',
  templateUrl: './landing-v3.component.html',
  styleUrls: ['./landing-v3.component.scss']
})
export class LandingV3Component implements OnInit {


  backgroundColor = "landing-gradient-meridian"
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
