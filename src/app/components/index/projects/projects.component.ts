import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from 'src/models/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Projects[];

  constructor(private serv: ProjectsService) {}

  ngOnInit() {
    this.serv.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
