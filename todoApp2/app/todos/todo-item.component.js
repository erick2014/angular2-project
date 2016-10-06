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
var TodoItem = (function () {
    function TodoItem() {
    }
    TodoItem.prototype.deleteTodo = function () {
        this.todo.setToCompleted();
    };
    TodoItem = __decorate([
        core_1.Component({
            selector: 'todo-item',
            inputs: ['todo'],
            template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8\"> <strong>{{todo.title}}</strong> </div>\n\t\t\t<div class=\"col-md-4\" align=\"right\"> \n\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>{{todo.responsible}}\n\t\t\t</div>\n\t\t</div>\n\t\t<hr>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">{{todo.description}}</div>\n\t\t</div>\n\t\t<hr>\n\t\t<div align=\"right\" class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<button class=\"btn btn-danger btn-sm\" (click)=\"deleteTodo()\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>Delete\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=todo-item.component.js.map