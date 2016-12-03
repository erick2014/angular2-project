import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { myNgStyleComp } from './ngStyleComp/my-ng-style.component';
import { myNgForComp } from './ngForComp/my-ng-for.component';

@NgModule({
	declarations:[AppComponent,myNgForComp,myNgStyleComp],
	imports:[BrowserModule],
	bootstrap:[AppComponent]
})

export class AppModule{}
