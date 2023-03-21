import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from 'src/models/Details';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  url: string = 'http://localhost:8080/details';

  constructor(private http: HttpClient) {}

  getDetails() {
    return this.http.get<Details[]>(this.url);
  }
}
