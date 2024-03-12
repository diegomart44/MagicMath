// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Escucha los eventos de navegación para determinar cuándo ocultar el encabezado
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Verifica si la ruta actual es una de las rutas que deseas ocultar
        this.showHeader = !['/login', '/signup', '/login-docente', '/signup-docente'].includes(event.url);
      }
    });
  }
}

