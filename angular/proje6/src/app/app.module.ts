import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';//http client moddülü impor ettikl
import {NewsapiservicesService} from './service/newsapiservices.service';//api servisini import ettik

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//importu projeye dahil ettik
  ],
  providers: [NewsapiservicesService],//importu projeye dahil ettik
  bootstrap: [AppComponent]
})
export class AppModule { }
