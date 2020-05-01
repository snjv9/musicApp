import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public movies =[];
  public movie;
  constructor(private router :ActivatedRoute, private searchService : DataService) { }
  public text;

  ngOnInit() {
    const id = (this.router.snapshot.paramMap.get('searching'));
    this.text = 'https://api.themoviedb.org/3/search/movie?api_key=c8d03dd80917dd0e75ca5ff67f379f6a&language=en-US&query=' + id +"&page=1&include_adult=false";
    this.searchService.getSearch(this.text).subscribe(data=>{
      console.log(data);
      this.movies= data.results;
    })

  }

}
