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
var todo_model_1 = require('./todos/shared/todo.model');
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [
            new todo_model_1.Todo("My todo Item 1", "My Todo 1 Description", "Erick G."),
            new todo_model_1.Todo("My todo Item 2", "My Todo 2 Description", "Erick G."),
            new todo_model_1.Todo("My todo Item 3", "My Todo 3 Description", "Erick G.")
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h4>Todos List</h4>\n\t\t<h5>Number of Todos: <span class=\"badge\">{{todos.length}}</span></h5>\n\t\t<todos-list [todos]=\"todos\"></todos-list>\n\t\t<add-todo [todos]=\"todos\"></add-todo>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map