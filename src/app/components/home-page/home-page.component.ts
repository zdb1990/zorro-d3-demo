import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  items: any = [
    { icon: 'zhongwen', name: 'China' },
    { icon: 'yingwen', name: 'English' },
  ];
  selectedValue: any = {};
  constructor() { }

  ngOnInit() {

  }
  selectChange(obj) {
    this.selectedValue = obj;
  }
}
