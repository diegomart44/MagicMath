import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D3Page } from './d3.page';

const routes: Routes = [
  {
    path: '',
    component: D3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D3PageRoutingModule {}
