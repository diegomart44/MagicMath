import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C3Page } from './c3.page';

const routes: Routes = [
  {
    path: '',
    component: C3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C3PageRoutingModule {}
