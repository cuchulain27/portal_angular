import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CompetenciaslaboralesComponent } from './components/competenciaslaborales/competenciaslaborales.component';
import { PagesnofoundComponent } from './components/pagesnofound/pagesnofound.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'empresa', component: EmpresaComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'competenciaslaborales', component: CompetenciaslaboralesComponent},
  {path: '**', component: PagesnofoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
