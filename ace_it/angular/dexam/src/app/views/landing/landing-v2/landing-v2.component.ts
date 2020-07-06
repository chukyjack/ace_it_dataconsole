import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-landing-v2",
  templateUrl: "./landing-v2.component.html",
  styleUrls: ["./landing-v2.component.scss"]
})
export class LandingV2Component implements OnInit {
  backgroundColor = "landing-gradient-lawrencium";
  showCustomizer = false;
  constructor() {}

  ngOnInit() {}

  changeBg(colorName) {
    this.backgroundColor = "landing-" + colorName;
  }
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;
  }
}
