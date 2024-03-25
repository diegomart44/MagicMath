import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BPage } from './b.page';

const routes: Routes = [
  {
    path: '',
    component: BPage
  },
  {
    path: 'b1',
    loadChildren: () => import('./b1/b1.module').then( m => m.B1PageModule)
  },
  {
    path: 'b2',
    loadChildren: () => import('./b2/b2.module').then( m => m.B2PageModule)
  },
  {
    path: 'b3',
    loadChildren: () => import('./b3/b3.module').then( m => m.B3PageModule)
  },
  {
    path: 'b4',
    loadChildren: () => import('./b4/b4.module').then( m => m.B4PageModule)
  },
  {
    path: 'b5',
    loadChildren: () => import('./b5/b5.module').then( m => m.B5PageModule)
  },
  {
    path: 'bplay',
    loadChildren: () => import('./bplay/bplay.module').then( m => m.BplayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BPageRoutingModule {}
