import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentAlert();
    this.presentAlertMultipleButtons();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: [
        {
        text: 'Ok!',
        handler: () => {
          console.log('Click en Ok')
         }
        },
        {
        text: 'Cancelar',
        role: 'Cancel',
        cssClass: 'rojo',
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
      const alert = await this.alertCtrl.create({
        header: 'Please enter your info',
        buttons: [
          {
            text: 'Ok',
            handler: ( data:any) => {
              console.log(data)
            } 
          }
        ],
        inputs: [
          {
            placeholder: 'Name',
          },
          {
            placeholder: 'Nickname (max 8 characters)',
            attributes: {
              maxlength: 8,
            },
          },
          {
            type: 'number',
            placeholder: 'Age',
            min: 1,
            max: 100,
          },
          {
            type: 'textarea',
            placeholder: 'A little about yourself',
          }
        ],
      });
  
      await alert.present();
    }
}
