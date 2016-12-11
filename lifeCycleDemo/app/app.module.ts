import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { lifeCycleComponent } from './app.component';

@NgModule({
	declarations:[lifeCycleComponent],
	imports:[BrowserModule],
	bootstrap:[lifeCycleComponent]
})

export class AppModule{}
