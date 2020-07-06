import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-four',
  templateUrl: './intro-four.component.html',
  styleUrls: ['./intro-four.component.scss'],
  animations:[SharedAnimations]
})
export class IntroFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
