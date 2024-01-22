import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Page } from './a2.page';

const routes: Routes = [
  {
    path: '',
    component: A2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2PageRoutingModule {}
