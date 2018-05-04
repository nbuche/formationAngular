import { NgModule } from '@angular/core';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent} from './movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {RouterModule, Routes} from '@angular/router';

const moviesRoutes: Routes = [
  { path: 'movie/:id/edit', component: MovieEditComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'movies', component: MovieListComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MoviesRoutingModule{}
