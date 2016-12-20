import {Component,Input} from '@angular/core';
import {LifeCycleEvent} from './lifeCycleEvent';

@Component({
  selector:'lifecycle-logger',
  template:`
  <div>
    <h5>List of LifeCycle Events of Component:</h5>
    <br/>
    <table class="table table-condensed table-hover table-bordered">
      <thead>
        <th>#</th>
        <th>Component Name</th>
        <th>Event Name</th>
      </thead>
      <tbody>
        <tr *ngFor="let lifecycle of lifeCycleEvents, let i =index">
          <td>{{i+1}}</td>
          <td>{{lifecycle.componentName}}</td>
          <td>{{lifecycle.eventName}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})

export class LifeCycleLogger{

  @Input() lifeCycleEvents:Array<LifeCycleEvent>;

  ngOnInit(){
    this.lifeCycleEvents.push( new LifeCycleEvent("LifeCycleLogger","ngOnInit") );
  }

  ngOnChanges( changeRecord ){
    this.lifeCycleEvents.push( new LifeCycleEvent("LifeCycleLogger","ngOnChanges") );
  }

  ngDoCheck(){
    this.lifeCycleEvents.push( new LifeCycleEvent("LifeCycleLogger","ngDoCheck") );
  }

}
