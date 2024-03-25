import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserIdService } from '../../../services/user-id.service';

@Component({
  selector: 'app-b3',
  templateUrl: './b3.page.html',
  styleUrls: ['./b3.page.scss'],
})
export class B3Page implements OnInit, OnDestroy {
  private sonidoFondo: HTMLAudioElement | null = null;
  siguienteHabilitado: boolean = false;
  mensajeMostrado: boolean = false;
  mensajeIncorrecto: boolean = false;
  puntaje: number = 0;
  private sonidoAplausos: HTMLAudioElement = new Audio('assets/audio/aplausos.mp3');
  private firestoreSubscription: Subscription | undefined;

  @ViewChild('botonSiguiente', { static: false, read: ElementRef }) botonSiguiente!: ElementRef;

  constructor(
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private userIdService: UserIdService
  ) { }

  ngOnInit() {
    this.userIdService.userId$.subscribe(userId => {
      if (userId) {
        this.initFirestoreSubscription(userId);
      }
    });
  }

  ionViewDidEnter() {
    this.sonidoFondo = new Audio('assets/audio/audio4.mp3');
    this.sonidoFondo.loop = true;
    this.sonidoFondo.volume = 0.1;
    this.sonidoFondo.play();
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
    if (this.firestoreSubscription) {
      this.firestoreSubscription.unsubscribe();
    }
  }

  private initFirestoreSubscription(userId: string) {
    this.firestoreSubscription = this.firestore.collection('progreso').doc(userId).valueChanges().subscribe((data: any) => {
      this.siguienteHabilitado = data.nivelCompletado;
      this.puntaje = data.puntaje;
    });
  }

  habilitarSiguiente() {
    if (!this.siguienteHabilitado) {
      this.siguienteHabilitado = true;
      this.botonSiguiente.nativeElement.removeAttribute('disabled');
      this.mostrarMensajeCorrecto();
      this.sonidoAplausos.play();

      // Suma 10 puntos al puntaje local
      this.puntaje += 30;

      // Actualiza el puntaje en Firestore
      const userId = this.userIdService.getUserId();
      if (userId) {
        this.updateScoreInFirestore(userId);
      }

      setTimeout(() => {
        this.sonidoAplausos.pause();
      }, 2000);

      setTimeout(() => {
        if (this.sonidoFondo) {
          this.sonidoFondo.pause();
        }
      }, 2000);
    }
  }

  private updateScoreInFirestore(userId: string) {
    this.firestore.collection('usuarios').doc(userId).update({
      calificacion: this.puntaje
    }).then(() => {
      console.log('Puntaje actualizado en Firestore correctamente.');
    }).catch(error => {
      console.error('Error al actualizar el puntaje en Firestore:', error);
    });
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
