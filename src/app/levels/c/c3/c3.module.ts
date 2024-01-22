import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C3PageRoutingModule } from './c3-routing.module';

import { C3Page } from './c3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C3PageRoutingModule
  ],
  declarations: [C3Page]
})
export class C3PageModule {}
