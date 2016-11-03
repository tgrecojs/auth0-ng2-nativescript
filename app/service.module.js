"use strict";
var core_1 = require('@angular/core');
var example_service_1 = require('./example.service');
exports.ExampleService = example_service_1.ExampleService;
var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule,
            providers: [example_service_1.ExampleService]
        };
    };
    ServicesModule = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=service.module.js.map