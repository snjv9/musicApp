import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  movies:[];
  constructor(private favService : DataService) { }

  ngOnInit() {
    this.favService.getfav()
    .subscribe(data =>{
      console.log(data);
      this.movies = data;
    })
  }
  removefav( id: number )
  {
    this.favService.delMov(id).subscribe();
      window.location.reload();

    }
}
