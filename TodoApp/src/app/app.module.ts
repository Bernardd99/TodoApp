import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard/todo-dashboard.component';
import { TodoDashboardModule } from './todo-dashboard/todo-dashboard.module';
import { CommonModule } from '@angular/common';
import { ReactiveAddTodoFormComponent } from './components/reactive-add-todo-form/reactive-add-todo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // TodoListComponent,
    // AddTodoFormComponent,
    // TodoDashboardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    TodoDashboardModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
