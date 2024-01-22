import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D4Page } from './d4.page';

const routes: Routes = [
  {
    path: '',
    component: D4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D4PageRoutingModule {}
