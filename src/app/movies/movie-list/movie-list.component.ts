import { Component, OnInit } from '@angular/core';
import {MOVIES} from '../../../assets/movies.data';
import {GENRES} from '../../../assets/genres.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies = MOVIES;
  public genresList = GENRES;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {
        const genre = params.get('genre');
        if (genre !== null) {
          this.movies = MOVIES.filter(movie => movie.genres.indexOf(genre) > -1);
        }else{
          this.movies = MOVIES;
        }
      });
  }

}
