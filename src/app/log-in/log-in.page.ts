import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import {  ViewChild, ElementRef } from '@angular/core';
import {  NavigationExtras } from '@angular/router';
import {  IonModal } from '@ionic/angular';
import { AutenticacionService } from '../services/autenticacion.service';



@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.page.html',
  styleUrls: ['log-in.page.scss'],
})
export class LogInPage  {
 
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router, private auth: AutenticacionService) {
    this.initLOGIN()
   }
   initLOGIN(){
   }

  public mensaje = "";
  public alertButtons = ['OK'];

  user = {
    usuario: "",
    password: ""
  }


  mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algún valor";
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.mensaje = "Registro Exitoso"
    this.auth.register(this.user.usuario, this.user.password);
    this.modal.dismiss(this.user.usuario, 'confirm');
  }
  enviar() {
    this.auth.register(this.user.usuario, this.user.password);

    var valorSeleccionado = this.informacion.Info;
    if (valorSeleccionado === 'Estudiante') {
      this.router.navigate(['/alumno']);
    } else if (valorSeleccionado === 'Docente') {
      this.router.navigate(['/home']);
    }
  }
  public informacion = {
    Info: '',
  };





}