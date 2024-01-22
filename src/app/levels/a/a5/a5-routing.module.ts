import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A5Page } from './a5.page';

const routes: Routes = [
  {
    path: '',
    component: A5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A5PageRoutingModule {}
