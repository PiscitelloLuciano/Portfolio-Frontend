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
}
