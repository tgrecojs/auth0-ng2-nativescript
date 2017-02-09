"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var example_service_1 = require("./example.service");
/** Import LISTVIEW_DIRECTIVES from nativescript-telerik-ui/listview/angular */
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            angular_1.LISTVIEW_DIRECTIVES,
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [platform_1.NativeScriptModule],
        providers: [example_service_1.ExampleService]
    })
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRywwREFBZ0c7QUFDaEcsc0NBQXlDO0FBQ3pDLGlEQUErQztBQUMvQyxxREFBbUQ7QUFDbkQsK0VBQStFO0FBQy9FLG9FQUErRTtBQVcvRSxJQUFNLGtCQUFrQjtJQUF4QjtJQUEwQixDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQXJCLGtCQUFrQjtJQVJ2QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViw2QkFBbUI7WUFDbkIsNEJBQVk7U0FBQztRQUNqQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLDZCQUFrQixDQUFDO1FBQzdCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDOUIsQ0FBQztHQUNJLGtCQUFrQixDQUFHO0FBRTNCLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsIE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhhbXBsZVNlcnZpY2UgfSBmcm9tICcuL2V4YW1wbGUuc2VydmljZSc7XG4vKiogSW1wb3J0IExJU1RWSUVXX0RJUkVDVElWRVMgZnJvbSBuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyICovXG5pbXBvcnQgeyBMSVNUVklFV19ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTElTVFZJRVdfRElSRUNUSVZFUyxcbiAgICAgICAgQXBwQ29tcG9uZW50XSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW0V4YW1wbGVTZXJ2aWNlXVxufSlcbmNsYXNzIEFwcENvbXBvbmVudE1vZHVsZSB7fVxuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwQ29tcG9uZW50TW9kdWxlKTsiXX0=