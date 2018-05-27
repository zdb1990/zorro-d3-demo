import { Router } from '@angular/router';
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
  Dom: any;
  Doc: any;
  viewScreen: Boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {

  }
  // 点击切换语言
  selectChange(obj) {
    this.selectedValue = obj;
  }
  // 点击切换全屏
  screenAll() {
    this.viewScreen = !this.viewScreen;
    console.log(this.viewScreen);
    if (this.viewScreen) {
      this.Dom = document.documentElement;
      if (this.Dom.requestFullscreen) {
        this.Dom.requestFullscreen();
      } else if (this.Dom.msRequestFullscreen) {
        this.Dom = document.body; // overwrite the element (for IE)
        this.Dom.msRequestFullscreen();
      } else if (this.Dom.mozRequestFullScreen) {
        this.Dom.mozRequestFullScreen();
      } else if (this.Dom.webkitRequestFullScreen) {
        this.Dom.webkitRequestFullScreen();
      }
    } else {
      this.Doc = document;
      if (this.Doc.exitFullscreen) {
        this.Doc.exitFullscreen();
      } else if (this.Doc.msExitFullscreen) {
        this.Doc.msExitFullscreen();
      } else if (this.Doc.mozCancelFullScreen) {
        this.Doc.mozCancelFullScreen();
      } else if (this.Doc.webkitCancelFullScreen) {
        this.Doc.webkitCancelFullScreen();
      }
    }
  }
  // 退出登录
  signOut() {
    this.route.navigate([`/login`]);
  }
}
