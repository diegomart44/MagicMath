import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { UserIdService } from '../../../services/user-id.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.page.html',
  styleUrls: ['./a2.page.scss'],
})
export class A2Page implements OnInit, OnDestroy {
  private sonidoFondo: HTMLAudioElement | null = null;
  siguienteHabilitado: boolean = false;
  mensajeMostrado: boolean = false;
  mensajeIncorrecto: boolean = false;
  puntaje: number = 0; 
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

  ngOnDestroy() {
    if (this.firestoreSubscription) {
      this.firestoreSubscription.unsubscribe();
    }

    if (this.sonidoFondo) {
      this.sonidoFondo.pause();
    }
  }

  private initFirestoreSubscription(userId: string) {
    this.firestoreSubscription = this.firestore.collection('progreso').doc(userId).valueChanges().subscribe((data: any) => {
      this.siguienteHabilitado = data.nivelCompletado;
      this.puntaje = data.puntaje; 
    });
  }

  habilitarSiguiente() {
    // Verifica si el botón siguiente ya está habilitado
    if (!this.siguienteHabilitado) {
      // Habilita el botón siguiente
      this.siguienteHabilitado = true;
      this.botonSiguiente.nativeElement.removeAttribute('disabled');
  
      // Muestra el mensaje correcto
      this.mostrarMensaje('correcto');
  
      // Suma 5 puntos al puntaje local solo si no se ha habilitado el botón siguiente previamente
      this.puntaje += 20;
  
      // Actualiza el puntaje en Firestore
      const userId = this.userIdService.getUserId();
      if (userId) {
        this.updateScoreInFirestore(userId);
      }
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

  mostrarMensaje(tipo: string) {
    if (tipo === 'correcto') {
      this.mensajeMostrado = true;
      setTimeout(() => {
        this.mensajeMostrado = false;
      }, 2000);
    } else if (tipo === 'incorrecto') {
      this.mensajeIncorrecto = true;
      setTimeout(() => {
        this.mensajeIncorrecto = false;
      }, 2000);
    }
  }
}
