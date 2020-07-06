import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.scss']
})
export class ContactBoxComponent implements OnInit {
  public name;
  public phone;
  public email;
  public zipcode;
  public step4 = false;
  public step5 = false;
  public showStep1 = true;
  public showStep2 = false;
  constructor() { }

  ngOnInit() {
  }
  next() {
    if (this.name && this.phone) {
      this.showStep2 = true;
      this.showStep1 = false;
    }
  }
  step3(val) {
    if (val == 1) {
      this.step4 = false;
      this.step5 = true;
    } else {
      this.step4 = true;
      this.step5 = false;
    }
  };
}

class name {
  first: string;
  middle: string;
  last: string;
}
