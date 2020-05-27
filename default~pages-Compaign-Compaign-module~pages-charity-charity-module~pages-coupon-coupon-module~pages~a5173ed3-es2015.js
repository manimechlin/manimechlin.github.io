(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-Compaign-Compaign-module~pages-charity-charity-module~pages-coupon-coupon-module~pages~a5173ed3"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">\n                                Add Campaign\n                            </h6>\n                        </div>\n                        <div class=\"col-md-6 text-right\">\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                                <span class=\"fas fa-arrow-left\"></span> Back\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"productForm\">\n                <div class=\"usr_profile_inrmain\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Campaign Name</label>\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" />\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.name.errors.required\">\n                                    Campaign Name is required.\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.name.errors.pattern\">\n                                    Campaign name is not valid.\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.name.errors.maxlength\">\n                                    Campaign name can be max 20 characters long.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>اسم الحملة</label>\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" type=\"text\" name=\"arabicName\" formControlName=\"arabicName\" />\n                                </div>\n                                <!-- <div *ngIf=\"submitted && productForm.controls.arabicName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.arabicName.errors.required\">\n                                        اسم الحملة مطلوب\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.arabicName.errors.pattern\">\n                                        اسم الحملة غير صالح\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.arabicName.errors.maxlength\">\n                                        حرفًا كحد أقصى يمكن أن يتكون اسم الحملة من 20\n                                    </div>\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Select Product</label>\n                                <div class=\"input-group\">\n                                    <select class=\"form-control\" formControlName=\"productId\" *ngIf=\"productList\">\n                                        <option value=\"\" selected disabled hidden>Choose here</option>\n                                        <option *ngFor=\"let product of productList\" [value]=\"product.id\">\n                                            {{ product.name }}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.productId.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.productId.errors.required\">\n                                        Product Name is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Product Inventory</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"quantity\" placeholder=\"\" oninput=\"this.value = Math.abs(this.value)\" />\n                                <div *ngIf=\"submitted && productForm.controls.quantity.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.quantity.errors.required\">\n                                        Product Inventory is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <!-- <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Prize Per Product</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"CompaignPerProductPrice\" placeholder=\"\" />\n                                <div *ngIf=\"submitted && productForm.controls.CompaignPerProductPrice.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.CompaignPerProductPrice.errors.required\">\n                                        Prize Per Product is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Ticket Count Per Product</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"ticketPerProduct\" placeholder=\"\" oninput=\"this.value = Math.abs(this.value)\"/>\n                                <div *ngIf=\"submitted && productForm.controls.ticketPerProduct.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.ticketPerProduct.errors.required\">\n                                        Ticket Count Per Product is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    \n                    <div class=\"form-group col-md-6\">\n                        <label for=\"fare\">Max User Can Buy Product</label>\n                        <div class=\"input-group\">\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                formControlName=\"maxUserProduct\" placeholder=\"\" oninput=\"this.value = Math.abs(this.value)\"/>\n                        </div>\n                    </div>\n                </div> \n                    <div class=\"row\"> \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"title\">Campaign Start Date</label>\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" readonly\n                                    [min]=\"startMinDate\" formControlName=\"startDate\" [owlDateTime]=\"dt1\" placeholder=\"Date\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text trigger\" pickerType=\"calendar\"\n                                        [owlDateTimeTrigger]=\"dt1\"><i class=\"fa fa-calendar\"></i></span>\n                                </div>\n                                <owl-date-time #dt1 [pickerType]=\"'calendar'\"></owl-date-time>\n                            </div>\n                            <div *ngIf=\"submitted && productForm.controls.startDate.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"productForm.controls.startDate.errors.required\">\n                                    Start Date is required\n                                </div>\n                            </div>\n                        </div> \n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Select Prize</label>\n                                <div class=\"input-group\">\n                                    <select class=\"form-control\" formControlName=\"prizeId\" *ngIf=\"prizeList\">\n                                        <option value=\"\" selected disabled hidden>Choose here</option>\n                                        <option *ngFor=\"let prize of prizeList\" [value]=prize.id>\n                                            {{ prize.name }}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.prizeId.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.prizeId.errors.required\">\n                                        Prize Name is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>           \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"fare\">Donate Ticket Count</label>\n                            <div class=\"input-group\">\n                                <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                    formControlName=\"perProductDonate\" placeholder=\"\" oninput=\"this.value = Math.abs(this.value)\"/>\n                                <div *ngIf=\"submitted && productForm.controls.perProductDonate.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.perProductDonate.errors.required\">\n                                        Donate is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"usr_profile_img\">\n                                <div class=\"usr_profile_imgbx\">\n                                    <label>Campaign Image</label>\n                                    <div class=\"user_img\">\n                                        <figure *ngIf=\"productImage\">\n                                            <img style=\"height: 50px;width: 50px\" [src]=\"productImage\" />\n                                        </figure>\n                                    </div>\n                                </div>\n                                <div class=\"user_profile_edit\">\n                                    <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\n                                </div>\n                                <div *ngIf=\"submitted && !productImage\" class=\"invalid-feedback\">\n                                Campaign Image is required.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"mt-4\">\n                        <h4>Additional Details</h4>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                                <div class=\"usr_profile_img\">\n                                    <div class=\"usr_profile_imgbx\">\n                                        <label>Early Bird</label>\n                                        <div>\n                                            <ui-switch labelOn=\"ON\" switchColor=\"#000\" id=\"earlyBird\" name=\"earlyBird\"\n                                            formControlName=\"earlyBird\" labelOff=\"OFF\"  (change)=\"onChange($event)\">\n                                            </ui-switch>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\" *ngIf=\"onStatus\">\n                                <label for=\"fare\">Early Bird Item Number</label>\n                                <div class=\"input-group\">\n                                    <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\"\n                                        formControlName=\"itemNumber\" placeholder=\"\" oninput=\"this.value = Math.abs(this.value)\"/>\n                                    <div *ngIf=\"submitted && productForm.controls.itemNumber.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"productForm.controls.itemNumber.errors.required\">\n                                        Early Bird Item Number is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"onStatus\">\n                                <div class=\"form-group col-md-6\">\n                                    <label for=\"fare\">Ticket Count</label>\n                                    <div class=\"input-group\">\n                                        <input type=\"number\" min=\"0\" appNumberOnly id=\"earlyTicketCount\" class=\"form-control\"\n                                            formControlName=\"earlyTicketCount\" placeholder=\"\" oninput=\"this.value = Math.abs(this.value)\" />\n                                        <div *ngIf=\"submitted && productForm.controls.earlyTicketCount.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"productForm.controls.earlyTicketCount.errors.required\">\n                                            Ticket Count is required\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                                <div class=\"usr_profile_img\">\n                                    <div class=\"usr_profile_imgbx\">\n                                        <label> Show On Top</label>\n                                        <div>\n                                            <ui-switch labelOn=\"ON\" switchColor=\"#000\" id=\"showOnTop\" name=\"showOnTop\"\n                                            formControlName=\"showOnTop\" labelOff=\"OFF\">\n                                            </ui-switch>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group form-actions\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"onSubmit()\">\n                        Add\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n.form-control {\n  background-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRlYWx6L3BhZ2VzL0NvbXBhaWduL2FkZC1lZGl0LUNvbXBhaWduL0Q6XFxBcHB0dW5peFxcd2luaWRlYWx6L3NyY1xcYXBwXFxpZGVhbHpcXHBhZ2VzXFxDb21wYWlnblxcYWRkLWVkaXQtQ29tcGFpZ25cXGFkZC1lZGl0LUNvbXBhaWduLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pZGVhbHovcGFnZXMvQ29tcGFpZ24vYWRkLWVkaXQtQ29tcGFpZ24vYWRkLWVkaXQtQ29tcGFpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsaUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9Db21wYWlnbi9hZGQtZWRpdC1Db21wYWlnbi9hZGQtZWRpdC1Db21wYWlnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gXHJcbn0iLCIuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgZm9udC1zaXplOiA5NSU7XG4gIGNvbG9yOiAjZjU1MzUzO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddEditCompaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditCompaignComponent", function() { return AddEditCompaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_idealz_services_prize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/idealz/services/prize.service */ "./src/app/idealz/services/prize.service.ts");
/* harmony import */ var src_app_idealz_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/idealz/services/product.service */ "./src/app/idealz/services/product.service.ts");
/* harmony import */ var src_app_idealz_services_campaign_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/idealz/services/campaign.service */ "./src/app/idealz/services/campaign.service.ts");









