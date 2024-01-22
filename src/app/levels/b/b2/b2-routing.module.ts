import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Page } from './b2.page';

const routes: Routes = [
  {
    path: '',
    component: B2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B2PageRoutingModule {}
