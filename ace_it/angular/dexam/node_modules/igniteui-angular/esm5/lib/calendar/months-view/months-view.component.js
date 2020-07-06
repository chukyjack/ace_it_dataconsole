/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Calendar } from '../calendar';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxCalendarMonthDirective } from '../calendar.directives';
/** @type {?} */
var NEXT_ID = 0;
var IgxMonthsViewComponent = /** @class */ (function () {
    function IgxMonthsViewComponent(el) {
        this.el = el;
        /**
         * Sets/gets the `id` of the months view.
         * If not set, the `id` will have value `"igx-months-view-0"`.
         * ```html
         * <igx-months-view id="my-months-view"></igx-months-view>
         * ```
         * ```typescript
         * let monthsViewId =  this.monthsView.id;
         * ```
         * \@memberof IgxMonthsViewComponent
         */
        this.id = "igx-months-view-" + NEXT_ID++;
        /**
         * Gets/sets the selected date of the months view.
         * By default it is the current date.
         * ```html
         * <igx-months-view [date]="myDate"></igx-months-view>
         * ```
         * ```typescript
         * let date =  this.monthsView.date;
         * ```
         * \@memberof IgxMonthsViewComponent
         */
        this.date = new Date();
        /**
         * Gets/sets whether the view should be rendered
         * according to the locale and monthFormat, if any.
         */
        this.formatView = true;
        /**
         * Emits an event when a selection is made in the months view.
         * Provides reference the `date` property in the `IgxMonthsViewComponent`.
         * ```html
         * <igx-months-view (onSelection)="onSelection($event)"></igx-months-view>
         * ```
         * \@memberof IgxMonthsViewComponent
         */
        this.onSelection = new EventEmitter();
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        this.styleClass = true;
        /**
         * The default `tabindex` attribute for the component.
         *
         * @hidden
         */
        this.tabindex = 0;
        /**
         * @hidden
         */
        this._locale = 'en';
        /**
         * @hidden
         */
        this._monthFormat = 'short';
        /**
         * @hidden
         */
        this._onTouchedCallback = function () { };
        /**
         * @hidden
         */
        this._onChangeCallback = function () { };
        this.initMonthFormatter();
        this._calendarModel = new Calendar();
    }
    Object.defineProperty(IgxMonthsViewComponent.prototype, "monthFormat", {
        /**
         * Gets the month format option of the months view.
         * ```typescript
         * let monthFormat = this.monthsView.monthFormat.
         * ```
         */
        get: /**
         * Gets the month format option of the months view.
         * ```typescript
         * let monthFormat = this.monthsView.monthFormat.
         * ```
         * @return {?}
         */
        function () {
            return this._monthFormat;
        },
        /**
         * Sets the month format option of the months view.
         * ```html
         * <igx-months-view> [monthFormat] = "short'"</igx-months-view>
         * ```
         * @memberof IgxMonthsViewComponent
         */
        set: /**
         * Sets the month format option of the months view.
         * ```html
         * <igx-months-view> [monthFormat] = "short'"</igx-months-view>
         * ```
         * \@memberof IgxMonthsViewComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._monthFormat = value;
            this.initMonthFormatter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMonthsViewComponent.prototype, "locale", {
        /**
         * Gets the `locale` of the months view.
         * Default value is `"en"`.
         * ```typescript
         * let locale =  this.monthsView.locale;
         * ```
         * @memberof IgxMonthsViewComponent
         */
        get: /**
         * Gets the `locale` of the months view.
         * Default value is `"en"`.
         * ```typescript
         * let locale =  this.monthsView.locale;
         * ```
         * \@memberof IgxMonthsViewComponent
         * @return {?}
         */
        function () {
            return this._locale;
        },
        /**
         * Sets the `locale` of the months view.
         * Expects a valid BCP 47 language tag.
         * Default value is `"en"`.
         * ```html
         * <igx-months-view [locale]="de"></igx-months-view>
         * ```
         * @memberof IgxMonthsViewComponent
         */
        set: /**
         * Sets the `locale` of the months view.
         * Expects a valid BCP 47 language tag.
         * Default value is `"en"`.
         * ```html
         * <igx-months-view [locale]="de"></igx-months-view>
         * ```
         * \@memberof IgxMonthsViewComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._locale = value;
            this.initMonthFormatter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMonthsViewComponent.prototype, "months", {
        /**
         * Returns an array of date objects which are then used to
         * properly render the month names.
         *
         * Used in the template of the component
         *
         * @hidden
         */
        get: /**
         * Returns an array of date objects which are then used to
         * properly render the month names.
         *
         * Used in the template of the component
         *
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var start = new Date(this.date.getFullYear(), 0, 1);
            /** @type {?} */
            var result = [];
            for (var i = 0; i < 12; i++) {
                result.push(start);
                start = this._calendarModel.timedelta(start, 'month', 1);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the locale representation of the month in the months view.
     *
     * @hidden
     */
    /**
     * Returns the locale representation of the month in the months view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.formattedMonth = /**
     * Returns the locale representation of the month in the months view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.formatView) {
            return this._formatterMonth.format(value);
        }
        return "" + value.getMonth();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.selectMonth = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSelection.emit(event);
        this.date = event;
        this._onChangeCallback(this.date);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.date = value;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.monthTracker = /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.getMonth() + "}";
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.initMonthFormatter = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        this._formatterMonth = new Intl.DateTimeFormat(this._locale, { month: this.monthFormat });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownArrowUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === event.target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var months = this.dates.toArray();
        /** @type {?} */
        var nodeRect = node.nativeElement.getBoundingClientRect();
        for (var index = months.indexOf(node) - 1; index >= 0; index--) {
            /** @type {?} */
            var nextNodeRect = months[index].nativeElement.getBoundingClientRect();
            if (nodeRect.top !== nextNodeRect.top && nodeRect.left === nextNodeRect.left) {
                months[index].nativeElement.focus();
                break;
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownArrowDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === event.target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var months = this.dates.toArray();
        /** @type {?} */
        var nodeRect = node.nativeElement.getBoundingClientRect();
        for (var index = months.indexOf(node) + 1; index < months.length; index++) {
            /** @type {?} */
            var nextNodeRect = months[index].nativeElement.getBoundingClientRect();
            if (nodeRect.top !== nextNodeRect.top && nodeRect.left === nextNodeRect.left) {
                months[index].nativeElement.focus();
                break;
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownArrowRight = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === event.target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var months = this.dates.toArray();
        if (months.indexOf(node) + 1 < months.length) {
            /** @type {?} */
            var month = months[months.indexOf(node) + 1];
            month.nativeElement.focus();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownArrowLeft = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === event.target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var months = this.dates.toArray();
        if (months.indexOf(node) - 1 >= 0) {
            /** @type {?} */
            var month = months[months.indexOf(node) - 1];
            month.nativeElement.focus();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownHome = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var month = this.dates.toArray()[0];
        month.nativeElement.focus();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var months = this.dates.toArray();
        /** @type {?} */
        var month = months[months.length - 1];
        month.nativeElement.focus();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMonthsViewComponent.prototype.onKeydownEnter = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = this.dates.find(function (date) { return date.nativeElement === event.target; }).value;
        this.date = new Date(value.getFullYear(), value.getMonth(), this.date.getDate());
        this.onSelection.emit(this.date);
        this._onChangeCallback(this.date);
    };
    IgxMonthsViewComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxMonthsViewComponent, multi: true }],
                    selector: 'igx-months-view',
                    template: "<div class=\"igx-calendar__body\">\n    <div class=\"igx-calendar__body-row--wrap\">\n        <div [igxCalendarMonth]=\"month\" [date]=\"date\" (onMonthSelection)=\"selectMonth($event)\" [index]=\"i\" *ngFor=\"let month of months; index as i; trackBy: monthTracker\">\n            {{ formattedMonth(month) | titlecase }}\n        </div>\n    </div>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    IgxMonthsViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxMonthsViewComponent.propDecorators = {
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        date: [{ type: Input }],
        monthFormat: [{ type: Input }],
        locale: [{ type: Input }],
        formatView: [{ type: Input }],
        onSelection: [{ type: Output }],
        styleClass: [{ type: HostBinding, args: ['class.igx-calendar',] }],
        dates: [{ type: ViewChildren, args: [IgxCalendarMonthDirective, { read: IgxCalendarMonthDirective },] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        onKeydownArrowUp: [{ type: HostListener, args: ['keydown.arrowup', ['$event'],] }],
        onKeydownArrowDown: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }],
        onKeydownArrowRight: [{ type: HostListener, args: ['keydown.arrowright', ['$event'],] }],
        onKeydownArrowLeft: [{ type: HostListener, args: ['keydown.arrowleft', ['$event'],] }],
        onKeydownHome: [{ type: HostListener, args: ['keydown.home', ['$event'],] }],
        onKeydownEnd: [{ type: HostListener, args: ['keydown.end', ['$event'],] }],
        onKeydownEnter: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }]
    };
    return IgxMonthsViewComponent;
}());
export { IgxMonthsViewComponent };
if (false) {
    /**
     * Sets/gets the `id` of the months view.
     * If not set, the `id` will have value `"igx-months-view-0"`.
     * ```html
     * <igx-months-view id="my-months-view"></igx-months-view>
     * ```
     * ```typescript
     * let monthsViewId =  this.monthsView.id;
     * ```
     * \@memberof IgxMonthsViewComponent
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.id;
    /**
     * Gets/sets the selected date of the months view.
     * By default it is the current date.
     * ```html
     * <igx-months-view [date]="myDate"></igx-months-view>
     * ```
     * ```typescript
     * let date =  this.monthsView.date;
     * ```
     * \@memberof IgxMonthsViewComponent
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.date;
    /**
     * Gets/sets whether the view should be rendered
     * according to the locale and monthFormat, if any.
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.formatView;
    /**
     * Emits an event when a selection is made in the months view.
     * Provides reference the `date` property in the `IgxMonthsViewComponent`.
     * ```html
     * <igx-months-view (onSelection)="onSelection($event)"></igx-months-view>
     * ```
     * \@memberof IgxMonthsViewComponent
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.onSelection;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.styleClass;
    /**
     * @hidden
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.dates;
    /**
     * The default `tabindex` attribute for the component.
     *
     * @hidden
     * @type {?}
     */
    IgxMonthsViewComponent.prototype.tabindex;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthsViewComponent.prototype._formatterMonth;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthsViewComponent.prototype._locale;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthsViewComponent.prototype._monthFormat;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthsViewComponent.prototype._calendarModel;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthsViewComponent.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMonthsViewComponent.prototype._onChangeCallback;
    /** @type {?} */
    IgxMonthsViewComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGhzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9tb250aHMtdmlldy9tb250aHMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFL0QsT0FBTyxHQUFHLENBQUM7QUFFZjtJQWdMSSxnQ0FBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7Ozs7Ozs7OztRQTVKMUIsT0FBRSxHQUFHLHFCQUFtQixPQUFPLEVBQUksQ0FBQzs7Ozs7Ozs7Ozs7O1FBY3BDLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzs7OztRQXlEbEIsZUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7O1FBV2xCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7O1FBUXZDLGVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7OztRQWVsQixhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBOEJaLFlBQU8sR0FBRyxJQUFJLENBQUM7Ozs7UUFLZixpQkFBWSxHQUFHLE9BQU8sQ0FBQzs7OztRQVV2Qix1QkFBa0IsR0FBZSxjQUFRLENBQUMsQ0FBQzs7OztRQUkzQyxzQkFBaUIsR0FBc0IsY0FBUSxDQUFDLENBQUM7UUFHckQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFD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XG4gICAgQ29tcG9uZW50LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi4vY2FsZW5kYXInO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWd4Q2FsZW5kYXJNb250aERpcmVjdGl2ZSB9IGZyb20gJy4uL2NhbGVuZGFyLmRpcmVjdGl2ZXMnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBJZ3hNb250aHNWaWV3Q29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XSxcbiAgICBzZWxlY3RvcjogJ2lneC1tb250aHMtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICdtb250aHMtdmlldy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4TW9udGhzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgd2lsbCBoYXZlIHZhbHVlIGBcImlneC1tb250aHMtdmlldy0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW1vbnRocy12aWV3IGlkPVwibXktbW9udGhzLXZpZXdcIj48L2lneC1tb250aHMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG1vbnRoc1ZpZXdJZCA9ICB0aGlzLm1vbnRoc1ZpZXcuaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1vbnRoc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1tb250aHMtdmlldy0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBzZWxlY3RlZCBkYXRlIG9mIHRoZSBtb250aHMgdmlldy5cbiAgICAgKiBCeSBkZWZhdWx0IGl0IGlzIHRoZSBjdXJyZW50IGRhdGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbW9udGhzLXZpZXcgW2RhdGVdPVwibXlEYXRlXCI+PC9pZ3gtbW9udGhzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBkYXRlID0gIHRoaXMubW9udGhzVmlldy5kYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNb250aHNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtb250aCBmb3JtYXQgb3B0aW9uIG9mIHRoZSBtb250aHMgdmlldy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG1vbnRoRm9ybWF0ID0gdGhpcy5tb250aHNWaWV3Lm1vbnRoRm9ybWF0LlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtb250aEZvcm1hdCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhGb3JtYXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW9udGggZm9ybWF0IG9wdGlvbiBvZiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbW9udGhzLXZpZXc+IFttb250aEZvcm1hdF0gPSBcInNob3J0J1wiPC9pZ3gtbW9udGhzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1vbnRoc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IG1vbnRoRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbW9udGhGb3JtYXQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbml0TW9udGhGb3JtYXR0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgbG9jYWxlYCBvZiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJlblwiYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxvY2FsZSA9ICB0aGlzLm1vbnRoc1ZpZXcubG9jYWxlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNb250aHNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGBsb2NhbGVgIG9mIHRoZSBtb250aHMgdmlldy5cbiAgICAgKiBFeHBlY3RzIGEgdmFsaWQgQkNQIDQ3IGxhbmd1YWdlIHRhZy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBcImVuXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW1vbnRocy12aWV3IFtsb2NhbGVdPVwiZGVcIj48L2lneC1tb250aHMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TW9udGhzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5pdE1vbnRoRm9ybWF0dGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHdoZXRoZXIgdGhlIHZpZXcgc2hvdWxkIGJlIHJlbmRlcmVkXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBsb2NhbGUgYW5kIG1vbnRoRm9ybWF0LCBpZiBhbnkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0VmlldyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGEgc2VsZWN0aW9uIGlzIG1hZGUgaW4gdGhlIG1vbnRocyB2aWV3LlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0aGUgYGRhdGVgIHByb3BlcnR5IGluIHRoZSBgSWd4TW9udGhzVmlld0NvbXBvbmVudGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbW9udGhzLXZpZXcgKG9uU2VsZWN0aW9uKT1cIm9uU2VsZWN0aW9uKCRldmVudClcIj48L2lneC1tb250aHMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TW9udGhzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXInKVxuICAgIHB1YmxpYyBzdHlsZUNsYXNzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneENhbGVuZGFyTW9udGhEaXJlY3RpdmUsIHsgcmVhZDogSWd4Q2FsZW5kYXJNb250aERpcmVjdGl2ZSB9KVxuICAgIHB1YmxpYyBkYXRlczogUXVlcnlMaXN0PElneENhbGVuZGFyTW9udGhEaXJlY3RpdmU+O1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGRhdGUgb2JqZWN0cyB3aGljaCBhcmUgdGhlbiB1c2VkIHRvXG4gICAgICogcHJvcGVybHkgcmVuZGVyIHRoZSBtb250aCBuYW1lcy5cbiAgICAgKlxuICAgICAqIFVzZWQgaW4gdGhlIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgbW9udGhzKCk6IERhdGVbXSB7XG4gICAgICAgIGxldCBzdGFydCA9IG5ldyBEYXRlKHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChzdGFydCk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMuX2NhbGVuZGFyTW9kZWwudGltZWRlbHRhKHN0YXJ0LCAnbW9udGgnLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZm9ybWF0dGVyTW9udGg6IGFueTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2xvY2FsZSA9ICdlbic7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9tb250aEZvcm1hdCA9ICdzaG9ydCc7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jYWxlbmRhck1vZGVsOiBDYWxlbmRhcjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaW5pdE1vbnRoRm9ybWF0dGVyKCk7XG4gICAgICAgIHRoaXMuX2NhbGVuZGFyTW9kZWwgPSBuZXcgQ2FsZW5kYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb2NhbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vbnRoIGluIHRoZSBtb250aHMgdmlldy5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9ybWF0dGVkTW9udGgodmFsdWU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mb3JtYXRWaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVyTW9udGguZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dmFsdWUuZ2V0TW9udGgoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RNb250aChldmVudCkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoZXZlbnQpO1xuXG4gICAgICAgIHRoaXMuZGF0ZSA9IGV2ZW50O1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodjogRGF0ZSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBtb250aFRyYWNrZXIoaW5kZXgsIGl0ZW0pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7aXRlbS5nZXRNb250aCgpfX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdE1vbnRoRm9ybWF0dGVyKCkge1xuICAgICAgICB0aGlzLl9mb3JtYXR0ZXJNb250aCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuX2xvY2FsZSwgeyBtb250aDogdGhpcy5tb250aEZvcm1hdCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9udGhzID0gdGhpcy5kYXRlcy50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IG5vZGVSZWN0ID0gbm9kZS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gbW9udGhzLmluZGV4T2Yobm9kZSkgLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Tm9kZVJlY3QgPSBtb250aHNbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAobm9kZVJlY3QudG9wICE9PSBuZXh0Tm9kZVJlY3QudG9wICYmIG5vZGVSZWN0LmxlZnQgPT09IG5leHROb2RlUmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgbW9udGhzW2luZGV4XS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBub2RlUmVjdCA9IG5vZGUubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IG1vbnRocy5pbmRleE9mKG5vZGUpICsgMTsgaW5kZXggPCBtb250aHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Tm9kZVJlY3QgPSBtb250aHNbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAobm9kZVJlY3QudG9wICE9PSBuZXh0Tm9kZVJlY3QudG9wICYmIG5vZGVSZWN0LmxlZnQgPT09IG5leHROb2RlUmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgbW9udGhzW2luZGV4XS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3JpZ2h0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dSaWdodChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBtb250aHMgPSB0aGlzLmRhdGVzLnRvQXJyYXkoKTtcbiAgICAgICAgaWYgKG1vbnRocy5pbmRleE9mKG5vZGUpICsgMSA8IG1vbnRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW21vbnRocy5pbmRleE9mKG5vZGUpICsgMV07XG5cbiAgICAgICAgICAgIG1vbnRoLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93bGVmdCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93TGVmdChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBtb250aHMgPSB0aGlzLmRhdGVzLnRvQXJyYXkoKTtcbiAgICAgICAgaWYgKG1vbnRocy5pbmRleE9mKG5vZGUpIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1ttb250aHMuaW5kZXhPZihub2RlKSAtIDFdO1xuXG4gICAgICAgICAgICBtb250aC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5ob21lJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duSG9tZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtb250aCA9IHRoaXMuZGF0ZXMudG9BcnJheSgpWzBdO1xuXG4gICAgICAgIG1vbnRoLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbmQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbW9udGhzID0gdGhpcy5kYXRlcy50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW21vbnRocy5sZW5ndGggLSAxXTtcblxuICAgICAgICBtb250aC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbnRlcihldmVudCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpLnZhbHVlO1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRGdWxsWWVhcigpLCB2YWx1ZS5nZXRNb250aCgpLCB0aGlzLmRhdGUuZ2V0RGF0ZSgpKTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQodGhpcy5kYXRlKTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLmRhdGUpO1xuICAgIH1cbn1cbiJdfQ==