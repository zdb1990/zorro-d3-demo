import { Component, OnInit, AfterViewInit } from '@angular/core';
// angular-gridster2
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-react-page',
  templateUrl: './react-page.component.html',
  styleUrls: ['./react-page.component.scss']
})
export class ReactPageComponent implements OnInit, AfterViewInit {
  options: any;
  item: any = { cols: 6, rows: 4, y: 0, x: 0 };
  chart: any = { cols: 6, rows: 4, y: 0, x: 6 };
  // dashboard: any = [
  //   // {cols: 2, rows: 1, y: 0, x: 0}
  //   // {cols: 2, rows: 1, y: 0, x: 2}
  // ];
  Earr: any = [
    'A', 'B', 'C', 'D', 'E'
  ];
  svg: any;
  box: any;
  react: any;
  g: any;
  arr: any = [
    1.2, 3, 4.5, 3.1, 5.6
  ];
  _y: any;
  axis_X: any;
  _x: any;
  axis_Y: any;
  _y1: any;
  circle: any;
  constructor() { }

  ngOnInit() {
    // 可拖拽放大缩小 angular-gridster2
    this.options = {
      gridType: 'fixed',
      compactType: 'none',
      margin: 10,
      fixedColWidth: 100,
      fixedRowHeight: 100,
      draggable: {
        /*是否可拖拽*/
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      resizable: { /*是否可以缩放*/
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      swap: false,
      pushItems: true,
      displayGrid: 'none'
    };
  }
  ngAfterViewInit() {
    // 获取宽

    const margin = { left: 30, right: 20, top: 20, bottom: 30 };
    const Width = 650;
    const Height = 320;
    const W = Width - margin.left - margin.right;
    const H = Height - margin.top - margin.bottom;
    const BarWidth = W / this.arr.length;
    this.svg = d3.select('.chart').attr('width', Width + margin.left + margin.right).attr('height', Height + margin.top + margin.bottom);
    // 添加一个容器
    this.box = this.svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    // 添加y轴的线性比例生成
    this._y = d3.scaleLinear().domain([0, d3.max(this.arr)]).range([Height, 0]);

    this._y1 = d3.scaleLinear().domain([0, this.arr.length]).range([Height, 0]);
    // 计算出x轴生成的坐标比例
    this._x = d3.scaleBand()
      .domain(this.Earr)
      .range([0, W]);
    // 创建y轴生成
    // this.axis_Y=d3.scaleLiner()
    // 创建一个朝下的轴
    this.axis_X = d3.axisBottom().scale(this._x);
    this.axis_Y = d3.axisLeft().scale(this._y1);
    // 生成矩形
    this.g = this.box.selectAll('g').data(this.arr).enter().append('g');
    // 矩形的宽是固定的偏移量也是固定的
    this.g.attr('transform', (d, i) => {
      return 'translate(' + i * BarWidth + ',' + 0 + ')';
    });
    this.g.append('rect').attr('width', BarWidth - 2).attr('y', (d) => {
      return this._y(d);
    }).attr('height', (d) => {
      return (Height) - this._y(d);
    }).attr('fill', 'red');
    this.g.append('text').text((d) => {
      return d;
    }).attr('x', (BarWidth - 2) / 2).attr('text-anchor', 'middle').attr('y', (d) => {
      return this._y(d);
    }).attr('dy', '1rem');
    // console.log(this.axis);
    this.box.append('g').call(this.axis_X).attr('transform', 'translate(' + 0 + ',' + Height + ')');
    this.box.append('g').call(this.axis_Y);









    // 添加圆
    this.circle = d3.select('.cricle').attr('width', Width).attr('height', Height);
    this.circle.append('circle').attr('r', 150).attr('cx', Width / 2).attr('cy', Height / 2);
  }
}


