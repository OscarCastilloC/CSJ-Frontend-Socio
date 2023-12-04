import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfiliacionService {

  public url: any;

  constructor(
    private _http: HttpClient,
    ) {
      this.url = GLOBAL.url;
    }

  registro_solicitud(data:any, file:File):Observable<any> {
    
    const fd = new FormData();
    fd.append('nombres', data.nombres);
    fd.append('apellidos', data.apellidos);
    fd.append('email', data.email);
    fd.append('telefono', data.telefono);
    fd.append('genero', data.genero);
    fd.append('direccion', data.direccion);
    fd.append('cargo', data.cargo);
    fd.append('f_nacimiento', data.f_nacimiento);
    fd.append('dni', data.dni);
    fd.append('documentoEssalud', file);

    return this._http.post(this.url + '/registro_solicitud', fd);
  }
}
