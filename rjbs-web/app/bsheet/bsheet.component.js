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
var BsheetComponent = (function () {
    function BsheetComponent(_fb, _bsService) {
        this._fb = _fb;
        this._bsService = _bsService;
        this.pageTitle = 'Balance Sheet Entry';
        this.msgFlag = false;
        this.typeOfExps = ['Basic', 'Dress', 'Entertainment', 'Household', 'Medical'];
    }
    BsheetComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    BsheetComponent.prototype.createForm = function () {
        this.bsForm = this._fb.group({
            entryDesc: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(50)]],
            typeOfExp: [this.typeOfExps[0], [forms_1.Validators.required]],
            storeName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(50)]],
            expDate: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10)]],
            amount: ['', [forms_1.Validators.required]]
        });
    };
    BsheetComponent.prototype.save = function (entry, isValid) {
        var _this = this;
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer    
        console.log(entry, isValid);
        if (isValid) {
            this._bsService.saveEntry(entry).subscribe(function (data) {
                _this.msgFlag = true;
                // refresh the list
                console.log('Successfully saved!');
                _this.status = 'Successfully saved!';
                return true;
            }, function (error) {
                _this.msgFlag = true;
                _this.status = 'Error on saving Entry!';
                console.error('Error on saving Entry!');
                return Rx_1.Observable.throw(error);
            });
        }
    };
    BsheetComponent.prototype.reset = function () {
        this.bsForm.reset();
        this.msgFlag = false;
    };
    return BsheetComponent;
}());
BsheetComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'bsheet.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, bs_service_1.BSService])
], BsheetComponent);
exports.BsheetComponent = BsheetComponent;
//# sourceMappingURL=bsheet.component.js.map