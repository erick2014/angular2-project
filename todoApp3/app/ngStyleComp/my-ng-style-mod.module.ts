import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { myNgStyleComp } from './my-ng-style-comp.component';

@NgModule({
	imports:[ CommonModule ],
	declarations:[ myNgStyleComp ],
	exports:[ myNgStyleComp ]
})

export class myNgStyleMod{ }