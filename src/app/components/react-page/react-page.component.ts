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
  item: any = { cols: 6, rows: 5, y: 0, x: 0 };
  chart: any = { cols: 2, rows: 1, y: 0, x: 2 };
  svg: any;
  g: any;
  X: any;
  Y: any;
  area: any;
  // dashboard: any = [
  //   // {cols: 2, rows: 1, y: 0, x: 0}
  //   // {cols: 2, rows: 1, y: 0, x: 2}
  // ];
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

    // d3.tsv('./../../../assets/svg/data.tsv', (d) => {
    //   // console.log(d)
    //   d.date = parseTime(d.date);
    //   d.close = +d.close;
    //   // console.log(d.date, d.close);
    //   return d;
    // }, (error, data) => {
    //   // d3.extent - 计算数组中的最小值和最大值。
    //   this._x.domain(d3.extent(data, (d) => {
    //     console.log(d.date);
    //     return d.date;
    //   }));
    //   this._y.domain([0, d3.max(data), (d) => {
    //     return d.close;
    //   }]);
    //   this.area.y0(this._y(0));
    //   // datum - 获取或设置元素数据（不加入）
    //   this.g.append('path').datum(data).attr('fill', 'steelblue').attr('d', this.area);
    //   this.g.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(this._x);
    //   this.g.append('g')
    //     .call(d3.axisLeft(this._y))
    //     .append('text')
    //     .attr('fill', '#000')
    //     .attr('transform', 'rotate(-90)')
    //     .attr('y', 6)
    //     .attr('dy', '0.71em')
    //     .attr('text-anchor', 'end')
    //     .text('Price ($)');
    // });
  }
}

