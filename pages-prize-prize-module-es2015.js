(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prize-prize-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/prize/add-prize/add-prize.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/prize/add-prize/add-prize.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">\n                                Add Prize\n                            </h6>\n                        </div>\n                        <div class=\"col-md-6 text-right\">\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                                <span class=\"fas fa-arrow-left\"></span> Back\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"productForm\">\n                <div class=\"usr_profile_inrmain\"> \n                    <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>Prize Name</label>\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" type=\"text\" name=\"prizeName\" formControlName=\"prizeName\" />\n                                </div>\n                                <div *ngIf=\"submitted && productForm.controls.prizeName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.prizeName.errors.required\">\n                                    Prize Name is required.\n                                    </div>\n                                 <div *ngIf=\"productForm.controls.prizeName.errors.pattern\">\n                                    Prize Name is not valid.\n                                    </div>\n                                <div *ngIf=\"productForm.controls.prizeName.errors.maxlength\">\n                                    Prize Name can be max 20 characters long.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-6\">\n                            <div class=\"usr_profile_biodata\">\n                                <label>اسم الجائزة</label>\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" type=\"text\" name=\"arabicPrizeName\" formControlName=\"arabicPrizeName\" />\n                                </div>\n                                <!-- <div *ngIf=\"submitted && productForm.controls.arabicPrizeName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.arabicPrizeName.errors.required\">\n                                        اسم الجائزة مطلوب\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.arabicPrizeName.errors.pattern\">\n                                        اسم الجائزة غير صالح\n                                        </div>\n                                    <div *ngIf=\"productForm.controls.arabicPrizeName.errors.maxlength\">\n                                        يمكن أن يكون اسم الجائزة 20 حرفًاكحد أقصى\n                                        </div>\n                                </div> -->\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"body\">Prize Description</label>\n                            <div class=\"input-group\">\n                                <textarea type=\"text\" row=\"3\" id=\"body\" class=\"form-control\" formControlName=\"prizeDescription\"\n                                    placeholder=\"\"></textarea>\n                                <div *ngIf=\"submitted && productForm.controls.prizeDescription.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.prizeDescription.errors.required\">\n                                        Prize Description is required\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.prizeDescription.errors.maxlength\">\n                                        Prize Description can be max 250 characters long.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"body\">وصف الجائزة</label>\n                            <div class=\"input-group\">\n                                <textarea type=\"text\" row=\"3\" id=\"body\" class=\"form-control\" formControlName=\"arabicPrizeDescription\"\n                                    placeholder=\"\"></textarea>\n                                <!-- <div *ngIf=\"submitted && productForm.controls.arabicPrizeDescription.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"productForm.controls.arabicPrizeDescription.errors.required\">\n                                        وصف الجائزة مطلوب\n                                    </div>\n                                    <div *ngIf=\"productForm.controls.arabicPrizeDescription.errors.maxlength\">\n                                     250 يمكن أن يكون وصف الجائزة حرفًا كحد أقصى.\n                                    </div>\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"usr_profile_img\">\n                                <div class=\"usr_profile_imgbx\">\n                                    <label>Prize Image</label>\n                                    <div class=\"user_img\">\n                                        <figure *ngIf=\"prizeImage\">\n                                            <img style=\"height: 50px;width: 50px\" [src]=\"prizeImage\" />\n                                        </figure>\n                                    </div>\n                                </div>\n                                <div class=\"user_profile_edit\">\n                                    <input type=\"file\" accept=\"image/*\" (change)=\"prizePic($event)\" />\n                                </div>\n                                <div *ngIf=\"submitted && !prizeImage\" class=\"invalid-feedback\">\n                                Prize Image is required.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div formArrayName=\"specifications\">\n                        <div class=\"row\" *ngFor=\"let item of specifications.controls; let pointIndex=index\">\n                            <div class=\"form-group col-md-6\" [formGroupName]=\"pointIndex\">\n                                <label for=\"title\">Name</label>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\"\n                                        placeholder=\"\" />\n                                </div>\n                                <div *ngIf=\"submitted && (item.controls.name.errors)\" class=\" invalid-feedback\">\n                                    <div *ngIf=\"item.hasError('required', 'name')\"> Name is required\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-2\" [formGroupName]=\"pointIndex\">\n                                <label for=\"title\">Value</label>\n                                <div class=\"input-group\">\n                                    <input type=\"text\"  id=\"name\" class=\"form-control\" formControlName=\"value\"\n                                        placeholder=\"\" />\n                                </div>\n                                <div *ngIf=\"submitted && (item.controls.value.errors)\" class=\" invalid-feedback\">\n                                    <div *ngIf=\"item.hasError('required', 'value')\"> Value is required\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\" [formGroupName]=\"pointIndex\">\n                                <label for=\"title\">اسم</label>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" id=\"arabicName\" class=\"form-control\" formControlName=\"arabicName\"\n                                        placeholder=\"\" />\n                                </div>\n                                <!-- <div *ngIf=\"submitted && (item.controls.arabicName.errors)\" class=\" invalid-feedback\">\n                                    <div *ngIf=\"item.hasError('required', 'arabicName')\"> مطلوب اسم\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"form-group col-md-2\" [formGroupName]=\"pointIndex\">\n                                <label for=\"title\">القيمة</label>\n                                <div class=\"input-group\">\n                                    <input type=\"text\"  id=\"arabicValue\" class=\"form-control\" formControlName=\"arabicValue\"\n                                        placeholder=\"\" />\n                                </div>\n                                <!-- <div *ngIf=\"submitted && (item.controls.arabicValue.errors)\" class=\" invalid-feedback\">\n                                    <div *ngIf=\"item.hasError('required', 'arabicValue')\"> القيمة مطلوبة\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"form-group col-md-1\">\n                                <button type=\"button\" *ngIf=\"pointIndex>0\" class=\"btn btn-sm btn-danger m-2\"\n                                    title=\"Delete Specifications\" (click)=\"deleteSpecification(pointIndex)\">\n                                    <span class=\"fas fa-fw fa-trash\"></span></button>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"btn btn-sm btn-primary mb-4\" (click)=\"addSpecifications()\">Add More Prize\n                            Specifications</button>\n                    </div>\n                </div>\n                <div class=\"form-group form-actions\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"onSubmit()\">\n                        Add\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/prize/prize/prize.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/prize/prize/prize.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6 user_title\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Prize Management</h6>\n                </div>\n                <div class=\"col-md-6 text-right add_btn\">\n                    <button class=\"btn btn-primary\" (click)=\"addPrize()\">\n                        <span class=\"fas fa-plus\"></span> Add Prize\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Sr. Number</th>\n                            <th>Image</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of inventoryList; let i = index\">\n                            <td>{{ i +1 }}</td>\n                            <td>\n                                <ng-container *ngIf=\"item.image; else noImage\">\n                                    <img src=\"{{ item.image }}\" width=\"70px\" height=\"70px\" />\n                                </ng-container>\n                                <ng-template #noImage>\n                                    <img src=\"assets/img/default-user.png\" width=\"70px\" height=\"70px\" />\n                                </ng-template>\n                            </td>\n                            <td>{{ item.name }}</td>\n                             <td>{{ item.description.length < 24\n                                ?  item.description\n                                :   item.description.slice(0, 24) + \"....\"}}</td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-warning mr-1\" title=\"View Prize\"\n                                        title=\"View\">\n                                        <span class=\"fas fa-fw fa-eye\"></span>\n                                    </button>\n                                    <button class=\"btn btn-success mr-1\" title=\"Edit Prize\"\n                                        title=\"Edit\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete Prize\" (click)=\"deletePrize(item.id)\">\n                                        <span class=\"fas fa-fw fa-trash\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h4 *ngIf=\"inventoryList && inventoryList.length == 0\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/idealz/pages/prize/add-prize/add-prize.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/idealz/pages/prize/add-prize/add-prize.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRlYWx6L3BhZ2VzL3ByaXplL2FkZC1wcml6ZS9EOlxcQXBwdHVuaXhcXHdpbmlkZWFsei9zcmNcXGFwcFxcaWRlYWx6XFxwYWdlc1xccHJpemVcXGFkZC1wcml6ZVxcYWRkLXByaXplLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pZGVhbHovcGFnZXMvcHJpemUvYWRkLXByaXplL2FkZC1wcml6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pZGVhbHovcGFnZXMvcHJpemUvYWRkLXByaXplL2FkZC1wcml6ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gICIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/idealz/pages/prize/add-prize/add-prize.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/idealz/pages/prize/add-prize/add-prize.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddPrizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrizeComponent", function() { return AddPrizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_idealz_services_prize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/idealz/services/prize.service */ "./src/app/idealz/services/prize.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");






let AddPrizeComponent = class AddPrizeComponent {
    constructor(formBuilder, router, prizeService, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.prizeService = prizeService;
        this.toastr = toastr;
        this.submitted = false;
        this.history = window.history;
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            prizeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ]")]),
            arabicPrizeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*\\S.*[a-zA-z0-9 ]")]),
            prizeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)])),
            arabicPrizeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            specifications: this.formBuilder.array([this.formBuilder.group({ name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], arabicName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], arabicValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })]),
            prizeImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    get specifications() {
        return this.productForm.get('specifications');
    }
    addSpecifications() {
        this.specifications.push(this.formBuilder.group({ name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], arabicName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], arabicValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }));
    }
    deleteSpecification(index) {
        this.specifications.removeAt(index);
    }
    prizePic(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.prizeImage = event.target.result;
                this.productForm.controls['prizeImage'].setValue(this.prizeImage);
            };
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.submitted && this.productForm.valid) {
            var data = this.productForm.value;
            this.prizeService.addPrize(data).subscribe(res => {
                this.toastr.successToastr(res.uiMessage, '', {
                    maxShown: 1
                });
                this.router.navigate(['/prize/prize']);
            });
        }
    }
};
AddPrizeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_idealz_services_prize_service__WEBPACK_IMPORTED_MODULE_4__["PrizeService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] }
];
AddPrizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-prize',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-prize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/prize/add-prize/add-prize.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-prize.component.scss */ "./src/app/idealz/pages/prize/add-prize/add-prize.component.scss")).default]
    })
], AddPrizeComponent);



