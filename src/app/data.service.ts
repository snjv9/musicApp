import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

//For handling CORS (Cross Origin Resource Sharing)
// const httpOptions : any    = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json;charset=UTF-8',
//     'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Allow-Methods': 'GET',
//     'Access-Control-Allow-Origin': '*',
//   })
// };



@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private router :ActivatedRoute,private http:HttpClient) { }

  movieSearch(value: any) {
    throw new Error("Method not implemented.");
  }
  url :any;
  value:any;
  getToken(): Observable<any>{
    
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c8d03dd80917dd0e75ca5ff67f379f6a&language=en-US&page=1')
  }

  getSearch(url: string): Observable<any> {
    return this.http.get<any>(url);
  
  }
  fetchDetails(value):Observable<any>{
     {
      this.url = 'https://api.themoviedb.org/3/movie/' + value.substring(1,) + '?api_key=c8d03dd80917dd0e75ca5ff67f379f6a&language=en-US';
      return this.http.get<any>(this.url);
    }
  }

  moviefav(movie: any): Observable<any> {
    console.log("hit");
    return this.http.put<any>('http://localhost:8081/api/v1/saveNewMovie', movie);
  }

  getfav(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/api/v1/getAllMovies');
  }
  delMov(id: number): Observable<any>{
    return this.http.delete<any>(`${'http://localhost:8081/api/v1/delete'}/${id}`);
  }
}
