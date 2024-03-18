import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  };

  hideHeader: boolean = true;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore, // Inyecta AngularFirestore
    private router: Router,
    private toastController: ToastController
  ) {}

  async login() {
    try {
      // Inicia sesión en Firebase Authentication
      const credentials = await this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);

      // Consulta el curso del usuario en Firestore
      const userDoc = this.firestore.collection('usuarios').doc(credentials.user?.uid).get();
      userDoc.subscribe((doc) => {
        const cursoGrado = doc.get('cursoGrado');

        // Guarda el ID del usuario en el localStorage o sessionStorage
        if (credentials.user?.uid) {
          localStorage.setItem('userId', credentials.user.uid);
        }

        // Muestra un Toast de éxito
        const toast = this.toastController.create({
          message: `¡Bienvenido, ${credentials.user?.email}! Sesión iniciada con éxito`,
          duration: 3000,
          position: 'top',
        });
        toast.then((toastInstance) => toastInstance.present());

        // Redirige al usuario a la ventana correspondiente
        switch (cursoGrado) {
          case '1':
            this.router.navigate(['/levels/a/aplay']);
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
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);

      // Muestra un Toast de error
      const toast = this.toastController.create({
        message: 'Error al iniciar sesión. Verifica tus credenciales.',
        duration: 3000,
        position: 'top',
        color: 'danger',
      });
      toast.then((toastInstance) => toastInstance.present());
    }
  }
}