let AddEditCompaignComponent = class AddEditCompaignComponent {
    constructor(formBuilder, router, toastr, prizeService, productService, campaignService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.prizeService = prizeService;
        this.productService = productService;
        this.campaignService = campaignService;
        this.productList = [];
        this.prizeList = [];
        this.onStatus = false;
        this.submitted = false;
        this.history = window.history;
        this.startMinDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).subtract(1, 'd').format('YYYY-MM-DD');
        this.prizeService.prizeListing().subscribe(res => {
            this.prizeList = res.data;
        });
        this.productService.productListing().subscribe(res => {
            this.productList = res.data;
        });
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ]")]),
            arabicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            earlyBird: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            showOnTop: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            itemNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ticketPerProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            earlyTicketCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            perProductDonate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            maxUserProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            prizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    profilePic(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    this.productImage = event.target.result;
                    this.productForm.controls['image'].setValue(this.productImage);
                };
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.submitted && this.productForm.valid) {
            var data = this.productForm.value;
            data['status'] = false;
            this.campaignService.addCampaign(data).subscribe(res => {
                this.toastr.successToastr("Campaign added", '', {
                    maxShown: 1
                });
            });
            this.router.navigate(['/campaign/campaign']);
        }
    }
    onChange(event) {
        this.onStatus = event;
    }
    afterPickerOpen() {
        document.getElementsByTagName('html')[0].style.top = '';
    }
};
AddEditCompaignComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: src_app_idealz_services_prize_service__WEBPACK_IMPORTED_MODULE_6__["PrizeService"] },
    { type: src_app_idealz_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: src_app_idealz_services_campaign_service__WEBPACK_IMPORTED_MODULE_8__["CampaignService"] }
];
AddEditCompaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-Compaign',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-Compaign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-Compaign.component.scss */ "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.scss")).default]
    })
], AddEditCompaignComponent);



