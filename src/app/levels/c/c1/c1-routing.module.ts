import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C1Page } from './c1.page';

const routes: Routes = [
  {
    path: '',
    component: C1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C1PageRoutingModule {}
