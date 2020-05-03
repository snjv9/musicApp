import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie ;
  public search_url;

  constructor(private showService:DataService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params =>
      this.movie = params['id']);
    this.showService.fetchDetails(this.movie).subscribe(data => this.movie = data);
  
  }
  

}
