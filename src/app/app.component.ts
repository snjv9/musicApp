import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User, Role } from './_models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicApp';
  currentUser: User;


  public movies = [];
  public movie: any;

  //As this component is loaded, this constructor gets called and these services are initiated.
  //Also app.component.html is loaded
  constructor(private _movieService: DataService, private router: Router,
    private authenticationService: AuthenticationService)
     {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }



  
  //movieSearch function tells to navigate to search component with a parameter
  movieSearch(searching:String) {
  this.router.navigate(['/search',searching]);
  }

  //onSubmit2 function tells to navigate to favorites component
  onSubmit2(){
    this.router.navigate(['/favorites']);
  }


get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  }

  


