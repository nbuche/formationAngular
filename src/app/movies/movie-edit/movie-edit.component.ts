import { Component, OnInit } from '@angular/core';
import {Movie} from '../../movie';
import {MOVIES} from '../../../assets/movies.data';
import {DIRECTORS} from '../../../assets/directors.data';
import {GENRES} from '../../../assets/genres.data';
import {ACTORS} from '../../../assets/actors.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  public model: Movie = MOVIES[0];
  public submitted: boolean;

  public directorsList = DIRECTORS;
  public genresList = GENRES;
  public actorsList = ACTORS;

  constructor(public route: ActivatedRoute) {

    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this.model = MOVIES[id];
      });
  }

  get diagnostic(){return JSON.stringify(this.model)}

  newMovie() {   this.model = new Movie(0,'','',[],[],[],'') }



}
