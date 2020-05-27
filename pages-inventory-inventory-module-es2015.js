(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/inventory/inventory/inventory.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/inventory/inventory/inventory.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6 user_title\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Product Management</h6>\n                </div>\n                <div class=\"col-md-6 text-right add_btn\">\n                    <button class=\"btn btn-primary\" (click)=\"addProduct()\">\n                        <span class=\"fas fa-plus\"></span> Add Product\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Sr. Number</th>\n                            <th>Image</th>\n                            <th>Id</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Prize</th>\n                            <!-- <th>Cost</th> -->\n                            <th>Show in website</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of inventoryList; let i = index\">\n                            <td>{{ i +1 }}</td>\n                            <td>\n                                <ng-container *ngIf=\"item.image; else noImage\">\n                                    <img src=\"{{ item.image }}\" width=\"70px\" height=\"70px\" />\n                                </ng-container>\n                                <ng-template #noImage>\n                                    <img src=\"assets/img/default-user.png\" width=\"70px\" height=\"70px\" />\n                                </ng-template>\n                            </td>\n                            <td>\n                                {{item.id}}\n                            </td>\n                       \n                            <td>{{ item.name }}</td>\n                            <td>{{ item.description.length < 24\n                    ?  item.description\n                    :   item.description.slice(0, 24) + \"....\"}}</td>\n                            <td>\n                                {{ item.price}} \n                            </td>\n                            <td>\n                                <ui-switch labelOn=\"ON\" switchColor=\"#000\" id=\"status\" name=\"status\"\n                                    [(ngModel)]=\"item.status\" labelOff=\"OFF\">\n                                </ui-switch>\n                            </td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-success mr-1\" title=\"Edit product\"\n                                        title=\"Edit\" (click)=\"editProduct(item.id)\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete Product\">\n                                        <span class=\"fas fa-fw fa-trash\" (click)=\"deleteProduct(item.id)\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h4 *ngIf=\"inventoryList && inventoryList.length == 0\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/idealz/pages/inventory/inventory-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/idealz/pages/inventory/inventory-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/idealz/pages/inventory/inventory/inventory.component.ts");




const routes = [
    {
        path: "",
        data: {
            title: "product"
        },
        children: [
            {
                path: "product",
                component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let InventoryRoutingModule = class InventoryRoutingModule {
};
InventoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InventoryRoutingModule);



/***/ }),

/***/ "./src/app/idealz/pages/inventory/inventory.module.ts":
/*!************************************************************!*\
  !*** ./src/app/idealz/pages/inventory/inventory.module.ts ***!
  \************************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/idealz/pages/inventory/inventory/inventory.component.ts");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-routing.module */ "./src/app/idealz/pages/inventory/inventory-routing.module.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");






let InventoryModule = class InventoryModule {
};
InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_4__["InventoryRoutingModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"]
        ]
    })
], InventoryModule);



/***/ }),

/***/ "./src/app/idealz/pages/inventory/inventory/inventory.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/idealz/pages/inventory/inventory/inventory.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZWFsei9wYWdlcy9pbnZlbnRvcnkvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/idealz/pages/inventory/inventory/inventory.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/idealz/pages/inventory/inventory/inventory.component.ts ***!
  \*************************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/idealz/services/popup/popup.service.ts");
/* harmony import */ var src_app_idealz_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/idealz/services/product.service */ "./src/app/idealz/services/product.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_idealz_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/idealz/services/common/common.service */ "./src/app/idealz/services/common/common.service.ts");






let InventoryComponent = class InventoryComponent {
    constructor(dialogService, productService, toastr, commonService) {
        this.dialogService = dialogService;
        this.productService = productService;
        this.toastr = toastr;
        this.commonService = commonService;
        this.inventoryList = [];
        this.getAllProduct();
    }
    ngOnInit() {
        this.getAllProduct();
    }
    getAllProduct() {
        this.productService.productListing().subscribe(res => {
            this.inventoryList = res.data;
        });
    }
    addProduct() {
        this.dialogService.addProduct().subscribe(res => {
            if (res) {
                this.inventoryList.push(res);
                this.toastr.successToastr("Product added successfully", '', {
                    maxShown: 1
                });
            }
        });
    }
    editProduct(id) {
        localStorage.setItem("ProductId", id);
        this.dialogService.editProduct().subscribe(res => {
            if (res) {
                this.getAllProduct();
                debugger;
                this.toastr.successToastr("Product Edited Successfully", '', {
                    maxShown: 1
                });
                window.location.reload();
            }
        });
    }
    deleteProduct(id) {
        this.productService.deleteProduct(id).subscribe(res => {
            this.getAllProduct();
            this.toastr.successToastr(res.uiMessage, '', {
                maxShown: 1
            });
        });
    }
};
InventoryComponent.ctorParameters = () => [
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"] },
    { type: src_app_idealz_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] },
    { type: src_app_idealz_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idealz/pages/inventory/inventory/inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory.component.scss */ "./src/app/idealz/pages/inventory/inventory/inventory.component.scss")).default]
    })
], InventoryComponent);



/***/ })

}]);
//# sourceMappingURL=pages-inventory-inventory-module-es2015.js.map