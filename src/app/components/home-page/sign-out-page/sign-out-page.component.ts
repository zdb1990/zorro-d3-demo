import { Component, OnInit, AfterViewInit } from '@angular/core';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnInit, AfterViewInit {
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
  ele: any;
  svg: any;
  g: any;
  line_gennerator: any;
  line: any;
  viewData: any = [
    2.4, 0.3, 4.5, 3, 6.5, 7.4, 0.1
  ];
  // distance: any = {
  //   'magrin-left': 20,
  //   'magrin-right': 20,
  //   'magrin-top': 20,
  //   'magrin-bottom': 20
  // };
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const Width = 890;
    const Height = 356;
    const Left = 50;
    const Top = 30;
    const Right = 30;
    const Bottom = 20;
    this.ele = d3.select('.view-body').append('svg');
    this.svg = d3.select('svg');
    this.svg.attr('width', Width).attr('height', Height);
    this.svg.append('g').attr('class', 'line');
    this.g = d3.select('.line');
    this.g.attr('width', Width - Left - Right);
    this.g.attr('Height', Height - Bottom - Top);
    this.g.attr('transfrom', 'translate(' + Left + ',' + Top + ')');
    const _X = d3.scaleLinear().domain([0, this.viewData.length - 1]).range([0, Width - Left - Right]);
    const _Y = d3.scaleLinear().domain([0, d3.max(this.viewData)]).range([0, Height - Top - Bottom]);
    this.line_gennerator = d3.line().x((d, i) => {
      return i;
    }).y((d) => {
      return d;
    });
    // console.log(this.line_gennerator(this.viewData));
    this.g.append('path');
    d3.select('path').attr('class', 'path-line').attr('d', this.line_gennerator(this.viewData));
    this.line = this.g.append('g');
    // // console.log(this.svg)
  }

}
