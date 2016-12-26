"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var car_1 = require("./car");
var CarFormComponent = (function () {
    function CarFormComponent() {
        this.fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
        this.bodyStyles = ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'];
        this.model = new car_1.Car(1, 'BMW', 'X5', this.fuelTypes[1], this.bodyStyles[5], 250);
    }
    Object.defineProperty(CarFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return CarFormComponent;
}());
CarFormComponent = __decorate([
    core_1.Component({
        selector: 'car-form',
        templateUrl: 'app/car-form.component.html'
    }),
    __metadata("design:paramtypes", [])
], CarFormComponent);
exports.CarFormComponent = CarFormComponent;
//# sourceMappingURL=car-form.component.js.map