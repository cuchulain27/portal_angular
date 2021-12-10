import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PagesnofoundComponent } from './components/pagesnofound/pagesnofound.component';
import { CompetenciaslaboralesComponent } from './components/competenciaslaborales/competenciaslaborales.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    EmpresaComponent,
    BlogComponent,
    ContactoComponent,
    FooterComponent,
    PagesnofoundComponent,
    CompetenciaslaboralesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
