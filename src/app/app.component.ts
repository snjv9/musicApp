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

  //As this component is loaded, this constructor gets called and these services are initiated.
  //Also app.component.html is loaded
  constructor(private _movieService: DataService, private router: Router) {}



  
  //movieSearch function tells to navigate to search component with a parameter
  movieSearch(searching:String) {
  this.router.navigate(['/search',searching]);
  }

  //onSubmit2 function tells to navigate to favorites component
  onSubmit2(){
    this.router.navigate(['/favorites']);
  }

  }

  


