import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DPage } from './d.page';

const routes: Routes = [
  {
    path: '',
    component: DPage
  },
  {
    path: 'd1',
    loadChildren: () => import('./d1/d1.module').then( m => m.D1PageModule)
  },
  {
    path: 'd2',
    loadChildren: () => import('./d2/d2.module').then( m => m.D2PageModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./d3/d3.module').then( m => m.D3PageModule)
  },
  {
    path: 'd4',
    loadChildren: () => import('./d4/d4.module').then( m => m.D4PageModule)
  },
  {
    path: 'd5',
    loadChildren: () => import('./d5/d5.module').then( m => m.D5PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DPageRoutingModule {}
