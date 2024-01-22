import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-c',
  templateUrl: './c.page.html',
  styleUrls: ['./c.page.scss'],
})
export class CPage implements OnInit, OnDestroy {
  private sonidoFondo: HTMLAudioElement | null = null;
  siguienteHabilitado: boolean = false;
  mensajeMostrado: boolean = false;
  mensajeIncorrecto: boolean = false;

  @ViewChild('botonSiguiente', { static: false, read: ElementRef }) botonSiguiente!: ElementRef;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.sonidoFondo = new Audio('assets/audio/audio4.mp3');
    this.sonidoFondo.loop = true;

    // Configurar el volumen inicial bajo
    if (this.sonidoFondo) {
      this.sonidoFondo.volume = 0.1;
      this.sonidoFondo.play();
      this.aumentarVolumenProgresivo();
    }
  }

  aumentarVolumenProgresivo() {
    // Aumentar el volumen progresivamente cada 500 milisegundos
    const interval = setInterval(() => {
      if (this.sonidoFondo && this.sonidoFondo.volume < 1.0) {
        this.sonidoFondo.volume += 0.1; // Puedes ajustar el incremento según tus necesidades
      } else {
        clearInterval(interval);
      }
    }, 200);
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

  selectLevel(level: string) {
    this.navCtrl.navigateForward(`/level/${level}`);
  }

  habilitarSiguiente() {
    this.siguienteHabilitado = true;
    this.botonSiguiente.nativeElement.removeAttribute('disabled');
    this.mostrarMensajeCorrecto();

    // Detener la reproducción después de 2 segundos
    setTimeout(() => {
      if (this.sonidoFondo) {
        this.sonidoFondo.pause();
      }
    }, 2000);
  }

  mostrarMensajeCorrecto() {
    this.mensajeMostrado = true;
    setTimeout(() => {
      this.mensajeMostrado = false;
    }, 2000);
  }

  mostrarMensajeIncorrecto() {
    this.mensajeIncorrecto = true;
    setTimeout(() => {
      this.mensajeIncorrecto = false;
    }, 2000);
  }
}
