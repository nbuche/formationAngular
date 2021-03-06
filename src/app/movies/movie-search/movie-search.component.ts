import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../movie';
import {MovieService} from '../../shared/services/movie.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})

export class MovieSearchComponent implements OnInit {

  public movies$: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), switchMap((term: string) => this.movieService.searchMovies(term)));
  }
}

