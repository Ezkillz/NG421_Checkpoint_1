import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  isEditing : boolean = false;
  statuses;
  todoTitle = ''
  constructor(private todoService : TodoService, private modalService : NgbModal) { }

  ngOnInit() {
    this.statuses = this.todoService.getStatuses();
  }
  async deleteTodo(todo){
    let result: string; //added a string 
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if(result === "yes") {
        this.todoService.deleteTodo(todo);
      }
    }
    catch(ex){
      
    }
  }

  async editTodo(todo) {
    let result;
    const modal = this.modalService.open(TodoEditComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      this.todo.description = result;
    }
    catch (ex){ }
  }


}
