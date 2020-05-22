function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_3_div_2_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onFileChanged($event, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UPLOAD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OR ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DRAG IMAGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
      }
    }

    function AppComponent_div_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_div_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.removeUpload(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.arr[i_r2] ? ctx_r4.arr[i_r2] : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_3_div_2_Template, 12, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_div_3_Template, 5, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.arr[i_r2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.arr[i_r2]);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'task-demo';
        this.arr = new Array();
      }

      _createClass(AppComponent, [{
        key: "arrayOne",
        value: function arrayOne(n) {
          return Array(n);
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event, i) {
          var that = this;
          this.selectedFile = event.target.files[0];
          var reader = new FileReader();

          reader.onloadend = function () {
            that.outputImg = reader.result;
            that.arr.push(reader.result);
          };

          reader.readAsDataURL(this.selectedFile);
        }
      }, {
        key: "removeUpload",
        value: function removeUpload(i) {
          this.arr[i] = null;
          this.selectedFile = null;
          this.outputImg = null;
          var indexT = this.arr.indexOf(null);

          if (indexT > -1) {
            this.arr.splice(indexT, 1);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "file-upload"], ["class", "image-upload-wrap", 4, "ngIf"], ["class", "file-upload-content", 4, "ngIf"], [1, "image-upload-wrap"], ["type", "file", "accept", "image/*", "required", "true", 1, "file-upload-input", 3, "change"], ["fileInput", ""], [1, "drag-text"], [1, "badge"], [1, "file-upload-content"], ["alt", "your image", 1, "file-upload-image", 3, "src"], [1, "image-title-wrap", "mt-3"], ["type", "button", 1, "remove-image", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aptiunix - Demo Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 4, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOne(6));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  border-bottom: 1px solid #e4e4e4;\n  color: #9C27B0;\n}\n\n.main[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  margin: 1rem;\n  position: relative;\n  min-width: 160px;\n  margin-bottom: 20px;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  margin: 0 auto;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .file-upload-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  color: #fff;\n  background: #374b60;\n  border: none;\n  padding: 10px;\n  border-radius: 4px;\n  border-bottom: 4px solid #e4e4e4;\n  transition: all 0.2s ease;\n  outline: none;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .file-upload-btn[_ngcontent-%COMP%]:hover {\n  background: #5b8ab1;\n  color: #ffffff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .file-upload-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .file-upload-input[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .image-upload-wrap[_ngcontent-%COMP%] {\n  border: 4px dashed #e4e4e4;\n  position: relative;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .image-dropping[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .image-upload-wrap[_ngcontent-%COMP%]:hover {\n  background-color: #e9e9e9b3;\n  border: 4px dashed #374b60;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .image-title-wrap[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .drag-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .drag-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 100;\n  text-transform: uppercase;\n  color: #374b60;\n  padding: 60px 0;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .file-upload-image[_ngcontent-%COMP%] {\n  height: 150px;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #e4e4e4;\n  width: 150px;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .remove-image[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  background: #cd4535;\n  border: none;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  outline: none;\n  text-transform: uppercase;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   .remove-image[_ngcontent-%COMP%]:hover {\n  background: #c13b2a;\n  color: #ffffff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.main[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\n  width: 22px;\n  color: #FFF;\n  background: #2196F3;\n  font-weight: 800;\n  font-size: 20px;\n  position: absolute;\n  border-radius: 50%;\n  height: 23px;\n  top: 8px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFwcHR1bml4LXRhc2svc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDSSxrQkFBQTtBQ0VOOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FERkU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURERTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7QUNFSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTs7RUFFQywyQkFBQTtFQUNBLDBCQUFBO0FDREg7O0FESUU7RUFDRSxXQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSko7O0FET0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNMSjs7QURRRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ05KOztBRFNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDUEo7O0FEU0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgICBjb2xvcjogIzlDMjdCMDtcclxuICB9XHJcbiAgLm1haW4ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuLmZpbGUtdXBsb2FkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAuZmlsZS11cGxvYWQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzc0YjYwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZTRlNGU0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAuZmlsZS11cGxvYWQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1YjhhYjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGUtdXBsb2FkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZmlsZS11cGxvYWQtaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtdXBsb2FkLXdyYXAge1xyXG4gICAgYm9yZGVyOiA0cHggZGFzaGVkICNlNGU0ZTQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1kcm9wcGluZyxcclxuICAuaW1hZ2UtdXBsb2FkLXdyYXA6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5YjM7XHJcbiAgIGJvcmRlcjogNHB4IGRhc2hlZCAjMzc0YjYwO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtdGl0bGUtd3JhcCB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICB9XHJcbiAgXHJcbiAgLmRyYWctdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcmFnLXRleHQgaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzM3NGI2MDtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGUtdXBsb2FkLWltYWdlIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlbW92ZS1pbWFnZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNjZDQ1MzU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLnJlbW92ZS1pbWFnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzEzYjJhO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIHNwYW4uYmFkZ2V7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZDogIzIxOTZGMztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcbn1cclxuICAiLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGNvbG9yOiAjOUMyN0IwO1xufVxuXG4ubWFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW4gLmZpbGUtdXBsb2FkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgLmZpbGUtdXBsb2FkLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMzc0YjYwO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlNGU0ZTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgLmZpbGUtdXBsb2FkLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YjhhYjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgLmZpbGUtdXBsb2FkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgLmZpbGUtdXBsb2FkLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluIC5maWxlLXVwbG9hZCAuaW1hZ2UtdXBsb2FkLXdyYXAge1xuICBib3JkZXI6IDRweCBkYXNoZWQgI2U0ZTRlNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4gLmZpbGUtdXBsb2FkIC5pbWFnZS1kcm9wcGluZyxcbi5tYWluIC5maWxlLXVwbG9hZCAuaW1hZ2UtdXBsb2FkLXdyYXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5YjM7XG4gIGJvcmRlcjogNHB4IGRhc2hlZCAjMzc0YjYwO1xufVxuLm1haW4gLmZpbGUtdXBsb2FkIC5pbWFnZS10aXRsZS13cmFwIHtcbiAgY29sb3I6ICMyMjI7XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgLmRyYWctdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluIC5maWxlLXVwbG9hZCAuZHJhZy10ZXh0IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzNzRiNjA7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cbi5tYWluIC5maWxlLXVwbG9hZCAuZmlsZS11cGxvYWQtaW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5tYWluIC5maWxlLXVwbG9hZCAucmVtb3ZlLWltYWdlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2NkNDUzNTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgLnJlbW92ZS1pbWFnZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjMTNiMmE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbiAuZmlsZS11cGxvYWQgc3Bhbi5iYWRnZSB7XG4gIHdpZHRoOiAyMnB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogIzIxOTZGMztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyM3B4O1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\apptunix-task\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map