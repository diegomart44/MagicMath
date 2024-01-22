import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C5Page } from './c5.page';

const routes: Routes = [
  {
    path: '',
    component: C5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C5PageRoutingModule {}
