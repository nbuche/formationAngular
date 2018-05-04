import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../movie';
import {RestService} from './rest.service';
import {of} from 'rxjs/observable/of';
import {Genre} from '../../genre';

@Injectable()
export class GenreService {
  public endPoint: string = '/genres'

  constructor(public restService: RestService) {
  }

  public getAll(): Observable<Genre[]>{
    return this.restService.get(this.endPoint);
  }

}
