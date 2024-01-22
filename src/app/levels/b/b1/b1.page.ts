import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.page.html',
  styleUrls: ['./b1.page.scss'],
})
export class B1Page implements OnInit, OnDestroy {
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

 // Crear una instancia de Audio
 const audio = new Audio();

 // Cargar y reproducir el archivo MP3
 audio.src = 'assets/audio/aplausos.mp3';
 audio.play();

 // Detener la reproducción después de 2 segundos
 setTimeout(() => {
   audio.pause();
 }, 2000);
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
