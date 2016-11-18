"use strict";
var core_1 = require("@angular/core");
var observable_array_1 = require("data/observable-array");
var example_service_1 = require("./example.service");
var AppComponent = (function () {
    function AppComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(AppComponent.prototype, "items", {
        get: function () {
            return this.dataItems;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.dataItems = new observable_array_1.ObservableArray(this._dataItemService.getItems());
    };
    AppComponent.prototype.onItemReordered = function (args) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            styles: ["\n        label {\n            height: 50;\n            border-width: 2;\n            border-color: black;\n        },\n        .odd {\n            background-color: red;\n        }    \n        .even {\n            background-color: blue;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [example_service_1.ExampleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map