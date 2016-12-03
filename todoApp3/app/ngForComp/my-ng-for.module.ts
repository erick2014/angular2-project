import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { myNgForComp } from './my-ng-for.component';

@NgModule({
	imports:[ CommonModule ],
	declarations:[ myNgForComp ],
	exports:[ myNgForComp ]
})

export class myNgForMod{ }
