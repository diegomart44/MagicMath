import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  usuario: string = '';
  nombre: string = '';
  calificacion: number = 0; // Inicializa la variable con un valor numérico
  cursoGrado: string = '';
  turno: string = '';
  password: string = '';



  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore, // Inyecta AngularFirestore
    private router: Router,
    private toastr: ToastrService,
    private toastController: ToastController
  ) {}

  async registrarUsuario() {
    try {
      // Registra el usuario en Firebase Authentication
      const credenciales = await this.afAuth.createUserWithEmailAndPassword(
        this.usuario,
        this.password
      );

      // Verifica si credenciales.user no es null antes de acceder a su propiedad uid
      if (credenciales.user) {
      // Guarda el curso, turno y tipo (con valor predeterminado "estudiante") en Firestore
      await this.firestore.collection('usuarios').doc(credenciales.user.uid).set({
        cursoGrado: this.cursoGrado,
        turno: this.turno,
        tipo: 'estudiante',
        nombre: this.nombre,
        calificacion: this.calificacion,
        });
        

        // Redirige al usuario a la ventana correspondiente
        switch (this.cursoGrado) {
          case '1':
            this.router.navigate(['/levels/a']);
            break;
          case '2':
            this.router.navigate(['/levels/b']);
            break;
          case '3':
            this.router.navigate(['/levels/c']);
            break;
          default:
            this.router.navigate(['/home']); // Si no se selecciona ningún curso, redirige a la página home
            break;
        }
      }

      // Muestra un Toast de éxito
      const toast = await this.toastController.create({
        message: `¡Bienvenido, ${this.usuario}! Registro exitoso`,
        duration: 3000, // Duración en milisegundos
        position: 'top', // Puedes ajustar la posición según tus preferencias
      });
      toast.present();
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}