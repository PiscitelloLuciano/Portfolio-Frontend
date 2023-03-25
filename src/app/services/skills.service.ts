import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from 'src/models/Skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  url = 'http://localhost:8080/skills';

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get<Skills[]>(this.url);
  }

  crearSkills(skill: Skills) {
    return this.http.post<Skills>(this.url, skill);
  }

  eliminarSkills(id: number) {
    return this.http.delete<Skills>(this.url + '/' + id);
  }

  editarSkills(skill: Skills) {
    return this.http.put<Skills>(this.url, skill);
  }
}
