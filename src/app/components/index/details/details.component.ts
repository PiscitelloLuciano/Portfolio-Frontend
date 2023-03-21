import { Component } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { Details } from 'src/models/Details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  details: Details[];

  constructor(private serv: DetailsService) {}

  ngOnInit() {
    this.serv.getDetails().subscribe((data) => {
      this.details = data;
    });
  }
}
