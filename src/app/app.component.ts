import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'musicApp';

  public movies = [];
  public movie: any;

  constructor(private _movieService: DataService, private router: Router) {}


  ngOnInit() {
      this._movieService.getToken().subscribe(data => {
        console.log(data);
        this.movies = data.results;
      });
      
  }
  
  movieSearch(searching:String) {
  this.router.navigate(['/search',searching]);
  }
  display(){
    console.log("Done")
  }

  }

  


