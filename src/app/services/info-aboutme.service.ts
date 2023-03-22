import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aboutme } from 'src/models/Aboutme';

@Injectable({
  providedIn: 'root',
})
export class InfoAboutmeService {
  url = 'http://localhost:8080/aboutme';

  constructor(private http: HttpClient) {}

  getAboutme(): Observable<Aboutme[]> {
    return this.http.get<Aboutme[]>(this.url);
  }

  getAboutId(id: number): Observable<Aboutme> {
    return this.http.get<Aboutme>(this.url + '/' + id);
  }

  editarAboutme(about: Aboutme): Observable<Aboutme> {
    return this.http.put<Aboutme>(this.url, about);
  }
}
