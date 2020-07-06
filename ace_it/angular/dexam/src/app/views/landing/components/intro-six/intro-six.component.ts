import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-six',
  templateUrl: './intro-six.component.html',
  styleUrls: ['./intro-six.component.scss'],
  animations:[SharedAnimations]
})
export class IntroSixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
