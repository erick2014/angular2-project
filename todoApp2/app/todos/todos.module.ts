import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItem } from './todo-item.component';
import { TodosList } from './todos-list.component';
import { AddTodo } from './add-todo.component';

@NgModule({
	imports:[ CommonModule ],
	declarations:[ TodoItem,TodosList,AddTodo ],
	exports:[ TodosList,AddTodo ]
})

export class TodosModule{ }