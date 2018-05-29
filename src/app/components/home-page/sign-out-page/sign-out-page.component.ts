import { Component, OnInit, AfterViewInit } from '@angular/core';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnInit, AfterViewInit {
  loading: Boolean = false;

  viewData: any = [
    1.2, 2.3, 0.9, 1.5, 5.3, 3.2, 4.5, 0
  ];
  viewColor: any = [
    'red',
    'green',
    'yellow',
    'blue',
    'black'
  ];
  ele: any;
  linear: any;
  ordinal: any;
  axis: any;
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
  ngAfterViewInit() {
    // 数组值与DOM元素值不相匹配时
    //   let rectHeight = 25;
    //   this.ele = d3.select('.view-body').select('svg').selectAll('rect');
    //   this.ele.data(this.viewData).enter().append('rect').attr('x', 20).attr('y', ((d, i) => {
    //     console.log(d, i);
    //     return i * rectHeight;

    //   })).attr('width', ((d) => {
    //     console.log(d);
    //     return d;
    //   })).attr('height', rectHeight - 2).attr('fill', 'steelblue');
    //   console.log(this.ele);

    // 线性比例尺
    const rectHeight = 25;
    const max = d3.max(this.viewData);
    const min = d3.min(this.viewData);
    this.linear = d3.scaleLinear().domain([min, max]).range([0, 800]);
    // console.log(d3);
    this.ordinal = d3.scaleOrdinal().domain(this.viewData).range(this.viewColor);
    // this.ele = d3.select('.view-body').select('svg');
    this.axis = d3.axisLeft(this.linear);
    console.log(this.axis);
    this.ele = d3.select('.view-body').select('svg');
    this.ele.selectAll('g').data(this.viewData).enter().append('g').attr('class', 'line-text').call(this.axis);
    console.log(this.ele.selectAll('g'));
    // this.axis = d3.axisLeft(this.linear);
    // this.ele = d3.select('.view-body').select('svg').call(this.axis);
    // this.axis = d3.axisBottom(this.viewData);
    // this.ele.append('g');
    // this.ele.selectAll('rect').data(this.viewData).enter().append('rect').attr('y', ((d, i) => {
    //   return i * rectHeight;
    // })).attr('width', ((d) => {
    //   return this.linear(d);
    // })).attr('height', rectHeight - 2).attr('fill', ((d, i) => {
    //   return this.ordinal(i);
    // }));
  }

}
