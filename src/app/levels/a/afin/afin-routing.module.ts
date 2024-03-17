import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfinPage } from './afin.page';

const routes: Routes = [
  {
    path: '',
    component: AfinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfinPageRoutingModule {}
