import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A5PageRoutingModule } from './a5-routing.module';

import { A5Page } from './a5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A5PageRoutingModule
  ],
  declarations: [A5Page]
})
export class A5PageModule {}
