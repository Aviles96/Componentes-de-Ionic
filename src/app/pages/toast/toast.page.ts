import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor( private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 3000,
    });

    await toast.present();
 }

 async presentToastWhithOptions() {
  const toast = await this.toastCtrl.create({
    header: 'Toast header',
    message: 'Click to close',
    position: 'top',
    buttons: [
      {
        side: 'start',
        text: 'Favorite',
        handler: () => { console.log('Favorite.clicked');}
      },
      {
        text: 'Done',
        role: 'cancel',
        handler: () => { console.log('Cancel.clicked');}
      }
    ]
  });

  await toast.present();
 }
}
