import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B5PageRoutingModule } from './b5-routing.module';

import { B5Page } from './b5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B5PageRoutingModule
  ],
  declarations: [B5Page]
})
export class B5PageModule {}
