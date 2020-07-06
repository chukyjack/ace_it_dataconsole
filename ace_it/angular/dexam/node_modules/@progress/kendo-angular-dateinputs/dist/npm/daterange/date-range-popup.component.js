"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var date_range_popup_template_directive_1 = require("./date-range-popup-template.directive");
var date_range_service_1 = require("./date-range.service");
var multiview_calendar_component_1 = require("../calendar/multiview-calendar.component");
var preventable_event_1 = require("../preventable-event");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * Represents the Kendo UI DateRangePopup component for Angular.
 *
 * @example
 * ```ts
 * import { DateInputsModule, DateRangeService } from '@progress/kendo-angular-dateinputs';
 *
 * _@Component({
 * providers: [DateRangeService],
 * selector: 'my-app',
 * template: `
 *  <button #anchor (click)="popup.toggle()">Toggle</button>
 *  <kendo-daterange-popup [anchor]="anchor" #popup></kendo-daterange-popup>
 * `
 * })
 * class AppComponent {
 * }
 * ```
 */
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent(popupService, dateRangeService, zone, rtl) {
        this.popupService = popupService;
        this.dateRangeService = dateRangeService;
        this.zone = zone;
        this.rtl = rtl;
        /**
         * Controls the popup animation.
         * By default, the opening and closing animations are enabled.
         * For more information about controlling the popup animations,
         * refer to the article on [animations]({% slug animations_popup %}).
         */
        this.animate = true;
        /**
         * Configures the collision behavior of the popup.
         * For more information, refer to the article on
         * [viewport boundary detection]({% slug viewportboundarydetection_popup %}).
         */
        this.collision = { horizontal: 'fit', vertical: 'flip' };
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         * For more information, refer to the section on
         * [events]({% slug overview_datepicker %}#toc-events).
         */
        this.open = new core_1.EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         * For more information, refer to the section on
         * [events]({% slug overview_datepicker %}#toc-events).
         */
        this.close = new core_1.EventEmitter();
        /**
         * Fires each time the calendar element is blurred.
         */
        this.onBlur = new core_1.EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the calendar element is focused.
         */
        this.onFocus = new core_1.EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the popup is closed either on `ESC` keypress or on leaving the viewport.
         */
        this.cancel = new core_1.EventEmitter();
        /**
         * @hidden
         */
        this.popupUID = kendo_angular_common_1.guid();
        this.calendarSubscriptions = new rxjs_1.Subscription(function () { });
        this.subscriptions = new rxjs_1.Subscription(function () { });
        this.resolvedPromise = Promise.resolve();
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "calendar", {
        /**
         * The active calendar that is visible in the popup.
         *
         * > When the popup is closed, the property returns `null`.
         */
        get: function () {
            return this._calendar;
        },
        set: function (calendar) {
            this._calendar = calendar;
            this.subscribeFocusBlur(calendar);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "isActive", {
        /**
         * Gets the active state of the component.
         * When the opened calendar is active, returns `true`.
         */
        get: function () {
            return this.calendar && this.calendar.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        /**
         * Gets or sets the visibility state of the component.
         */
        set: function (show) {
            var event = new preventable_event_1.PreventableEvent();
            if (this._show === show) {
                return;
            }
            if (!this._show && show) {
                this.open.emit(event);
            }
            else if (this._show && !show) {
                this.close.emit(event);
            }
            if (event.isDefaultPrevented()) {
                return;
            }
            this._toggle(show);
        },
        enumerable: true,
        configurable: true
    });
    DateRangePopupComponent.prototype.ngOnInit = function () {
        this.dateRangeService.registerPopup(this);
    };
    DateRangePopupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.calendarSubscriptions.add(this.contentCalendar.changes.subscribe(function (changes) { return _this.calendar = changes.first; }));
        this.calendarSubscriptions.add(this.viewCalendar.changes.subscribe(function (changes) { return _this.calendar = changes.first; }));
    };
    DateRangePopupComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
        this.calendarSubscriptions.unsubscribe();
        if (this.activateSubscription) {
            this.activateSubscription.unsubscribe();
        }
        if (this.blurSubscription) {
            this.blurSubscription.unsubscribe();
            this.focusSubscription.unsubscribe();
        }
    };
    /**
     *  Opens the popup component and focuses the calendar.
     */
    DateRangePopupComponent.prototype.activate = function () {
        var _this = this;
        if (this.show === true) {
            return;
        }
        if (this.activateSubscription) {
            this.activateSubscription.unsubscribe();
        }
        this.show = true;
        this.zone.runOutsideAngular(function () {
            _this.activateSubscription = rxjs_1.merge(_this.contentCalendar.changes, _this.viewCalendar.changes)
                .pipe(operators_1.filter(function (changes) { return changes && changes.first; }), operators_1.map(function (changes) { return changes.first; }))
                .subscribe(function (calendar) { return setTimeout(function () { return calendar.focus(); }); });
        });
    };
    /**
     *  Focuses the calendar (if available).
     */
    DateRangePopupComponent.prototype.focus = function () {
        if (this.calendar) {
            this.calendar.focus();
        }
    };
    /**
     * Checks if a focused element ids placed inside the popup.
     *
     * @return boolean;
     */
    DateRangePopupComponent.prototype.hasActiveContent = function () {
        if (!kendo_angular_common_1.isDocumentAvailable() || !this.popupRef) {
            return false;
        }
        return this.popupRef.popupElement.contains(document.activeElement);
    };
    /**
     * Toggles the visibility of the popup.
     * If you use the `toggle` method to show or hide the popup,
     * the `open` and `close` events do not fire.
     *
     * @param show The state of the popup.
     */
    DateRangePopupComponent.prototype.toggle = function (show) {
        var _this = this;
        this.resolvedPromise.then(function () {
            _this._toggle((show === undefined) ? !_this.show : show);
        });
    };
    /**
     * @hidden
     *
     * Closes the popup and triggers the `cancel` event.
     */
    DateRangePopupComponent.prototype.cancelPopup = function () {
        this.show = false;
        this.cancel.emit();
    };
    DateRangePopupComponent.prototype.handleMouseLeave = function () {
        this.dateRangeService.setRange(this.dateRangeService.selectionRange);
    };
    DateRangePopupComponent.prototype.handleKeydown = function (event) {
        var _this = this;
        var altKey = event.altKey, keyCode = event.keyCode;
        if (keyCode === kendo_angular_common_1.Keys.Escape || (altKey && keyCode === kendo_angular_common_1.Keys.ArrowUp)) {
            this.zone.run(function () { return _this.cancelPopup(); });
        }
    };
    DateRangePopupComponent.prototype.subscribeFocusBlur = function (calendar) {
        var _this = this;
        if (this.blurSubscription) {
            this.blurSubscription.unsubscribe();
            this.focusSubscription.unsubscribe();
        }
        if (!calendar) {
            return;
        }
        var nativeElement = calendar.element.nativeElement;
        this.blurSubscription = rxjs_1.fromEvent(nativeElement, 'blur').subscribe(function () { return _this.onBlur.emit(); });
        this.focusSubscription = rxjs_1.fromEvent(nativeElement, 'focus').subscribe(function () { return _this.onFocus.emit(); });
    };
    DateRangePopupComponent.prototype.addSubscriptions = function () {
        var _this = this;
        var subscriptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subscriptions[_i] = arguments[_i];
        }
        subscriptions.map(function (s) { return _this.subscriptions.add(s); });
    };
    Object.defineProperty(DateRangePopupComponent.prototype, "_appendTo", {
        get: function () {
            var appendTo = this.appendTo;
            if (!appendTo || appendTo === 'root') {
                return undefined;
            }
            return appendTo === 'component' ? this.container : appendTo;
        },
        enumerable: true,
        configurable: true
    });
    DateRangePopupComponent.prototype._toggle = function (show) {
        var _this = this;
        this._show = show;
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
            this.subscriptions.unsubscribe();
            this.subscriptions = new rxjs_1.Subscription(function () { });
        }
        if (this._show) {
            var direction = this.rtl ? 'right' : 'left';
            this.popupRef = this.popupService.open({
                anchor: this.anchor,
                anchorAlign: this.anchorAlign || { vertical: 'bottom', horizontal: direction },
                animate: this.animate,
                appendTo: this._appendTo,
                collision: this.collision,
                content: (this.contentTemplate || {}).templateRef || this.defaultTemplate,
                margin: this.margin,
                popupAlign: this.popupAlign || { vertical: 'top', horizontal: direction },
                positionMode: 'absolute'
            });
            var _a = this.popupRef, popupElement_1 = _a.popupElement, popupAnchorViewportLeave = _a.popupAnchorViewportLeave;
            popupElement_1.setAttribute('id', this.popupUID);
            this.addSubscriptions(this.zone.runOutsideAngular(function () { return rxjs_1.fromEvent(popupElement_1, 'keydown').subscribe(_this.handleKeydown.bind(_this)); }), rxjs_1.fromEvent(popupElement_1, 'mouseleave').subscribe(this.handleMouseLeave.bind(this)), popupAnchorViewportLeave.subscribe(function () { return _this.cancelPopup(); }));
        }
    };
    DateRangePopupComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendo-daterange-popup',
                    selector: 'kendo-daterange-popup',
                    template: "\n        <ng-container #container></ng-container>\n        <ng-template #defaultTemplate>\n            <kendo-multiviewcalendar kendoDateRangeSelection></kendo-multiviewcalendar>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    DateRangePopupComponent.ctorParameters = function () { return [
        { type: kendo_angular_popup_1.PopupService },
        { type: date_range_service_1.DateRangeService },
        { type: core_1.NgZone },
        { type: Boolean, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [kendo_angular_l10n_1.RTL,] }] }
    ]; };
    DateRangePopupComponent.propDecorators = {
        container: [{ type: core_1.ViewChild, args: ['container', { read: core_1.ViewContainerRef },] }],
        defaultTemplate: [{ type: core_1.ViewChild, args: ['defaultTemplate',] }],
        contentTemplate: [{ type: core_1.ContentChild, args: [date_range_popup_template_directive_1.DateRangePopupTemplateDirective,] }],
        viewCalendar: [{ type: core_1.ViewChildren, args: [multiview_calendar_component_1.MultiViewCalendarComponent,] }],
        contentCalendar: [{ type: core_1.ContentChildren, args: [multiview_calendar_component_1.MultiViewCalendarComponent,] }],
        animate: [{ type: core_1.Input }],
        anchor: [{ type: core_1.Input }],
        anchorAlign: [{ type: core_1.Input }],
        appendTo: [{ type: core_1.Input }],
        collision: [{ type: core_1.Input }],
        popupAlign: [{ type: core_1.Input }],
        margin: [{ type: core_1.Input }],
        open: [{ type: core_1.Output }],
        close: [{ type: core_1.Output }],
        onBlur: [{ type: core_1.Output, args: ['blur',] }],
        onFocus: [{ type: core_1.Output, args: ['focus',] }],
        cancel: [{ type: core_1.Output }]
    };
    return DateRangePopupComponent;
}());
exports.DateRangePopupComponent = DateRangePopupComponent;
