// signup.page.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-signup-docente',
  templateUrl: './signup-docente.page.html',
  styleUrls: ['./signup-docente.page.scss'],
})

export class SignupDocentePage {

  usuario: string = '';
  cursoGrado: string = '';
  password: string = '';

  
  constructor(private afAuth: AngularFireAuth, private router: Router, private toastr: ToastrService, private toastController: ToastController) {}

  async registrarUsuario() {
    try {
      // Registra el usuario en Firebase Authentication
      const credenciales = await this.afAuth.createUserWithEmailAndPassword(this.usuario, this.password);
  
      // Muestra un Toast de éxito
      const toast = await this.toastController.create({
        message: `¡Bienvenido, ${this.usuario}! Registro exitoso`,
        duration: 3000, // Duración en milisegundos
        position: 'top', // Puedes ajustar la posición según tus preferencias
      });
      toast.present();
  
      // Redirige al usuario a la página home
      this.router.navigate(['/docente']); // Asegúrate de que la ruta '/home' coincida con la configuración de tu enrutador
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}  
