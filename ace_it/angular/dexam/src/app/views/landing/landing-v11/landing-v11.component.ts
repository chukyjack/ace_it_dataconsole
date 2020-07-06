import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v11',
  templateUrl: './landing-v11.component.html',
  styleUrls: ['./landing-v11.component.scss']
})
export class LandingV11Component implements OnInit {


  backgroundColor = "landing-gradient-steel-gray"
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
