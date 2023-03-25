import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  aboutme: Aboutme;
  formulario: FormGroup;
  constructor(
    private serv: InfoAboutmeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      id: [''],
      contenido: ['', Validators.required],
    });
  }

  ngOnInit() {}

  edit(about: Aboutme) {
    const values = this.formulario.value;
    this.serv.editarAboutme(values).subscribe((data) => {
      this.formulario.setValue({
        contenido: about.contenido,
      });
    });
  }
  public getAboutId(id: number) {
    this.serv.getAboutId(id).subscribe((data) => {
      console.log(data);
    });
  }
}
