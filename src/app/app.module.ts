import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { LanguagesComponent } from "./components/languages/languages.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ProjectComponent } from "./components/project/project.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    HobbiesComponent,
    LanguagesComponent,
    ProjectsComponent,
    BlogComponent,
    ProjectComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
