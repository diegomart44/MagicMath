import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D2Page } from './d2.page';

const routes: Routes = [
  {
    path: '',
    component: D2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D2PageRoutingModule {}
