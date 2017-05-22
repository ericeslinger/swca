webpackJsonp([3],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HistoryModule = (function () {
    function HistoryModule() {
    }
    return HistoryModule;
}());
HistoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* History */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* History */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* History */]
        ]
    })
], HistoryModule);

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_critical__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_actuallyRandom__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticalRoller; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriticalRoller = (function () {
    function CriticalRoller() {
        this.valSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.eventSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.critBonus$ = this.valSubject.asObservable()
            .scan(function (acc, v) {
            if (v === 0) {
                return 0;
            }
            else {
                return Math.min(Math.max(acc + v, 0), 150);
            }
        }, 0)
            .share()
            .startWith(0);
        this.crit$ = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].combineLatest(this.critBonus$, this.eventSubject.asObservable())
            .distinctUntilChanged(function (n, o) { return n[1] === o[1]; })
            .map(function (v) { return v[0]; })
            .map(function (v) {
            var critScore = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_actuallyRandom__["a" /* randInt */])(100) + 1 + v;
            var theCrit = __WEBPACK_IMPORTED_MODULE_1__services_critical__["a" /* Criticals */].find(function (c) { return (critScore >= c.min && critScore <= c.max); });
            return {
                name: theCrit.name,
                desc: theCrit.description,
                val: critScore,
            };
        }).share();
    }
    CriticalRoller.prototype.rollCrit = function ($event) {
        this.eventSubject.next($event);
    };
    CriticalRoller.prototype.controlClick = function (val) {
        this.valSubject.next(val);
    };
    return CriticalRoller;
}());
CriticalRoller = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'critical-roller',template:/*ion-inline-start:"/Users/eric/Develop/swca/src/components/critical-roller/critical-roller.html"*/'<div class="results" *ngIf="crit$ | async; let crit; else waiting">\n  <p class="strong">{{ crit.name }}({{ crit.val }}):</p>\n  <p>{{ crit.desc }}</p>\n</div>\n<ng-template #waiting>\n  <div class="buttons">\n    <button ion-button clear class="skinny-button" (click)="controlClick(-10)">\n      <svg class="die"><use xlink:href="#minus-outline"></use></svg>\n    </button>\n    <button ion-button clear (click)="rollCrit($event)" class="strong">Roll +{{critBonus$ | async}}</button>\n    <button ion-button clear class="skinny-button" (click)="controlClick(+10)">\n      <svg class="die"><use xlink:href="#plus-outline"></use></svg>\n    </button>\n  </div>\n</ng-template>\n'/*ion-inline-end:"/Users/eric/Develop/swca/src/components/critical-roller/critical-roller.html"*/,
    }),
    __metadata("design:paramtypes", [])
], CriticalRoller);

//# sourceMappingURL=critical-roller.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NIcons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NIcons component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var NIcons = (function () {
    function NIcons() {
    }
    // constructor() { }
    NIcons.prototype.ngOnInit = function () {
        this.shim = new Array(this.number).fill(this.icon);
    };
    return NIcons;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", String)
], NIcons.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", Number)
], NIcons.prototype, "number", void 0);
NIcons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'n-icons',template:/*ion-inline-start:"/Users/eric/Develop/swca/src/components/n-icons/n-icons.html"*/'<!-- Generated template for the NIcons component -->\n<svg *ngFor="let url of shim">\n  <use [attr.xlink:href]="url"></use>\n</svg>\n'/*ion-inline-end:"/Users/eric/Develop/swca/src/components/n-icons/n-icons.html"*/,
    })
], NIcons);