/***/ }),

/***/ "./src/app/idealz/services/campaign.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/idealz/services/campaign.service.ts ***!
  \*****************************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/common.service */ "./src/app/idealz/services/common/common.service.ts");
/* harmony import */ var _url_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url/url.service */ "./src/app/idealz/services/url/url.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/api.service */ "./src/app/idealz/services/api/api.service.ts");







let CampaignService = class CampaignService {
    constructor(comm, url, http, api) {
        this.comm = comm;
        this.url = url;
        this.http = http;
        this.api = api;
        this.BASE_URL = this.url.SERVER_URL + '/api/';
        {
            this.apiEndPoints = {
                //Campaign
                getCampaign: 'admin/getCampaign',
                campaignListing: 'admin/campaignListing',
                addCampaign: 'admin/addCampaign',
                deleteCampaign: 'admin/deleteCampaign',
                editCampaign: 'admin/editCampaign',
            };
            for (let key in this.apiEndPoints) {
                this.apiEndPoints[key] = this.BASE_URL + this.apiEndPoints[key];
            }
        }
    }
    getHeaders() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.api.getToken()
            })
        };
    }
    campaignListing() {
        return this.http
            .get(this.apiEndPoints.campaignListing, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('productListing')));
    }
    getCampaign(id) {
        const data = new FormData();
        data.append('id', id);
        return this.http
            .post(this.apiEndPoints.getCampaign, data, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Campaign')));
    }
    addCampaign(campaign) {
        const data = new FormData();
        if (campaign.earlyBird) {
            data.append('early_bird_status', '1');
            data.append('early_ticket_count', campaign.earlyTicketCount);
            data.append('early_item_number', campaign.itemNumber);
        }
        else {
            data.append('early_bird_status', '0');
            data.append('early_ticket_count', '0');
            data.append('early_item_number', '0');
        }
        if (campaign.showOnTop) {
            data.append('show_on_top', '1');
        }
        else {
            data.append('show_on_top', '0');
        }
        data.append('name', campaign.name);
        data.append('image', campaign.image);
        data.append('product_id', campaign.productId);
        data.append('prize_id', campaign.prizeId);
        data.append('inventory', campaign.quantity);
        data.append('ticket_count', campaign.ticketPerProduct);
        data.append('max_per_user', campaign.maxUserProduct);
        data.append('start_date', "2020-05-27");
        data.append('donate_ticket_count', campaign.perProductDonate);
        data.append('arabic_name', campaign.arabicName);
        return this.http
            .post(this.apiEndPoints.addCampaign, data, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Add Campaign')));
    }
    editCampaign(product) {
        const data = new FormData();
        data.append('id', product.id);
        data.append('name', product.name);
        data.append('image', product.image);
        data.append('description', product.description);
        if (product.status) {
            data.append('show_in_website', '1');
        }
        else {
            data.append('show_in_website', '0');
        }
        data.append('price', product.prize);
        return this.http
            .post(this.apiEndPoints.editProduct, data, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Edit Product')));
    }
    deleteCampaign(id) {
        const data = new FormData();
        data.append('id', id);
        return this.http
            .post(this.apiEndPoints.deleteCampaign, data, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Delete Campaign')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            return;
        };
    }
};
CampaignService.ctorParameters = () => [
    { type: _common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _url_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
CampaignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CampaignService);



/***/ }),

/***/ "./src/app/idealz/services/popup/popup.service.ts":
/*!********************************************************!*\
  !*** ./src/app/idealz/services/popup/popup.service.ts ***!
  \********************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _pages_main_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/main/order/accept-modal/accept-modal.component */ "./src/app/idealz/pages/main/order/accept-modal/accept-modal.component.ts");
