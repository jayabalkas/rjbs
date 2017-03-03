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
var bs_service_1 = require("../shared/bs.service");
var report_component_1 = require("./report.component");
var ReportModule = (function () {
    function ReportModule() {
    }
    return ReportModule;
}());
ReportModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forChild([
                { path: 'report', component: report_component_1.ReportComponent }
            ])
        ],
        declarations: [report_component_1.ReportComponent],
        providers: [bs_service_1.BSService]
    })
], ReportModule);
exports.ReportModule = ReportModule;
//# sourceMappingURL=report.module.js.map