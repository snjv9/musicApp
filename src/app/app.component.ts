import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicApp';

  public movies = [];
  public movie: any;

  constructor(private _movieService: DataService, private router: Router) {}


  
  
  movieSearch(searching:String) {
  this.router.navigate(['/search',searching]);
  }
  

  }

  