/* harmony import */ var _pages_inventory_add_edit_inventory_add_edit_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/inventory/add-edit-inventory/add-edit-inventory.component */ "./src/app/idealz/pages/inventory/add-edit-inventory/add-edit-inventory.component.ts");
/* harmony import */ var _pages_coupon_add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/coupon/add-edit-coupon/add-edit-coupon.component */ "./src/app/idealz/pages/coupon/add-edit-coupon/add-edit-coupon.component.ts");
/* harmony import */ var _pages_charity_add_edit_charity_add_edit_charity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/charity/add-edit-charity/add-edit-charity.component */ "./src/app/idealz/pages/charity/add-edit-charity/add-edit-charity.component.ts");
/* harmony import */ var _pages_Compaign_add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/Compaign/add-edit-Compaign/add-edit-Compaign.component */ "./src/app/idealz/pages/Compaign/add-edit-Compaign/add-edit-Compaign.component.ts");
/* harmony import */ var _pages_loyality_add_loyalty_add_loyalty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../..//pages/loyality/add-loyalty/add-loyalty.component */ "./src/app/idealz/pages/loyality/add-loyalty/add-loyalty.component.ts");
/* harmony import */ var _pages_inventory_edit_inventory_edit_inventory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/inventory/edit-inventory/edit-inventory.component */ "./src/app/idealz/pages/inventory/edit-inventory/edit-inventory.component.ts");










