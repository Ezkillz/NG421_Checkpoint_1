import { Component, OnInit, Input} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../interfaces/itodo'
import { ResetService } from '../services/reset.service'
import { TodoService } from '../services/todo.service';
import { NgModel} from '@angular/forms'

@Component({
  selector: 'app-new-edit-todo',
  templateUrl: './new-edit-todo.component.html',
  styleUrls: ['./new-edit-todo.component.css']
})
export class NewEditTodoComponent implements OnInit {

  @Input() updateTodo: ITodo;

  modalInstance: NgbModalRef;
  closeResult: string;
  todoTitle:string = '';
  todoDescript: string = '';
  
  constructor(private reset: ResetService, private todoService:TodoService, private modal:NgbModal ){ } 

  ngOnInit() {
    this.todoTitle = this.updateTodo.title;
    this.todoDescript = this.updateTodo.description;
  }
  editTodo(){
    let todoItem:ITodo = {description: this.todoDescript, 
      title: this.todoTitle, 
      status: this.updateTodo.status,
      id: this.updateTodo.id,
      createdAt: this.updateTodo.createdAt  
    };
    this.todoService.updateTodo(todoItem);
    this.modal.dismissAll();
    this.reset.resetView();
  }

  nvm(){

  }

}
