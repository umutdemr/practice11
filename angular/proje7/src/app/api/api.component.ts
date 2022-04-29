import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  apinewsDisplay:any=[];

  ngOnInit(): void {
    this._services.apiNews().subscribe((result)=>{
      this.apinewsDisplay=result.articles;



    })
  }

}
