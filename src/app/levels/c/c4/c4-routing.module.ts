import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C4Page } from './c4.page';

const routes: Routes = [
  {
    path: '',
    component: C4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C4PageRoutingModule {}
