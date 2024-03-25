import { Component, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cplay',
  templateUrl: 'cplay.page.html',
  styleUrls: ['cplay.page.scss'],
})
export class CplayPage implements OnDestroy {

  private sonidoFondo: HTMLAudioElement | null = null;
  cursoGrado: string = ''; // Declaración de la propiedad cursoGrado
  redirectRoute: string = '/levels/b'; // Propiedad para almacenar la ruta de redirección

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
      this.navCtrl.navigateForward(this.redirectRoute);
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

  // Función para determinar la ruta de redirección en función del valor de cursoGrado
  getNivelRedireccion(cursoGrado: string): string {
    switch (cursoGrado) {
      case '1':
        return '/levels/a';
      case '2':
        return '/levels/b';
      case '3':
        return '/levels/c';
      default:
        return '/levels';
    }
  }
}