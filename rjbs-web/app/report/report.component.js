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
var forms_1 = require("@angular/forms");
var Rx_1 = require("rxjs/Rx");
var bs_service_1 = require("../shared/bs.service");
var ReportComponent = (function () {
    function ReportComponent(_fb, _bsService) {
        this._fb = _fb;
        this._bsService = _bsService;
        this.pageTitle = 'Report';
        this.msgFlag = false;
        this.reportTypes = ['-Select-', 'Monthly', 'Yearly'];
        this.months = ['-Select-', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.createForm();
        //this.loadReport();
    };
    ReportComponent.prototype.createForm = function () {
        this.bsForm = this._fb.group({
            reportType: [this.reportTypes[0], [forms_1.Validators.required]],
            month: [this.months[0], [forms_1.Validators.required]],
            year: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('[0-9]*')]]
        });
    };
    ReportComponent.prototype.monthValidation = function () {
        var flag = true;
        if (this.bsForm.controls['reportType'].getValue == 'Monthly' && this.bsForm.controls.month.value == '-Select-') {
            flag = false;
        }
        return flag;
    };
    ReportComponent.prototype.doClear = function () {
        this.bsForm.controls['month'].setValue(this.months[0]);
        this.bsForm.controls['year'].setValue('');
        this.entries = [];
        this.status = '';
    };
    ReportComponent.prototype.save = function (report, isValid) {
        var _this = this;
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(report, isValid);
        if (isValid) {
            report.month = report.reportType == 'Yearly' ? 0 : report.month;
            console.log('report', report);
            this._bsService.getReport(report).subscribe(function (data) {
                _this.msgFlag = true;
                // refresh the list
                console.log('Report submitted!');
                _this.entries = data;
                if (_this.entries.length > 0) {
                    _this.status = 'Report Loaded!';
                }
                else {
                    _this.status = 'No data found!';
                }
                return true;
            }, function (error) {
                _this.msgFlag = true;
                _this.status = 'Error on get report!';
                console.error('Error on get report!');
                return Rx_1.Observable.throw(error);
            });
        }
        else {
        }
    };
    ReportComponent.prototype.loadReport = function () {
        var _this = this;
        this._bsService.loadReport().subscribe(function (data) {
            console.log('Successfully saved!');
            _this.entries = data;
            return true;
        }, function (error) {
            console.error('Error on loading report!');
            return Rx_1.Observable.throw(error);
        });
    };
    ReportComponent.prototype.reset = function () {
        this.bsForm.reset();
        this.entries = [];
        this.status = '';
        this.bsForm.controls['reportType'].setValue(this.reportTypes[0]);
        this.bsForm.controls['month'].setValue(this.months[0]);
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'report.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, bs_service_1.BSService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map