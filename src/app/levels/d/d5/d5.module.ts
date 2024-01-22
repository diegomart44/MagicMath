import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D5PageRoutingModule } from './d5-routing.module';

import { D5Page } from './d5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D5PageRoutingModule
  ],
  declarations: [D5Page]
})
export class D5PageModule {}
