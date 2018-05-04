import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../shared/services/movie.service';
import {Movie} from '../../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie : Movie;

  constructor(public route: ActivatedRoute, public router: Router, public movieService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this.movieService.getById(+id).subscribe(data => this.movie = data)
      });
  }

  public delete() {
    this.movieService.delete(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }



}
