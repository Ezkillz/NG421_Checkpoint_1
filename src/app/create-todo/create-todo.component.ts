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
  todoTitle = '';
  todoDescription = '';
  todo:ITodo = {id:1, title:'string', status:'todo', description:'script', createdAt: new Date( )}
  constructor(private todoService : TodoService, private reset:ResetService) { }

  ngOnInit() {
  }
  addTodo():void {
    this.todoService.addTodo({
      title: this.todoTitle,
      status: 'Todo',
      createdAt: new Date(),
      description: this.todoDescription,
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoDescription = '';
    this.reset.resetView();
  }

}
