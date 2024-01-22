import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B5Page } from './b5.page';

const routes: Routes = [
  {
    path: '',
    component: B5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B5PageRoutingModule {}
