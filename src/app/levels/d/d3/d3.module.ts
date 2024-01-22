import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D3PageRoutingModule } from './d3-routing.module';

import { D3Page } from './d3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D3PageRoutingModule
  ],
  declarations: [D3Page]
})
export class D3PageModule {}
