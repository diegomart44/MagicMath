import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B1PageRoutingModule } from './b1-routing.module';

import { B1Page } from './b1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B1PageRoutingModule
  ],
  declarations: [B1Page]
})
export class B1PageModule {}
