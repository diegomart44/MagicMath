import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  async login() {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (result) {
        // Usuario autenticado correctamente, redirige a la página deseada
        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      console.error(error);
      // Maneja el error de autenticación aquí (puedes mostrar un mensaje al usuario, por ejemplo)
    }
  }
}
