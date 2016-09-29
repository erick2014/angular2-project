import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItem } from './todo-item.component';
import { TodosList } from './todos-list.component';

@NgModule({
	imports:[ CommonModule ],
	declarations:[ TodoItem,TodosList ],
	exports:[ TodosList ]
})

export class TodosModule{ }