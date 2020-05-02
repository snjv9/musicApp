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


  ngOnInit() {
      this._movieService.getToken().subscribe(data => {
        console.log(data);
        this.movies = data.results;
      });
      
  }
  
  
  
}
