import { EventEmitter, ElementRef } from '@angular/core';
import { ICalendarDate } from '../calendar';
import { DateRangeDescriptor } from '../../core/dates';
/**
 *@hidden
*/
export declare class IgxDayItemComponent {
    private elementRef;
    date: ICalendarDate;
    selection: string;
    value: Date | Date[];
    disabledDates: DateRangeDescriptor[];
    outOfRangeDates: DateRangeDescriptor[];
    specialDates: DateRangeDescriptor[];
    onDateSelection: EventEmitter<ICalendarDate>;
    selected: boolean;
    readonly isCurrentMonth: boolean;
    readonly isPreviousMonth: boolean;
    readonly isNextMonth: boolean;
    readonly nativeElement: any;
    readonly isInactive: boolean;
    readonly isToday: boolean;
    readonly isWeekend: boolean;
    readonly isDisabled: boolean;
    readonly isOutOfRange: boolean;
    readonly isSpecial: boolean;
    tabindex: number;
    readonly defaultCSS: boolean;
    readonly isInactiveCSS: boolean;
    readonly isTodayCSS: boolean;
    readonly isSelectedCSS: boolean;
    readonly isWeekendCSS: boolean;
    readonly isDisabledCSS: boolean;
    readonly isSpecialCSS: boolean;
    private _selected;
    constructor(elementRef: ElementRef);
    onSelect(): void;
}
