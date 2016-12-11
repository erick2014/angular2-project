import {Component} from '@angular/core';

@Component({
	selector:'life-cycle',
	template:`
		<div class="panel panel-primary">
			<div class="panel-heading">Component Lifecycle Tracker</div>
			<div class="panel-body">
				<div>
					<h5>List of LifeCycle Events of Component
					<button class="btn btn-sm btn-primary pull-right" (click)="reset()">Reset</button></h5>
					<br/>
					<table class="table table-condensed table-hover table-bordered">
						<thead>
							<th>#</th>
							<th>Lifecycle Event</th>
						</thead>
						<tbody>
							<tr *ngFor="let lifeCycleEvent of lifeCycleEvents, let i=index">
								<td>{{i+1}}</td>
								<td>{{lifeCycleEvent}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	`
})

export class lifeCycleComponent{
	lifeCycleEvents:Array<string>;

	constructor(){
		this.lifeCycleEvents=[];
	}
	reset(){
		this.lifeCycleEvents=[];
	}
	ngOnInit(){
		this.lifeCycleEvents.push("ngOnInit");
	}

}
