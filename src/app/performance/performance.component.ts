import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Stock } from '../common/models/stock.model';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnChanges {
  @Input() history: Stock[];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: (value, index, values) => {
            return (parseInt(value, 10) >= 1000) ?
              '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : '$' + value;
          }
        }
      }],
      xAxes: [{
        type: 'time',
        time: {
          displayFormat: 'MM/DD/YY',
          tooltipFormat: 'MM/DD/YY'
        }
      }]
    }
  };
  barChartType = 'bar';
  barChartLegend = true;

  barChartLabels: string[] = [];
  barChartData: any[] = [];

  ngOnChanges() {
    // TODO This could be extracted out
    const labels = this.history.map(stock => stock.date);
    const openData = this.history.map(stock => stock.open);
    const closeData = this.history.map(stock => stock.close);
    const data = [
      {data: openData, label: 'Open'},
      {data: closeData, label: 'Close'}
    ];

    this.barChartLabels = labels;
    this.barChartData = data;

    // TODO This is hacky and doesn't really work
    this.chart.ngOnChanges({} as SimpleChanges);
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
