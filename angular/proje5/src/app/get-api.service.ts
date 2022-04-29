import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }
  apiCall(){
    return this.http.get('https://5b96285652764b001413bbd1.mockapi.io/api/data')
  }
}
