import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  labels?: any;
};


@Component({
  selector: 'app-users-graph',
  imports: [NgApexchartsModule],
  templateUrl: './users-graph.component.html',
  styleUrl: './users-graph.component.css'
})
export class UsersGraphComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        height: 330,
        toolbar: {
          show: false
        }
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
