import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ListResolveService } from 'src/app/_services/list-resolve.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItemListRoutingModule
  ],
  providers: [ListResolveService]
})
export class ItemListModule { }
