import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aboutme } from 'src/models/Aboutme';

@Injectable({
  providedIn: 'root',
})
export class InfoAboutmeService {
  url = 'http://localhost:8080/aboutme';

  constructor(private http: HttpClient) {}

  getAboutme() {
    return this.http.get<Aboutme[]>(this.url);
  }
}
