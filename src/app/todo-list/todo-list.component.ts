import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TodoService} from '../services/todo.service';
import{ResetService} from '../services/reset.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() status;
  @Input() reset:boolean;
  todoList: ITodo [] = [ ];
  constructor(private todoService : TodoService, private resetService:ResetService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodosByStatus(this.status)
    console.log(this.status)
    console.log(this.todoList)
  }

  get todolist(){
  return this.todoService.getTodosByStatus(this.status);
  }
}
