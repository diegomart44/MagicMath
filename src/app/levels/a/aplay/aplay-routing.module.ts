import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplayPage } from './aplay.page';

const routes: Routes = [
  {
    path: '',
    component: AplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplayPageRoutingModule {}
