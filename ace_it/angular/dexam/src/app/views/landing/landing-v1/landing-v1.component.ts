import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-v1',
  templateUrl: './landing-v1.component.html',
  styleUrls: ['./landing-v1.component.scss']
})
export class LandingV1Component implements OnInit {

  backgroundColor ="landing-gradient-blue-red"
  showCustomizer=false;
  constructor() { }

  ngOnInit() {
  }

  changeBg(colorName){
    this.backgroundColor="landing-"+colorName;
  }
  toggleCustomizer(){
    this.showCustomizer = !this.showCustomizer;

  }

}
