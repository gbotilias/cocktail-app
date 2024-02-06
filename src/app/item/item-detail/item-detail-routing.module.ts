import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail.component';
import { DetailResolveService } from 'src/app/_services/detail-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: ItemDetailComponent,
    resolve: {data: DetailResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDetailRoutingModule { }
