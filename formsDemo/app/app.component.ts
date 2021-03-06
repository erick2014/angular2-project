import {Component} from '@angular/core';

@Component({
	selector:'key-up',
	template:`
		<div class="panel panel-primary">
			<div class="panel-heading">Angular 2 Event Binding Demo - Start typing here</div>
			<div class="panel-body">
				<div>Press any key here<input (keyup)="onKey($event)" /></div>
				<div>Trigger event when hit enter <input #a (keyup.enter)="onKeyEnter(a.value)" /></div>
				<hr/>
				<div>
					<h5>Resulting keyup events: <button class="btn btn-sm btn-primary pull-right" (click)="reset()">Reset</button> </h5>
					<br/>
					<table class="table table-condensed table-hover table-bordered">
						<thead>
							<th>#</th>
							<th>Event Type</th>
							<th>Event Timestamp</th>
							<th>Event Target</th>
							<th>Code</th>
							<th>Key</th>
							<th>Shift</th>
							<th>Ctrl</th>
							<th>Alt</th>
						</thead>
						<tbody>
							<tr *ngFor="let keyUpEvent of keyUpEvents, let i=index">
								<td>{{i+1}}</td>
								<td>{{keyUpEvent.type}}</td>
								<td>{{keyUpEvent.timeStamp}}</td>
								<td>{{keyUpEvent.target}}</td>
								<td>{{keyUpEvent.code}}</td>
								<td>{{keyUpEvent.key}}</td>
								<td>{{keyUpEvent.shiftKey}}</td>
								<td>{{keyUpEvent.ctrlKey}}</td>
								<td>{{keyUpEvent.altKey}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	`
})

export class KeyUpComponent{
	keyUpEvents:Array<Event>;
	testVar:String="";

	constructor(){
		this.keyUpEvents=[];
	}
	ngOnChanges(obj){
		console.log("changing prop",obj)
	}
	onKey(event:KeyboardEvent){
		this.keyUpEvents.push(event);
	}
	onKeyEnter(value){
		this.testVar=value;
		console.log("input value when hit enter",value)
	}
	reset(){
		this.keyUpEvents=[];
	}

}
