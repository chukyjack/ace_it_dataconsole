"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var util_1 = require("../../util");
var div = util_1.domContainerFactory('div');
var ul = util_1.domContainerFactory('ul');
var li = util_1.domContainerFactory('li');
var listItem = function () { return li('<span>02</span>', 'k-item'); };
var ɵ0 = listItem;
exports.ɵ0 = ɵ0;
var list = function () { return ul([listItem()], 'k-reset'); };
var ɵ1 = list;
exports.ɵ1 = ɵ1;
var scrollable = function () { return (div([list()], 'k-time-container k-content k-scrollable')); };
var ɵ2 = scrollable;
exports.ɵ2 = ɵ2;
var timeListWrapper = function () {
    if (!kendo_angular_common_1.isDocumentAvailable()) {
        return null;
    }
    return div([div([scrollable()], 'k-time-list')], 'k-time-list-wrapper', { left: '-10000px', position: 'absolute' });
};
var ɵ3 = timeListWrapper;
exports.ɵ3 = ɵ3;
var TIMELIST_WRAPPER = timeListWrapper();
/**
 * @hidden
 */
var DOMService = /** @class */ (function () {
    function DOMService() {
    }
    DOMService.prototype.ensureHeights = function () {
        if (this.timeListHeight !== undefined) {
            return;
        }
        this.calculateHeights();
    };
    DOMService.prototype.calculateHeights = function (container) {
        if (!kendo_angular_common_1.isDocumentAvailable()) {
            return;
        }
        var listContainer = container && container.querySelector('.k-time-list-container');
        var hostContainer = listContainer || document.body;
        var wrapper = hostContainer.appendChild(TIMELIST_WRAPPER);
        this.timeListHeight = wrapper.querySelector('.k-scrollable').offsetHeight;
        this.itemHeight = wrapper.querySelector('li').offsetHeight;
        hostContainer.removeChild(wrapper);
    };
    DOMService.prototype.isActive = function (element) {
        if (!kendo_angular_common_1.isDocumentAvailable() || !element) {
            return false;
        }
        return (element.nativeElement || element) === document.activeElement;
    };
    DOMService.decorators = [
        { type: core_1.Injectable },
    ];
    return DOMService;
}());
exports.DOMService = DOMService;
