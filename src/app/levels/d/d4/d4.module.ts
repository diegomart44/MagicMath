import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D4PageRoutingModule } from './d4-routing.module';

import { D4Page } from './d4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D4PageRoutingModule
  ],
  declarations: [D4Page]
})
export class D4PageModule {}
