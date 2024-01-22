import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DPageRoutingModule } from './d-routing.module';

import { DPage } from './d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DPageRoutingModule
  ],
  declarations: [DPage]
})
export class DPageModule {}
