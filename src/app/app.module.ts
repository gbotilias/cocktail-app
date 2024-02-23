import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemModule } from './item/item.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FetchDataInterceptor } from './_services/fetch-data-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FetchDataInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
