import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A3PageRoutingModule } from './a3-routing.module';

import { A3Page } from './a3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A3PageRoutingModule
  ],
  declarations: [A3Page]
})
export class A3PageModule {}
