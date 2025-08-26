import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  stroke: ApexStroke | any;
  fill: ApexFill | any;
};


@Component({
  selector: 'app-top-mipyme-graph',
  imports: [NgApexchartsModule],
  templateUrl: './top-mipyme-graph.component.html',
  styleUrl: './top-mipyme-graph.component.css'
})
export class TopMipymeGraphComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21, 22],
      chart: {
        type: "polarArea",
        height: 330,
        toolbar: {
          show: false
        }
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
