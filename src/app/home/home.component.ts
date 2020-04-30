import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  public movies = [];
  public movie: any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getToken().subscribe(data=>{
      console.log(data);
      //this.movies = data.results;

    })
  }



}
