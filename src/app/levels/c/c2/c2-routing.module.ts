import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C2Page } from './c2.page';

const routes: Routes = [
  {
    path: '',
    component: C2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C2PageRoutingModule {}
