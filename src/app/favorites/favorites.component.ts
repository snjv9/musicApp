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
  
  //This component was called when clicked on onSubmit2 in app component
  //As this component is loaded getfav function is called inside favService which is an instance of data service.
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
      window.location.reload();  //live reloading has been enabled on deleting

    }
}
