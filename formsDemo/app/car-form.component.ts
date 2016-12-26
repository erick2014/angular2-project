import {Component} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'car-form',
  templateUrl:'app/car-form.component.html'
})

export class CarFormComponent{
  fuelTypes=['Petrol','Diesel','Hybrid','Electric'];
  bodyStyles=['Convertibles','Coupes','Hatchbacks','Vans','Sedans','Suvs','Trucks','Wagons'];
  model= new Car( 1, 'BMW', 'X5', this.fuelTypes[1],this.bodyStyles[5],250);

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
