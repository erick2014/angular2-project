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
var todo_model_1 = require('./shared/todo.model');
var AddTodo = (function () {
    function AddTodo() {
    }
    AddTodo.prototype.addTodo = function (title, description, responsible) {
        this.todos.push(new todo_model_1.Todo(title, description, responsible));
    };
    AddTodo = __decorate([
        core_1.Component({
            selector: 'add-todo',
            inputs: ['todos'],
            template: "\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-plus-sign\"></span>Add New Todo</h3>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel-body\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"titleInput\">Title:</label>\n\t\t\t\t\t<input id=\"titleInput\" class=\"form-control\" placeholder=\"Title\" #title />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"descriptionInput\">description:</label>\n\t\t\t\t\t<input id=\"descriptionInput\" class=\"form-control\" placeholder=\"Description\" #description />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"responsibleInput\">responsible:</label>\n\t\t\t\t\t<input id=\"responsibleInput\" class=\"form-control\" placeholder=\"Responsible\" #responsible />\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"addTodo(title.value,description.value,responsible.value)\">Add Todo</button>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AddTodo);
    return AddTodo;
}());
exports.AddTodo = AddTodo;
//# sourceMappingURL=add-todo.component.js.map