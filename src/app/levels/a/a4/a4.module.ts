import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A4PageRoutingModule } from './a4-routing.module';

import { A4Page } from './a4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A4PageRoutingModule
  ],
  declarations: [A4Page]
})
export class A4PageModule {}
