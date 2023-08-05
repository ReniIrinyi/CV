import { Component } from "@angular/core";

@Component({
  selector: "app-languages",
  templateUrl: "./languages.component.html",
  styleUrls: ["./languages.component.scss"],
})
export class LanguagesComponent {
  view: [number, number] = [300, 300];
  colorScheme = "natural";
  barChartData = [
    {
      name: "Java",
      value: 7,
    },
    {
      name: "JavaScript",
      value: 6,
    },
    {
      name: "HTML",
      value: 9,
    },
    {
      name: "CS3/Sass",
      value: 9,
    },
    {
      name: "TypeScript",
      value: 6,
    },
    {
      name: "Angular",
      value: 7,
    },
    {
      name: "Maven",
      value: 6,
    },
    {
      name: "Node.js",
      value: 5,
    },
    {
      name: "Express.js",
      value: 5,
    },
    {
      name: "SQL",
      value: 10,
    },
    {
      name: "Electron",
      value: 4,
    },
  ];
  gradient = false;
  showXAxis = false;
  showYAxis = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = "X Axis";
  yAxisLabel = "Y Axis";
}
