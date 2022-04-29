import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { MockapiComponent } from './mockapi/mockapi.component';
import { ProjeComponent } from './proje/proje.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},//kendi çektiğim api 
  {path:'mock',component:MockapiComponent},//mock api
  {path:'api',component:ApiComponent},// api component
  {path:'proje',component:ProjeComponent},//proje component


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
