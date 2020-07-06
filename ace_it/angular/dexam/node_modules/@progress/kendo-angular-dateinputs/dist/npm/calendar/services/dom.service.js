"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var view_enum_1 = require("../models/view.enum");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var util_1 = require("../../util");
var div = util_1.domContainerFactory('div');
var ul = util_1.domContainerFactory('ul');
var li = util_1.domContainerFactory('li');
var td = util_1.domContainerFactory('td');
var th = util_1.domContainerFactory('th');
var tr = util_1.domContainerFactory('tr');
var tbody = util_1.domContainerFactory('tbody');
var thead = util_1.domContainerFactory('thead');
var table = util_1.domContainerFactory('table');
var monthHeader = function () { return (div("\n            <span class=\"k-calendar-title\">March 2017</span>\n            <span class=\"k-calendar-today\">TODAY</span>\n        ", 'k-calendar-header')); };
var ɵ0 = monthHeader;
exports.ɵ0 = ɵ0;
var monthWeekHeader = function () { return (table([
    thead([
        tr([th('MO')])
    ])
], 'k-calendar-weekdays')); };
var ɵ1 = monthWeekHeader;
exports.ɵ1 = ɵ1;
var repeat = function (count, mapper) { return new Array(count).fill('1').map(mapper); };
var ɵ2 = repeat;
exports.ɵ2 = ɵ2;
var content = function (rows, cells) {
    if (cells === void 0) { cells = 1; }
    return (table([
        tbody([tr([th('1')])].concat(repeat(rows, function () { return tr(repeat(cells, function (c) { return td("<span class=\"k-link\">" + c + "</span>"); })); })))
    ]));
};
var ɵ3 = content;
exports.ɵ3 = ɵ3;
var scrollable = function (children) { return div(children, 'k-content k-scrollable'); };
var ɵ4 = scrollable;
exports.ɵ4 = ɵ4;
var view = function (contentElement, className, renderWeekHeader) { return (div([
    monthHeader(),
    renderWeekHeader ? monthWeekHeader() : null,
    scrollable([contentElement, contentElement])
], className, { left: '-10000px', position: 'absolute' })); };
var ɵ5 = view;
exports.ɵ5 = ɵ5;
var ɵ6 = function () {
    var navElement;
    return function () {
        if (!kendo_angular_common_1.isDocumentAvailable) {
            return null;
        }
        if (!navElement) {
            navElement = div([scrollable([ul([li('<span>FEB</span>')])])], 'k-calendar-navigation', { left: '0px', position: 'absolute' });
        }
        return navElement;
    };
};
exports.ɵ6 = ɵ6;
var navigationList = (ɵ6)();
var viewFactory = function (_a, className, renderWeekHeader) {
    var cells = _a.cells, rows = _a.rows;
    var viewElement;
    return function () {
        if (!kendo_angular_common_1.isDocumentAvailable) {
            return null;
        }
        if (!viewElement) {
            viewElement = view(content(rows, cells), className, renderWeekHeader);
        }
        return viewElement;
    };
};
var ɵ7 = viewFactory;
exports.ɵ7 = ɵ7;
var getScrollable = function (element) { return element.querySelector('.k-scrollable'); };
var ɵ8 = getScrollable;
exports.ɵ8 = ɵ8;
var horizontal = function (element) {
    var scrollableElement = getScrollable(element);
    scrollableElement.classList.add('k-scrollable-horizontal');
    return element;
};
var ɵ9 = horizontal;
exports.ɵ9 = ɵ9;
var monthView = viewFactory({ cells: 7, rows: 6 }, 'k-calendar-view k-calendar-monthview', true);
var yearView = viewFactory({ cells: 5, rows: 3 }, 'k-calendar-view k-calendar-yearview', false);
var decadeView = viewFactory({ cells: 5, rows: 2 }, 'k-calendar-view k-calendar-decadeview', false);
var horzMonthView = function () { return horizontal(monthView()); };
var ɵ10 = horzMonthView;
exports.ɵ10 = ɵ10;
var horzYearView = function () { return horizontal(yearView()); };
var ɵ11 = horzYearView;
exports.ɵ11 = ɵ11;
var horzDecadeView = function () { return horizontal(decadeView()); };
var ɵ12 = horzDecadeView;
exports.ɵ12 = ɵ12;
var height = function (element) { return (parseFloat(window.getComputedStyle(element).height) || element.offsetHeight); };
var ɵ13 = height;
exports.ɵ13 = ɵ13;
var width = function (element) {
    var styles = window.getComputedStyle(element);
    var computed = parseFloat(styles.width)
        + parseFloat(styles.paddingLeft)
        + parseFloat(styles.paddingRight);
    return computed || element.offsetWidth;
};
var ɵ14 = width;
exports.ɵ14 = ɵ14;
var getBody = function (element) { return element.querySelector('tbody'); };
var ɵ15 = getBody;
exports.ɵ15 = ɵ15;
/**
 * @hidden
 */
