import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore
import { Router } from '@angular/router';

interface UserData {
  nombre: string;
  // Puedes añadir otros campos si los tienes
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userName: string = ''; // Cambia userEmail a userName
  showHeader: boolean = true;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore // Inyecta AngularFirestore
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (user) {
        // Si hay un usuario autenticado, busca su nombre en Firestore
        this.firestore.collection('usuarios').doc(user.uid).get().subscribe((doc) => {
          if (doc.exists) {
            const userData = doc.data() as UserData; // Utiliza la interfaz UserData para definir el tipo de los datos
            this.userName = userData.nombre;
          }
        });
      }
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
