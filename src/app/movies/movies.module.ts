import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieEditComponent} from './movie-edit/movie-edit.component';
import {SharedModule} from '../shared/shared.module';
import {MoviesRoutingModule} from './movies-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    SharedModule,
    MoviesRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieCardComponent,
    MovieEditComponent,
    MovieSearchComponent
  ],
  providers: [

  ],
  exports: [

  ]
})

export class MoviesModule {}
