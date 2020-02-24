import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ITodo } from '../interfaces/Itodo';
import { TodoService } from '../services/todo.service';
import { MatSort } from '@angular/material';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  diplayColumns: string[] = ['title', 'status', 'description', 'createdAt'];
  dataSource: MatTableDataSource<ITodo>;
  constructor(private TodoService: TodoService) { }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.TodoService.todoList);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
