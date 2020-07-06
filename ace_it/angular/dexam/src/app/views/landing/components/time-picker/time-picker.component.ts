import { Component, OnInit } from '@angular/core';
import { InteractionMode } from 'igniteui-angular';

@Component({
  selector: 'app-time-picker',
  styleUrls: ['./time-picker.component.scss'],
  templateUrl: './time-picker.component.html'
})
export class TimePickerComponent implements OnInit {
  public mode: InteractionMode = InteractionMode.DropDown;
  public format: string = 'hh:mm tt';
  public date: Date = new Date(2018, 10, 27, 17, 45, 0, 0);

  constructor() { }
  ngOnInit() {
  }

}
