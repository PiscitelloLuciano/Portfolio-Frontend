import { Component } from '@angular/core';
import { Education } from 'src/models/Education';

@Component({
  selector: 'app-bedit-education',
  templateUrl: './bedit-education.component.html',
  styleUrls: ['./bedit-education.component.css'],
})
export class BeditEducationComponent {
  education: Education;
}
