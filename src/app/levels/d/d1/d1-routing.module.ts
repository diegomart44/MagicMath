import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D1Page } from './d1.page';

const routes: Routes = [
  {
    path: '',
    component: D1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D1PageRoutingModule {}
