import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplayPageRoutingModule } from './aplay-routing.module';

import { AplayPage } from './aplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplayPageRoutingModule
  ],
  declarations: [AplayPage]
})
export class AplayPageModule {}
