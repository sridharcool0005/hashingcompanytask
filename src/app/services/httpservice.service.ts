import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  getallmovieslist(){
    return this.http.get(environment.apiBaseUrl + '/getmoviesbycategory');
  }

}
