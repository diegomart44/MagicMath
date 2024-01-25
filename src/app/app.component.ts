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
        // Oculta el encabezado en la página de inicio de sesión (login)
        this.showHeader = event.url !== '/login';
      }
    });
  }
}
