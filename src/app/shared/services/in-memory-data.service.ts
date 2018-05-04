import { InMemoryDbService } from 'angular-in-memory-web-api';

import {MOVIES} from '../../../assets/movies.data';
import {ACTORS} from '../../../assets/actors.data';
import {DIRECTORS} from '../../../assets/directors.data';
import {GENRES} from '../../../assets/genres.data';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = MOVIES;
    const actors = ACTORS;
    const directors = DIRECTORS;
    const genres = GENRES;
    return {movies, actors, directors, genres};
  }
}
