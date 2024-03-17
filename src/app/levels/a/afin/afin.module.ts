import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfinPageRoutingModule } from './afin-routing.module';

import { AfinPage } from './afin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfinPageRoutingModule
  ],
  declarations: [AfinPage]
})
export class AfinPageModule {}
