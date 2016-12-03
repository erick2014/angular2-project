import {Component} from '@angular/core';

@Component({
	selector:'my-ng-for',
	template:`<div>
		<ul>
			<li *ngFor="let item of numbers">item:{{item}}</li>
		</ul>
	</div>`
})

export class myNgForComp{
	numbers:Array<number>;
	constructor(){
		this.numbers=[1,2,3,4,5];
	}

}
