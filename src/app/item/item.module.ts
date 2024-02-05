import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ItemModule { }
