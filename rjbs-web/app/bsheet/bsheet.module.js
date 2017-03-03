"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var bsheet_component_1 = require("./bsheet.component");
var bs_service_1 = require("../shared/bs.service");
var BsheetModule = (function () {
    function BsheetModule() {
    }
    return BsheetModule;
}());
BsheetModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'bsheet', component: bsheet_component_1.BsheetComponent }
            ])
        ],
        declarations: [bsheet_component_1.BsheetComponent],
        providers: [bs_service_1.BSService]
    })
], BsheetModule);
exports.BsheetModule = BsheetModule;
//# sourceMappingURL=bsheet.module.js.map