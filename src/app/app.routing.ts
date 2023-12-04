import {Routes, RouterModule, Router} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { AfiliacionComponent } from './components/afiliacion/afiliacion.component';
import { NosotrosInicioComponent } from './components/nosotros-inicio/nosotros-inicio.component';
import { ContactoInicioComponent } from './components/contacto-inicio/contacto-inicio.component';
import { LoginComponent } from './components/usuario/login/login.component';

const appRoute : Routes = [
    {path: '', redirectTo:'inicio', pathMatch:'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'nosotros', component: NosotrosInicioComponent},
    {path: 'contacto', component: ContactoInicioComponent},
    {path: 'afiliar', component: AfiliacionComponent},
    {path: 'login', component: LoginComponent}
]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute);