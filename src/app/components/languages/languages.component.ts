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
      name: "PHP",
      value: 4,
    },
    {
      name: "JavaScript",
      value: 6,
    },
    {
      name: "HTML",
      value: 8,
    },
    {
      name: "CS3/Sass",
      value: 8,
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
      name: "Electron",
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
      value: 7,
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
