import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, TemplateRef, NgZone, Input, Output, ViewChild, ViewChildren, ViewContainerRef, Inject, QueryList, Optional } from '@angular/core';
import { RTL } from '@progress/kendo-angular-l10n';
import { PopupService } from '@progress/kendo-angular-popup';
import { DateRangePopupTemplateDirective } from './date-range-popup-template.directive';
import { DateRangeService } from './date-range.service';
import { MultiViewCalendarComponent } from '../calendar/multiview-calendar.component';
import { PreventableEvent } from '../preventable-event';
import { isDocumentAvailable, guid, Keys } from '@progress/kendo-angular-common';
import { Subscription, fromEvent, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
        this.open = new EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         * For more information, refer to the section on
         * [events]({% slug overview_datepicker %}#toc-events).
         */
        this.close = new EventEmitter();
        /**
         * Fires each time the calendar element is blurred.
         */
        this.onBlur = new EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the calendar element is focused.
         */
        this.onFocus = new EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the popup is closed either on `ESC` keypress or on leaving the viewport.
         */
        this.cancel = new EventEmitter();
        /**
         * @hidden
         */
        this.popupUID = guid();
        this.calendarSubscriptions = new Subscription(function () { });
        this.subscriptions = new Subscription(function () { });
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
            var event = new PreventableEvent();
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
            _this.activateSubscription = merge(_this.contentCalendar.changes, _this.viewCalendar.changes)
                .pipe(filter(function (changes) { return changes && changes.first; }), map(function (changes) { return changes.first; }))
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
        if (!isDocumentAvailable() || !this.popupRef) {
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
        if (keyCode === Keys.Escape || (altKey && keyCode === Keys.ArrowUp)) {
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
        this.blurSubscription = fromEvent(nativeElement, 'blur').subscribe(function () { return _this.onBlur.emit(); });
        this.focusSubscription = fromEvent(nativeElement, 'focus').subscribe(function () { return _this.onFocus.emit(); });
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
            this.subscriptions = new Subscription(function () { });
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
            this.addSubscriptions(this.zone.runOutsideAngular(function () { return fromEvent(popupElement_1, 'keydown').subscribe(_this.handleKeydown.bind(_this)); }), fromEvent(popupElement_1, 'mouseleave').subscribe(this.handleMouseLeave.bind(this)), popupAnchorViewportLeave.subscribe(function () { return _this.cancelPopup(); }));
        }
    };
    DateRangePopupComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendo-daterange-popup',
                    selector: 'kendo-daterange-popup',
                    template: "\n        <ng-container #container></ng-container>\n        <ng-template #defaultTemplate>\n            <kendo-multiviewcalendar kendoDateRangeSelection></kendo-multiviewcalendar>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    DateRangePopupComponent.ctorParameters = function () { return [
        { type: PopupService },
        { type: DateRangeService },
        { type: NgZone },
        { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [RTL,] }] }
    ]; };
    DateRangePopupComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        defaultTemplate: [{ type: ViewChild, args: ['defaultTemplate',] }],
        contentTemplate: [{ type: ContentChild, args: [DateRangePopupTemplateDirective,] }],
        viewCalendar: [{ type: ViewChildren, args: [MultiViewCalendarComponent,] }],
        contentCalendar: [{ type: ContentChildren, args: [MultiViewCalendarComponent,] }],
        animate: [{ type: Input }],
        anchor: [{ type: Input }],
        anchorAlign: [{ type: Input }],
        appendTo: [{ type: Input }],
        collision: [{ type: Input }],
        popupAlign: [{ type: Input }],
        margin: [{ type: Input }],
        open: [{ type: Output }],
        close: [{ type: Output }],
        onBlur: [{ type: Output, args: ['blur',] }],
        onFocus: [{ type: Output, args: ['focus',] }],
        cancel: [{ type: Output }]
    };
    return DateRangePopupComponent;
}());
export { DateRangePopupComponent };
