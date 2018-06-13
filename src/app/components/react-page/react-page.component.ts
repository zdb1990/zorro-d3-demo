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
  item: any = { cols: 6, rows: 3, y: 0, x: 0 };
  chart: any = { cols: 2, rows: 1, y: 0, x: 2 };
  // dashboard: any = [
  //   // {cols: 2, rows: 1, y: 0, x: 0}
  //   // {cols: 2, rows: 1, y: 0, x: 2}
  // ];
  svg: any;
  box: any;
  _x: any;
  _y: any;
  line: any;
  parseTime: any;
  area: any;
  content: any;
  newdata: any = [];
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
    this.svg = d3.select('svg').attr('width', 650).attr('height', 320);
    this.svg = d3.select('svg');
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = this.svg.attr('width') - margin.left - margin.right;
    const height = this.svg.attr('height') - margin.top - margin.bottom;
    this.box = this.svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')').attr('class', 'box');
    this.content = d3.select('.box');
    this.parseTime = d3.timeParse('%d-%b-%y');

    this._x = d3.scaleTime()
      .rangeRound([0, width]);

    this._y = d3.scaleLinear()
      .rangeRound([height, 0]);

    this.area = d3.area()
      .x((d) => {
        return this._x(d.date);
      })
      .y1((d) => {
         return this._y(d.close);
       });

    d3.tsv('../../../assets/svg/data.tsv', (d) => {
      d.date = this.parseTime(d.date);
      d.close = +d.close;
      this.newdata.push(d);
      return this.newdata;
    });
      // if (error) throw error;
      console.log(this.newdata);
    //   this._x.domain(d3.extent(data,  (d) => {
    //     console.log(d);
    //      return d.date;
    //   });
    //   this._y.domain([0, d3.max(data, (d) => {
    //      return d.close;
    //  })]);
    //  this.area.y0(this._y(0));

    //   this.content.append('path')
    //     .datum(data)
    //     .attr('fill', 'steelblue')
    //     .attr('d', this.area);

      // this.box.append('g')
      //   .attr('transform', 'translate(0,' + height + ')')
      //   .call(d3.axisBottom(this._x));

      // this.box.append('g')
      //   .call(d3.axisLeft(this._y))
      //   .append('text')
      //   .attr('fill', '#000')
      //   .attr('transform', 'rotate(-90)')
      //   .attr('y', 6)
      //   .attr('dy', '0.71em')
      //   .attr('text-anchor', 'end')
      //   .text('Price ($)');

    // this.svg = d3.select('.chart').attr('width', 650).attr('height', 320);
    // const margin = { left: 20, right: 30, top: 30, bottom: 20 };
    // // console.log(this.svg.attr('width'));
    // const width = this.svg.attr('width') - margin.left - margin.right;
    // const height = this.svg.attr('height') - margin.top - margin.bottom;
    // // 把日期转换成字符串
    // const parseTime = d3.timeParse('%d-%b-%y');
    // this.svg.append('g').attr('class', 'box');
    // this.box = d3.select('.box');
    // this.box.attr('transfrom', 'translate(' + margin.left + ',' + margin.top + ')');
    // // 为时间创造线性比例 值域
    // this._x = d3.scaleTime().rangeRound([0, width]);
    // // 创建y轴的线性比例
    // this._y = d3.scaleLinear().rangeRound(height, 0);
    // // 创建线性比
    // this.line = d3.line().x((d) => {
    //   return this._x(d.date);
    // }).y((d) => {
    //   return this._y(d.close);
    // });
    // d3.tsv('../../../assets/svg/data.tsv', (data) => {
    //   data.date = parseTime(data.date);
    //   data.close = +data.close;
    //   console.log(data);
    //   // 定义域x extent计算数组中的最大值和最小值
    //   this._x.domain(d3.extent(data, (d) => {
    //     console.log(d);
    //     return d.date;
    //   }));
    //   this._y.domain(d3.extent(data, (d) => {
    //     console.log(d);
    //     return d.close;
    //   }));
    //   // .call调用一次指定的function  ，axisBottom画一个朝下的轴
    //   this.box.append('g')
    //     .attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(this._x)).select('.domain')
    //     .remove();
    //   this.box.append('g')
    //     .call(d3.axisLeft(this._y))
    //     .append('text')
    //     .attr('fill', '#000')
    //     .attr('transform', 'rotate(-90)')
    //     .attr('y', 6)
    //     .attr('dy', '0.71em')
    //     .attr('text-anchor', 'end')
    //     .text('Price ($)');
    //   this.box.append('path')
    //     .datum(data)
    //     .attr('fill', 'none')
    //     .attr('stroke', 'steelblue')
    //     .attr('stroke-linejoin', 'round')
    //     .attr('stroke-linecap', 'round')
    //     .attr('stroke-width', 1.5)
    //     .attr('d', this.line);

    // })

  }
}