/***/ }),

/***/ "./src/app/idealz/pages/prize/prize-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/idealz/pages/prize/prize-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PrizeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeRoutingModule", function() { return PrizeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _prize_prize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prize/prize.component */ "./src/app/idealz/pages/prize/prize/prize.component.ts");
/* harmony import */ var _add_prize_add_prize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-prize/add-prize.component */ "./src/app/idealz/pages/prize/add-prize/add-prize.component.ts");





const routes = [
    {
        path: "",
        data: {
            title: "Prize"
        },
        children: [
            {
                path: "prize",
                component: _prize_prize_component__WEBPACK_IMPORTED_MODULE_3__["PrizeComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _add_prize_add_prize_component__WEBPACK_IMPORTED_MODULE_4__["AddPrizeComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let PrizeRoutingModule = class PrizeRoutingModule {
};
PrizeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PrizeRoutingModule);



/***/ }),

/***/ "./src/app/idealz/pages/prize/prize.module.ts":
/*!****************************************************!*\
  !*** ./src/app/idealz/pages/prize/prize.module.ts ***!
  \****************************************************/
/*! exports provided: PrizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeModule", function() { return PrizeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _prize_prize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prize/prize.component */ "./src/app/idealz/pages/prize/prize/prize.component.ts");
/* harmony import */ var _add_prize_add_prize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-prize/add-prize.component */ "./src/app/idealz/pages/prize/add-prize/add-prize.component.ts");
/* harmony import */ var _prize_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prize-routing.module */ "./src/app/idealz/pages/prize/prize-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let PrizeModule = class PrizeModule {
};
PrizeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_prize_prize_component__WEBPACK_IMPORTED_MODULE_3__["PrizeComponent"], _add_prize_add_prize_component__WEBPACK_IMPORTED_MODULE_4__["AddPrizeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _prize_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrizeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], PrizeModule);



/***/ }),

