import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPageRoutingModule } from './c-routing.module';

import { CPage } from './c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPageRoutingModule
  ],
  declarations: [CPage]
})
export class CPageModule {}
