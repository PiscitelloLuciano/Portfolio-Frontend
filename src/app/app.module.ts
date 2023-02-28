import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/login/formulario/formulario.component';
import { BienvenidaComponent } from './components/login/bienvenida/bienvenida.component';
import { HeaderComponent } from './components/index/header/header.component';
import { InfoComponent } from './components/index/info/info.component';
import { SkillsComponent } from './components/index/skills/skills.component';
import { ProjectsComponent } from './components/index/projects/projects.component';
import { FooterComponent } from './components/index/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { DetailsComponent } from './components/index/details/details.component';
import { BtnEditComponent } from './components/reusable/btn-edit/btn-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BienvenidaComponent,
    HeaderComponent,
    InfoComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    IndexComponent,
    DetailsComponent,
    BtnEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
