import { Component } from "@angular/core";

import { defaultColors } from "@carbon/charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
