import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//HttpClient import ettik
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  mockApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  apiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  projeUrl="https://5b96285652764b001413bbd1.mockapi.io/api/data";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newApiUrl);
  }
  //MockApi
  mockNews():Observable<any>
  {
    return this._http.get(this.mockApiUrl);
  }
  apiNews():Observable<any>
  {
    return this._http.get(this.apiUrl);
  }
  projeNews():Observable<any>
  {
    return this._http.get(this.projeUrl);
  }



}