var DOMService = /** @class */ (function () {
    function DOMService() {
    }
    DOMService.prototype.ensureHeights = function () {
        if (this.calendarHeight !== undefined) {
            return;
        }
        this.calculateHeights();
    };
    DOMService.prototype.calculateHeights = function (container) {
        var _this = this;
        if (!kendo_angular_common_1.isDocumentAvailable()) {
            return;
        }
        this.hostContainer = container;
        this.batch(monthView(), function (contentElement) {
            var viewElement = getBody(contentElement);
            _this.calendarHeight = height(contentElement);
            _this.monthViewHeight = height(viewElement);
            _this.headerHeight = height(viewElement.children[0]);
            _this.scrollableContentHeight = height(getScrollable(contentElement));
        });
        this.batch(horzMonthView(), function (contentElement) {
            var viewElement = getBody(contentElement);
            _this.calendarWidth = width(contentElement);
            _this.monthViewWidth = width(viewElement);
            _this.scrollableContentWidth = width(getScrollable(contentElement));
        });
        this.batch(yearView(), function (contentElement) {
            _this.yearViewHeight = height(getBody(contentElement));
            _this.scrollableYearContentHeight = height(getScrollable(contentElement));
        });
        this.batch(horzYearView(), function (contentElement) {
            _this.yearViewWidth = width(getBody(contentElement));
        });
        this.batch(decadeView(), function (contentElement) {
            _this.decadeViewHeight = height(getBody(contentElement));
            _this.centuryViewHeight = _this.decadeViewHeight;
        });
        this.batch(horzDecadeView(), function (contentElement) {
            _this.decadeViewWidth = width(getBody(contentElement));
            _this.centuryViewWidth = _this.decadeViewWidth;
        });
        this.batch(navigationList(), function (contentElement) {
            _this.navigationItemHeight = height(contentElement.querySelector('li'));
        });
    };
    DOMService.prototype.viewHeight = function (viewType) {
        return this.viewDimension(viewType, 'height');
    };
    DOMService.prototype.viewWidth = function (viewType) {
        return this.viewDimension(viewType, 'width');
    };
    DOMService.prototype.viewDimension = function (viewType, dimension) {
        var viewProp = dimension === 'height' ? 'ViewHeight' : 'ViewWidth';
        switch (viewType) {
            case view_enum_1.CalendarViewEnum.month:
                return this["month" + viewProp];
            case view_enum_1.CalendarViewEnum.year:
                return this["year" + viewProp];
            case view_enum_1.CalendarViewEnum.decade:
                return this["decade" + viewProp];
            case view_enum_1.CalendarViewEnum.century:
                return this["century" + viewProp];
            default:
                return 1;
        }
    };
    DOMService.prototype.batch = function (contentElement, action) {
        var hostContainer = this.hostContainer || document.body;
        var appendedContent = hostContainer.appendChild(contentElement);
        action(appendedContent);
        hostContainer.removeChild(appendedContent);
    };
    DOMService.decorators = [
        { type: core_1.Injectable },
    ];
    return DOMService;
}());
exports.DOMService = DOMService;
