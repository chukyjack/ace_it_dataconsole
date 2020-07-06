import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v9',
  templateUrl: './landing-v9.component.html',
  styleUrls: ['./landing-v9.component.scss']
})
export class LandingV9Component implements OnInit {


  backgroundColor = "landing-blue"
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
