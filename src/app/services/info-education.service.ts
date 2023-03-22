import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  crearEducation(education: Education) {
    return this.http.post<Education>(this.url, education);
  }

  eliminarEducation(id: number) {
    return this.http.delete<Education>(this.url + '/' + id);
  }

  editarEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(this.url, education);
  }
}
