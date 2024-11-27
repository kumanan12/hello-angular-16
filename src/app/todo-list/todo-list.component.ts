import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: any[] = [];
  //inject todo service
  constructor(private todoService: TodoService) {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe(this.onDataFecth.bind(this));
  }

  onDataFecth(data: any) {
    this.todoItems = data;
    console.log(data);
  }


}
