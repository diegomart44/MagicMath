import { Component, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnDestroy {
  selectedCurso: string = '';
  selectedTurno: string = '';
  searchTerm: string = '';
  resultados$: Observable<any[]> = of([]); // Inicializamos la propiedad con un observable vacío
  private resultadosSubscription: Subscription | undefined;

  constructor(private firestore: AngularFirestore, private toastController: ToastController) {
    this.cargarResultados();
  }

  cargarResultados() {
    if (this.resultadosSubscription) {
      this.resultadosSubscription.unsubscribe(); // Nos desuscribimos para evitar fugas de memoria
    }
    
    this.resultados$ = this.firestore.collection('usuarios').valueChanges({ idField: 'id' }).pipe(
      map((resultados: any[]) => {
        // Verificar si se están aplicando filtros
        const filtersApplied = this.selectedCurso || this.selectedTurno || this.searchTerm;
        
        // Si no se están aplicando filtros y el tipo es 'docente', retornamos un array vacío
        if (!filtersApplied) {
          return resultados.filter(alumno => alumno.tipo !== 'docente');
        }
  
        // Aplicar filtros según los valores seleccionados
        return resultados.filter(alumno => this.matchFilter(alumno));
      })
    );
  }
  

  matchFilter(alumno: any): boolean {
    let match = true;
    
    // Verificar si el tipo es 'docente' y si es así, no hacer coincidencia
    if (alumno.tipo === 'docente') {
      return false;
    }
    
    if (this.selectedCurso && alumno.cursoGrado !== this.selectedCurso) {
      match = false;
    }
    if (this.selectedTurno && alumno.turno !== this.selectedTurno) {
      match = false;
    }
    if (this.searchTerm && alumno.nombre && alumno.nombre.toLowerCase().indexOf(this.searchTerm.toLowerCase()) === -1) {
      match = false;
    }
    
    return match;
  }
  
  
  

  ngOnDestroy() {
    if (this.resultadosSubscription) {
      this.resultadosSubscription.unsubscribe(); // Nos desuscribimos para evitar fugas de memoria
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
