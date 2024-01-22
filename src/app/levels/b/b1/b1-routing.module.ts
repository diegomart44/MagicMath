import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B1Page } from './b1.page';

const routes: Routes = [
  {
    path: '',
    component: B1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B1PageRoutingModule {}
