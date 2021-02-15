import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ITodo } from '@myorg/data';
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todos';

  todos: ITodo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<ITodo[]>(`/api/todos`).subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post(`/api/addTodo`, {}).subscribe(() => {
      this.fetch();
    })
  }
}
