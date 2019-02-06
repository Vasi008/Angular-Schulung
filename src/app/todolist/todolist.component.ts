import { Component, OnDestroy} from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';
import { Router } from '@angular/router';
import { TodolistService } from '../todolist.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnDestroy {

todoText = '';
todos = [];
isEditMode = false;
updateTodoIndex = -1;
jokeText = '';
jokeService$;
active = true;


constructor(private chucknorrisService: ChucknorrisService, private router: Router, todolistService: TodolistService) {
this.jokeService$ = this.chucknorrisService.getJoke();
todolistService.loadJoke.pipe(
  takeWhile(() => this.active)
).subscribe(() => this.loadJoke());
}

ngOnDestroy() {
  this.active = false;
}

  addTodo() {
    if (this.todoText) {
      this.todos.push(this.todoText);
      this.todoText = '';
    }
  }
  loadJoke() {
    this.chucknorrisService.getJoke().subscribe(joke => {
      this.jokeText = joke.value;
    });
  }
  removeTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);

    this.chucknorrisService.getJoke().subscribe(joke => {
      this.jokeText = joke.value;
      this.chucknorrisService.lastJokeText = joke.value;
    });
  }
  editTodo(todoIndex: number) {
    this.isEditMode = true;
    this.updateTodoIndex = todoIndex;
    this.todoText = this.todos[todoIndex];
  }
  updateTodo() {
    this.todos[this.updateTodoIndex] = this.todoText;
    this.todoText = '';
    this.isEditMode = false;
    this.updateTodoIndex = -1;
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }


}
