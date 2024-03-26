import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  };

  hideHeader: boolean = true;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Verificar si el usuario ya ha iniciado sesión al cargar la página
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // Si el usuario ya está autenticado, obtén su documento de usuario de Firestore
        this.firestore.collection('usuarios').doc(user.uid).get().subscribe(doc => {
          if (doc.exists) {
            const cursoGrado = doc.get('cursoGrado');
            const tipoUsuario = doc.get('tipo'); // Obtener el tipo de usuario

            // Redirigir a la página correspondiente según el tipo de usuario
            if (tipoUsuario === 'docente') {
              this.router.navigate(['/docente']);
            } else {
              this.redirectToCorrectPage(cursoGrado);
            }
          }
        });
      }
    });
  }

  async login() {
    try {
      // Inicia sesión en Firebase Authentication
      const credentials = await this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);

      // Consulta el curso del usuario en Firestore
      const userDoc = this.firestore.collection('usuarios').doc(credentials.user?.uid).get();
      userDoc.subscribe((doc) => {
        if (doc.exists) {
          const cursoGrado = doc.get('cursoGrado');
          const tipoUsuario = doc.get('tipo'); // Obtener el tipo de usuario

          // Guarda el ID del usuario en el localStorage si está disponible
          if (credentials.user) {
            localStorage.setItem('userId', credentials.user.uid);
          }

          // Muestra un Toast de éxito
          const toast = this.toastController.create({
            message: `¡Bienvenido, ${credentials.user?.email}! Sesión iniciada con éxito`,
            duration: 3000,
            position: 'top',
          });
          toast.then((toastInstance) => toastInstance.present());

          // Redirige al usuario a la página correspondiente según su tipo de usuario
          if (tipoUsuario === 'docente') {
            this.router.navigate(['/docente']);
          } else {
            this.redirectToCorrectPage(cursoGrado);
          }
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

  redirectToCorrectPage(cursoGrado: string | undefined) {
    // Redirige al usuario a la página correspondiente según su curso
    switch (cursoGrado) {
      case '1':
        this.router.navigate(['/levels/a/aplay']);
        break;
      case '2':
        this.router.navigate(['/levels/b/bplay']);
        break;
      case '3':
        this.router.navigate(['/levels/c/cplay']);
        break;
      default:
        this.router.navigate(['/home']); // Si no se selecciona ningún curso, redirige a la página home
        break;
    }
  }
}
