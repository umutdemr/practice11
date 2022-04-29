import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'//*
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }//*
  newsApiUrl="https://5b96285652764b001413bbd1.mockapi.io/api/data";
  mockapihead():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
    }
}
