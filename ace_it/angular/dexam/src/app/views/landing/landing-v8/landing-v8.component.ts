import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v8',
  templateUrl: './landing-v8.component.html',
  styleUrls: ['./landing-v8.component.scss']
})
export class LandingV8Component implements OnInit {


  backgroundColor = "landing-gradient-quepal"
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
