import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-intro-nine',
  templateUrl: './intro-nine.component.html',
  styleUrls: ['./intro-nine.component.scss'],
  animations:[SharedAnimations]
})
export class IntroNineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
