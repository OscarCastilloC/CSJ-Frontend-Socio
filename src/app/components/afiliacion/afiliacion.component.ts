import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliacionService } from 'src/app/services/afiliacion.service';

declare var jQuery : any;
declare var $ : any;
declare var iziToast: any;

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.css']
})

export class AfiliacionComponent{
  
  public solicitud : any = {};
  public file : File | undefined = undefined;
  public load_btn = false;
  public imgSelect : any | ArrayBuffer = 'assets/img/01.jpg';

  constructor(
    private _afiliacionService : AfiliacionService,
    private _router : Router
  ){

  }

  registro(registroForm: any){
    if (registroForm.valid){
      if (this.file == undefined) {
        iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message:'Debe subir un documento para registrar'
        });
      }
      
      else {
        this.load_btn = true;
      this._afiliacionService.registro_solicitud(this.solicitud,this.file).subscribe(
        response => {
          iziToast.show({
            title: 'Éxito',
            titleColor: '#1DC74C',
            color: 'FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registro correctamente la solicitud'
          });

          this.load_btn = false;
          this._router.navigate(['/inicio']);
        },
        error => {
          console.log(error);
          this.load_btn = false;
        }
      );
      }
    }

    else {
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message:'Los datos del formulario no son válidos'
      });

      this.load_btn = false;

      $('#input-documento').text('Seleccionar imagen');
      this.imgSelect = 'assets/img/01.jpg';
      this.file = undefined;
    }
    
  }


  fileChangeEvent(event : any): void{
    var file;
    if (event.target.files && event.target.files[0]) {
      file = <File>event.target.files[0];
      console.log(file);

    }

    else {
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message:'No hay una imagen de envío'
      });

      $('#input-documento').text('Seleccionar imagen');
      this.imgSelect = 'assets/img/01.jpg';
      this.file = undefined;
    }
  
    if (file && file.size <= 4000000){

    
      if (file?.type == 'image/png' || file?.type == 'image/webp' || file?.type == 'image/jpg' || file?.type == 'image/gif' || file?.type == 'image/jpeg')
      {
        const reader = new FileReader();
        reader.onload = e => this.imgSelect = reader.result;
        console.log();

        reader.readAsDataURL(file);
      
        $('#input-documento').text(file.name);
        this.file = file;

      }

      else {
        iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message:'El archivo debe ser una imagen'
        });

        $('#input-documento').text('Seleccionar imagen');
        this.imgSelect = 'assets/img/01.jpg';
        this.file = undefined;
      }

    }else {
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message:'La imagen no puede superar los 4MB'
      });

      $('#input-documento').text('Seleccionar imagen');
      this.imgSelect = 'assets/img/01.jpg';
      this.file = undefined;
    }
  
    console.log(this.file);
  }
}
