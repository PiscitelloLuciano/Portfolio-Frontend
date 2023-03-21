import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from 'src/models/Education';

@Injectable({
  providedIn: 'root',
})
export class InfoEducationService {
  url: string = 'http://localhost:8080/education';

  constructor(private http: HttpClient) {}

  getEducation() {
    return this.http.get<Education[]>(this.url);
  }
}
