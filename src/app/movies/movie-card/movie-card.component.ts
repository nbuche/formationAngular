import { Component, OnInit, Input } from '@angular/core';
import {MOVIES} from '../../../assets/movies.data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  @Input() public movie;

  ngOnInit() {

  }

}
