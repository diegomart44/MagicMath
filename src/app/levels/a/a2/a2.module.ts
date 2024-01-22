import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2PageRoutingModule } from './a2-routing.module';

import { A2Page } from './a2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2PageRoutingModule
  ],
  declarations: [A2Page]
})
export class A2PageModule {}
