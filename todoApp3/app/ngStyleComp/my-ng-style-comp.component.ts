import {Component} from '@angular/core';

@Component({

	selector:'my-ng-style-comp',
	template:
	`
	<div class="panel panel-default">
		
		<div class="panel-heading">
			<h3 class="panel-title">Set Styles</h3>
		</div>
	
		<div class="panel-body">
			
			<div class="form-group">
				<label for="color">Color:</label>
				<input type="text" name="color" value="{{color}}" #colorinput />
			</div>
			
			<div class="form-group">
				<label for="background">Background Color:</label>
				<input type="text" name="bgcolor" value="{{bgcolor}}" #bgcolorinput />
			</div>

			<div class="form-group">
				<label for="background">Font size:</label>
				<input type="text" name="fontSize" value="{{fontSize}}" #fontinput />
			</div>

			<div>
				<button class="btn btn-default" (click)="applyStyles(colorinput.value,bgcolorinput.value,fontinput.value)">Apply Styles</button>
			</div>

		</div>

	</div>

	<div class="panel panel-default">

		<div class="panel-heading">
			<h3 class="panel-title">Result</h3>
		</div>

		<div class="panel-body">
			<div [ngStyle]="{'color':color,'background-color':bgcolor,'font-size':fontSize}" align="center">
				This is the result!
			</div>
		</div>
	
	</div>
	`
})

export class myNgStyleComp{
	color: String;
	bgcolor: String;
	fontSize: Number;

	constructor(){
		this.color="black";
		this.bgcolor="white";
		this.fontSize=12;
	}

	applyStyles(color,bgcolor,fontSize){
		this.color=color;
		this.bgcolor=bgcolor;
		this.fontSize=fontSize;
	}
}

