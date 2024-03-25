import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BplayPage } from './bplay.page';

const routes: Routes = [
  {
    path: '',
    component: BplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BplayPageRoutingModule {}
