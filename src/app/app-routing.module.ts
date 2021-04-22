import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path:'addmovies',component:AddmoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
