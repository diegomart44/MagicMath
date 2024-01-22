import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B4Page } from './b4.page';

const routes: Routes = [
  {
    path: '',
    component: B4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B4PageRoutingModule {}
