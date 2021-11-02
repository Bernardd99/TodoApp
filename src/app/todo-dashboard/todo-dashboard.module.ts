import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { AddTodoFormComponent } from '../components/add-todo-form/add-todo-form.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveAddTodoFormComponent } from '../components/reactive-add-todo-form/reactive-add-todo-form.component';

@NgModule({
  declarations: [
    TodoDashboardComponent,
    AddTodoFormComponent,
    NavbarComponent,
    TodoListComponent,
    ReactiveAddTodoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoDashboardComponent,
    AddTodoFormComponent,
    NavbarComponent,
    TodoListComponent,
    ReactiveAddTodoFormComponent
  ]
})
export class TodoDashboardModule { }
