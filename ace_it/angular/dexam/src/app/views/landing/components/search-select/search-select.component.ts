import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit {
  public optionsSelect: Array<any>;
  public iconsSelect: Array<any>;


  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    this.iconsSelect = [
      { value: '1', label: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
      { value: '2', label: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
      { value: '3', label: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' },
    ];
  }

}
