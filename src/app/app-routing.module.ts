import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { FormularioComponent } from './components/login/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'login', component: FormularioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
