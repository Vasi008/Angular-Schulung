import { Component } from '@angular/core';
import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyToDoApp';

  constructor(private todolistService: TodolistService) {}

  loadJoke() {
    this.todolistService.loadJoke.next();
  }
}
