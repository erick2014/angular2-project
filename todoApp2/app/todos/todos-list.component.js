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
var TodosList = (function () {
    function TodosList() {
    }
    TodosList = __decorate([
        core_1.Component({
            selector: 'todos-list',
            inputs: ['todos'],
            template: "\n\t\t<ul class=\"list-group\">\n\t\t\t<div *ngFor=\"let todo of todos\">\n\t\t\t\t<li *ngIf=\"todo.completed==false\" class=\"list-group-item\"> <todo-item [todo]=\"todo\"></todo-item> </li>\n\t\t\t</div>\n\t\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodosList);
    return TodosList;
}());
exports.TodosList = TodosList;
//# sourceMappingURL=todos-list.component.js.map