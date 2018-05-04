import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../movie';
import {RestService} from './rest.service';
import {of} from 'rxjs/observable/of';
import {Genre} from '../../genre';
import {Director} from '../../director';

@Injectable()
export class DirectorService {
  public endPoint: string = '/directors'

  constructor(public restService: RestService) {
  }

  public getAll(): Observable<Director[]>{
    return this.restService.get(this.endPoint);
  }

}
