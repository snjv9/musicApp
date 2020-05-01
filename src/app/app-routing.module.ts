import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'search/:searching',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'second-page',component:SecondPageComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,LoginComponent,SearchComponent,SecondPageComponent];
