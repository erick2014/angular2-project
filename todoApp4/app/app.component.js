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
var KeyUpComponent = (function () {
    function KeyUpComponent() {
        this.keyUpEvents = [];
    }
    KeyUpComponent.prototype.onKey = function (event) {
        this.keyUpEvents.push(event);
    };
    KeyUpComponent.prototype.onKeyEnter = function (value) {
        console.log("input value when hit enter", value);
    };
    KeyUpComponent.prototype.reset = function () {
        this.keyUpEvents = [];
    };
    return KeyUpComponent;
}());
KeyUpComponent = __decorate([
    core_1.Component({
        selector: 'key-up',
        template: "\n\t\t<div class=\"panel panel-primary\">\n\t\t\t<div class=\"panel-heading\">Angular 2 Event Binding Demo - Start typing here</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div>Press any key here<input (keyup)=\"onKey($event)\" /></div>\n\t\t\t\t<div>Trigger event when hit enter <input #a (keyup.enter)=\"onKeyEnter(a.value)\" /></div>\n\t\t\t\t<hr/>\n\t\t\t\t<div>\n\t\t\t\t\t<h5>Resulting keyup events: <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"reset()\">Reset</button> </h5>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<table class=\"table table-condensed table-hover table-bordered\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t<th>Event Type</th>\n\t\t\t\t\t\t\t<th>Event Timestamp</th>\n\t\t\t\t\t\t\t<th>Event Target</th>\n\t\t\t\t\t\t\t<th>Code</th>\n\t\t\t\t\t\t\t<th>Key</th>\n\t\t\t\t\t\t\t<th>Shift</th>\n\t\t\t\t\t\t\t<th>Ctrl</th>\n\t\t\t\t\t\t\t<th>Alt</th>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let keyUpEvent of keyUpEvents, let i=index\">\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.type}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.timeStamp}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.target}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.code}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.key}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.shiftKey}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.ctrlKey}}</td>\n\t\t\t\t\t\t\t\t<td>{{keyUpEvent.altKey}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [])
], KeyUpComponent);
exports.KeyUpComponent = KeyUpComponent;
//# sourceMappingURL=app.component.js.map