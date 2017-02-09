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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app.component.html",
        styles: ["\n        label {\n            height: 50;\n            border-width: 2;\n            border-color: black;\n        },\n        .odd {\n            background-color: red;\n        }    \n        .even {\n            background-color: blue;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [example_service_1.ExampleService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQywwREFBd0Q7QUFFeEQscURBQW1EO0FBb0JuRCxJQUFhLFlBQVk7SUFHckIsc0JBQW9CLGdCQUFnQztRQUFoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO0lBQ3BELENBQUM7SUFFRCxzQkFBSSwrQkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNNLHNDQUFlLEdBQXRCLFVBQXVCLElBQXVCO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxZQUFZO0lBakJ4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxNQUFNLEVBQUUsQ0FBQyxrUUFZUixDQUFDO0tBQ0wsQ0FBQztxQ0FJd0MsZ0NBQWM7R0FIM0MsWUFBWSxDQWdCeEI7QUFoQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRXhhbXBsZVNlcnZpY2UgfSBmcm9tIFwiLi9leGFtcGxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIC5vZGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9ICAgIFxuICAgICAgICAuZXZlbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZGF0YUl0ZW1zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBFeGFtcGxlU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldEl0ZW1zKCkpO1xuICAgIH1cbiAgICBwdWJsaWMgb25JdGVtUmVvcmRlcmVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSByZW9yZGVyZWQuIE9sZCBpbmRleDogXCIgKyBhcmdzLml0ZW1JbmRleCArIFwiIFwiICsgXCJuZXcgaW5kZXg6IFwiICsgYXJncy5kYXRhLnRhcmdldEluZGV4KTtcbiAgICB9XG59XG4iXX0=