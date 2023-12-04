import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { routing } from './app.routing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AfiliacionComponent } from './components/afiliacion/afiliacion.component';
import { HeaderInicioComponent } from './components/header-inicio/header-inicio.component';
import { NosotrosInicioComponent } from './components/nosotros-inicio/nosotros-inicio.component';
import { FooterInicioComponent } from './components/footer-inicio/footer-inicio.component';
import { ContactoInicioComponent } from './components/contacto-inicio/contacto-inicio.component';
import { LoginComponent } from './components/usuario/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AfiliacionComponent,
    HeaderInicioComponent,
    NosotrosInicioComponent,
    FooterInicioComponent,
    ContactoInicioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
