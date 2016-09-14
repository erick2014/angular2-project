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
var AppComponent = (function () {
    function AppComponent() {
        this.todos = ["Todo 1", "Todo 2", "Todo 3"];
    }
    AppComponent.prototype.addTodo = function (todo) {
        console.log("adding a todo", todo);
        this.todos.push(todo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h4>Todos List</h4>\n\t  <h5>Number of Todos:<span class=\"badge\">{{todos.length}}</span></h5>\n\t  <ul class=\"list-group\">\n\t  \t<li *ngFor=\"let todo of todos\" class=\"list-group-item\">{{todo}}</li>\n\t  </ul>\n\t  <div class=\"form-inline\">\n\t  \t<input class=\"form-control\" #todotext />\n\t  \t<button class=\"btn btn-default\" (click)=\"addTodo(todotext.value)\">Add todo</button>  \n\t  </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map