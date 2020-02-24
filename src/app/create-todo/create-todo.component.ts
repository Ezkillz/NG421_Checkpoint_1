import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {ITodo} from '../interfaces/Itodo';
import { ResetService } from '../services/reset.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  todoTitle = ''
  todo:ITodo = {id:1, title:'string', status:'todo', description:'script', createdAt: new Date( )}
  constructor(private todoService : TodoService, private reset:ResetService) { }

  ngOnInit() {
  }
  addTodo():void {
    this.todoService.addTodo({
      title: this.todoTitle,
      status: 'Todo',
      createdAt: new Date(),
      description: ''
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.reset.resetView();
  }

}
