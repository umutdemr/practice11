import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'


@Component({
  selector: 'app-proje',
  templateUrl: './proje.component.html',
  styleUrls: ['./proje.component.css']
})
export class ProjeComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  projenewsDisplay:any=[];

  ngOnInit(): void  {
    this._services.apiNews().subscribe((result)=>{
      this.projenewsDisplay=result;

    });
  }

}
