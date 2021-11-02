import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = "";

  addTodo() {
    const todo: Todo = {
      content: this.inputTodo,
      completed: false,
      isEdit: false
    }

    this.newTodoEvent.emit(todo)
    this.inputTodo =="";
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
