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
var core_1 = require('@angular/core');
var lifeCycleEvent_1 = require('./lifeCycleEvent');
var AppComponent = (function () {
    function AppComponent() {
        this.lifeCycleEvents = [];
        this.value1 = "";
    }
    AppComponent.prototype.clearList = function () {
        this.lifeCycleEvents = [];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("MyApp", "ngOnInit"));
    };
    AppComponent.prototype.ngOnChanges = function (changeRecord) {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("MyApp", "ngOnChanges"));
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("MyApp", "ngDoCheck"));
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("MyApp", "ngAfterContentInit"));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<div class=\"panel panel-primary\">\n\t\t\t<div class=\"panel-heading\">Component Lifecycle Tracker</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>Input <input [(ngModel)]=\"value1\"/></p>\n\t\t\t\t\t<p> <strong>Value1 appx Component: {{value1}}</strong> </p>\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div>\n\t\t\t\t\t <test-component [lifeCycleEvents]=\"lifeCycleEvents\" [value1]=\"value1\"></test-component>\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary pull-right\" (click)=\"clearList()\">Clear List</button>\n\t\t\t\t\t<lifecycle-logger [lifeCycleEvents]=\"lifeCycleEvents\"></lifecycle-logger>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map