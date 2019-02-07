import { Component, OnInit } from "@angular/core";

import { defaultColors } from "@carbon/charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  points: Array<{ x: number; y: number; size: number; color: number[] }> = [];

  ngOnInit() {
    // Generate random points
    const nbPoints = 10;
    for (let i = 0; i < nbPoints; ++i) {
      let r = this.getRandomInRange(0, 255, 1);
      let g = this.getRandomInRange(0, 255, 1);
      let b = this.getRandomInRange(0, 255, 1);
      this.points.push({
        x: this.getRandomInRange(-122, -76, 4),
        y: this.getRandomInRange(33, 48, 4),
        size: this.getRandomInRange(1, 5, 1),
        color: [r,g,b]
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  title = "NGCodeSandbox";

  barData = {
    labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColors: [defaultColors[0]],
        data: [65000, -29123, -35213, 51213, 16932]
      },
      {
        label: "Dataset 2",
        backgroundColors: [defaultColors[1]],
        data: [32432, -21312, -56456, -21312, 34234]
      },
      {
        label: "Dataset 3",
        backgroundColors: [defaultColors[2]],
        data: [-12312, 23232, 34232, -12312, -34234]
      },
      {
        label: "Dataset 4",
        backgroundColors: [defaultColors[3]],
        data: [-32423, 21313, 64353, 24134, 32423]
      }
    ]
  };

  barOptions = {
    scales: {
      x: {
        title: "2018 Annual Sales Figures"
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
}
