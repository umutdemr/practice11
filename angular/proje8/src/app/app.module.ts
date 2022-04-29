import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockapiComponent } from './mockapi/mockapi.component';
import {HttpClientModule} from '@angular/common/http';//http client moddülü impor ettikl
import {NewsapiservicesService} from './service/newsapiservices.service';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    MockapiComponent,
    NavComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
