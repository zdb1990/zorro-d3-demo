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
  chart: any = { cols: 6, rows: 5, y: 0, x: 6 };
  map: any = { cols: 6, rows: 4, y: 0, x: 6 };
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
  bar: any;
  Arc: any;
  angle: any;
  data: any;
  color: any;
  line: any;
  linebar: any;
  line_y: any;
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
    this.creatRect();
    this.CreateArc();
    this.CreateLine();
  }
  // 创建柱状图
  creatRect() {
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

  }
  // 创建饼状图
  CreateArc() {
    const width = 500;
    const height = 400;
    this.data = [
      { education: '大专及以上', population: 11964 },
      { education: '高中及中专', population: 18799 },
      { education: '初中', population: 51966 },
      { education: '小学', population: 35876 },
      { education: '文盲人口', population: 5466 }
    ];
    this.circle = d3.select('.cricle').append('svg').attr('width', width).attr('height', height);
    this.bar = this.circle.append('g').attr('transform', 'translate(250,200)');
    // 内部的半径 和外部的半径是不同的  //起始的角度和结束的角度不能写死；
    this.Arc = d3.arc().innerRadius(50).outerRadius(150);

    // d3.layout.pie()计算出起始弧度和结束弧度 使用value传进数据生成对应的弧度
    this.angle = d3.pie().value((d, i) => {
      return d.population;
    });
    // 添加颜色schemeCategory10();
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    //  通过this.angle方法将数据传入进去计算出弧度添加path设定添加孤行
    this.bar.selectAll('path').data(this.angle(this.data)).enter().append('path').attr('d', this.Arc).style('fill', (d, i) => {
      return this.color(i);
    });
    console.log(this.angle(this.data));
    // 添加文字
    this.bar.selectAll('text').data(this.angle(this.data)).enter().append('text').text((d) => {
      console.log(d);
      return d.data.education;
      // 使用src.centroid(d.value)来找到每个弧度的中心
    }).attr('transform', (d) => {
      return 'translate(' + this.Arc.centroid(d) + ')';
    }).attr('text-anchor', 'middle');

    // console.log(this.color(1));
  }
  // 创建曲线图
  CreateLine() {
    const width = 600;
    const height = 400;
    const margin = { left: 50, top: 30, right: 20, bottom: 10 };
    const W = width - margin.left - margin.right;
    const H = height - margin.top - margin.bottom;
    this.line = d3.select('.line').append('svg').attr('width', width).attr('height', height);
    this.linebar = this.line.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  }

}


