import { Component } from '@angular/core';
import { InfoExperienceService } from 'src/app/services/info-experience.service';
import { Experience } from 'src/models/Experience';

@Component({
  selector: 'app-bagg-experience',
  templateUrl: './bagg-experience.component.html',
  styleUrls: ['./bagg-experience.component.css'],
})
export class BaggExperienceComponent {
  experience: Experience = new Experience();

  constructor(private serv: InfoExperienceService) {}

  ngOnInit() {}

  create(): void {
    console.log(this.experience);
    this.serv
      .crearExperience(this.experience)
      .subscribe((res) => window.location.reload());
  }
}
