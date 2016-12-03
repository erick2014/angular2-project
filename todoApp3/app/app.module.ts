import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { myNgStyleMod } from './ngStyleComp/my-ng-style-mod.module';

@NgModule({
	declarations:[AppComponent],
	imports:[BrowserModule,myNgStyleMod],
	bootstrap:[AppComponent]
})

export class AppModule{}