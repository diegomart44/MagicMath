import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B3PageRoutingModule } from './b3-routing.module';

import { B3Page } from './b3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B3PageRoutingModule
  ],
  declarations: [B3Page]
})
export class B3PageModule {}
