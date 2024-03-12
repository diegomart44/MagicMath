import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupDocentePageRoutingModule } from './signup-docente-routing.module';

import { SignupDocentePage } from './signup-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupDocentePageRoutingModule
  ],
  declarations: [SignupDocentePage]
})
export class SignupDocentePageModule {}