//# sourceMappingURL=n-icons.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollResult; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RollResult = (function () {
    function RollResult() {
        this.showingDetails = 'out';
    }
    RollResult.prototype.toggleDetails = function () {
        this.showingDetails = this.showingDetails === 'in' ? 'out' : 'in';
    };
    Object.defineProperty(RollResult.prototype, "netSuccess", {
        get: function () {
            return this.roll.result.success + this.roll.result.triumph - this.roll.result.failure - this.roll.result.despair;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "success", {
        get: function () {
            return this.netSuccess > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "net", {
        get: function () {
            return Math.abs(this.netSuccess);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "netBonus", {
        get: function () {
            return this.roll.result.advantage - this.roll.result.threat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "good", {
        get: function () {
            return this.netBonus > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "bonus", {
        get: function () {
            return Math.abs(this.netBonus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "triumph", {
        get: function () {
            return this.roll.result.triumph;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "despair", {
        get: function () {
            return this.roll.result.despair;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "light", {
        get: function () {
            return this.roll.result.light;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "dark", {
        get: function () {
            return this.roll.result.dark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RollResult.prototype, "resultString", {
        get: function () {
            var base = '';
            if (this.triumph > 0 && this.despair > 0) {
                base = 'Triumphant, Despairing ';
            }
            else if (this.triumph > 0) {
                base = 'Triumphant ';
            }
            else if (this.despair > 0) {
                base = 'Despairing ';
            }
            if (this.success) {
                return base + "Success (" + this.net + ", " + this.netBonus + ")";
            }
            else {
                return base + "Failure (" + this.net + ", " + this.netBonus + ")";
            }
        },
        enumerable: true,
        configurable: true
    });
    return RollResult;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", Object)
], RollResult.prototype, "roll", void 0);
RollResult = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'roll-result',template:/*ion-inline-start:"/Users/eric/Develop/swca/src/components/roll-result/roll-result.html"*/'<ion-card>\n  <ion-card-header ion-item (click)="toggleDetails()">\n    <h2>\n      {{resultString}} for {{roll.roller}}\n    </h2>\n    <ion-icon item-right [@rotateNinety]="showingDetails" name="arrow-dropleft"></ion-icon>\n  </ion-card-header>\n  <ion-card-content class="dice-history" [@slide]="showingDetails">\n    <div class="detail-label">\n      Rolled\n    </div>\n    <div class="detail-row">\n      <svg\n        class="die"\n        *ngFor="let die of roll.dice"\n        [ngClass]="die.type.class"\n      >\n        <use [attr.xlink:href]="die.type.iconURL"></use>\n      </svg>\n    </div>\n    <div class="detail-label">\n      Net Results\n    </div>\n    <div class="detail-row">\n      <n-icons [icon]="success ? \'#icon-success\' : \'#icon-failure\'" [number]="net"></n-icons>\n      <ng-container *ngIf="bonus > 0">\n        <n-icons [icon]="good ? \'#icon-advantage\' : \'#icon-threat\'" [number]="bonus"></n-icons>\n      </ng-container>\n      <ng-container *ngIf="triumph > 0">\n        <n-icons icon="#icon-triumph" [number]="triumph"></n-icons>\n      </ng-container>\n      <ng-container *ngIf="despair > 0">\n        <n-icons icon="#icon-despair" [number]="despair"></n-icons>\n      </ng-container>\n    </div>\n    <div class="detail-label">\n      Raw Roll\n    </div>\n    <div class="detail-row">\n      <div class="result-face" [ngClass]="face.type.class" *ngFor="let face of roll.dice">\n        <svg\n          class="die"\n          *ngFor="let pip of face.showing"\n        >\n          <use [attr.xlink:href]="\'#icon-\'+pip"></use>\n        </svg>\n      </div>\n    </div>\n    <ion-note>\n      {{roll.ts | timeAgo}}\n    </ion-note>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/eric/Develop/swca/src/components/roll-result/roll-result.html"*/,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('slide', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    'max-height': '400px',
                    overflow: 'hidden',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    overflow: 'hidden',
                    height: '0px',
                    'padding-top': '0',
                    'padding-bottom': '0',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out')),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('rotateNinety', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    transform: 'rotate(-90deg)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    transform: 'rotate(0)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out')),
            ]),
        ],
    })
], RollResult);

//# sourceMappingURL=roll-result.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Criticals; });
// tslint:disable max-line-length
var Criticals = [
    {
        name: 'Minor Nick',
        description: 'The target suffers 1 strain.',
        min: 1,
        max: 5,
    },
    {
        name: 'Slowed Down',
        description: 'The target can only act during the last allied Initiative slot on their next turn.',
        min: 6,
        max: 10,
    },
    {
        name: 'Sudden Jolt',
        description: 'The target drops whatever is in hand.',
        min: 11,
        max: 15,
    },
    {
        name: 'Distracted',
        description: 'The target cannot perform a free maneuver during their next turn.',
        min: 16,
        max: 20,
    },
    {
        name: 'Off-Balance',
        description: 'Add one Setback to their next skill check.',
        min: 21,
        max: 25,
    },
    {
        name: 'Discouraging Wound',
        description: 'Flip one light side Destiny point to a dark side Destiny Point (reverse if NPC).',
        min: 26,
        max: 30,
    },
    {
        name: 'Stunned',
        description: 'The target is staggered until the end of their next turn.',
        min: 31,
        max: 35,
    },
    {
        name: 'Stinger',
        description: 'Increase difficulty of next check by one.',
        min: 36,
        max: 40,
    },
    {
        name: 'Bowled Over',
        description: 'The target is knocked prone and suffers 1 strain.',
        min: 41,
        max: 45,
    },
    {
        name: 'Head Ringer',
        description: 'The target increases the difficulty of all Intellect and Cunning checks by one until the end of the encounter.',
        min: 46,
        max: 50,
    },
    {
        name: 'Fearsome Wound',
        description: 'The target increases the difficulty of all Presence and Willpower checks by one until the end of the encounter.',
        min: 51,
        max: 55,
    },
    {
        name: 'Agonizing Wound',
        description: 'The target increases the difficulty of all Brawn and Agility checks by one until the end of the encounter.',
        min: 56,
        max: 60,
    },
    {
        name: 'Slightly Dazed',
        description: 'The target is disoriented until the end of the encounter.',
        min: 61,
        max: 65,
    },
    {
        name: 'Scattered Senses',
        description: 'The target removes all Boost from skill checks until the end of the encounter.',
        min: 66,
        max: 70,
    },
    {
        name: 'Hamstrung',
        description: 'The target loses their free maneuver until the end of the encounter.',
        min: 71,
        max: 75,
    },
    {
        name: 'Overpowered',
        description: 'The target leaves themself open. and the attacker may immediately attempt another free attack against him, using the exact same pool as the original attack.',
        min: 76,
        max: 80,
    },
    {
        name: 'Winded',
        description: 'Until the end of the encounter, the target cannot voluntarily suffer strain to activate any abilities or gain additional maneuvers.',
        min: 81,
        max: 85,
    },
    {
        name: 'Compromised',
        description: 'Increase difficulty of all skill checks by one until the end of the encounter.',
        min: 86,
        max: 90,
    },
    {
        name: 'At the Brink',
        description: 'The target suffers 1 strain each time they perform an action.',
        min: 91,
        max: 95,
    },
    {
        name: 'Crippled',
        description: 'One of the target\'s limbs (selected by the GM) is crippled until healed or replaced. Increase difficulty of all checks that require use of that limb by one.',
        min: 96,
        max: 100,
    },
    {
        name: 'Maimed',
        description: 'One of the target\'s limbs (selected by the GM) is permanently lost Unless the target has a cybernetic replacement, the target cannot perform actions that would require the use of that limb. All other actions gain one Setback.',
        min: 101,
        max: 105,
    },
    {
        name: 'Horrific Injury',
        description: 'Randomly roll 1d10 to determine one of the target\'s characteristics: 1-3 for Brawn, 4-6 for Agility, 7 for Intellect, 8 for Cunning, 9 for Presence, 10 for Willpower. Until this Critical In ury is healed, treat that characteristic as one point lower',
        min: 106,
        max: 110,
    },
    {
        name: 'Temporarily Lame',
        description: 'Until this Critical Injury is healed, the target cannot perform more than one maneuver during his turn.',
        min: 111,
        max: 115,
    },
    {
        name: 'Blinded',
        description: 'The target can no longer see. Upgrade the difficulty of all checks twice. Upgrade the difficulty of Perception and Vigilance checks three times.',
        min: 116,
        max: 120,
    },
    {
        name: 'Knocked Senseless',
        description: 'The target is staggered for the remainder of the encounter.',
        min: 121,
        max: 125,
    },
    {
        name: 'Gruesome Injury',
        description: 'Randomly roll 1d10 to determine one of the target\'s characteristics: 1-3 for Brawn. 4-6 for Agility, 7 for Intellect, 8 for Cunning, 9 for Presence, 10 for Willpower. That characteristic is permanently reduced by one, to a minimum of one.',
        min: 126,
        max: 130,
    },
    {
        name: 'Bleeding Out',
        description: 'Every round, the target suffers 1 wound and 1 strain at the beginning of their turn. For every  five wounds they suffer beyond their wound threshold, roll one additional Critical Injury.',
        min: 131,
        max: 140,
    },
    {
        name: 'The End is Nigh',
        description: 'The target will die after the last Initiative slot during the next round.',
        min: 141,
        max: 150,
    },
    {
        name: 'Dead',
        description: 'Complete, obliterated death',
        min: 151,
        max: 2000,
    },
];
//# sourceMappingURL=critical.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__critical_roller_critical_roller__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__die_chooser_die_chooser__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roll_result_roll_result__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__n_icons_n_icons__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__critical_roller_critical_roller__["a" /* CriticalRoller */],
            __WEBPACK_IMPORTED_MODULE_2__die_chooser_die_chooser__["a" /* DieChooser */],
            __WEBPACK_IMPORTED_MODULE_3__roll_result_roll_result__["a" /* RollResult */],
            __WEBPACK_IMPORTED_MODULE_4__n_icons_n_icons__["a" /* NIcons */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__["a" /* PipesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__critical_roller_critical_roller__["a" /* CriticalRoller */],
            __WEBPACK_IMPORTED_MODULE_2__die_chooser_die_chooser__["a" /* DieChooser */],
            __WEBPACK_IMPORTED_MODULE_3__roll_result_roll_result__["a" /* RollResult */],
            __WEBPACK_IMPORTED_MODULE_4__n_icons_n_icons__["a" /* NIcons */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map