import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from 'src/models/Experience';

@Injectable({
  providedIn: 'root',
})
export class InfoExperienceService {
  url = 'http://localhost:8080/experience';

  constructor(private http: HttpClient) {}

  getExperience() {
    return this.http.get<Experience[]>(this.url);
  }

  crearExperience(experience: Experience) {
    return this.http.post<Experience>(this.url, experience);
  }

  eliminarExperience(id: number) {
    return this.http.delete<Experience>(this.url + '/' + id);
  }
}