let PopupService = class PopupService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    orderAcceptModal() {
        const dialogRef = this.dialog.open(_pages_main_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_3__["AcceptModalComponent"]);
        return dialogRef.afterClosed();
    }
    addProduct() {
        const dialogRef = this.dialog.open(_pages_inventory_add_edit_inventory_add_edit_inventory_component__WEBPACK_IMPORTED_MODULE_4__["AddEditInventoryComponent"]);
        return dialogRef.afterClosed();
    }
    editProduct() {
        const dialogRef = this.dialog.open(_pages_inventory_edit_inventory_edit_inventory_component__WEBPACK_IMPORTED_MODULE_9__["EditInventoryComponent"]);
        return dialogRef.afterClosed();
    }
    addCoupon() {
        const dialogRef = this.dialog.open(_pages_coupon_add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__["AddEditCouponComponent"]);
        return dialogRef.afterClosed();
    }
    addCharity() {
        const dialogRef = this.dialog.open(_pages_charity_add_edit_charity_add_edit_charity_component__WEBPACK_IMPORTED_MODULE_6__["AddEditCharityComponent"]);
        return dialogRef.afterClosed();
    }
    addCompaign() {
        const dialogRef = this.dialog.open(_pages_Compaign_add_edit_Compaign_add_edit_Compaign_component__WEBPACK_IMPORTED_MODULE_7__["AddEditCompaignComponent"]);
        return dialogRef.afterClosed();
    }
    addLoyalty() {
        const dialogRef = this.dialog.open(_pages_loyality_add_loyalty_add_loyalty_component__WEBPACK_IMPORTED_MODULE_8__["AddLoyaltyComponent"]);
        return dialogRef.afterClosed();
    }
};
PopupService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PopupService);



/***/ }),

/***/ "./src/app/idealz/services/prize.service.ts":
/*!**************************************************!*\
  !*** ./src/app/idealz/services/prize.service.ts ***!
  \**************************************************/
/*! exports provided: PrizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeService", function() { return PrizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/common.service */ "./src/app/idealz/services/common/common.service.ts");
/* harmony import */ var _url_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url/url.service */ "./src/app/idealz/services/url/url.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/api.service */ "./src/app/idealz/services/api/api.service.ts");







let PrizeService = class PrizeService {
    constructor(comm, url, http, api) {
        this.comm = comm;
        this.url = url;
        this.http = http;
        this.api = api;
        this.BASE_URL = this.url.SERVER_URL + '/api/';
        {
            this.apiEndPoints = {
                //Prize
                addPrize: 'admin/addPrize',
                prizeListing: 'admin/prizeListing',
                deletePrize: 'admin/deletePrize'
            };
            for (let key in this.apiEndPoints) {
                this.apiEndPoints[key] = this.BASE_URL + this.apiEndPoints[key];
            }
        }
    }
    getHeaders() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.api.getToken()
            })
        };
    }
    prizeListing() {
        return this.http
            .get(this.apiEndPoints.prizeListing, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('productListing')));
    }
    addPrize(prize) {
        const data = new FormData();
        data.append('name', prize.prizeName);
        data.append('image', prize.prizeImage);
        data.append('description', prize.prizeDescription);
        prize.specifications.forEach((spec, i) => {
            data.append(`specifications[${i}][name]`, spec.name);
            data.append(`specifications[${i}][value]`, spec.value);
            data.append(`specifications[${i}][arabic_name]`, spec.arabicName);
            data.append(`specifications[${i}][arabic_value]`, spec.arabicValue);
        });
        return this.http
            .post(this.apiEndPoints.addPrize, data, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Add Product')));
    }
    deletePrize(id) {
        const data = new FormData();
        data.append('id', id);
        return this.http
            .post(this.apiEndPoints.deletePrize, data, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Delete Prize')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            return;
        };
    }
};
PrizeService.ctorParameters = () => [
    { type: _common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _url_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
PrizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PrizeService);



/***/ })

}]);
//# sourceMappingURL=default~pages-Compaign-Compaign-module~pages-charity-charity-module~pages-coupon-coupon-module~pages~a5173ed3-es2015.js.map