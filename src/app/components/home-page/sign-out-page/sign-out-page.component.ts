import { Component, OnInit, AfterViewInit } from '@angular/core';


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
  viewData: any = [
    2.4, 0.3, 4.5, 3, 6.5, 7.4, 0.8
  ];
  yearData: any = [
    30, 402, 130, 21, 3, 32
  ];
  ele: any;
  gDom: any;
  _X: any;
  Chart: any;
  Chartg: any;
  ChartH: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataView();
    this.StatisticsView();
  }
  dataView() {
    const Width = 950;
    const barHeight = 25;
    this._X = d3.scaleLinear().domain([0, d3.max(this.viewData)]).range([0, Width]);
    this.ele = d3.select('.view-body').append('svg').attr('width', Width).attr('height', this.viewData.length * barHeight);
    this.gDom = this.ele.selectAll('g').data(this.viewData).enter().append('g').attr('transform', ((d, i) => {
      return 'translate(0,' + i * barHeight + ')';
    }));
    this.gDom.append('rect').attr('width', ((d, i) => {
      return this._X(d);
    })).attr('height', barHeight - 2);
    this.gDom.append('text').attr('x', ((d, i) => {
      return this._X(d) - 20;
    })).attr('y', barHeight / 2).text((d, i) => {
      return d;
    }).attr('fill', '#fff').attr('dy', '.2rem');
  }
  StatisticsView() {

    // const width = 1200;
    // const height = 500;
    // this.ChartH = d3.scaleLinear().domain([0, d3.max(this.yearData)]).range([height, 0]);
    // this.Chart = d3.select('.Statistics-view').append('svg');
    // this.Chart.attr('width', width).attr('height', height).attr('class', 'rectview');
    // const barWidth = width / this.yearData.length;
    // this.Chartg = this.Chart.selectAll('g')
    //   .data(this.yearData)
    //   .enter().append('g')
    //   .attr('transform', ((d, i) => {
    //     return 'translate(' + i * barWidth + ',0)';
    //   }));

    // this.Chartg.append('rect')
    //   .attr('y', ((d) => {
    //     return this.ChartH(d);
    //   }))
    //   .attr('height', ((d) => {
    //     return height - this.ChartH(d);
    //   })).attr('width', barWidth - 1);

    // this.Chartg.append('text')
    //   .attr('x', barWidth / 2)
    //   .attr('y', ((d) => {
    //     return this.ChartH(d) + 3;
    //   }))
    //   .attr('dy', '.75em')
    //   .text((d) => {
    //     return d;
    //   });
    const Width = 1200;
    const Height = 500;
    const barWidth = Width / this.yearData.length;
    this.ChartH = d3.scaleLinear().domain([0, d3.max(this.yearData)]).range([Height, 0]);
    this.Chart = d3.select('.Statistics-view').append('svg');
    this.Chart.attr('width', Width).attr('height', Height).attr('class', 'rectview');
    // console.log(this.Chart);
    this.Chartg = this.Chart.selectAll('g').data(this.yearData).enter().append('g').attr(
      'transform', ((d, i) => {
        return 'translate(' + i * barWidth + ',0)';
      })
    );
    this.Chartg.append('rect').attr('y', ((d, i) => {
      return this.ChartH(d);
    })).attr('width', barWidth - 2).attr('height', ((d, i) => {
      //  console.log(d.value);
      //  console.log(this.ChartH(d));
      return Height - this.ChartH(d);
    }));
  }

}
