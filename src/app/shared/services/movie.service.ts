import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../movie';
import {RestService} from './rest.service';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MovieService {
  public endPoint: string = '/movies'

  constructor(public restService: RestService) {
  }

  public getAll(): Observable<Movie[]>{
    return this.restService.get(this.endPoint);
  }

  public getById(id: number): Observable<Movie> {
    const url = this.endPoint + '/' + id;
    return this.restService.get(url);
  }

  public add(movie: Movie): Observable<Movie> {
    return this.restService.post(this.endPoint, movie);
  }

  public update(movie: Movie): Observable<any> {
    return this.restService.put(this.endPoint, movie);
  }

  public delete(movie: Movie | number): Observable<any> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = this.endPoint + '/' + id;
    return this.restService.delete(url);
  }

  public getByGenre(genre: string): Observable<Movie[]> {
    if (!genre.trim()){
      return of([]);
    }
    return this.restService.get(this.endPoint + '/?genres=' + genre);
  }

  public searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]); }
      return this.restService.get('api/movies/?title=' + term); }

}
