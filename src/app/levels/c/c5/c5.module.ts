import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C5PageRoutingModule } from './c5-routing.module';

import { C5Page } from './c5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C5PageRoutingModule
  ],
  declarations: [C5Page]
})
export class C5PageModule {}
