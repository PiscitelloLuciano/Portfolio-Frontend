import { Component } from '@angular/core';
import { InfoAddKnowledgeService } from 'src/app/services/info-add-knowledge.service';
import { AddKnowledge } from 'src/models/AddKnowledge';

@Component({
  selector: 'app-addknowledge',
  templateUrl: './addknowledge.component.html',
  styleUrls: ['./addknowledge.component.css'],
})
export class AddknowledgeComponent {
  addKnowLedgeList: AddKnowledge[];

  constructor(private serv: InfoAddKnowledgeService) {}

  ngOnInit(): void {
    this.serv.getAddKnowledge().subscribe((data) => {
      this.addKnowLedgeList = data;
    });
  }
}
