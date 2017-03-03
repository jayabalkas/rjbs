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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var BSService = (function () {
    function BSService(_http) {
        this._http = _http;
    }
    BSService.prototype.saveEntry = function (entry) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(entry);
        console.log("body", body);
        return this._http.post('https://rjbs-sevices.cfapps.io/saveEntry', body, options).map(function (res) { return res.json(); });
    };
    BSService.prototype.loadReport = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("loadReport");
        return this._http.get('https://rjbs-sevices.cfapps.io/showEntry', options).map(function (res) { return res.json(); });
    };
    BSService.prototype.getReport = function (report) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = 'https://rjbs-sevices.cfapps.io/getReport?year=' + report.year + '&month=' + report.month;
        console.log("url", url);
        return this._http.get(url, options).map(function (res) { return res.json(); });
    };
    return BSService;
}());
BSService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BSService);
exports.BSService = BSService;
//# sourceMappingURL=bs.service.js.map