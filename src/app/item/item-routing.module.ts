import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'item-list',
    loadChildren: () => import('./item-list/item-list.module')
      .then(m => m.ItemListModule)
  },

  {
    path: 'item-detail',
    loadChildren: () => import('./item-detail/item-detail.module')
      .then(m => m.ItemDetailModule)
  },

  { path: '', redirectTo: 'item-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'item-list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
