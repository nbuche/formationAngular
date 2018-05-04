import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../movie';
import {RestService} from './rest.service';
import {of} from 'rxjs/observable/of';
import {Genre} from '../../genre';
import {Actor} from '../../actor';

@Injectable()
export class ActorService {
  public endPoint: string = '/actors'

  constructor(public restService: RestService) {
  }

  public getAll(): Observable<Actor[]>{
    return this.restService.get(this.endPoint);
  }

}
