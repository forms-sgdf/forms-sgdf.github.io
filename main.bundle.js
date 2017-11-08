webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular__ = __webpack_require__("../../../../survey-angular/survey.angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


__WEBPACK_IMPORTED_MODULE_1_survey_angular__["Survey"].cssType = "bootstrap";
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_component__ = __webpack_require__("../../../../../src/app/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__results_component__ = __webpack_require__("../../../../../src/app/results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]
                }, {
                    path: 'results',
                    component: __WEBPACK_IMPORTED_MODULE_6__results_component__["a" /* ResultsComponent */]
                }], { useHash: true })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_angular__ = __webpack_require__("../../../../survey-angular/survey.angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__WEBPACK_IMPORTED_MODULE_2_survey_angular__["Survey"].cssType = "bootstrap";
var FormComponent = (function () {
    // ngOnInit() {
    //   this.survey = new Survey.ReactSurveyModel(this.json);
    //   this.survey.onComplete.add((survey) => {
    //     survey.sendResult(this.sendResultId);
    //   });
    //   Survey.SurveyNG.render("surveyElement", { model: this.survey });
    // }
    function FormComponent(route) {
        var _this = this;
        this.route = route;
        this.isLoading = true;
        this.survey = null;
        this.sendResultId = '4234bd81-d232-4dd1-9890-827c176a85d9';
        this.json = {
            completeText: "Valider",
            pages: [
                {
                    elements: [
                        {
                            type: "dropdown",
                            name: "groupe",
                            title: "Votre groupe",
                            isRequired: true,
                            choices: [
                                "Dumont d'Urville",
                                "Le Bon Conseil",
                                "Notre Dame de la Gare",
                                "Notre Dame du Liban",
                                "Notre Dame du Rosaire",
                                "Saint Étienne du Mont",
                                "Saint Germain des Prés",
                                "Saint Jacques du Haut Pas",
                                "Saint Jean Baptiste de la Salle",
                                "Saint Médard",
                                "Saint Pierre de Montrouge"
                            ]
                        },
                        {
                            type: "matrixdynamic",
                            name: "jeunes",
                            title: "Liste des jeunes qui viennent",
                            isRequired: true,
                            columns: [
                                {
                                    name: "nom",
                                    title: "Prenom et Nom",
                                    isRequired: true
                                },
                                {
                                    name: "responsabilite",
                                    title: "Responsabilité",
                                    choices: [
                                        {
                                            value: "animation",
                                            text: "Responsable animation"
                                        },
                                        {
                                            value: "budget",
                                            text: "Responsable budget"
                                        },
                                        {
                                            value: "communication",
                                            text: "Responsable communication"
                                        },
                                        {
                                            value: "documentation",
                                            text: "Responsable documentation"
                                        },
                                        {
                                            value: "hébergement",
                                            text: "Responsable hébergement"
                                        },
                                        {
                                            value: "intendance",
                                            text: "Responsable intendance"
                                        },
                                        {
                                            value: "matériel",
                                            text: "Responsable matériel"
                                        },
                                        {
                                            value: "santé",
                                            text: "Responsable santé"
                                        },
                                        {
                                            value: "spirituelle",
                                            text: "Responsable vie spirituelle"
                                        }
                                    ],
                                    cellType: "dropdown",
                                    isRequired: true
                                },
                                {
                                    name: "annee",
                                    title: "Année",
                                    choices: [
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    cellType: "radiogroup",
                                    isRequired: true
                                }
                            ],
                            choices: [
                                1,
                                2,
                                "3"
                            ],
                            cellType: "text",
                            rowCount: 5,
                            addRowText: "Ajouter un jeune",
                            removeRowText: "Enlever"
                        },
                        {
                            type: "matrixdynamic",
                            name: "chefs",
                            title: "Liste des chefs qui viennent",
                            isRequired: true,
                            columns: [
                                {
                                    name: "nom",
                                    title: "Prénom et Nom",
                                    isRequired: true
                                },
                                {
                                    name: "Adresse email",
                                    isRequired: true
                                },
                                {
                                    name: "Je participe à l'annimation",
                                    choices: [
                                        {
                                            value: "cap",
                                            text: "Du jeu 'Approfondissement du cap'"
                                        },
                                        {
                                            value: "grand_jeu",
                                            text: "Du grand jeu"
                                        },
                                        {
                                            value: "veillée",
                                            text: "De la veillée"
                                        },
                                        {
                                            value: "messe",
                                            text: "De la messe"
                                        },
                                        {
                                            value: "responsabilités",
                                            text: "De l'atelier sur les responsabilités"
                                        }
                                    ],
                                    cellType: "dropdown",
                                    isRequired: true
                                }
                            ],
                            choices: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ],
                            cellType: "text",
                            addRowText: "Ajouter un chef",
                            removeRowText: "Enlever"
                        },
                        {
                            type: "comment",
                            name: "régime",
                            title: "Régimes et restrictions alimentaires dans la Caravane / Flotille",
                            rows: 2
                        },
                        {
                            type: "comment",
                            name: "comment",
                            title: "Un commentaire, une petite blague ... :)"
                        }
                    ],
                    innerIndent: 2,
                    name: "page1",
                    title: "Inscription WEECAP 18/19 novembre"
                }
            ]
        };
        this.route
            .queryParams
            .subscribe(function (params) {
            console.log(params);
            if (params.formId != null && params.sendResultId != null) {
                _this.json = {
                    surveyId: params.formId
                };
                _this.sendResultId = params.sendResultId;
                _this.survey = new __WEBPACK_IMPORTED_MODULE_2_survey_angular__["ReactSurveyModel"](_this.json);
                _this.survey.onComplete.add(function (survey) {
                    survey.sendResult(_this.sendResultId);
                });
                __WEBPACK_IMPORTED_MODULE_2_survey_angular__["SurveyNG"].render("surveyElement", { model: _this.survey });
                _this.isLoading = false;
            }
        });
    }
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form',
        template: "\n  <div class=\"survey-container contentcontainer codecontainer\"><div id=\"surveyElement\"></div></div>\n  <h4 *ngIf=\"isLoading\">Chargement ...</h4>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], FormComponent);

var _a;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_save_as__ = __webpack_require__("../../../../save-as/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_save_as___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_save_as__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_angular__ = __webpack_require__("../../../../survey-angular/survey.angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_json2csv__ = __webpack_require__("../../../../json2csv/lib/json2csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_json2csv__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_survey_angular__["Survey"].cssType = "bootstrap";
var ResultsComponent = (function () {
    function ResultsComponent(http) {
        this.http = http;
        this.data = null;
        this.resultCount = 0;
        this.jeunes = [];
        this.chefs = [];
        this.key = '068282521c71483eadef7d00a8b82615';
        this.survey = '181f389e-1ba7-4745-a903-28ca94f01396';
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://b219.guyard.fr/api/MySurveys/getSurveyResults/" + this.survey + "?accessKey=" + this.key, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Proxy-To', 'surveyjs.io')
        }).subscribe(function (data) {
            _this.data = data['Data'];
            _this.resultCount = data['ResultCount'];
            _this.jeunes = [];
            _this.chefs = [];
            var _loop_1 = function (i) {
                var obj = _this.data[i];
                obj.jeunes.map(function (j) { return (__assign({}, j, { groupe: obj.groupe })); }).forEach(function (e) {
                    _this.jeunes.push(e);
                });
                obj.chefs.map(function (j) { return (__assign({}, j, { groupe: obj.groupe })); }).forEach(function (e) {
                    _this.chefs.push(e);
                });
            };
            for (var i = 0; i < _this.data.length; ++i) {
                _loop_1(i);
            }
        });
    };
    ResultsComponent.prototype.saveChefsAsCvs = function () {
        var fields = ['nom', 'groupe', 'Adresse email', 'Je participe à l\'annimation'];
        try {
            var result = __WEBPACK_IMPORTED_MODULE_4_json2csv__({ data: this.chefs, fields: fields });
            console.log(result);
            var blob = new Blob([result], { type: 'text/csv;charset=utf-8' });
            __WEBPACK_IMPORTED_MODULE_2_save_as___default()(blob, 'resultats.csv');
        }
        catch (err) {
            // Errors are thrown for bad options, or if the data is empty and no fields are provided.
            // Be sure to provide fields if it is possible that your data array will be empty.
            console.error(err);
        }
    };
    ResultsComponent.prototype.saveJeunesAsCvs = function () {
        var fields = ['nom', 'groupe', 'responsabilite', 'annee'];
        try {
            var result = __WEBPACK_IMPORTED_MODULE_4_json2csv__({ data: this.jeunes, fields: fields });
            console.log(result);
            var blob = new Blob([result], { type: 'text/csv;charset=utf-8' });
            __WEBPACK_IMPORTED_MODULE_2_save_as___default()(blob, 'resultats.csv');
        }
        catch (err) {
            // Errors are thrown for bad options, or if the data is empty and no fields are provided.
            // Be sure to provide fields if it is possible that your data array will be empty.
            console.error(err);
        }
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-results',
        template: "<div class=\"results\">\n    <h3>R\u00E9sultats</h3>\n    <div *ngFor=\"let value of data\">\n      <h5>{{ value.groupe }}</h5>\n      <div>\n        <strong class=\"title-line\">Nombre de jeunes </strong><span>{{ value.jeunes.length }}</span>\n      </div>\n      <div>\n        <strong class=\"title-line\">Nombre de chefs </strong><span>{{ value.chefs.length }}</span>\n      </div>\n      <div>\n        <strong class=\"title-line\">R\u00E9gime </strong><div class=\"indent\">{{ value['r\u00E9gime'] }}</div>\n      </div>\n      <div>\n        <strong class=\"title-line\">Commentaire </strong><div class=\"indent\">{{ value['comment'] }}</div>\n      </div>\n    </div>\n\n    <h5>Jeunes <button class=\"btn btn-primary pull-right\" (click)=\"saveJeunesAsCvs()\">T\u00E9l\u00E9charger CSV</button> </h5>\n    <table class=\"table\">\n      <tr>\n        <th>Nom</th>\n        <th>Groupe</th>\n        <th>Responsabilit\u00E9</th>\n        <th>Ann\u00E9e</th>\n      </tr>\n      <tr *ngFor=\"let jeune of jeunes\">\n        <td>{{ jeune.nom }}</td>\n        <td>{{ jeune.groupe }}</td>\n        <td>{{ jeune.responsabilite }}</td>\n        <td>{{ jeune.annee }}</td>\n      </tr>\n    </table>\n\n    <h5>Chefs <button class=\"btn btn-primary pull-right\" (click)=\"saveChefsAsCvs()\">T\u00E9l\u00E9charger CSV</button></h5>\n    <table class=\"table\">\n      <tr>\n        <th>Nom</th>\n        <th>Groupe</th>\n        <th>Email</th>\n        <th>Je participe \u00E0</th>\n      </tr>\n      <tr *ngFor=\"let chef of chefs\">\n        <td>{{ chef.nom }}</td>\n        <td>{{ chef.groupe }}</td>\n        <td>{{ chef['Adresse email'] }}</td>\n        <td>{{ chef[\"Je participe \u00E0 l'annimation\"] }}</td>\n      </tr>\n    </table>\n  </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map