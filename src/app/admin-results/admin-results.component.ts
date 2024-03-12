<!-- admin-results.page.html -->
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
    <ion-title>Administrar Resultados</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Administrar Resultados</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-list>
    <!-- Filtros para curso, grado, escuela, sección, etc. -->
    <ion-item>
      <ion-label>Curso</ion-label>
      <ion-select placeholder="Seleccionar Curso" [(ngModel)]="selectedCurso">
        <!-- Opciones para los cursos -->
        <ion-select-option value="curso1">Curso 1</ion-select-option>
        <ion-select-option value="curso2">Curso 2</ion-select-option>
        <!-- Agrega más opciones según tus necesidades -->
      </ion-select>
    </ion-item>

    <!-- Agrega más filtros según tus necesidades (grado, escuela, sección, etc.) -->

    <!-- Botón para cargar los resultados según los filtros -->
    <ion-button expand="full" (click)="cargarResultados()">Cargar Resultados</ion-button>
  </ion-list>

  <!-- Lista de resultados -->
  <ion-list *ngIf="resultados$.length > 0">
    <ion-item *ngFor="let resultado of resultados$ | async">
      <ion-label>{{ resultado.alumno }}</ion-label>
      <ion-badge slot="end">{{ resultado.calificacion }}</ion-badge>
    </ion-item>
  </ion-list>
</ion-content>
