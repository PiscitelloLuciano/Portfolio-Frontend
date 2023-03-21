import { Component } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { Details } from 'src/models/Details';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css'],
})
export class FotoPerfilComponent {
  details: Details[];

  constructor(private serv: DetailsService) {}

  ngOnInit() {
    this.serv.getDetails().subscribe((data) => {
      this.details = data;
    });
  }
}
