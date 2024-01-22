import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B4PageRoutingModule } from './b4-routing.module';

import { B4Page } from './b4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B4PageRoutingModule
  ],
  declarations: [B4Page]
})
export class B4PageModule {}
