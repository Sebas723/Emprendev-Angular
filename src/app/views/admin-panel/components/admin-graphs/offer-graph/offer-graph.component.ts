import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries| any;
  chart: ApexChart| any;
  dataLabels: ApexDataLabels| any;
  plotOptions: ApexPlotOptions| any;
  yaxis: ApexYAxis| any;
  xaxis: ApexXAxis| any;
  fill: ApexFill| any;
  tooltip: ApexTooltip| any;
  stroke: ApexStroke| any;
  legend: ApexLegend| any;
};


@Component({
  selector: 'app-offer-graph',
  imports: [NgApexchartsModule],
  templateUrl: './offer-graph.component.html',
  styleUrl: './offer-graph.component.css'
})
export class OfferGraphComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
      ],
      chart: {
        type: "bar",
        height: 318,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}
