import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTouchPage } from './test-touch.page';

const routes: Routes = [
  {
    path: '',
    component: TestTouchPage
  },
  {
    path: 'modal-info',
    loadChildren: () => import('./modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTouchPageRoutingModule {}
