import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { DetailResolveService } from 'src/app/_services/detail-resolve.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItemDetailRoutingModule
  ],
  providers: [DetailResolveService]
})
export class ItemDetailModule { }
