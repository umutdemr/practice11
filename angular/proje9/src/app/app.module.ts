import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockapiComponent } from './mockapi/mockapi.component';
import {HttpClientModule} from '@angular/common/http';//*
import {NewsapiservicesService} from './service/newsapiservices.service'//*

@NgModule({
  declarations: [
    AppComponent,
    MockapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//*
  ],
  providers: [NewsapiservicesService],//*
  bootstrap: [AppComponent]
})
export class AppModule { }
