import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getToken(): Observable<any>{
    console.log("Inside get Token");
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c8d03dd80917dd0e75ca5ff67f379f6a&language=en-US&page=1')
  }
}
