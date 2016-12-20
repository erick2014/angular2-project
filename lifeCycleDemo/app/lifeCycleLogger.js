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
var lifeCycleEvent_1 = require("./lifeCycleEvent");
var LifeCycleLogger = (function () {
    function LifeCycleLogger() {
    }
    LifeCycleLogger.prototype.ngOnInit = function () {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("LifeCycleLogger", "ngOnInit"));
    };
    LifeCycleLogger.prototype.ngOnChanges = function (changeRecord) {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("LifeCycleLogger", "ngOnChanges"));
    };
    LifeCycleLogger.prototype.ngDoCheck = function () {
        this.lifeCycleEvents.push(new lifeCycleEvent_1.LifeCycleEvent("LifeCycleLogger", "ngDoCheck"));
    };
    return LifeCycleLogger;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LifeCycleLogger.prototype, "lifeCycleEvents", void 0);
LifeCycleLogger = __decorate([
    core_1.Component({
        selector: 'lifecycle-logger',
        template: "\n  <div>\n    <h5>List of LifeCycle Events of Component:</h5>\n    <br/>\n    <table class=\"table table-condensed table-hover table-bordered\">\n      <thead>\n        <th>#</th>\n        <th>Component Name</th>\n        <th>Event Name</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let lifecycle of lifeCycleEvents, let i =index\">\n          <td>{{i+1}}</td>\n          <td>{{lifecycle.componentName}}</td>\n          <td>{{lifecycle.eventName}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], LifeCycleLogger);
exports.LifeCycleLogger = LifeCycleLogger;
//# sourceMappingURL=lifeCycleLogger.js.map