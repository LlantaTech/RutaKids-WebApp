import { Component } from '@angular/core';
import {ProjectsProgressComponent} from "./projects-progress/projects-progress.component";
import {AllProjectsComponent} from "./all-projects/all-projects.component";
import {ProjectsRoadmapComponent} from "./projects-roadmap/projects-roadmap.component";
import {ProjectsOverviewComponent} from "./projects-overview/projects-overview.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ProjectsProgressComponent,
    AllProjectsComponent,
    ProjectsRoadmapComponent,
    ProjectsOverviewComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
