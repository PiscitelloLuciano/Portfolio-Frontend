import { Component } from '@angular/core';
import { InfoExperienceService } from 'src/app/services/info-experience.service';
import { Experience } from 'src/models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[];

  constructor(private serv: InfoExperienceService) {}

  ngOnInit(): void {
    this.serv.getExperience().subscribe((data) => {
      this.experiences = data;
    });
  }
}
