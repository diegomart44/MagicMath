import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CplayPageRoutingModule } from './cplay-routing.module';

import { CplayPage } from './cplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CplayPageRoutingModule
  ],
  declarations: [CplayPage]
})
export class CplayPageModule {}
