import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditTodoComponent } from './new-edit-todo.component';

describe('NewEditTodoComponent', () => {
  let component: NewEditTodoComponent;
  let fixture: ComponentFixture<NewEditTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
