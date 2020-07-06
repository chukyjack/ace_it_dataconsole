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
export class IgxDayItemComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.onDateSelection = new EventEmitter();
        this.tabindex = 0;
        this._selected = false;
    }
    /**
     * @return {?}
     */
    get selected() {
        /** @type {?} */
        const date = this.date.date;
        if (!this.value) {
            return;
        }
        if (this.selection === CalendarSelection.SINGLE) {
            this._selected = ((/** @type {?} */ (this.value))).getTime() === date.getTime();
        }
        else {
            this._selected = ((/** @type {?} */ (this.value)))
                .some((each) => each.getTime() === date.getTime());
        }
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = value;
    }
    /**
     * @return {?}
     */
    get isCurrentMonth() {
        return this.date.isCurrentMonth;
    }
    /**
     * @return {?}
     */
    get isPreviousMonth() {
        return this.date.isPrevMonth;
    }
    /**
     * @return {?}
     */
    get isNextMonth() {
        return this.date.isNextMonth;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get isInactive() {
        return this.date.isNextMonth || this.date.isPrevMonth;
    }
    /**
     * @return {?}
     */
    get isToday() {
        /** @type {?} */
        const today = new Date(Date.now());
        /** @type {?} */
        const date = this.date.date;
        return (date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate());
    }
    /**
     * @return {?}
     */
    get isWeekend() {
        /** @type {?} */
        const day = this.date.date.getDay();
        return day === 0 || day === 6;
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        if (this.disabledDates === null) {
            return false;
        }
        return isDateInRanges(this.date.date, this.disabledDates);
    }
    /**
     * @return {?}
     */
    get isOutOfRange() {
        if (!this.outOfRangeDates) {
            return false;
        }
        return isDateInRanges(this.date.date, this.outOfRangeDates);
    }
    /**
     * @return {?}
     */
    get isSpecial() {
        if (this.specialDates === null) {
            return false;
        }
        return isDateInRanges(this.date.date, this.specialDates);
    }
    /**
     * @return {?}
     */
    get defaultCSS() {
        return this.date.isCurrentMonth && !(this.isWeekend && this.selected);
    }
    /**
     * @return {?}
     */
    get isInactiveCSS() {
        return this.isInactive;
    }
    /**
     * @return {?}
     */
    get isTodayCSS() {
        return this.isToday && !this.selected;
    }
    /**
     * @return {?}
     */
    get isSelectedCSS() {
        return this.selected;
    }
    /**
     * @return {?}
     */
    get isWeekendCSS() {
        return this.isWeekend;
    }
    /**
     * @return {?}
     */
    get isDisabledCSS() {
        return this.isDisabled || this.isOutOfRange;
    }
    /**
     * @return {?}
     */
    get isSpecialCSS() {
        return this.isSpecial;
    }
    /**
     * @return {?}
     */
    onSelect() {
        this.onDateSelection.emit(this.date);
    }
}
IgxDayItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-day-item',
                template: "<ng-content></ng-content>\n"
            }] }
];
/** @nocollapse */
IgxDayItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9kYXlzLXZpZXcvZGF5LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBU3JELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUE2STVCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF6SG5DLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFrRnBELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFxQ1osY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVvQixDQUFDOzs7O0lBdkgvQyxJQUFXLFFBQVE7O2NBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsRTthQUFNO1lBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQVUsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLENBQUMsSUFB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IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJEYXRlLCBpc0RhdGVJblJhbmdlcyB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IERhdGVSYW5nZURlc2NyaXB0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2RhdGVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItYmFzZSc7XG5cbi8qKlxuICpAaGlkZGVuXG4qL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZGF5LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnZGF5LWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneERheUl0ZW1Db21wb25lbnQge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRhdGU6IElDYWxlbmRhckRhdGU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWxlY3Rpb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOiBEYXRlIHwgRGF0ZVtdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWREYXRlczogRGF0ZVJhbmdlRGVzY3JpcHRvcltdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3V0T2ZSYW5nZURhdGVzOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW107XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzcGVjaWFsRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkRhdGVTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElDYWxlbmRhckRhdGU+KCk7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlLmRhdGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IENhbGVuZGFyU2VsZWN0aW9uLlNJTkdMRSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9ICh0aGlzLnZhbHVlIGFzIERhdGUpLmdldFRpbWUoKSA9PT0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gKHRoaXMudmFsdWUgYXMgRGF0ZVtdKVxuICAgICAgICAgICAgLnNvbWUoKGVhY2gpID0+IGVhY2guZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNDdXJyZW50TW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuaXNDdXJyZW50TW9udGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1ByZXZpb3VzTW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuaXNQcmV2TW9udGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc05leHRNb250aCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5pc05leHRNb250aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzSW5hY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUuaXNOZXh0TW9udGggfHwgdGhpcy5kYXRlLmlzUHJldk1vbnRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNUb2RheSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZS5kYXRlO1xuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBkYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1dlZWtlbmQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZGF0ZS5kYXRlLmdldERheSgpO1xuICAgICAgICByZXR1cm4gZGF5ID09PSAwIHx8IGRheSA9PT0gNjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0RhdGVJblJhbmdlcyh0aGlzLmRhdGUuZGF0ZSwgdGhpcy5kaXNhYmxlZERhdGVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzT3V0T2ZSYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLm91dE9mUmFuZ2VEYXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRGF0ZUluUmFuZ2VzKHRoaXMuZGF0ZS5kYXRlLCB0aGlzLm91dE9mUmFuZ2VEYXRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1NwZWNpYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWxEYXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRGF0ZUluUmFuZ2VzKHRoaXMuZGF0ZS5kYXRlLCB0aGlzLnNwZWNpYWxEYXRlcyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX2RhdGUnKVxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZS5pc0N1cnJlbnRNb250aCAmJiAhKHRoaXMuaXNXZWVrZW5kICYmIHRoaXMuc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1pbmFjdGl2ZScpXG4gICAgcHVibGljIGdldCBpc0luYWN0aXZlQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luYWN0aXZlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1jdXJyZW50JylcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXlDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVG9kYXkgJiYgIXRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY2FsZW5kYXJfX2RhdGUtLXNlbGVjdGVkJylcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWRDU1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS13ZWVrZW5kJylcbiAgICBwdWJsaWMgZ2V0IGlzV2Vla2VuZENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNXZWVrZW5kO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQ1NTKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuaXNPdXRPZlJhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyX19kYXRlLS1zcGVjaWFsJylcbiAgICBwdWJsaWMgZ2V0IGlzU3BlY2lhbENTUygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTcGVjaWFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInKVxuICAgIHB1YmxpYyBvblNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5vbkRhdGVTZWxlY3Rpb24uZW1pdCh0aGlzLmRhdGUpO1xuICAgIH1cbn1cbiJdfQ==