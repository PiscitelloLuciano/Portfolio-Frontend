import { Component, OnInit } from '@angular/core';
import { InfoEducationService } from 'src/app/services/info-education.service';
import { Education } from 'src/models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: Education[];

  constructor(private serv: InfoEducationService) {}

  ngOnInit() {
    this.serv.getEducation().subscribe((data) => {
      this.educations = data;
    });
  }

  delete(education: Education) {
    this.serv
      .eliminarEducation(education.id)
      .subscribe((res) =>
        this.serv
          .getEducation()
          .subscribe((respuesta) => (this.educations = respuesta))
      );
  }
}
