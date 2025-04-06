import { Component } from '@angular/core';
import {WorkingScheduleComponent} from "./working-schedule/working-schedule.component";
import {ProjectsProgressComponent} from "./projects-progress/projects-progress.component";
import {AllProjectsComponent} from "./all-projects/all-projects.component";
import {ProjectsRoadmapComponent} from "./projects-roadmap/projects-roadmap.component";
import {ProjectsOverviewComponent} from "./projects-overview/projects-overview.component";
import {ProjectsAnalysisComponent} from "./projects-analysis/projects-analysis.component";
import {ChatProjectsUserComponent} from "./chat-projects-user/chat-projects-user.component";
import {ActiveProjectComponent} from "./active-project/active-project.component";
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {TeamMembersComponent} from "./team-members/team-members.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WorkingScheduleComponent,
    ProjectsProgressComponent,
    AllProjectsComponent,
    ProjectsRoadmapComponent,
    ProjectsOverviewComponent,
    ProjectsAnalysisComponent,
    ChatProjectsUserComponent,
    ActiveProjectComponent,
    ToDoListComponent,
    TeamMembersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
