import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.page.html',
  styleUrls: ['alumno.page.scss'],
})
export class AlumnoPage {

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router // Inyecta el Router
  ) {}

  redirigirAPagina1() {
    this.router.navigate(['/log-in']); // Reemplaza '/pagina1' con la ruta real
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Cerrar sesión',
          handler: () => {
            console.log('Seleccionaste la opción "Cerrar sesión"');
            // Agrega aquí la lógica para cerrar la sesión del alumno
            // Luego, redirige al usuario a la página "log-in"
            this.router.navigate(['/log-in']);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operación cancelada');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
