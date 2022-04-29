import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockapiComponent } from './mockapi/mockapi.component';

const routes: Routes = [
  {path:'proje',component:MockapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
