import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D5Page } from './d5.page';

const routes: Routes = [
  {
    path: '',
    component: D5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D5PageRoutingModule {}
