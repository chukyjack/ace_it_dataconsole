"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var util_1 = require("../util");
var dom_service_1 = require("./dom.service");
/**
 * @hidden
 */
var ResizeService = /** @class */ (function () {
    function ResizeService(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    ResizeService.prototype.subscribe = function (callback) {
        var _this = this;
        if (!kendo_angular_common_1.isDocumentAvailable()) {
            return;
        }
        this._zone.runOutsideAngular(function () {
            _this.subscription = rxjs_1.fromEvent(_this._dom.getWindow(), "resize")
                .pipe(operators_1.auditTime(util_1.FRAME_DURATION))
                .subscribe(function () { return callback(); });
        });
    };
    ResizeService.prototype.unsubscribe = function () {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    };
    ResizeService.prototype.isUnsubscribed = function () {
        return this.subscription && this.subscription.closed;
    };
    ResizeService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ResizeService.ctorParameters = function () { return [
        { type: dom_service_1.DOMService },
        { type: core_1.NgZone }
    ]; };
    return ResizeService;
}());
exports.ResizeService = ResizeService;
