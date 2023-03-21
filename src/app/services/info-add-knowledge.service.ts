import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddKnowledge } from 'src/models/AddKnowledge';

@Injectable({
  providedIn: 'root',
})
export class InfoAddKnowledgeService {
  url = 'http://localhost:8080/addknowledge';

  constructor(private http: HttpClient) {}

  getAddKnowledge() {
    return this.http.get<AddKnowledge[]>(this.url);
  }
}
