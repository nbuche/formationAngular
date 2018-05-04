import { Component, OnInit } from '@angular/core';
import {MOVIES} from '../../../assets/movies.data';
import {GENRES} from '../../../assets/genres.data';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../shared/services/movie.service';
import {Movie} from '../../movie';
import {Genre} from '../../genre';
import {GenreService} from '../../shared/services/genre.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies : Movie[];
  public genresList : Genre[];

  constructor(public route: ActivatedRoute, public movieService: MovieService, public genreService : GenreService ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {
        const filterGenre = params.get('genres');
        if (filterGenre) {
          this.movieService.getByGenre(filterGenre).subscribe(data => this.movies = data);
        }else{
          this.movieService.getAll().subscribe(data => this.movies = data);
        }
      });
    this.genreService.getAll().subscribe(data => this.genresList = data);
  }

}
