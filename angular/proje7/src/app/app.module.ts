import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';//http client moddülü impor ettikl
import {NewsapiservicesService} from './service/newsapiservices.service';
import { MockapiComponent } from './mockapi/mockapi.component';
import { ApiComponent } from './api/api.component';
import { ProjeComponent } from './proje/proje.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    MockapiComponent,
    ApiComponent,
    ProjeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
