import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A4Page } from './a4.page';

const routes: Routes = [
  {
    path: '',
    component: A4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A4PageRoutingModule {}
