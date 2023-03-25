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

  delete(skill: Skills) {
    this.serv
      .eliminarSkills(skill.id)
      .subscribe((res) =>
        this.serv
          .getSkills()
          .subscribe((respuesta) => (this.skills = respuesta))
      );
  }

  progress: number;
}
