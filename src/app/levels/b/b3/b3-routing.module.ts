import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B3Page } from './b3.page';

const routes: Routes = [
  {
    path: '',
    component: B3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B3PageRoutingModule {}
