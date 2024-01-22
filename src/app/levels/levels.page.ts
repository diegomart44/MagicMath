import { Component, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnDestroy  {
  private sonidoFondo: HTMLAudioElement | null = null;
  constructor(private navCtrl: NavController) {}

  selectLevel(level: string) {
    // Puedes agregar lógica adicional según el nivel seleccionado
    this.navCtrl.navigateForward(`/level/${level}`);
    
  }
  ionViewDidEnter() {
    this.sonidoFondo = new Audio('assets/audio/audio3.mp3');
    this.sonidoFondo.loop = true;
    this.sonidoFondo.play();

    
  }

  ionViewWillLeave() {
    if (this.sonidoFondo) {
      this.sonidoFondo.pause();
    }
  }

  ngOnDestroy() {
    if (this.sonidoFondo) {
      this.sonidoFondo.pause();
      this.sonidoFondo = null;
    }
  }
  
  
}

