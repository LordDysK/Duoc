import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.page.html',
  styleUrls: ['log-in.page.scss'],
})
export class LogInPage implements OnInit {
  public mensaje = '';
  public campo = '';
  
  user = {
    usuario: '',
    password: '',
  };

  constructor(private router: Router) {}

  mostrarInfo() {
    console.log(this.user);
    if (this.user.usuario !== '' && this.user.password !== '') {
      this.campo = 'Usuario Existente';
    } else {
      this.campo = 'Usuario no Existe';
    }
  }

  public informacion = {
    Info: '',
  };

  ngOnInit() {}

  enviar() {
    var valorSeleccionado = this.informacion.Info;
    if (valorSeleccionado === 'Estudiante') {
      this.router.navigate(['alumno']);
    } else if (valorSeleccionado === 'Docente') {
      this.router.navigate(['home']);
    }
  }
}