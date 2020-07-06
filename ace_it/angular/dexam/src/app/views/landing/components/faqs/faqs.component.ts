import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from "src/app/shared/animations/shared-animations";
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  animations: [SharedAnimations]
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
