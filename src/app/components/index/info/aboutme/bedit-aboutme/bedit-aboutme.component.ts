import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoAboutmeService } from 'src/app/services/info-aboutme.service';
import { Aboutme } from 'src/models/Aboutme';
import { AboutmeComponent } from '../aboutme.component';

@Component({
  selector: 'app-bedit-aboutme',
  templateUrl: './bedit-aboutme.component.html',
  styleUrls: ['./bedit-aboutme.component.css'],
})
export class BeditAboutmeComponent {
  aboutme: Aboutme = new Aboutme();

  constructor(
    private serv: InfoAboutmeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}
}
