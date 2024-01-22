import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C1PageRoutingModule } from './c1-routing.module';

import { C1Page } from './c1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C1PageRoutingModule
  ],
  declarations: [C1Page]
})
export class C1PageModule {}
