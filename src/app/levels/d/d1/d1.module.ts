import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D1PageRoutingModule } from './d1-routing.module';

import { D1Page } from './d1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D1PageRoutingModule
  ],
  declarations: [D1Page]
})
export class D1PageModule {}
