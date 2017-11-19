webpackJsonp([8],{

/***/ 100:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>";

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PortalArticleComponent = (function () {
    function PortalArticleComponent() {
    }
    PortalArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sw-portal-article',
            //styles: [require('./article.component.scss')],
            template: __webpack_require__(100),
        })
    ], PortalArticleComponent);
    return PortalArticleComponent;
}());



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalArticleModule", function() { return PortalArticleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_component__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PortalArticleModule = (function () {
    function PortalArticleModule() {
    }
    PortalArticleModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__article_component__["a" /* PortalArticleComponent */],
                        children: [
                            {
                                path: '',
                                redirectTo: 'list-article',
                                pathMatch: 'full'
                            },
                            {
                                path: 'create-article',
                                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(7).then((function (require) { resolve(__webpack_require__(63)['PortalCreateArticleModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
                            },
                            {
                                path: 'list-article',
                                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(6).then((function (require) { resolve(__webpack_require__(65)['PortalListArticleModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
                            },
                            {
                                path: 'list-draft-article',
                                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(5).then((function (require) { resolve(__webpack_require__(67)['PortalListDraftArticleModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
                            }
                        ]
                    },
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__article_component__["a" /* PortalArticleComponent */]
            ]
        })
    ], PortalArticleModule);
    return PortalArticleModule;
}());



/***/ })

});
//# sourceMappingURL=8.js.map