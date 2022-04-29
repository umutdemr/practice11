import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'
@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.css']
})
export class MockupComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }
  mockApiDisplay:any =[];
  term;

  ngOnInit(): void {


    this._service.mockApi().subscribe((result)=>{
      console.log(result);
      this.mockApiDisplay=result
    })


  }

}
