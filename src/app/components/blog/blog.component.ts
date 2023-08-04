import { Component, OnInit } from "@angular/core";
import { BlogPost } from "src/app/Model/BlogPost";
import { ProjectDataService } from "src/app/Service/ProjectDataService";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  constructor(private dataservice: ProjectDataService) {}
  randomPost = 0;
  blogs: BlogPost[] = [];
  randomIndex = Math.floor(Math.random() * this.blogs.length);
  selectedBlog: BlogPost | null = null;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataservice.getPosts().subscribe(
      (data) => {
        this.blogs = data;
        this.randomPost = Math.floor(Math.random() * this.blogs.length);
        this.selectedBlog = this.blogs[this.randomPost];
      },
      (error) => {
        console.log("error while fetching data: ", error);
      }
    );
  }
}
