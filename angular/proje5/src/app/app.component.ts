import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import {GetApiService} from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proje5';
  constructor(private api:GetApiService){

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data)=>
    {
      console.warn("get api data",data);
    })
  }
}
