import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicallserviceService {

  constructor(private http: HttpClient) { }

  getallmovieslist(){
    return this.http.get(environment.apiBaseUrl + '/getmoviesbycategory');
  }

  addnewmovie(category_name,title,profileImage: File): Observable<any> {
    const formData: any = new FormData();
    formData.append('category_name', category_name);
    formData.append('title', title);
    formData.append('avatar', profileImage);
    return this.http.post(environment.apiBaseUrl + '/addnewmovie', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


}
