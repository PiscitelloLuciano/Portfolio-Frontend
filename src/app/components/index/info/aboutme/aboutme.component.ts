import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InfoAboutmeService } from 'src/app/services/info-aboutme.service';
import { Aboutme } from 'src/models/Aboutme';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent {
  aboutme: Aboutme[];

  constructor(private serv: InfoAboutmeService) {}

  ngOnInit() {
    this.serv.getAboutme().subscribe((data) => {
      this.aboutme = data;
    });
  }
}
