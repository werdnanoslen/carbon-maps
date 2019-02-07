(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aol-map [width]=\"'750px'\" [height]=\"'500px'\" id=\"map\" (onClick)=\"handleEvent($event)\">\n  <aol-interaction-default></aol-interaction-default>\n\n  <aol-view [zoom]=\"zoom\">\n    <aol-coordinate [x]=\"-98\" [y]=\"40\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n  </aol-view>\n\n  <aol-layer-tile [opacity]=\"1\">\n    <aol-source-osm></aol-source-osm>\n  </aol-layer-tile>\n\n  <aol-layer-vector>\n    <aol-source-vector>\n      <aol-feature *ngFor=\"let p of points\" id=\"{{p.name}}\">\n        <aol-geometry-point>\n          <aol-coordinate [x]=\"p.x\" [y]=\"p.y\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n        </aol-geometry-point>\n\n        <aol-style>\n          <aol-style-circle [radius]=\"(4 * p.size) + 8\">\n            <aol-style-stroke [color]=\"p.color\" [width]=\"3\"></aol-style-stroke>\n            <aol-style-fill [color]=\"'#ffffff80'\"></aol-style-fill>\n          </aol-style-circle>\n          <aol-style-text [text]=\"p.size.toString()\">\n            <aol-style-fill [color]=\"'#333'\"></aol-style-fill>\n          </aol-style-text>\n        </aol-style>\n      </aol-feature>\n    </aol-source-vector>\n  </aol-layer-vector>\n</aol-map>\n\n<div id=\"zoom\">\n  <button [ibmButton]=\"secondary\" [size]=\"sm\" (click)=\"zoomIn()\">+</button>\n  <button [ibmButton]=\"secondary\" [size]=\"sm\" (click)=\"zoomOut()\">-</button>\n</div>\n\n\n<div style=\"margin: 30px;\">\n\t<n-bar-chart class=\"n-chart\" [data]=\"barData\" [options]=\"barOptions\" width=\"100%\" height=\"400\" #barChart>\n\t</n-bar-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carbon_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/charts */ "./node_modules/@carbon/charts/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.points = [];
        this.zoom = 4;
        this.barData = {
            labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
            datasets: [
                {
                    label: "Mammoth Distribution Center",
                    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][0]],
                    data: [65000, 29123, 35213, 51213, 16932]
                },
                {
                    label: "Another place",
                    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][1]],
                    data: [32432, 21312, 56456, 21312, 34234]
                },
                {
                    label: "The good place",
                    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][2]],
                    data: [12312, 23232, 34232, 12312, 34234]
                },
                {
                    label: "The bad place",
                    backgroundColors: [_carbon_charts__WEBPACK_IMPORTED_MODULE_1__["defaultColors"][3]],
                    data: [32423, 21313, 64353, 24134, 32423]
                }
            ]
        };
        this.barOptions = {
            scales: {
                x: {
                    title: "30 Days Dwell Time"
                },
                y: {
                    formatter: function (axisValue) { return axisValue / 1000 + "k"; },
                    yMaxAdjuster: function (yMaxValue) { return yMaxValue * 1.1; }
                },
                y2: {
                    ticks: {
                        max: 1,
                        min: 0
                    },
                    formatter: function (axisValue) { return axisValue * 100 + "%"; }
                }
            },
            legendClickable: true,
            containerResizable: true
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        // Generate random points
        var nbPoints = 4;
        for (var i = 0; i < nbPoints; ++i) {
            var r = this.getRandomInRange(0, 255, 1);
            var g = this.getRandomInRange(0, 255, 1);
            var b = this.getRandomInRange(0, 255, 1);
            this.points.push({
                x: this.getRandomInRange(-122, -76, 4),
                y: this.getRandomInRange(33, 48, 4),
                size: this.getRandomInRange(1, 5, 1),
                color: this.barData.datasets[i].backgroundColors[0],
                name: this.barData.datasets[i].label
            });
        }
    };
    AppComponent.prototype.getRandomInRange = function (from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    };
    AppComponent.prototype.zoomIn = function () {
        this.zoom = Math.min(this.zoom + 1, 8);
    };
    AppComponent.prototype.zoomOut = function () {
        this.zoom = Math.max(this.zoom - 1, 1);
    };
    AppComponent.prototype.handleEvent = function (event) {
        var map = event.map;
        var clickedFeatureId = map.forEachFeatureAtPixel(event.pixel, function (feature) {
            return feature.getId();
        });
        this.barChart.chart.applyLegendFilter(clickedFeatureId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("barChart"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "barChart", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _carbon_charts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/charts-angular */ "./node_modules/@carbon/charts-angular/fesm5/carbon-charts-angular.js");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! carbon-components-angular */ "./node_modules/carbon-components-angular/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _carbon_charts_angular__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_openlayers__WEBPACK_IMPORTED_MODULE_5__["AngularOpenlayersModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andy/carbon-maps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map