import { Component } from '@angular/core';
import { InfoEducationService } from 'src/app/services/info-education.service';
import { Education } from 'src/models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educations: Education[];

  constructor(private serv: InfoEducationService) {}

  ngOnInit() {
    this.serv.getEducation().subscribe((data) => {
      this.educations = data;
    });
  }
}
