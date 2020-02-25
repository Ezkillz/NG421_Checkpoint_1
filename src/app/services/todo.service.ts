import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/Itodo';
import { ReturnStatement } from '@angular/compiler';
import { throwError } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId: number = 0;
  todoList: ITodo [] = [
    // example of how to make an item in todo list
   //  { title: 'Install Angular CLI', id: this.todoId },
    {status:'todo', id: this.todoId, title: 'main', description: 'script', createdAt: new Date()}
  ]
  constructor() { 

  }
  status = ["todo", "doing", "done"]
  getTodosByStatus(status: string){
    console.log((!status.toLowerCase()))
    if(!status.toLowerCase()){
      return this.todoList
    }
    else{
      console.log(this.todoList)
     
      return this.todoList.filter(todo => todo.status.toLowerCase() === status.toLowerCase());
    }
}
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo):void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
    console.log(this.todoList)
  }
  getStatuses() { 
    return this.status;
  }
  updateTodo( newTodoItem: ITodo ){
    let oldTodoIndex = this.todoList.findIndex(todoItem => todoItem.id === newTodoItem.id);
    this.todoList[ oldTodoIndex] = {
      id: newTodoItem.id,
      status: newTodoItem.status,
      description: newTodoItem.description,
      createdAt: newTodoItem.createdAt,
      title: newTodoItem.title
    }
  }

  changeStatus(todoItem: ITodo, status: string){
 
    let todoItemIndex = this.todoList.findIndex(todo => todo.id === todoItem.id);
    this.todoList[ todoItemIndex].status= status;
  }

}
