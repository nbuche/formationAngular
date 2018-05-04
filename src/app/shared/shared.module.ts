import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LimitPipe} from './pipe/limit.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import {RestService} from './services/rest.service';
import {MovieService} from './services/movie.service';
import {GenreService} from './services/genre.service';
import {ActorService} from './services/actor.service';
import {DirectorService} from './services/director.service';


@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [
    LimitPipe
  ],
  providers: [
    InMemoryDataService,
    RestService,
    MovieService,
    GenreService,
    ActorService,
    DirectorService
  ],
  exports: [
    LimitPipe
  ]
})

export class SharedModule {}
