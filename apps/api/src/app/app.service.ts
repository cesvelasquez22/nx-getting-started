import { Injectable } from '@nestjs/common';
import { ITodo } from '@myorg/data';

@Injectable()
export class AppService {
  todos: ITodo[] = [
    {
      title: 'Todo 1'
    },
    {
      title: 'Todo 2'
    },
    {
      title: 'Todo 3'
    },
  ]
  getData(): ITodo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    })
  }
}
