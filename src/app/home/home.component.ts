import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  
  public movies = [];
  public movie: any;

  constructor(private _movieService: DataService, private router: Router) {}
  
  //As this component gets loaded ngOnInit funtion is called
  //here getToken fuction is called which is inside movieService
  //To get the data we have to subscribe 
  ngOnInit() {
      this._movieService.getToken().subscribe(data => {
        console.log(data);                              //The returned data is printed on console and is then  
        this.movies = data.results;                     //casted to movies array results is also a array.
      });
      
  }
  //moviefav function is called which is in _movieService of type dataService
  onSubmit1(movie: any) {
    return this._movieService.moviefav(movie).subscribe();
  }

  

  
}
