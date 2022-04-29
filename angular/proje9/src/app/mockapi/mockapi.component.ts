import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'//*

@Component({
  selector: 'app-mockapi',
  templateUrl: './mockapi.component.html',
  styleUrls: ['./mockapi.component.css']
})
export class MockapiComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  mockapiheadDisplay:any=[];

  ngOnInit(): void {


    this._services.mockapihead().subscribe((result)=>{
      console.log(result)
      this.mockapiheadDisplay=result;
    })
  }

}
