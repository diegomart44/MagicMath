import { Component, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  private sonidoFondo: HTMLAudioElement | null = null;

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    this.sonidoFondo = new Audio('assets/audio/fondo.mp3');
    this.sonidoFondo.play();

    const botonComenzar = document.getElementById('botonComenzar');
    const sonidoBoton = new Audio('assets/audio/boton.mp3');

    botonComenzar?.addEventListener('click', () => {
      sonidoBoton.play();
      if (this.sonidoFondo) {
        this.sonidoFondo.pause();
      }
      this.navCtrl.navigateForward('/levels');
    });
  }

  ionViewWillLeave() {
    if (this.sonidoFondo) {
      this.sonidoFondo.pause();
    }
  }

  ngOnDestroy() {
    if (this.sonidoFondo) {
      this.sonidoFondo.pause();
      this.sonidoFondo = null;
    }
  }
}
