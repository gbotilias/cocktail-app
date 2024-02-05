import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list.component';
import { ListResolveService } from 'src/app/_services/list-resolve.service';

const routes: Routes = [
  {
    path:'',
    component:ItemListComponent,
    resolve: {data: ListResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListRoutingModule { }
