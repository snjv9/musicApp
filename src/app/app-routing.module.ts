import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {FavoritesComponent} from './favorites/favorites.component'
import { from } from 'rxjs';

//These are the defined routes
const routes: Routes = [
  {path:'details/:id',component:MovieDetailsComponent},
  {path:'search/:searching',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'second-page',component:SecondPageComponent},
  {path:'favorites',component:FavoritesComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,LoginComponent,SearchComponent,
                                SecondPageComponent,MovieDetailsComponent,FavoritesComponent];
