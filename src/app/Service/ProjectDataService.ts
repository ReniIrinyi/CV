import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BlogPost } from "../Model/BlogPost";
import { Project } from "../Model/Project";
@Injectable({
  providedIn: "root",
})
export class ProjectDataService {
  private projectUrl = "../../assets/projects.json";
  private blogUrl = "../../assets/blogposts.json";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogUrl);
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }
}
