import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v10',
  templateUrl: './landing-v10.component.html',
  styleUrls: ['./landing-v10.component.scss']
})
export class LandingV10Component implements OnInit {


  backgroundColor = "landing-gradient-lawrencium"
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
