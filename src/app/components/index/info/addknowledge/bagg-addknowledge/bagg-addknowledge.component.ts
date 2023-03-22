import { Component } from '@angular/core';
import { InfoAddKnowledgeService } from 'src/app/services/info-add-knowledge.service';
import { AddKnowledge } from 'src/models/AddKnowledge';

@Component({
  selector: 'app-bagg-addknowledge',
  templateUrl: './bagg-addknowledge.component.html',
  styleUrls: ['./bagg-addknowledge.component.css'],
})
export class BaggAddknowledgeComponent {
  knowledge: AddKnowledge = new AddKnowledge();

  constructor(private serv: InfoAddKnowledgeService) {}

  ngOnInit() {}

  create(): void {
    console.log(this.knowledge);
    this.serv
      .crearAddKnowledge(this.knowledge)
      .subscribe((res) => window.location.reload());
  }
}
