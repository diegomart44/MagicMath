import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A3Page } from './a3.page';

const routes: Routes = [
  {
    path: '',
    component: A3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A3PageRoutingModule {}
