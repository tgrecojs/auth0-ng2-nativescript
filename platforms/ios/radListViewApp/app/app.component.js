"use strict";
var core_1 = require("@angular/core");
var observable_array_1 = require("data/observable-array");
var service_module_1 = require("./service.module");
var AppComponent = (function () {
    function AppComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this._dataItems = new observable_array_1.ObservableArray(this._dataItemService.getItems());
    };
    AppComponent.prototype.onItemReordered = function (args) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    };
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            styles: ["\n        label {\n            background: orange;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [service_module_1.ExampleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map