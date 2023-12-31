import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/Model/Project";
import { ProjectDataService } from "src/app/Service/ProjectDataService";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  constructor(
    private dataservice: ProjectDataService,
    private sanitizer: DomSanitizer
  ) {}

  faArrowLeft = faChevronLeft;
  faArrowRight = faChevronRight;

  sanitizeProjectdUrls: SafeHtml[] = [];
  sanitizeGithubdUrls: SafeHtml[] = [];

  projects: Project[] = [];
  displayedProjects: Project[] = [];
  projectsPerPage = 3;
  currentPage = 1;
  total = 0;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataservice.getProjects().subscribe(
      (data) => {
        this.projects = data;
        this.updateDisplayedProjects();
        this.projects.forEach((project) => {
          this.sanitizeProjectdUrls?.push(
            this.sanitizer.bypassSecurityTrustUrl(project.url)
          );
          this.sanitizeGithubdUrls?.push(
            this.sanitizer.bypassSecurityTrustUrl(project.github)
          );
        });
      },
      (error) => {
        console.log("error while fetching data: ", error);
      }
    );
  }
  updateDisplayedProjects() {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    const endIndex = startIndex + this.projectsPerPage;
    this.displayedProjects = this.projects.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updateDisplayedProjects();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProjects();
    }
  }

  totalPages(): number {
    return Math.ceil(this.projects.length / this.projectsPerPage);
  }
  getPageArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, index) => index + 1);
  }
}
