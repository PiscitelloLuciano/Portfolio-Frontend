import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from 'src/models/Projects';

@Component({
  selector: 'app-bagg-projects',
  templateUrl: './bagg-projects.component.html',
  styleUrls: ['./bagg-projects.component.css'],
})
export class BaggProjectsComponent {
  project: Projects = new Projects();

  constructor(private serv: ProjectsService) {}

  ngOnInit() {}

  create(): void {
    console.log(this.project);
    this.serv
      .crearProjects(this.project)
      .subscribe((res) => window.location.reload());
  }
}
