// docente.page.ts

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage {
  selectedCurso: string = '';
  resultados$: Observable<any[]> = this.firestore.collection('resultados').valueChanges();

  constructor(private firestore: AngularFirestore, private toastController: ToastController) {}

  async cargarResultados() {
    try {
      // Consulta Firebase Firestore para obtener resultados según los filtros seleccionados
      let resultados = await this.firestore.collection('resultados', ref => ref.where('curso', '==', this.selectedCurso))
        .valueChanges()
        .toPromise();

      // Inicializamos resultados como un array vacío si es undefined
      resultados = resultados || [];

      if (resultados.length > 0) {
        this.resultados$ = of(resultados);
        this.mostrarToast('Resultados cargados con éxito');
      } else {
        this.mostrarToast('No hay resultados disponibles', 'warning');
      }
    } catch (error) {
      console.error('Error al cargar resultados:', error);
      this.mostrarToast('Error al cargar resultados. Por favor, inténtalo de nuevo.', 'danger');
    }
  }

  async mostrarToast(mensaje: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color: color,
    });
    toast.present();
  }
}
