import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [10, 20, 30, 40, 50];

    const svg = d3.select('#chart')
      .attr('width', 300)
      .attr('height', 200);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 40)
      .attr('y', (d) => 200 - d)
      .attr('width', 30)
      .attr('height', (d) => d)
      .attr('fill', 'blue');
  }
}
