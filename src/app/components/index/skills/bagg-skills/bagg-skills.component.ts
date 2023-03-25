import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/models/Skills';

@Component({
  selector: 'app-bagg-skills',
  templateUrl: './bagg-skills.component.html',
  styleUrls: ['./bagg-skills.component.css'],
})
export class BaggSkillsComponent {
  skill: Skills = new Skills();

  constructor(private serv: SkillsService) {}

  create(): void {
    console.log(this.skill);
    this.serv
      .crearSkills(this.skill)
      .subscribe((res) => window.location.reload());
  }
}
