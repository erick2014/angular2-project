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
var myNgStyleComp = (function () {
    function myNgStyleComp() {
        this.color = "black";
        this.bgcolor = "white";
        this.fontSize = 12;
    }
    myNgStyleComp.prototype.applyStyles = function (color, bgcolor, fontSize) {
        this.color = color;
        this.bgcolor = bgcolor;
        this.fontSize = fontSize;
    };
    myNgStyleComp = __decorate([
        core_1.Component({
            selector: 'my-ng-style-comp',
            template: "\n\t<div class=\"panel panel-default\">\n\t\t\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">Set Styles</h3>\n\t\t</div>\n\t\n\t\t<div class=\"panel-body\">\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"color\">Color:</label>\n\t\t\t\t<input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput />\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"background\">Background Color:</label>\n\t\t\t\t<input type=\"text\" name=\"bgcolor\" value=\"{{bgcolor}}\" #bgcolorinput />\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"background\">Font size:</label>\n\t\t\t\t<input type=\"text\" name=\"fontSize\" value=\"{{fontSize}}\" #fontinput />\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"applyStyles(colorinput.value,bgcolorinput.value,fontinput.value)\">Apply Styles</button>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"panel panel-default\">\n\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">Result</h3>\n\t\t</div>\n\n\t\t<div class=\"panel-body\">\n\t\t\t<div [ngStyle]=\"{'color':color,'background-color':bgcolor,'font-size':fontSize}\" align=\"center\">\n\t\t\t\tThis is the result!\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], myNgStyleComp);
    return myNgStyleComp;
}());
exports.myNgStyleComp = myNgStyleComp;
//# sourceMappingURL=my-ng-style.component.js.map