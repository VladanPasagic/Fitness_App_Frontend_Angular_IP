import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }
  @Input() labels: any[] = [];
  @Input() data: any[] = [];
  @Input() label!: string;

  public chart: any;

  createChart() {
    this.chart = new Chart('chart', {
      type: 'line',

      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
