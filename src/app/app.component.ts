import { Component, OnInit, ViewChild } from "@angular/core";

import { defaultColors, BarChart } from "@carbon/charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild("barChart") barChart;

  points: Array<{
    x: number;
    y: number;
    size: number;
    color: number[];
    name: string;
  }> = [];
  zoom: number = 4;
  barData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
      {
        label: "Mammoth Distribution Center",
        backgroundColors: [defaultColors[0]],
        data: [65000, 29123, 35213, 51213, 16932]
      },
      {
        label: "Another place",
        backgroundColors: [defaultColors[1]],
        data: [32432, 21312, 56456, 21312, 34234]
      },
      {
        label: "The good place",
        backgroundColors: [defaultColors[2]],
        data: [12312, 23232, 34232, 12312, 34234]
      },
      {
        label: "The bad place",
        backgroundColors: [defaultColors[3]],
        data: [32423, 21313, 64353, 24134, 32423]
      }
    ]
  };

  barOptions = {
    scales: {
      x: {
        title: "30 Days Dwell Time"
      },
      y: {
        formatter: axisValue => `${axisValue / 1000}k`,
        yMaxAdjuster: yMaxValue => yMaxValue * 1.1
      },
      y2: {
        ticks: {
          max: 1,
          min: 0
        },
        formatter: axisValue => `${axisValue * 100}%`
      }
    },
    legendClickable: true,
    containerResizable: true
  };

  ngOnInit() {
    // Generate random points
    const nbPoints = 4;
    for (let i = 0; i < nbPoints; ++i) {
      let r = this.getRandomInRange(0, 255, 1);
      let g = this.getRandomInRange(0, 255, 1);
      let b = this.getRandomInRange(0, 255, 1);
      this.points.push({
        x: this.getRandomInRange(-122, -76, 4),
        y: this.getRandomInRange(33, 48, 4),
        size: this.getRandomInRange(1, 5, 1),
        color: this.barData.datasets[i].backgroundColors[0],
        name: this.barData.datasets[i].label
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  zoomIn() {
    this.zoom = Math.min(this.zoom + 1, 8);
  }

  zoomOut() {
    this.zoom = Math.max(this.zoom - 1, 1);
  }

  handleEvent(event) {
    const map = event.map;
    const clickedFeatureId = map.forEachFeatureAtPixel(event.pixel, function(feature) {
      return feature.getId();
    });
    this.barChart.chart.applyLegendFilter(clickedFeatureId);
  }
}
