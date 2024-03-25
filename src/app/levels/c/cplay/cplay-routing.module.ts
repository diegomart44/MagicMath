import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CplayPage } from './cplay.page';

const routes: Routes = [
  {
    path: '',
    component: CplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CplayPageRoutingModule {}
