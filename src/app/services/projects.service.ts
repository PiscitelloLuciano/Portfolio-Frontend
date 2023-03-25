import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projects } from 'src/models/Projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  url: string = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Projects[]>(this.url);
  }

  crearProjects(project: Projects) {
    return this.http.post<Projects>(this.url, project);
  }

  eliminarProject(id: number) {
    return this.http.delete<Projects>(this.url + '/' + id);
  }

  editarProject(project: Projects) {
    return this.http.put<Projects>(this.url, project);
  }
}
