import {Component, Input} from '@angular/core';
import {LifeCycleEvent} from './lifeCycleEvent';

@Component({
    selector: 'test-component',
    template: `
    <div class="panel panel-warning">
      <div class="panel-heading">Test Component</div>
      <div class="panel-body">
        <p>Input: <input [(ngModel)]="value1" /></p>
        <p><strong>Value1:{{value1}}</strong></p>
      </div>
    </div>
  `
})

export class TestComponent {
    @Input() lifeCycleEvents: Array<LifeCycleEvent>;
    @Input() value1: string;

    ngOnInit() {
      this.lifeCycleEvents.push(new LifeCycleEvent("TestComponent", "ngOnInit"));
    }

    ngOnChanges(changeRecord) {
      this.lifeCycleEvents.push(new LifeCycleEvent("TestComponent", "ngOnChanges"+JSON.stringify(changeRecord)));
    }

    ngDoCheck(){
      this.lifeCycleEvents.push( new LifeCycleEvent("TestComponent","ngDoCheck")  );
    }

    ngAfterContentInit(){
      this.lifeCycleEvents.push( new LifeCycleEvent("TestComponent","ngAfterContent") )
    }

}
