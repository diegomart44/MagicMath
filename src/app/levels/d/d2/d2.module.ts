import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D2PageRoutingModule } from './d2-routing.module';

import { D2Page } from './d2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D2PageRoutingModule
  ],
  declarations: [D2Page]
})
export class D2PageModule {}
