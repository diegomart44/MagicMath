import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPage } from './c.page';

const routes: Routes = [
  {
    path: '',
    component: CPage
  },
  {
    path: 'c1',
    loadChildren: () => import('./c1/c1.module').then( m => m.C1PageModule)
  },
  {
    path: 'c2',
    loadChildren: () => import('./c2/c2.module').then( m => m.C2PageModule)
  },
  {
    path: 'c3',
    loadChildren: () => import('./c3/c3.module').then( m => m.C3PageModule)
  },
  {
    path: 'c4',
    loadChildren: () => import('./c4/c4.module').then( m => m.C4PageModule)
  },
  {
    path: 'c5',
    loadChildren: () => import('./c5/c5.module').then( m => m.C5PageModule)
  },
  {
    path: 'cplay',
    loadChildren: () => import('./cplay/cplay.module').then( m => m.CplayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPageRoutingModule {}
