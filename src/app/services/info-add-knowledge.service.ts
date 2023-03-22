import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddKnowledge } from 'src/models/AddKnowledge';
import { AddknowledgeComponent } from '../components/index/info/addknowledge/addknowledge.component';

@Injectable({
  providedIn: 'root',
})
export class InfoAddKnowledgeService {
  url = 'http://localhost:8080/addknowledge';

  constructor(private http: HttpClient) {}

  getAddKnowledge() {
    return this.http.get<AddKnowledge[]>(this.url);
  }

  crearAddKnowledge(knowledge: AddKnowledge) {
    return this.http.post<AddKnowledge>(this.url, knowledge);
  }

  eliminarAddKnowledge(id: number) {
    return this.http.delete<AddKnowledge>(this.url + '/' + id);
  }
}
