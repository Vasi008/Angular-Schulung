import { Component, OnInit } from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  jokeText = '';
  constructor(cuckNorrisservice: ChucknorrisService) {
    this.jokeText = cuckNorrisservice.lastJokeText;
  }



}
