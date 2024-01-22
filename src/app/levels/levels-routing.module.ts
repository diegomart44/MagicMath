import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsPage } from './levels.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsPage
  },
  {
    path: 'a',
    loadChildren: () => import('./a/a.module').then( m => m.APageModule)
  },
  {
    path: 'b',
    loadChildren: () => import('./b/b.module').then( m => m.BPageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./c/c.module').then( m => m.CPageModule)
  },
  {
    path: 'd',
    loadChildren: () => import('./d/d.module').then( m => m.DPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsPageRoutingModule {}
