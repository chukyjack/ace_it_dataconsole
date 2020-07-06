import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-three',
  templateUrl: './intro-three.component.html',
  styleUrls: ['./intro-three.component.scss'],
  animations:[SharedAnimations]
})
export class IntroThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
