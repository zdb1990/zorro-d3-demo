import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnInit {
  loading: Boolean = false;
  data = [
    { name: '名称', value: 'SERVER63' },
    { name: '描述', value: '服务器' },
    { name: '虚拟化技术', value: 'QEMU' },
    { name: 'CPU核数', value: '4' },
    { name: '内存容量', value: '1024MB' },
    { name: '状态', value: 'Active' },
    { name: '最后检查时间', value: '2018-05-13 19:27:32' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
