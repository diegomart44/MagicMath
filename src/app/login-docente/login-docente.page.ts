import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage {user = {
  email: '',
  password: ''
};

hideHeader: boolean = true;

constructor(private afAuth: AngularFireAuth, private router: Router, private toastController: ToastController) {}

async login() {
  try {
    // Inicia sesión en Firebase Authentication
    const credentials = await this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);

    // Muestra un Toast de éxito
    const toast = await this.toastController.create({
      message: `¡Bienvenido, ${credentials.user?.email}! Sesión iniciada con éxito`,
      duration: 3000,
      position: 'top',
    });
    toast.present();

    // Redirige al usuario a la página home
    this.router.navigate(['/docente']); // Asegúrate de que la ruta '/home' coincida con la configuración de tu enrutador
  } catch (error) {
    console.error('Error al iniciar sesión:', error);

    // Muestra un Toast de error
    const toast = await this.toastController.create({
      message: 'Error al iniciar sesión. Verifica tus credenciales.',
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }
}
}

