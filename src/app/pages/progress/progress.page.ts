import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

porcentaje: number = 0.5;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event) {
    // console.log( event.detail.value); // de 0 a 100
    this.porcentaje = event.detail.value / 100;
  }

}
