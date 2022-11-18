import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  // Tener el tipado o el control de ese componente
  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( ) {
    // console.log(event);

    setTimeout(() => {
      
      if( this.data.length > 50 ) {
        this.infiniteScroll.complete();//completa la carga de scroll
        this.infiniteScroll.disabled = true;//ya no habra mas cargas
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      // event.target.complete();
      this.infiniteScroll.complete();
    }, 1210);
  }

}
