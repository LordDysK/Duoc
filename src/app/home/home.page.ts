import { Component, OnInit  } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute  } from '@angular/router'; // Importa el Router



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  constructor(public actionSheetController: ActionSheetController,
    private router:Router, private activatedRouter: ActivatedRoute,) {}

  

    public alertButtons = ['OK'];
    public user = {
      usuario: "",
      password: ""
    }
    public informacion = {
      nombre: "",
      apellido: "",
      nivel: "",
      fecha: ""
    }
  
    ngOnInit() {
      this.activatedRouter.queryParams.subscribe(() => {
        let state = this.router.getCurrentNavigation()?.extras.state;
        if (state) {
          this.user.usuario = state['user'].usuario;
          this.user.password = state['user'].password;
          console.log(this.user);
        }
      })
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
