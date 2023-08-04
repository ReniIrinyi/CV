import { NgClass } from "@angular/common";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/Model/Project";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  constructor(private dataservice: ProjectDataService) {}

  projects: Project[] = [];
  projectsLength = 0;
  techstack = new Set<string>();

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataservice.getProjects().subscribe(
      (data) => {
        this.projects = data;
        this.projectsLength = this.projects.length;
        //filter the stacks for buttons
        data.forEach((e) => {
          const techstackArray = e.tech.split(",").map((tech) => tech.trim());
          techstackArray.forEach((tech) => {
            this.techstack.add(tech);
          });
        });
      },
      (error) => {
        console.log("error while fetching data: ", error);
      }
    );
  }
}
