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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://54.169.245.161:5000';
    }
    ApiService.prototype.getPrediction = function (vitalSigns) {
        // console.log("`${this.apiURL}/predict/`", `${this.apiURL}/predict/`);
        console.log(vitalSigns);
        return this.httpClient.post(this.apiURL + "/predict", vitalSigns);
    };
    ApiService.prototype.getICDList = function () {
        return this.httpClient.get("./assets/icd10Diagnosis.json");
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container-fluid\">\n  <mat-toolbar class=\"example-header mat-elevation-z6\">Patient Re-admission Prediction Form</mat-toolbar>\n  <div class=\"example-container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <form [formGroup]=\"patientForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-6 pl-3\">\n              <mat-label>Age</mat-label>\n              <mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1\" min=\"1\" max=\"100\" formControlName=\"age\"></mat-slider>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Gender</mat-label>\n                <mat-select placeholder=\"Gender\" formControlName=\"gender\">\n                  <mat-option value=\"1\">Male</mat-option>\n                  <mat-option value=\"0\">Female</mat-option>\n                  <mat-option value=\"0\">Others</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Ethnicity</mat-label>\n                <mat-select placeholder=\"Ethnicity\" formControlName=\"race\">\n                  <mat-option value=\"AfricanAmerican\">AfricanAmerican</mat-option>\n                  <mat-option value=\"Asian\">Asian</mat-option>\n                  <mat-option value=\"Caucasian\">Caucasian</mat-option>\n                  <mat-option value=\"Hispanic\">Hispanic</mat-option>\n                  <mat-option value=\"Other\">Other</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Time In Hospital</mat-label>\n                <input formControlName=\"time_in_hospital\" matInput placeholder=\"Time In Hospital\" type=\"number\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Discharge Disposition</mat-label>\n                <mat-select placeholder=\"Discharge Disposition\" formControlName=\"discharge_disposition_id\">\n                  <mat-option value=\"1\">Discharged to home</mat-option>\n                  <mat-option value=\"2\">Discharged/transferred to another short term hospital</mat-option>\n                  <mat-option value=\"3\">Discharged/transferred to SNF</mat-option>\n                  <mat-option value=\"4\">Discharged/transferred to ICF</mat-option>\n                  <mat-option value=\"5\">Discharged/transferred to another type of inpatient care institution</mat-option>\n                  <mat-option value=\"6\">Discharged/transferred to home with home health service</mat-option>\n                  <mat-option value=\"7\">Left AMA</mat-option>\n                  <mat-option value=\"8\">Discharged/transferred to home under care of Home IV provider</mat-option>\n                  <mat-option value=\"9\">Admitted as an inpatient to this hospital</mat-option>\n                  <mat-option value=\"10\"> Neonate discharged to another hospital for neonatal aftercare</mat-option>\n                  <mat-option value=\"11\"> Expired</mat-option>\n                  <mat-option value=\"12\"> Still patient or expected to return for outpatient services</mat-option>\n                  <mat-option value=\"13\"> Hospice / home</mat-option>\n                  <mat-option value=\"14\"> Hospice / medical facility</mat-option>\n                  <mat-option value=\"15\"> Discharged/transferred within this institution to Medicare approved swing bed</mat-option>\n                  <mat-option value=\"16\"> Discharged/transferred/referred another institution for outpatient services</mat-option>\n                  <mat-option value=\"17\"> Discharged/transferred/referred to this institution for outpatient services</mat-option>\n                  <mat-option value=\"18\"> NULL</mat-option>\n                  <mat-option value=\"19\"> Expired at home. Medicaid only, hospice.</mat-option>\n                  <mat-option value=\"20\"> Expired in a medical facility. Medicaid only, hospice.</mat-option>\n                  <mat-option value=\"21\"> Expired, place unknown. Medicaid only, hospice.</mat-option>\n                  <mat-option value=\"22\"> Discharged/transferred to another rehab fac including rehab units of a\n                    hospital .</mat-option>\n                  <mat-option value=\"23\"> Discharged/transferred to a long term care hospital.</mat-option>\n                  <mat-option value=\"24\"> Discharged/transferred to a nursing facility certified under Medicaid but not\n                    certified\n                    under Medicare.</mat-option>\n                  <mat-option value=\"25\"> Not Mapped</mat-option>\n                  <mat-option value=\"26\"> Unknown/Invalid</mat-option>\n                  <mat-option value=\"27\"> Discharged/transferred to a federal health care facility.</mat-option>\n                  <mat-option value=\"28\"> Discharged/transferred/referred to a psychiatric hospital of psychiatric\n                    distinct\n                    part\n                    unit of a hospital</mat-option>\n                  <mat-option value=\"29\"> Discharged/transferred to a Critical Access Hospital (CAH).</mat-option>\n                  <mat-option value=\"30\"> Discharged/transferred to another Type of Health Care Institution not Defined\n                    Elsewhere</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Admission Source</mat-label>\n                <mat-select placeholder=\"Admission Source\" formControlName=\"admission_source_id\">\n                  <mat-option value=\"1\"> Physician Referral</mat-option>\n                  <mat-option value=\"2\"> Clinic Referral</mat-option>\n                  <mat-option value=\"3\">HMO Referral</mat-option>\n                  <mat-option value=\"4\">Transfer from a hospital</mat-option>\n                  <mat-option value=\"5\"> Transfer from a Skilled Nursing Facility (SNF)</mat-option>\n                  <mat-option value=\"6\"> Transfer from another health care facility</mat-option>\n                  <mat-option value=\"7\"> Emergency Room</mat-option>\n                  <mat-option value=\"8\"> Court/Law Enforcement</mat-option>\n                  <mat-option value=\"9\"> Not Available</mat-option>\n                  <mat-option value=\"10\"> Transfer from critial access hospital</mat-option>\n                  <mat-option value=\"11\"> Normal Delivery</mat-option>\n                  <mat-option value=\"12\"> Premature Delivery</mat-option>\n                  <mat-option value=\"13\"> Sick Baby</mat-option>\n                  <mat-option value=\"14\"> Extramural Birth</mat-option>\n                  <mat-option value=\"15\"> Not Available</mat-option>\n                  <mat-option value=\"17\"> NULL</mat-option>\n                  <mat-option value=\"18\"> Transfer From Another Home Health Agency</mat-option>\n                  <mat-option value=\"19\"> Readmission to Same Home Health Agency</mat-option>\n                  <mat-option value=\"20\"> Not Mapped</mat-option>\n                  <mat-option value=\"21\"> Unknown/Invalid</mat-option>\n                  <mat-option value=\"22\"> Transfer from hospital inpt/same fac reslt in a sep claim</mat-option>\n                  <mat-option value=\"23\"> Born inside this hospital</mat-option>\n                  <mat-option value=\"24\"> Born outside this hospital</mat-option>\n                  <mat-option value=\"25\"> Transfer from Ambulatory Surgery Center</mat-option>\n                  <mat-option value=\"26\"> Transfer from Hospice</mat-option>\n\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Admission Type</mat-label>\n                <mat-select placeholder=\"Admission Type\" formControlName=\"admission_type_id\">\n                  <mat-option value=\"1\">Emergency</mat-option>\n                  <mat-option value=\"2\">Urgent</mat-option>\n                  <mat-option value=\"3\">Elective</mat-option>\n                  <mat-option value=\"4\">Newborn</mat-option>\n                  <mat-option value=\"5\">Not Available</mat-option>\n                  <mat-option value=\"6\">NULL</mat-option>\n                  <mat-option value=\"7\">Trauma Center</mat-option>\n                  <mat-option value=\"8\">Not Mapped</mat-option>\n                </mat-select>\n              </mat-form-field>\n\n            </div>\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number of diagnoses</mat-label>\n                <input matInput placeholder=\"Number of diagnoses\" type=\"number\" formControlName=\"number_diagnoses\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number of Inpatient Encounters</mat-label>\n                <input matInput placeholder=\"Number of Inpatient Encounters\" type=\"number\" formControlName=\"number_inpatient\">\n              </mat-form-field>\n            </div>\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number of Outpatient Encounters</mat-label>\n                <input matInput placeholder=\"Number of Outpatient Encounters\" type=\"number\" formControlName=\"number_outpatient\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number of emergency Encounters</mat-label>\n                <input matInput placeholder=\"Number of emergency Encounters\" type=\"number\" formControlName=\"number_emergency\">\n              </mat-form-field>\n            </div>\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number of medications (currently on)</mat-label>\n                <input matInput placeholder=\"Number of medications (currently on)\" type=\"number\" formControlName=\"num_medications\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number of procedures undergone</mat-label>\n                <input matInput placeholder=\"Number of procedures undergone\" type=\"number\" formControlName=\"num_procedures\">\n              </mat-form-field>\n\n            </div>\n            <div class=\"col\">\n\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Oral Glucose Tolerance Test (OGTT)result</mat-label>\n                <input matInput placeholder=\"Oral Glucose Tolerance Test (OGTT)result\" type=\"number\" formControlName=\"max_glu_serum\">\n                <span matSuffix>(mg/dL)</span>\n              </mat-form-field>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>A1Cresult</mat-label>\n                <input formControlName=\"A1Cresult\" matInput placeholder=\"A1Cresult\" type=\"number\">\n                <span matSuffix>%</span>\n              </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n              <mat-form-field appearance=\"fill\">\n                <mat-label>Number lab procedures</mat-label>\n                <input formControlName=\"num_lab_procedures\" matInput placeholder=\"num_lab_procedures\" type=\"number\">\n                <span matSuffix>%</span>\n              </mat-form-field>\n            </div>\n\n          </div>\n          <div class=\"row px-3\">\n            <div class=\"col-12\">\n              <h2 class=\"mat-subheading-2\">Medications</h2>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"metformin\">metformin</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"repaglinide\">repaglinide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"nateglinide\">nateglinide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"chlorpropamide\">chlorpropamide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"glimepiride\">glimepiride</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"glipizide\">glipizide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"glyburide\">glyburide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"pioglitazone\">pioglitazone</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"rosiglitazone\">rosiglitazone</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"acarbose\">acarbose</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"tolazamide\">tolazamide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"insulin\">insulin</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"glyburide_metformin\">glyburide-metformin</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"glimepiride_pioglitazone\">glimepiride-pioglitazone</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"glipizide_metformin\">glipizide-metformin</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"metformin_pioglitazone\">metformin-pioglitazone</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"metformin_rosiglitazone\">metformin-rosiglitazone</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"miglitol\">miglitol</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"tolbutamide\">tolbutamide</mat-checkbox>\n            </div>\n            <div class=\"col-6 col-md-3\">\n              <mat-checkbox formControlName=\"troglitazone\">troglitazone</mat-checkbox>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n\n              <mat-form-field appearance=\"fill\">\n                <input matInput placeholder=\"Diagnosis 1 - ICD 10 Code\" formControlName='diag_1'>\n                <!-- <mat-label>Diagnosis 1</mat-label>\n                <mat-select placeholder=\"Diagnosis 1\" formControlName=\"diag_1\">\n                  <mat-option value=\"option\">Option</mat-option>\n                </mat-select> -->\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <input matInput placeholder=\"Diagnosis 2 - ICD 10 Code\" formControlName='diag_2'>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-form-field appearance=\"fill\">\n                <input matInput placeholder=\"Diagnosis 3 - ICD 10 Code\" formControlName='diag_3'>\n              </mat-form-field>\n            </div>\n          </div>\n        </form>\n      </div>\n\n\n      <div class=\"col-sm-4 text-center align-middle\">\n        <!-- <circle-progress\n          [percent]=\"score\"\n          [radius]=\"100\"\n          [subtitle] = \"'Chances of readmission'\"\n          [outerStrokeWidth]=\"16\"\n          [innerStrokeWidth]=\"8\"\n          [outerStrokeColor]=\"'#78C000'\"\n          [innerStrokeColor]=\"'#C7E596'\"\n          [animation]=\"true\"\n          [animationDuration]=\"300\"\n        ></circle-progress> -->\n        <!-- <ngx-charts-advanced-pie-chart\n          [view]=\"view\"\n          [scheme]=\"colorScheme\"\n          [results]=\"score\"\n          [gradient]=\"gradient\"\n          (select)=\"onSelect($event)\">\n        </ngx-charts-advanced-pie-chart> -->\n        <!-- <mwl-gauge\n          class=\"seven\"\n          [max]=\"100\"\n          [dialStartAngle]=\"-90\"\n          [dialEndAngle]=\"-90.001\"\n          [showValue]=\"true\"\n          [value]=\"score\"\n          [animated]=\"true\"\n          [animationDuration]=\"1\">\n        </mwl-gauge> -->\n        <ngx-gauge [type]=\"gaugeType\"\n          [value]=\"score\"\n          [label]=\"gaugeLabel\"\n          [thick]=\"gaugeForm\"\n          size=\"400\"\n          animate=\"true\"\n          [thresholds]=\"thresholdConfig\"\n          [append]=\"gaugeAppendText\">\n        </ngx-gauge>\n        <!-- <mat-label style=\"font-size: 20px\">Chances of Readmission</mat-label> -->\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #0A0945;\n  color: #ffffff;\n  z-index: 2; }\n\n.example-container {\n  margin-top: 80px; }\n\n.mat-form-field, .mat-slider {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmt1cm4vV29ya3NwYWNlL0hlYWx0aGNhcmUvZGF0YXNldF9kaWFiZXRlcy91aS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEEwOTQ1O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLCAubWF0LXNsaWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, formBuilder) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.score = 0;
        this.view = [600, 400];
        this.gaugeType = "arch";
        this.gaugeLabel = "Readmission Probability";
        this.gaugeAppendText = "%";
        this.gaugeForm = 15;
        this.thresholdConfig = {
            '0': { color: '#b9dd2a' },
            '35': { color: '#ddd22c' },
            '65': { color: '#dd992b' },
            '70': { color: '#dd4b2a' }
        };
        this.colorScheme = {
            domain: ['#f43260', '#97f433']
        };
        this.init_data = {
            "discharge_disposition_id": "2",
            "admission_source_id": "4",
            "admission_type_id": "3",
            "number_outpatient": "0",
            "number_inpatient": "0",
            "number_emergency": "0",
            "age": "13",
            "time_in_hospital": "1",
            "num_procedures": "0",
            "num_lab_procedures": "5",
            "num_medications": "12",
            "number_diagnoses": "17",
            "race": "AfricanAmerican",
            "gender": "1",
            "max_glu_serum": "280",
            "A1Cresult": "4.5",
            "diag_1": "E10.65",
            "diag_2": "E10.65",
            "diag_3": "J98.5",
            "metformin": false,
            "repaglinide": false,
            "nateglinide": false,
            "chlorpropamide": false,
            "glimepiride": false,
            "acetohexamide": false,
            "glipizide": false,
            "glyburide": false,
            "tolbutamide": false,
            "pioglitazone": false,
            "rosiglitazone": false,
            "acarbose": false,
            "miglitol": false,
            "troglitazone": false,
            "tolazamide": false,
            "insulin": false,
            "glyburide_metformin": false,
            "glipizide_metformin": false,
            "glimepiride_pioglitazone": false,
            "metformin_rosiglitazone": false,
            "metformin_pioglitazone": false
        };
        this.patientForm = formBuilder.group(this.init_data);
    }
    AppComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value;
    };
    AppComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getPrediction(this.init_data).subscribe(function (res) {
            console.log('Created a prediction');
            console.log('res', res);
            _this.data = res;
            _this.score = (+_this.data['probability_1'] * 100).toFixed(2);
            // this.score = [
            //   {
            //     "name": "Readmission",
            //     "value": +this.data['probability_1'] * 100
            //   },
            //   {
            //     "name": "No-Readmission",
            //     "value": +this.data['probability_0'] * 100
            //   }
            // ];
        });
        this.patientForm.valueChanges.subscribe(function (val) {
            _this.apiService.getPrediction(val).subscribe(function (res) {
                console.log('Created a prediction');
                console.log('res', res);
                _this.data = res;
                _this.score = (+_this.data['probability_1'] * 100).toFixed(2);
                // this.score = [
                //   {
                //     "name": "Readmission",
                //     "value": +this.data['probability_1'] * 100
                //   },
                //   {
                //     "name": "No-Readmission",
                //     "value": +this.data['probability_0'] * 100
                //   }
                // ];
            });
        });
    };
    AppComponent.prototype.displayFn = function (user) {
        if (user) {
            return user.ICD;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var keyboardevent_key_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keyboardevent-key-polyfill */ "./node_modules/keyboardevent-key-polyfill/index.js");
/* harmony import */ var keyboardevent_key_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keyboardevent_key_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_text_input_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-text-input-autocomplete */ "./node_modules/angular-text-input-autocomplete/fesm5/angular-text-input-autocomplete.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-gauge */ "./node_modules/angular-gauge/esm5/angular-gauge.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm5/ngx-gauge.js");









// // Import ng-circle-progress






Object(keyboardevent_key_polyfill__WEBPACK_IMPORTED_MODULE_2__["polyfill"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                angular_text_input_autocomplete__WEBPACK_IMPORTED_MODULE_4__["TextInputAutocompleteModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"],
                angular_gauge__WEBPACK_IMPORTED_MODULE_13__["GaugeModule"].forRoot(),
                ngx_gauge__WEBPACK_IMPORTED_MODULE_14__["NgxGaugeModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Users/ankurn/Workspace/Healthcare/dataset_diabetes/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map