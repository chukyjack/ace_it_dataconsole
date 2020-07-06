"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var selection_range_interface_1 = require("../calendar/models/selection-range.interface");
var kendo_date_math_1 = require("@progress/kendo-date-math");
var isActive = function (cmp) { return (cmp && cmp.isActive) || false; };
var ɵ0 = isActive;
exports.ɵ0 = ɵ0;
var hasActiveContent = function (popup) { return popup && popup.hasActiveContent(); };
var ɵ1 = hasActiveContent;
exports.ɵ1 = ɵ1;
/**
 * A service that handles the communication between the components that are placed inside the DateRangeComponent.
 * For example, the start and end `DateInput` and `DateRangePopup` components.
 */
var DateRangeService = /** @class */ (function () {
    function DateRangeService() {
        /**
         * An Observable instance that notifies when the `activeRangeEnd` state is changed.
         */
        this.activeRangeEnd$ = new rxjs_1.BehaviorSubject(null);
        /**
         * An Observable instance that notifies when the `focusedDate` is changed.
         */
        this.focusedDate$ = new rxjs_1.BehaviorSubject(null);
        /**
         * An Observable instance that notifies when the end `DateInput` component is changed.
         * For example, when a new end `DateInput` is attached or when the old one is detached.
         */
        this.endInput$ = new rxjs_1.BehaviorSubject(null);
        /**
         * An Observable instance that notifies when the start `DateInput` component is changed.
         * For example, when a new start `DateInput` is attached or the old one is detached.
         */
        this.startInput$ = new rxjs_1.BehaviorSubject(null);
        /**
         * An Observable instance that notifies when the `DateRangePopup` component is changed.
         */
        this.dateRangePopup$ = new rxjs_1.BehaviorSubject(null);
        /**
         * An Observable instance that notifies when the state of the selection range is changed.
         */
        this.range$ = new rxjs_1.BehaviorSubject(selection_range_interface_1.EMPTY_SELECTIONRANGE);
    }
    Object.defineProperty(DateRangeService.prototype, "activeRangeEnd", {
        /**
         * Gets the current `activeRangeEnd` value.
         */
        get: function () {
            return this.activeRangeEnd$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeService.prototype, "focusedDate", {
        /**
         * Gets the current `focusedDate` value.
         */
        get: function () {
            return this.focusedDate$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeService.prototype, "min", {
        /**
         * Gets the `min` range value.
         * The `min` value is extracted from the `start` DateInput value or the `min` value of the Calendar.
         */
        get: function () {
            return (this.startInput$.value || {}).min || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeService.prototype, "max", {
        /**
         * Gets the `max` range value.
         * The `max` value is extracted from the `end` DateInput value or the `max` value of the Calendar.
         */
        get: function () {
            return (this.endInput$.value || {}).max || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangeService.prototype, "selectionRange", {
        /**
         * Gets the current `selectionRange` value.
         */
        get: function () {
            return this.range$.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the registered `DateRangePopup` component.
     * The method opens the popup and focuses the calendar.
     */
    DateRangeService.prototype.activatePopup = function () {
        var dateRangePopup = this.dateRangePopup$.value;
        if (!dateRangePopup) {
            return;
        }
        dateRangePopup.activate();
    };
    /**
     * Deactivates the registered `DateRangePopup` component.
     * The method closes the popup.
     */
    DateRangeService.prototype.deactivatePopup = function () {
        var dateRangePopup = this.dateRangePopup$.value;
        if (!(dateRangePopup && dateRangePopup.show)) {
            return;
        }
        dateRangePopup.show = false;
    };
    /**
     * @hidden
     *
     * Deactivates the registered `DateRangePopup` component and fires the `cancel` event.
     * The method closes the popup.
     */
    DateRangeService.prototype.cancelPopup = function () {
        var dateRangePopup = this.dateRangePopup$.value;
        if (!(dateRangePopup && dateRangePopup.show)) {
            return;
        }
        dateRangePopup.cancelPopup();
    };
    /**
     * Completes all observables to mitigate possible memory leaks.
     * Calls the method when a component that uses it is destroyed.
     */
    DateRangeService.prototype.destroy = function () {
        this.activeRangeEnd$.complete();
        this.dateRangePopup$.complete();
        this.focusedDate$.complete();
        this.endInput$.complete();
        this.startInput$.complete();
        this.range$.complete();
    };
    /**
     * Returns `true` when an active component that is placed inside the `DateRangeComponent` is detected.
     * For example, the opened popup or the focused DateInput.
     *
     * @returns `true` if an active component is present.
     */
    DateRangeService.prototype.hasActiveComponent = function () {
        var popup = this.dateRangePopup$.value;
        var isPopup = isActive(popup);
        var isStart = isActive(this.startInput$.value);
        var isEnd = isActive(this.endInput$.value);
        return isPopup || isStart || isEnd || hasActiveContent(popup) || false;
    };
    /**
     * Registers a new start `DateInput` component. Notifies all `startInput$` listeners.
     */
    DateRangeService.prototype.registerStartInput = function (startInput) {
        this.startInput$.next(startInput);
    };
    /**
     * Registers a new end `DateInput` component. Notifies all `endInput$` listeners.
     */
    DateRangeService.prototype.registerEndInput = function (endInput) {
        this.endInput$.next(endInput);
    };
    /**
     * Registers a new `DateRangePopup` component. Notifies all `dateRangePopup$` listeners.
     */
    DateRangeService.prototype.registerPopup = function (dateRangePopup) {
        this.dateRangePopup$.next(dateRangePopup);
    };
    /**
     * Updates the `activeRangeEnd` value. Notifies all `activeRangeEnd$` listeners.
     */
    DateRangeService.prototype.setActiveRangeEnd = function (activeRange) {
        if (!activeRange || this.activeRangeEnd === activeRange) {
            return;
        }
        this.activeRangeEnd$.next(activeRange);
    };
    /**
     * Updates the focused date. Notifies all `focusedDate$` listeners.
     */
    DateRangeService.prototype.setFocusedDate = function (value) {
        if (kendo_date_math_1.isEqual(this.focusedDate$.value, value)) {
            return;
        }
        this.focusedDate$.next(value);
    };
    /**
     * Updates the selection range. Notifies all `range$` listeners.
     */
    DateRangeService.prototype.setRange = function (range) {
        if (range === void 0) { range = selection_range_interface_1.EMPTY_SELECTIONRANGE; }
        this.range$.next(range);
    };
    DateRangeService.decorators = [
        { type: core_1.Injectable },
    ];
    return DateRangeService;
}());
exports.DateRangeService = DateRangeService;
