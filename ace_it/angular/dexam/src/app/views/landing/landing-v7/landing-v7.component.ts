import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v7',
  templateUrl: './landing-v7.component.html',
  styleUrls: ['./landing-v7.component.scss']
})
export class LandingV7Component implements OnInit {


  backgroundColor = "landing-gradient-purple-indigo"
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
