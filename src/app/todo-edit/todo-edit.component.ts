import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  newDescription: string;
  modalInstance: NgbModalRef;
  
  constructor() { }

  ngOnInit() {
  }
  yes(){
    this.modalInstance.close(this.newDescription);
  }


}