/***/ "./src/app/idealz/pages/prize/prize/prize.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/idealz/pages/prize/prize/prize.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9wcml6ZS9wcml6ZS9wcml6ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/idealz/pages/prize/prize/prize.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/idealz/pages/prize/prize/prize.component.ts ***!
  \*************************************************************/
/*! exports provided: PrizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeComponent", function() { return PrizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_idealz_services_prize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/idealz/services/prize.service */ "./src/app/idealz/services/prize.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");





let PrizeComponent = class PrizeComponent {
    constructor(router, prizeService, toastr) {
        this.router = router;
        this.prizeService = prizeService;
        this.toastr = toastr;
        this.inventoryList = [];
        this.prizeService.prizeListing().subscribe(res => {
            console.log("prize", res);
            this.inventoryList = res.data;
            console.log("list", this.inventoryList);
        });
    }
    ngOnInit() {
    }
    addPrize() {
        this.router.navigate(['/prize/add']);
    }
    deletePrize(id) {
        this.prizeService.deletePrize(id).subscribe(res => {
            this.toastr.successToastr(res.uiMessage, '', {
                maxShown: 1
            });
            window.location.reload();
        });
    }
};
PrizeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_idealz_services_prize_service__WEBPACK_IMPORTED_MODULE_3__["PrizeService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }
];
PrizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prize',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/prize/prize/prize.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prize.component.scss */ "./src/app/idealz/pages/prize/prize/prize.component.scss")).default]
    })
], PrizeComponent);



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
//# sourceMappingURL=pages-prize-prize-module-es2015.js.map