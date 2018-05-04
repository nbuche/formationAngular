import { Component, OnInit } from '@angular/core';
import {Movie} from '../../movie';
import {DIRECTORS} from '../../../assets/directors.data';
import {GENRES} from '../../../assets/genres.data';
import {ACTORS} from '../../../assets/actors.data';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../shared/services/movie.service';
import {GenreService} from '../../shared/services/genre.service';
import {ActorService} from '../../shared/services/actor.service';
import {DirectorService} from '../../shared/services/director.service';
import {Director} from '../../director';
import {Genre} from '../../genre';
import {Actor} from '../../actor';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  public movie: Movie;
  public submitted: boolean;

  public directorsList: Director[];
  public genresList: Genre[];
  public actorsList: Actor[];

  constructor(public route: ActivatedRoute, public router: Router, public movieService: MovieService, public genreService: GenreService, public actorService: ActorService, public directorService: DirectorService) {
    this.submitted = false;
  }


  newMovie() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if (id) {
          this.movieService.getById(+id).subscribe(data => this.movie = data);
        }else{
          this.movie = new Movie(120,'','',[],[],[]);
        }
      });
  }

  onSubmit() {
    this.movieService.update(this.movie).subscribe(
      () => { this.router.navigate(['/movie/' + this.movie.id]);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this.movieService.getById(+id).subscribe(data => this.movie = data);

      });

    this.genreService.getAll().subscribe(data => this.genresList = data);
    this.actorService.getAll().subscribe(data => this.actorsList = data);
    this.directorService.getAll().subscribe(data => this.directorsList = data);
  }

  get diagnostic(){return JSON.stringify(this.movie)}

}
