import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/models/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skills[];

  constructor(private serv: SkillsService) {}

  ngOnInit() {
    this.serv.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }
  progress: number;
}
