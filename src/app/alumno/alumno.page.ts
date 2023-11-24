
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa el Router

import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.page.html',
  styleUrls: ['alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  isScannerSupported = false;
  barcodes: Barcode[] = [];

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isScannerSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

    async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  redirigirAPagina1() {
    this.router.navigate(['/log-in']);
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
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operación cancelada');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
