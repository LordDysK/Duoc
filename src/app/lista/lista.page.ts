import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router'; // Importa el Router
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController,
    private router:Router,) {}

  
  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'cerrar sesion',
          handler: () => {
            console.log('Seleccionaste la opción 1');
            this.router.navigate(['/log-in']);
          }
        },
        {
          text: 'vista de alumno',
          handler: () => {
            console.log('Seleccionaste la opción 2');
            this.router.navigate(['/alumno']);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    await actionSheet.present();
  }


}
