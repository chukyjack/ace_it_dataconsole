import { SharedAnimations } from './../../../../shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-five',
  templateUrl: './intro-five.component.html',
  styleUrls: ['./intro-five.component.scss'],
  animations:[SharedAnimations]
})
export class IntroFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
