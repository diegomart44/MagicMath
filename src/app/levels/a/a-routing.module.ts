import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APage } from './a.page';

const routes: Routes = [
  {
    path: '',
    component: APage
  },
  {
    path: 'a1',
    loadChildren: () => import('./a1/a1.module').then( m => m.A1PageModule)
  },
  {
    path: 'a2',
    loadChildren: () => import('./a2/a2.module').then( m => m.A2PageModule)
  },
  {
    path: 'a3',
    loadChildren: () => import('./a3/a3.module').then( m => m.A3PageModule)
  },
  {
    path: 'a4',
    loadChildren: () => import('./a4/a4.module').then( m => m.A4PageModule)
  },
  {
    path: 'a5',
    loadChildren: () => import('./a5/a5.module').then( m => m.A5PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APageRoutingModule {}
