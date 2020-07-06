/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, ElementRef, HostListener } from '@angular/core';
import { isDateInRanges } from '../calendar';
import { CalendarSelection } from '../calendar-base';
/**
 * @hidden
 */
var IgxDayItemComponent = /** @class */ (function () {
    function IgxDayItemComponent(elementRef) {
        this.elementRef = elementRef;
        this.onDateSelection = new EventEmitter();
        this.tabindex = 0;
        this._selected = false;
    }
    Object.defineProperty(IgxDayItemComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var date = this.date.date;
            if (!this.value) {
                return;
            }
            if (this.selection === CalendarSelection.SINGLE) {
                this._selected = ((/** @type {?} */ (this.value))).getTime() === date.getTime();
            }
            else {
                this._selected = ((/** @type {?} */ (this.value)))
                    .some(function (each) { return each.getTime() === date.getTime(); });
            }
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isCurrentMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.isCurrentMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isPreviousMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.isPrevMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isNextMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.isNextMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isInactive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.isNextMonth || this.date.isPrevMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isToday", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var today = new Date(Date.now());
            /** @type {?} */
            var date = this.date.date;
            return (date.getFullYear() === today.getFullYear() &&
                date.getMonth() === today.getMonth() &&
                date.getDate() === today.getDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isWeekend", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var day = this.date.date.getDay();
            return day === 0 || day === 6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.disabledDates === null) {
                return false;
            }
            return isDateInRanges(this.date.date, this.disabledDates);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isOutOfRange", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.outOfRangeDates) {
                return false;
            }
            return isDateInRanges(this.date.date, this.outOfRangeDates);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isSpecial", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.specialDates === null) {
                return false;
            }
            return isDateInRanges(this.date.date, this.specialDates);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "defaultCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.isCurrentMonth && !(this.isWeekend && this.selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isInactiveCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInactive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isTodayCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isToday && !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isSelectedCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isWeekendCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isWeekend;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isDisabledCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDisabled || this.isOutOfRange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDayItemComponent.prototype, "isSpecialCSS", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSpecial;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxDayItemComponent.prototype.onSelect = /**
     * @return {?}
     */
    function () {
        this.onDateSelection.emit(this.date);
    };
    IgxDayItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-day-item',
                    template: "<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    IgxDayItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxDayItemComponent.propDecorators = {
        date: [{ type: Input }],
        selection: [{ type: Input }],
        value: [{ type: Input }],
        disabledDates: [{ type: Input }],
        outOfRangeDates: [{ type: Input }],
        specialDates: [{ type: Input }],
        onDateSelection: [{ type: Output }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        defaultCSS: [{ type: HostBinding, args: ['class.igx-calendar__date',] }],
        isInactiveCSS: [{ type: HostBinding, args: ['class.igx-calendar__date--inactive',] }],
        isTodayCSS: [{ type: HostBinding, args: ['class.igx-calendar__date--current',] }],
        isSelectedCSS: [{ type: HostBinding, args: ['class.igx-calendar__date--selected',] }],
        isWeekendCSS: [{ type: HostBinding, args: ['class.igx-calendar__date--weekend',] }],
        isDisabledCSS: [{ type: HostBinding, args: ['class.igx-calendar__date--disabled',] }],
        isSpecialCSS: [{ type: HostBinding, args: ['class.igx-calendar__date--special',] }],
        onSelect: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.enter',] }]
    };
    return IgxDayItemComponent;
}());
export { IgxDayItemComponent };
if (false) {
    /** @type {?} */
    IgxDayItemComponent.prototype.date;
    /** @type {?} */
    IgxDayItemComponent.prototype.selection;
    /** @type {?} */
    IgxDayItemComponent.prototype.value;
    /** @type {?} */
    IgxDayItemComponent.prototype.disabledDates;
    /** @type {?} */
    IgxDayItemComponent.prototype.outOfRangeDates;
    /** @type {?} */
    IgxDayItemComponent.prototype.specialDates;
    /** @type {?} */
    IgxDayItemComponent.prototype.onDateSelection;
    /** @type {?} */
    IgxDayItemComponent.prototype.tabindex;
    /**
     * @type {?}
     * @private
     */
    IgxDayItemComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    IgxDayItemComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9kYXlzLXZpZXcvZGF5LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBS3JEO0lBaUpJLDZCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekhuQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBa0ZwRCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBcUNaLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFb0IsQ0FBQztJQXZIL0Msc0JBQVcseUNBQVE7Ozs7UUFBbkI7O2dCQUNVLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2IsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtnQkFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsRTtpQkFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBVSxDQUFDO3FCQUNsQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUss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QUFDLG9DQUFvQzsrQkFLaEQsV0FBVyxTQUFDLG1DQUFtQzsyQkFTL0MsWUFBWSxTQUFDLE9BQU8sY0FDcEIsWUFBWSxTQUFDLGVBQWU7O0lBSWpDLDBCQUFDO0NBQUEsQUF4SkQsSUF3SkM7U0FwSlksbUJBQW1COzs7SUFDNUIsbUNBQzJCOztJQUUzQix3Q0FDeUI7O0lBRXpCLG9DQUM0Qjs7SUFFNUIsNENBQzRDOztJQUU1Qyw4Q0FDOEM7O0lBRTlDLDJDQUMyQzs7SUFFM0MsOENBQzJEOztJQWlGM0QsdUNBQ29COzs7OztJQXFDcEIsd0NBQTBCOzs7OztJQUVkLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJEYXRlLCBpc0RhdGVJblJhbmdlcyB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IERhdGVSYW5nZURlc2NyaXB0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2RhdGVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItYmFzZSc7XG5cbi8qKlxuICpAaGlkZGVuXG4qL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZGF5LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnZGF5LWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneERheUl0ZW1Db21wb25lbnQge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRhdGU6IElDYWxlbmRhckRhdGU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWxlY3Rpb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOiBEYXRlIHwgRGF0ZVtdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWREYXRlczogRGF0ZVJhbmdlRGVzY3JpcHRvcltdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3V0T2ZSYW5nZURhdGVzOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW107XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzcGVjaWFsRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkRhdGVTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElDYWxlbmRhckRhdGU+KCk7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlLmRhdGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IENhbGVuZGFyU2VsZWN0aW9uLlNJTkdMRSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9ICh0aGlzLnZhbHVlIGFzIERhdGUpLmdldFRpbWUoKSA9PT0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gKHRoaXMudmFsdWUgYXMgRGF0ZVtdKVxuICAgICAgICAgICAgLnNvbWUoKGVhY2gpID0+IGVhY2guZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNDdXJyZW50TW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuaXNDdXJyZW50TW9udGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1ByZXZpb3VzTW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuaXNQcmV2TW9udGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc05leHRNb250aCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5pc05leHRNb250aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzSW5hY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuaXNOZXh0TW9udGggfHwgdGhpcy5kYXRlLmlzUHJldk1vbnRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNUb2RheSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZS5kYXRlO1xuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBkYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1dlZWtlbmQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZGF0ZS5kYXRlLmdldERheSgpO1xuICAgICAgICByZXR1cm4gZGF5ID09PSAwIHx8IGRheSA9PT0gNjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0RhdGVJblJhbmdlcyh0aGlzLmRhdGUuZGF0ZSwgdGhpcy5kaXNhYmxlZERhdGVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzT3V0T2ZSYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLm91dE9mUmFuZ2VEYXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRGF0ZUluUmFuZ2VzKHRoaXMuZGF0ZS5kYXRlLCB0aGlzLm91dE9mUmFuZ2VEYXRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1NwZWNpYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWxEYXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRGF0ZUluUmFuZ2VzKHRoaXMuZGF0ZS5kYXRlLCB0aGlzLnNwZWNpYWxEYXRlcyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX2RhdGUnKVxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5pc0N1cnJlbnRNb250aCAmJiAhKHRoaXMuaXNXZWVrZW5kICYmIHRoaXMuc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1pbmFjdGl2ZScpXG4gICAgcHVibGljIGdldCBpc0luYWN0aXZlQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luYWN0aXZlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1jdXJyZW50JylcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXlDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVG9kYXkgJiYgIXRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX2RhdGUtLXNlbGVjdGVkJylcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS13ZWVrZW5kJylcbiAgICBwdWJsaWMgZ2V0IGlzV2Vla2VuZENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNXZWVrZW5kO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuaXNPdXRPZlJhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1zcGVjaWFsJylcbiAgICBwdWJsaWMgZ2V0IGlzU3BlY2lhbENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTcGVjaWFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInKVxuICAgIHB1YmxpYyBvblNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5vbkRhdGVTZWxlY3Rpb24uZW1pdCh0aGlzLmRhdGUpO1xuICAgIH1cbn1cbiJdfQ==