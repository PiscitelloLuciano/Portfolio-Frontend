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
import { BtnEditComponent } from './components/index/details/btn-edit/btn-edit.component';
import { FotoPerfilComponent } from './components/index/details/foto-perfil/foto-perfil.component';
import { AboutmeComponent } from './components/index/info/aboutme/aboutme.component';
import { AddknowledgeComponent } from './components/index/info/addknowledge/addknowledge.component';
import { EducationComponent } from './components/index/info/education/education.component';
import { ExperienceComponent } from './components/index/info/experience/experience.component';
import { BeditEducationComponent } from './components/index/info/education/bedit-education/bedit-education.component';
import { BeditAboutmeComponent } from './components/index/info/aboutme/bedit-aboutme/bedit-aboutme.component';
import { BeditAddknowledgeComponent } from './components/index/info/addknowledge/bedit-addknowledge/bedit-addknowledge.component';
import { BeditExperienceComponent } from './components/index/info/experience/bedit-experience/bedit-experience.component';
import { BeditSkillsComponent } from './components/index/skills/bedit-skills/bedit-skills.component';
import { BaggProjectsComponent } from './components/index/projects/bagg-projects/bagg-projects.component';
import { BaggSkillsComponent } from './components/index/skills/bagg-skills/bagg-skills.component';
import { BaggAddknowledgeComponent } from './components/index/info/addknowledge/bagg-addknowledge/bagg-addknowledge.component';
import { BaggEducationComponent } from './components/index/info/education/bagg-education/bagg-education.component';
import { BaggExperienceComponent } from './components/index/info/experience/bagg-experience/bagg-experience.component';
import { RegistrarseComponent } from './components/login/registrarse/registrarse.component';

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
    BtnEditComponent,
    FotoPerfilComponent,
    AboutmeComponent,
    AddknowledgeComponent,
    EducationComponent,
    ExperienceComponent,
    BeditEducationComponent,
    BeditAboutmeComponent,
    BeditAddknowledgeComponent,
    BeditExperienceComponent,
    BeditSkillsComponent,
    BaggProjectsComponent,
    BaggSkillsComponent,
    BaggAddknowledgeComponent,
    BaggEducationComponent,
    BaggExperienceComponent,
    RegistrarseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
