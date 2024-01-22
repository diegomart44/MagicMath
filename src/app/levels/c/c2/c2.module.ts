import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C2PageRoutingModule } from './c2-routing.module';

import { C2Page } from './c2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C2PageRoutingModule
  ],
  declarations: [C2Page]
})
export class C2PageModule {}
