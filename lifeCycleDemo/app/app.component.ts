import {Component} from '@angular/core';

@Component({
	selector:'life-cycle-demo',
	template:`

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
