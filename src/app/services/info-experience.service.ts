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
}
