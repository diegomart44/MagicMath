import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BplayPageRoutingModule } from './bplay-routing.module';

import { BplayPage } from './bplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BplayPageRoutingModule
  ],
  declarations: [BplayPage]
})
export class BplayPageModule {}
