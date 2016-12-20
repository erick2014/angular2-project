import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {LifeCycleLogger} from './lifeCycleLogger';
import {TestComponent} from './testComponent';

@NgModule({
	imports:[BrowserModule,FormsModule],
	declarations:[AppComponent,LifeCycleLogger,TestComponent],
	bootstrap:[AppComponent]
})

export class AppModule{}
