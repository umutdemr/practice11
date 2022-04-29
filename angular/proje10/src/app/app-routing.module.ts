import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupComponent } from './mockup/mockup.component';

const routes: Routes = [

  {path:'',component:MockupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
