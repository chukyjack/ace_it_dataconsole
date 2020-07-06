/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Calendar } from '../calendar';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxCalendarMonthDirective } from '../calendar.directives';
/** @type {?} */
let NEXT_ID = 0;
export class IgxMonthsViewComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
        this.id = `igx-months-view-${NEXT_ID++}`;
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
        this._onTouchedCallback = () => { };
        /**
         * @hidden
         */
        this._onChangeCallback = () => { };
        this.initMonthFormatter();
        this._calendarModel = new Calendar();
    }
    /**
     * Gets the month format option of the months view.
     * ```typescript
     * let monthFormat = this.monthsView.monthFormat.
     * ```
     * @return {?}
     */
    get monthFormat() {
        return this._monthFormat;
    }
    /**
     * Sets the month format option of the months view.
     * ```html
     * <igx-months-view> [monthFormat] = "short'"</igx-months-view>
     * ```
     * \@memberof IgxMonthsViewComponent
     * @param {?} value
     * @return {?}
     */
    set monthFormat(value) {
        this._monthFormat = value;
        this.initMonthFormatter();
    }
    /**
     * Gets the `locale` of the months view.
     * Default value is `"en"`.
     * ```typescript
     * let locale =  this.monthsView.locale;
     * ```
     * \@memberof IgxMonthsViewComponent
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
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
    set locale(value) {
        this._locale = value;
        this.initMonthFormatter();
    }
    /**
     * Returns an array of date objects which are then used to
     * properly render the month names.
     *
     * Used in the template of the component
     *
     * @hidden
     * @return {?}
     */
    get months() {
        /** @type {?} */
        let start = new Date(this.date.getFullYear(), 0, 1);
        /** @type {?} */
        const result = [];
        for (let i = 0; i < 12; i++) {
            result.push(start);
            start = this._calendarModel.timedelta(start, 'month', 1);
        }
        return result;
    }
    /**
     * Returns the locale representation of the month in the months view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    formattedMonth(value) {
        if (this.formatView) {
            return this._formatterMonth.format(value);
        }
        return `${value.getMonth()}`;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    selectMonth(event) {
        this.onSelection.emit(event);
        this.date = event;
        this._onChangeCallback(this.date);
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.date = value;
        }
    }
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    monthTracker(index, item) {
        return `${item.getMonth()}}`;
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    initMonthFormatter() {
        this._formatterMonth = new Intl.DateTimeFormat(this._locale, { month: this.monthFormat });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowUp(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === event.target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const months = this.dates.toArray();
        /** @type {?} */
        const nodeRect = node.nativeElement.getBoundingClientRect();
        for (let index = months.indexOf(node) - 1; index >= 0; index--) {
            /** @type {?} */
            const nextNodeRect = months[index].nativeElement.getBoundingClientRect();
            if (nodeRect.top !== nextNodeRect.top && nodeRect.left === nextNodeRect.left) {
                months[index].nativeElement.focus();
                break;
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowDown(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === event.target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const months = this.dates.toArray();
        /** @type {?} */
        const nodeRect = node.nativeElement.getBoundingClientRect();
        for (let index = months.indexOf(node) + 1; index < months.length; index++) {
            /** @type {?} */
            const nextNodeRect = months[index].nativeElement.getBoundingClientRect();
            if (nodeRect.top !== nextNodeRect.top && nodeRect.left === nextNodeRect.left) {
                months[index].nativeElement.focus();
                break;
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowRight(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === event.target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const months = this.dates.toArray();
        if (months.indexOf(node) + 1 < months.length) {
            /** @type {?} */
            const month = months[months.indexOf(node) + 1];
            month.nativeElement.focus();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowLeft(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === event.target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const months = this.dates.toArray();
        if (months.indexOf(node) - 1 >= 0) {
            /** @type {?} */
            const month = months[months.indexOf(node) - 1];
            month.nativeElement.focus();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownHome(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const month = this.dates.toArray()[0];
        month.nativeElement.focus();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnd(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const months = this.dates.toArray();
        /** @type {?} */
        const month = months[months.length - 1];
        month.nativeElement.focus();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnter(event) {
        /** @type {?} */
        const value = this.dates.find((date) => date.nativeElement === event.target).value;
        this.date = new Date(value.getFullYear(), value.getMonth(), this.date.getDate());
        this.onSelection.emit(this.date);
        this._onChangeCallback(this.date);
    }
}
IgxMonthsViewComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxMonthsViewComponent, multi: true }],
                selector: 'igx-months-view',
                template: "<div class=\"igx-calendar__body\">\n    <div class=\"igx-calendar__body-row--wrap\">\n        <div [igxCalendarMonth]=\"month\" [date]=\"date\" (onMonthSelection)=\"selectMonth($event)\" [index]=\"i\" *ngFor=\"let month of months; index as i; trackBy: monthTracker\">\n            {{ formattedMonth(month) | titlecase }}\n        </div>\n    </div>\n</div>\n\n"
            }] }
];
/** @nocollapse */
IgxMonthsViewComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGhzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9tb250aHMtdmlldy9tb250aHMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFL0QsT0FBTyxHQUFHLENBQUM7QUFPZixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBMksvQixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7Ozs7Ozs7Ozs7O1FBNUoxQixPQUFFLEdBQUcsbUJBQW1CLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztRQWNwQyxTQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7UUF5RGxCLGVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztRQVdsQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7OztRQVF2QyxlQUFVLEdBQUcsSUFBSSxDQUFDOzs7Ozs7UUFlbEIsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQThCWixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBS2YsaUJBQVksR0FBRyxPQUFPLENBQUM7Ozs7UUFVdkIsdUJBQWtCLEdBQWUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O1FBSTNDLHNCQUFpQixHQUFzQixHQUFHLEVBQUUsR0FBRyxD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QW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBbUI1QyxZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQWF2QyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQWN0QyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFwVnpDLG9DQUUyQzs7Ozs7Ozs7Ozs7OztJQWEzQyxzQ0FDeUI7Ozs7OztJQXdEekIsNENBQ3lCOzs7Ozs7Ozs7O0lBVXpCLDZDQUM4Qzs7Ozs7OztJQU85Qyw0Q0FDeUI7Ozs7O0lBS3pCLHVDQUNtRDs7Ozs7OztJQVFuRCwwQ0FDb0I7Ozs7OztJQXlCcEIsaURBQTZCOzs7Ozs7SUFLN0IseUNBQXVCOzs7Ozs7SUFLdkIsOENBQStCOzs7Ozs7SUFLL0IsZ0RBQWlDOzs7Ozs7SUFLakMsb0RBQW1EOzs7Ozs7SUFJbkQsbURBQXlEOztJQUU3QyxvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneENhbGVuZGFyTW9udGhEaXJlY3RpdmUgfSBmcm9tICcuLi9jYWxlbmRhci5kaXJlY3RpdmVzJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogSWd4TW9udGhzVmlld0NvbXBvbmVudCwgbXVsdGk6IHRydWUgfV0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtbW9udGhzLXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnbW9udGhzLXZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneE1vbnRoc1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIG1vbnRocyB2aWV3LlxuICAgICAqIElmIG5vdCBzZXQsIHRoZSBgaWRgIHdpbGwgaGF2ZSB2YWx1ZSBgXCJpZ3gtbW9udGhzLXZpZXctMFwiYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1tb250aHMtdmlldyBpZD1cIm15LW1vbnRocy12aWV3XCI+PC9pZ3gtbW9udGhzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBtb250aHNWaWV3SWQgPSAgdGhpcy5tb250aHNWaWV3LmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNb250aHNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtbW9udGhzLXZpZXctJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZSBvZiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyB0aGUgY3VycmVudCBkYXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW1vbnRocy12aWV3IFtkYXRlXT1cIm15RGF0ZVwiPjwvaWd4LW1vbnRocy12aWV3PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGF0ZSA9ICB0aGlzLm1vbnRoc1ZpZXcuZGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TW9udGhzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbW9udGggZm9ybWF0IG9wdGlvbiBvZiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBtb250aEZvcm1hdCA9IHRoaXMubW9udGhzVmlldy5tb250aEZvcm1hdC5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbW9udGhGb3JtYXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoRm9ybWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vbnRoIGZvcm1hdCBvcHRpb24gb2YgdGhlIG1vbnRocyB2aWV3LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW1vbnRocy12aWV3PiBbbW9udGhGb3JtYXRdID0gXCJzaG9ydCdcIjwvaWd4LW1vbnRocy12aWV3PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNb250aHNWaWV3Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBtb250aEZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX21vbnRoRm9ybWF0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5pdE1vbnRoRm9ybWF0dGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGxvY2FsZWAgb2YgdGhlIG1vbnRocyB2aWV3LlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwiZW5cImAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsb2NhbGUgPSAgdGhpcy5tb250aHNWaWV3LmxvY2FsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TW9udGhzVmlld0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgbG9jYWxlYCBvZiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICogRXhwZWN0cyBhIHZhbGlkIEJDUCA0NyBsYW5ndWFnZSB0YWcuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJlblwiYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1tb250aHMtdmlldyBbbG9jYWxlXT1cImRlXCI+PC9pZ3gtbW9udGhzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1vbnRoc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmluaXRNb250aEZvcm1hdHRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB3aGV0aGVyIHRoZSB2aWV3IHNob3VsZCBiZSByZW5kZXJlZFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgbG9jYWxlIGFuZCBtb250aEZvcm1hdCwgaWYgYW55LlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdFZpZXcgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlIGluIHRoZSBtb250aHMgdmlldy5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2UgdGhlIGBkYXRlYCBwcm9wZXJ0eSBpbiB0aGUgYElneE1vbnRoc1ZpZXdDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW1vbnRocy12aWV3IChvblNlbGVjdGlvbik9XCJvblNlbGVjdGlvbigkZXZlbnQpXCI+PC9pZ3gtbW9udGhzLXZpZXc+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1vbnRoc1ZpZXdDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjc3MgY2xhc3MgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyJylcbiAgICBwdWJsaWMgc3R5bGVDbGFzcyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbihJZ3hDYWxlbmRhck1vbnRoRGlyZWN0aXZlLCB7IHJlYWQ6IElneENhbGVuZGFyTW9udGhEaXJlY3RpdmUgfSlcbiAgICBwdWJsaWMgZGF0ZXM6IFF1ZXJ5TGlzdDxJZ3hDYWxlbmRhck1vbnRoRGlyZWN0aXZlPjtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYHRhYmluZGV4YCBhdHRyaWJ1dGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBkYXRlIG9iamVjdHMgd2hpY2ggYXJlIHRoZW4gdXNlZCB0b1xuICAgICAqIHByb3Blcmx5IHJlbmRlciB0aGUgbW9udGggbmFtZXMuXG4gICAgICpcbiAgICAgKiBVc2VkIGluIHRoZSB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IG1vbnRocygpOiBEYXRlW10ge1xuICAgICAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RhcnQpO1xuICAgICAgICAgICAgc3RhcnQgPSB0aGlzLl9jYWxlbmRhck1vZGVsLnRpbWVkZWx0YShzdGFydCwgJ21vbnRoJywgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Zvcm1hdHRlck1vbnRoOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9sb2NhbGUgPSAnZW4nO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbW9udGhGb3JtYXQgPSAnc2hvcnQnO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2FsZW5kYXJNb2RlbDogQ2FsZW5kYXI7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmluaXRNb250aEZvcm1hdHRlcigpO1xuICAgICAgICB0aGlzLl9jYWxlbmRhck1vZGVsID0gbmV3IENhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbG9jYWxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtb250aCBpbiB0aGUgbW9udGhzIHZpZXcuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGZvcm1hdHRlZE1vbnRoKHZhbHVlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0Vmlldykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlck1vbnRoLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlLmdldE1vbnRoKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0TW9udGgoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KGV2ZW50KTtcblxuICAgICAgICB0aGlzLmRhdGUgPSBldmVudDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHY6IERhdGUpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9udGhUcmFja2VyKGluZGV4LCBpdGVtKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0uZ2V0TW9udGgoKX19YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRNb250aEZvcm1hdHRlcigpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0dGVyTW9udGggPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sb2NhbGUsIHsgbW9udGg6IHRoaXMubW9udGhGb3JtYXQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBub2RlUmVjdCA9IG5vZGUubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IG1vbnRocy5pbmRleE9mKG5vZGUpIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dE5vZGVSZWN0ID0gbW9udGhzW2luZGV4XS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKG5vZGVSZWN0LnRvcCAhPT0gbmV4dE5vZGVSZWN0LnRvcCAmJiBub2RlUmVjdC5sZWZ0ID09PSBuZXh0Tm9kZVJlY3QubGVmdCkge1xuICAgICAgICAgICAgICAgIG1vbnRoc1tpbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhdGVzLmZpbmQoKGRhdGUpID0+IGRhdGUubmF0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb250aHMgPSB0aGlzLmRhdGVzLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3Qgbm9kZVJlY3QgPSBub2RlLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBtb250aHMuaW5kZXhPZihub2RlKSArIDE7IGluZGV4IDwgbW9udGhzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbmV4dE5vZGVSZWN0ID0gbW9udGhzW2luZGV4XS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKG5vZGVSZWN0LnRvcCAhPT0gbmV4dE5vZGVSZWN0LnRvcCAmJiBub2RlUmVjdC5sZWZ0ID09PSBuZXh0Tm9kZVJlY3QubGVmdCkge1xuICAgICAgICAgICAgICAgIG1vbnRoc1tpbmRleF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dyaWdodCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93UmlnaHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgbW9udGhzID0gdGhpcy5kYXRlcy50b0FycmF5KCk7XG4gICAgICAgIGlmIChtb250aHMuaW5kZXhPZihub2RlKSArIDEgPCBtb250aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1ttb250aHMuaW5kZXhPZihub2RlKSArIDFdO1xuXG4gICAgICAgICAgICBtb250aC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0xlZnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgbW9udGhzID0gdGhpcy5kYXRlcy50b0FycmF5KCk7XG4gICAgICAgIGlmIChtb250aHMuaW5kZXhPZihub2RlKSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBtb250aHNbbW9udGhzLmluZGV4T2Yobm9kZSkgLSAxXTtcblxuICAgICAgICAgICAgbW9udGgubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uaG9tZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkhvbWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmRhdGVzLnRvQXJyYXkoKVswXTtcblxuICAgICAgICBtb250aC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW5kJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRW5kKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1ttb250aHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbW9udGgubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVzLmZpbmQoKGRhdGUpID0+IGRhdGUubmF0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KS52YWx1ZTtcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUodmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdGhpcy5kYXRlLmdldERhdGUoKSk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHRoaXMuZGF0ZSk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5kYXRlKTtcbiAgICB9XG59XG4iXX0=