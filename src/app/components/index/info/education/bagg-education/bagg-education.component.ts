import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoEducationService } from 'src/app/services/info-education.service';
import { Education } from 'src/models/Education';

@Component({
  selector: 'app-bagg-education',
  templateUrl: './bagg-education.component.html',
  styleUrls: ['./bagg-education.component.css'],
})
export class BaggEducationComponent {
  education: Education = new Education();

  constructor(private serv: InfoEducationService, private router: Router) {}

  ngOnInit() {}

  create(): void {
    console.log(this.education);
    this.serv
      .crearEducation(this.education)
      .subscribe((res) => window.location.reload());
  }
}
