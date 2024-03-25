// header.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { UserIdService } from '../services/user-id.service';

interface UserData {
  nombre: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userName: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore,
    private userIdService: UserIdService // Inject the UserIdService
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (user) {
        this.firestore.collection('usuarios').doc(user.uid).get().subscribe((doc) => {
          if (doc.exists) {
            const userData = doc.data() as UserData;
            this.userName = userData.nombre;
            this.userIdService.setUserId(user.uid); // Set the user ID in the service
          }
        });
      }
    });
  }

  logout() {
    this.userIdService.clearUserId(); // Clear the user ID when logging out
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
