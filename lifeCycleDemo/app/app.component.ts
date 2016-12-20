import {Component} from '@angular/core';
import {LifeCycleEvent} from './lifeCycleEvent';

@Component({
	selector:'my-app',
	template:`
		<div class="panel panel-primary">
			<div class="panel-heading">Component Lifecycle Tracker</div>
			<div class="panel-body">
				<div>
					<p>Input <input [(ngModel)]="value1"/></p>
					<p> <strong>Value1 appx Component: {{value1}}</strong> </p>
				</div>
				<hr/>
				<div>
					 <test-component [lifeCycleEvents]="lifeCycleEvents" [value1]="value1"></test-component>
				</div>
				<hr/>
				<div>
					<button class="btn btn-sm btn-primary pull-right" (click)="clearList()">Clear List</button>
					<lifecycle-logger [lifeCycleEvents]="lifeCycleEvents"></lifecycle-logger>
				</div>
			</div>
		</div>
	`
})

export class AppComponent{
	lifeCycleEvents:Array<LifeCycleEvent>;
	value1:string;

	constructor(){
		this.lifeCycleEvents=[];
		this.value1="";
	}
	clearList(){
		this.lifeCycleEvents=[];
	}
	ngOnInit(){
		this.lifeCycleEvents.push(new LifeCycleEvent("MyApp","ngOnInit"));
	}

	ngOnChanges(changeRecord){
		this.lifeCycleEvents.push(new LifeCycleEvent("MyApp","ngOnChanges"));
	}

	ngDoCheck(){
		this.lifeCycleEvents.push(new LifeCycleEvent("MyApp","ngDoCheck")  );
	}

	ngAfterContentInit(){
		this.lifeCycleEvents.push(new LifeCycleEvent("MyApp","ngAfterContentInit") );
	}

}
