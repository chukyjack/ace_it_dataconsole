/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DateRangeType } from '../core/dates';
/** @type {?} */
const MDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/** @type {?} */
const FEBRUARY = 1;
/**
 * @param {?=} start
 * @param {?=} stop
 * @param {?=} step
 * @return {?}
 */
export function range(start = 0, stop, step = 1) {
    /** @type {?} */
    const res = [];
    /** @type {?} */
    const cur = (stop === undefined) ? 0 : start;
    /** @type {?} */
    const max = (stop === undefined) ? start : stop;
    for (let i = cur; step < 0 ? i > max : i < max; i += step) {
        res.push(i);
    }
    return res;
}
/**
 * Returns true for leap years, false for non-leap years.
 *
 * @export
 * @param {?} year
 * @return {?}
 */
export function isLeap(year) {
    return (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));
}
/**
 * @param {?} year
 * @param {?} month
 * @param {?} day
 * @return {?}
 */
export function weekDay(year, month, day) {
    return new Date(year, month, day).getDay();
}
/**
 * Return weekday and number of days for year, month.
 *
 * @export
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
export function monthRange(year, month) {
    if ((month < 0) || (month > 11)) {
        throw new Error('Invalid month specified');
    }
    /** @type {?} */
    const day = weekDay(year, month, 1);
    /** @type {?} */
    let nDays = MDAYS[month];
    if ((month === FEBRUARY) && (isLeap(year))) {
        nDays++;
    }
    return [day, nDays];
}
/**
 * @param {?} date
 * @param {?} ranges
 * @return {?}
 */
export function isDateInRanges(date, ranges) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    /** @type {?} */
    const dateInMs = date.getTime();
    for (const descriptor of ranges) {
        /** @type {?} */
        const dRanges = descriptor.dateRange ? descriptor.dateRange.map(r => new Date(r.getFullYear(), r.getMonth(), r.getDate())) : undefined;
        switch (descriptor.type) {
            case (DateRangeType.After):
                if (dateInMs > dRanges[0].getTime()) {
                    return true;
                }
                break;
            case (DateRangeType.Before):
                if (dateInMs < dRanges[0].getTime()) {
                    return true;
                }
                break;
            case (DateRangeType.Between):
                /** @type {?} */
                const dRange = dRanges.map(d => d.getTime());
                /** @type {?} */
                const min = Math.min(dRange[0], dRange[1]);
                /** @type {?} */
                const max = Math.max(dRange[0], dRange[1]);
                if (dateInMs >= min && dateInMs <= max) {
                    return true;
                }
                break;
            case (DateRangeType.Specific):
                /** @type {?} */
                const datesInMs = dRanges.map(d => d.getTime());
                for (const specificDateInMs of datesInMs) {
                    if (dateInMs === specificDateInMs) {
                        return true;
                    }
                }
                break;
            case (DateRangeType.Weekdays):
                /** @type {?} */
                const day = date.getDay();
                if (day % 6 !== 0) {
                    return true;
                }
                break;
            case (DateRangeType.Weekends):
                /** @type {?} */
                const weekday = date.getDay();
                if (weekday % 6 === 0) {
                    return true;
                }
                break;
            default:
                return false;
        }
    }
    return false;
}
/**
 * @record
 */
export function ICalendarDate() { }
if (false) {
    /** @type {?} */
    ICalendarDate.prototype.date;
    /** @type {?} */
    ICalendarDate.prototype.isCurrentMonth;
    /** @type {?} */
    ICalendarDate.prototype.isPrevMonth;
    /** @type {?} */
    ICalendarDate.prototype.isNextMonth;
}
/**
 * @record
 */
export function IFormattedParts() { }
if (false) {
    /** @type {?} */
    IFormattedParts.prototype.value;
    /** @type {?|undefined} */
    IFormattedParts.prototype.literal;
    /** @type {?} */
    IFormattedParts.prototype.combined;
}
/**
 * @record
 */
export function IFormattingOptions() { }
if (false) {
    /** @type {?|undefined} */
    IFormattingOptions.prototype.day;
    /** @type {?|undefined} */
    IFormattingOptions.prototype.month;
    /** @type {?|undefined} */
    IFormattingOptions.prototype.weekday;
    /** @type {?|undefined} */
    IFormattingOptions.prototype.year;
}
/**
 * @record
 */
export function IFormattingViews() { }
if (false) {
    /** @type {?|undefined} */
    IFormattingViews.prototype.day;
    /** @type {?|undefined} */
    IFormattingViews.prototype.month;
    /** @type {?|undefined} */
    IFormattingViews.prototype.year;
}
/** @enum {number} */
const WEEKDAYS = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};
export { WEEKDAYS };
WEEKDAYS[WEEKDAYS.SUNDAY] = 'SUNDAY';
WEEKDAYS[WEEKDAYS.MONDAY] = 'MONDAY';
WEEKDAYS[WEEKDAYS.TUESDAY] = 'TUESDAY';
WEEKDAYS[WEEKDAYS.WEDNESDAY] = 'WEDNESDAY';
WEEKDAYS[WEEKDAYS.THURSDAY] = 'THURSDAY';
WEEKDAYS[WEEKDAYS.FRIDAY] = 'FRIDAY';
WEEKDAYS[WEEKDAYS.SATURDAY] = 'SATURDAY';
export class Calendar {
    /**
     * @param {?=} firstWeekDay
     */
    constructor(firstWeekDay = WEEKDAYS.SUNDAY) {
        this._firstWeekDay = firstWeekDay;
    }
    /**
     * @return {?}
     */
    get firstWeekDay() {
        return this._firstWeekDay % 7;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set firstWeekDay(value) {
        this._firstWeekDay = value;
    }
    /**
     * Returns an array of weekdays for one week starting
     * with the currently set `firstWeekDay`
     *
     * this.firstWeekDay = 0 (Sunday) --> [0, 1, 2, 3, 4, 5, 6]
     * this.firstWeekDay = 1 (Monday) --> [1, 2, 3, 4, 5, 6, 0]
     *
     * \@memberof Calendar
     * @return {?}
     *
     */
    weekdays() {
        /** @type {?} */
        const res = [];
        for (const i of range(this.firstWeekDay, this.firstWeekDay + 7)) {
            res.push(i % 7);
        }
        return res;
    }
    /**
     * Returns the date values for one month. It will always iterate throught
     * complete weeks, so it will contain dates outside the specified month.
     *
     * \@memberof Calendar
     * @param {?} year
     * @param {?} month
     * @param {?=} extraWeek
     * @return {?}
     *
     */
    monthdates(year, month, extraWeek = false) {
        /** @type {?} */
        let date = new Date(year, month, 1);
        /** @type {?} */
        let days = (date.getDay() - this.firstWeekDay) % 7;
        if (days < 0) {
            days = 7 - Math.abs(days);
        }
        date = this.timedelta(date, 'day', -days);
        /** @type {?} */
        const res = [];
        /** @type {?} */
        let value;
        while (true) {
            value = this.generateICalendarDate(date, year, month);
            res.push(value);
            date = this.timedelta(date, 'day', 1);
            if ((date.getMonth() !== month) && (date.getDay() === this.firstWeekDay)) {
                if (extraWeek && res.length <= 35) {
                    for (const i of range(0, 7)) {
                        value = this.generateICalendarDate(date, year, month);
                        res.push(value);
                        date = this.timedelta(date, 'day', 1);
                    }
                }
                break;
            }
        }
        return res;
    }
    /**
     * Returns a matrix (array of arrays) representing a month's calendar.
     * Each row represents a full week; week entries are ICalendarDate objects.
     *
     * \@memberof Calendar
     * @param {?} year
     * @param {?} month
     * @param {?=} extraWeek
     * @return {?}
     *
     */
    monthdatescalendar(year, month, extraWeek = false) {
        /** @type {?} */
        const dates = this.monthdates(year, month, extraWeek);
        /** @type {?} */
        const res = [];
        for (const i of range(0, dates.length, 7)) {
            res.push(dates.slice(i, i + 7));
        }
        return res;
    }
    /**
     * @param {?} date
     * @param {?} interval
     * @param {?} units
     * @return {?}
     */
    timedelta(date, interval, units) {
        /** @type {?} */
        const ret = new Date(date);
        /** @type {?} */
        const checkRollover = () => {
            if (ret.getDate() !== date.getDate()) {
                ret.setDate(0);
            }
        };
        switch (interval.toLowerCase()) {
            case 'year':
                ret.setFullYear(ret.getFullYear() + units);
                checkRollover();
                break;
            case 'quarter':
                ret.setMonth(ret.getMonth() + 3 * units);
                checkRollover();
                break;
            case 'month':
                ret.setMonth(ret.getMonth() + units);
                checkRollover();
                break;
            case 'week':
                ret.setDate(ret.getDate() + 7 * units);
                break;
            case 'day':
                ret.setDate(ret.getDate() + units);
                break;
            case 'hour':
                ret.setTime(ret.getTime() + units * 3600000);
                break;
            case 'minute':
                ret.setTime(ret.getTime() + units * 60000);
                break;
            case 'second':
                ret.setTime(ret.getTime() + units * 1000);
                break;
            default:
                throw new Error('Invalid interval specifier');
        }
        return ret;
    }
    /**
     * @param {?} date
     * @param {?} locale
     * @param {?} options
     * @param {?} parts
     * @return {?}
     */
    formatToParts(date, locale, options, parts) {
        /** @type {?} */
        const formatter = new Intl.DateTimeFormat(locale, options);
        /** @type {?} */
        const result = {
            date,
            full: formatter.format(date)
        };
        if (((/** @type {?} */ (formatter))).formatToParts) {
            /** @type {?} */
            const formattedParts = ((/** @type {?} */ (formatter))).formatToParts(date);
            /** @type {?} */
            const toType = (partType) => {
                /** @type {?} */
                const index = formattedParts.findIndex(({ type }) => type === partType);
                /** @type {?} */
                const o = { value: '', literal: '', combined: '' };
                if (partType === 'era' && index > -1) {
                    o.value = formattedParts[index].value;
                    return o;
                }
                else if (partType === 'era' && index === -1) {
                    return o;
                }
                o.value = formattedParts[index].value;
                o.literal = formattedParts[index + 1] ? formattedParts[index + 1].value : '';
                o.combined = [o.value, o.literal].join('');
                return o;
            };
            for (const each of parts) {
                result[each] = toType(each);
            }
        }
        else {
            for (const each of parts) {
                result[each] = { value: '', literal: '', combined: '' };
            }
        }
        return result;
    }
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    generateICalendarDate(date, year, month) {
        return {
            date,
            isCurrentMonth: date.getFullYear() === year && date.getMonth() === month,
            isNextMonth: this.isNextMonth(date, year, month),
            isPrevMonth: this.isPreviousMonth(date, year, month)
        };
    }
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    isPreviousMonth(date, year, month) {
        if (date.getFullYear() === year) {
            return date.getMonth() < month;
        }
        return date.getFullYear() < year;
    }
    /**
     * @private
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    isNextMonth(date, year, month) {
        if (date.getFullYear() === year) {
            return date.getMonth() > month;
        }
        return date.getFullYear() > year;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Calendar.prototype._firstWeekDay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFFN0QsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O01BQ3hELFFBQVEsR0FBRyxDQUFDOzs7Ozs7O0FBRWxCLE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUM7O1VBQ3JDLEdBQUcsR0FBRyxFQUFFOztVQUNSLEdBQUcsR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLOztVQUN0QyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNmO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDOzs7Ozs7OztBQVNELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBWTtJQUMvQixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMs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Q0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUNqRSxPQUFPO1lBQ0gsSUFBSTtZQUNKLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLO1lBQ3hFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ2hELFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1NBQ3ZELENBQUM7SUFDTixDQUFDOzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDM0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDOzs7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDdkQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0NBQ0o7Ozs7OztJQXRNRyxpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUmFuZ2VEZXNjcmlwdG9yLCBEYXRlUmFuZ2VUeXBlIH0gZnJvbSAnLi4vY29yZS9kYXRlcyc7XG5cbmNvbnN0IE1EQVlTID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuY29uc3QgRkVCUlVBUlkgPSAxO1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQgPSAwLCBzdG9wLCBzdGVwID0gMSkge1xuICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgIGNvbnN0IGN1ciA9IChzdG9wID09PSB1bmRlZmluZWQpID8gMCA6IHN0YXJ0O1xuICAgIGNvbnN0IG1heCA9IChzdG9wID09PSB1bmRlZmluZWQpID8gc3RhcnQgOiBzdG9wO1xuICAgIGZvciAobGV0IGkgPSBjdXI7IHN0ZXAgPCAwID8gaSA+IG1heCA6IGkgPCBtYXg7IGkgKz0gc3RlcCkge1xuICAgICAgICByZXMucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgZm9yIGxlYXAgeWVhcnMsIGZhbHNlIGZvciBub24tbGVhcCB5ZWFycy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geWVhclxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcCh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwKSAmJiAoKHllYXIgJSAxMDAgIT09IDApIHx8ICh5ZWFyICUgNDAwID09PSAwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrRGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KS5nZXREYXkoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gd2Vla2RheSBhbmQgbnVtYmVyIG9mIGRheXMgZm9yIHllYXIsIG1vbnRoLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB5ZWFyXG4gKiBAcGFyYW0gbW9udGhcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb250aFJhbmdlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBpZiAoKG1vbnRoIDwgMCkgfHwgKG1vbnRoID4gMTEpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb250aCBzcGVjaWZpZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGF5ID0gd2Vla0RheSh5ZWFyLCBtb250aCwgMSk7XG4gICAgbGV0IG5EYXlzID0gTURBWVNbbW9udGhdO1xuICAgIGlmICgobW9udGggPT09IEZFQlJVQVJZKSAmJiAoaXNMZWFwKHllYXIpKSkge1xuICAgICAgICBuRGF5cysrO1xuICAgIH1cbiAgICByZXR1cm4gW2RheSwgbkRheXNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZXMoZGF0ZTogRGF0ZSwgcmFuZ2VzOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW10pOiBib29sZWFuIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBkYXRlSW5NcyA9IGRhdGUuZ2V0VGltZSgpO1xuXG4gICAgZm9yIChjb25zdCBkZXNjcmlwdG9yIG9mIHJhbmdlcykge1xuICAgICAgICBjb25zdCBkUmFuZ2VzID0gZGVzY3JpcHRvci5kYXRlUmFuZ2UgPyBkZXNjcmlwdG9yLmRhdGVSYW5nZS5tYXAoXG4gICAgICAgICAgICByID0+IG5ldyBEYXRlKHIuZ2V0RnVsbFllYXIoKSwgci5nZXRNb250aCgpLCByLmdldERhdGUoKSkpIDogdW5kZWZpbmVkO1xuICAgICAgICBzd2l0Y2ggKGRlc2NyaXB0b3IudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAoRGF0ZVJhbmdlVHlwZS5BZnRlcik6XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVJbk1zID4gZFJhbmdlc1swXS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChEYXRlUmFuZ2VUeXBlLkJlZm9yZSk6XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVJbk1zIDwgZFJhbmdlc1swXS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChEYXRlUmFuZ2VUeXBlLkJldHdlZW4pOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRSYW5nZSA9IGRSYW5nZXMubWFwKGQgPT4gZC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKGRSYW5nZVswXSwgZFJhbmdlWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChkUmFuZ2VbMF0sIGRSYW5nZVsxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVJbk1zID49IG1pbiAmJiBkYXRlSW5NcyA8PSBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChEYXRlUmFuZ2VUeXBlLlNwZWNpZmljKTpcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlc0luTXMgPSBkUmFuZ2VzLm1hcChkID0+IGQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNwZWNpZmljRGF0ZUluTXMgb2YgZGF0ZXNJbk1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlSW5NcyA9PT0gc3BlY2lmaWNEYXRlSW5Ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKERhdGVSYW5nZVR5cGUuV2Vla2RheXMpOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKGRheSAlIDYgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChEYXRlUmFuZ2VUeXBlLldlZWtlbmRzKTpcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSAlIDYgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FsZW5kYXJEYXRlIHtcbiAgICBkYXRlOiBEYXRlO1xuICAgIGlzQ3VycmVudE1vbnRoOiBib29sZWFuO1xuICAgIGlzUHJldk1vbnRoOiBib29sZWFuO1xuICAgIGlzTmV4dE1vbnRoOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtYXR0ZWRQYXJ0cyB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBsaXRlcmFsPzogc3RyaW5nO1xuICAgIGNvbWJpbmVkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1hdHRpbmdPcHRpb25zIHtcbiAgICBkYXk/OiBzdHJpbmc7XG4gICAgbW9udGg/OiBzdHJpbmc7XG4gICAgd2Vla2RheT86IHN0cmluZztcbiAgICB5ZWFyPzogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1hdHRpbmdWaWV3cyB7XG4gICAgZGF5PzogYm9vbGVhbjtcbiAgICBtb250aD86IGJvb2xlYW47XG4gICAgeWVhcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIFdFRUtEQVlTIHtcbiAgICBTVU5EQVkgPSAwLFxuICAgIE1PTkRBWSA9IDEsXG4gICAgVFVFU0RBWSA9IDIsXG4gICAgV0VETkVTREFZID0gMyxcbiAgICBUSFVSU0RBWSA9IDQsXG4gICAgRlJJREFZID0gNSxcbiAgICBTQVRVUkRBWSA9IDZcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIHtcblxuICAgIHByaXZhdGUgX2ZpcnN0V2Vla0RheTogbnVtYmVyIHwgV0VFS0RBWVM7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdFdlZWtEYXk6IG51bWJlciB8IFdFRUtEQVlTID0gV0VFS0RBWVMuU1VOREFZKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0V2Vla0RheSA9IGZpcnN0V2Vla0RheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZpcnN0V2Vla0RheSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3RXZWVrRGF5ICUgNztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0V2Vla0RheSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0V2Vla0RheSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygd2Vla2RheXMgZm9yIG9uZSB3ZWVrIHN0YXJ0aW5nXG4gICAgICogd2l0aCB0aGUgY3VycmVudGx5IHNldCBgZmlyc3RXZWVrRGF5YFxuICAgICAqXG4gICAgICogdGhpcy5maXJzdFdlZWtEYXkgPSAwIChTdW5kYXkpIC0tPiBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgKiB0aGlzLmZpcnN0V2Vla0RheSA9IDEgKE1vbmRheSkgLS0+IFsxLCAyLCAzLCA0LCA1LCA2LCAwXVxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDYWxlbmRhclxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWVrZGF5cygpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2UodGhpcy5maXJzdFdlZWtEYXksIHRoaXMuZmlyc3RXZWVrRGF5ICsgNykpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGkgJSA3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRhdGUgdmFsdWVzIGZvciBvbmUgbW9udGguIEl0IHdpbGwgYWx3YXlzIGl0ZXJhdGUgdGhyb3VnaHRcbiAgICAgKiBjb21wbGV0ZSB3ZWVrcywgc28gaXQgd2lsbCBjb250YWluIGRhdGVzIG91dHNpZGUgdGhlIHNwZWNpZmllZCBtb250aC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB5ZWFyXG4gICAgICogQHBhcmFtIG1vbnRoXG4gICAgICogQHBhcmFtIGJvb2xlYW5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENhbGVuZGFyXG4gICAgICovXG4gICAgcHVibGljIG1vbnRoZGF0ZXMoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBleHRyYVdlZWs6IGJvb2xlYW4gPSBmYWxzZSk6IElDYWxlbmRhckRhdGVbXSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuICAgICAgICBsZXQgZGF5cyA9IChkYXRlLmdldERheSgpIC0gdGhpcy5maXJzdFdlZWtEYXkpICUgNztcbiAgICAgICAgaWYgKGRheXMgPCAwKSB7XG4gICAgICAgICAgICBkYXlzID0gNyAtIE1hdGguYWJzKGRheXMpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGUgPSB0aGlzLnRpbWVkZWx0YShkYXRlLCAnZGF5JywgLWRheXMpO1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlOiBJQ2FsZW5kYXJEYXRlO1xuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZW5lcmF0ZUlDYWxlbmRhckRhdGUoZGF0ZSwgeWVhciwgbW9udGgpO1xuICAgICAgICAgICAgcmVzLnB1c2godmFsdWUpO1xuXG4gICAgICAgICAgICBkYXRlID0gdGhpcy50aW1lZGVsdGEoZGF0ZSwgJ2RheScsIDEpO1xuXG4gICAgICAgICAgICBpZiAoKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpICYmIChkYXRlLmdldERheSgpID09PSB0aGlzLmZpcnN0V2Vla0RheSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFXZWVrICYmIHJlcy5sZW5ndGggPD0gMzUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpIG9mIHJhbmdlKDAsIDcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2VuZXJhdGVJQ2FsZW5kYXJEYXRlKGRhdGUsIHllYXIsIG1vbnRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSB0aGlzLnRpbWVkZWx0YShkYXRlLCAnZGF5JywgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWF0cml4IChhcnJheSBvZiBhcnJheXMpIHJlcHJlc2VudGluZyBhIG1vbnRoJ3MgY2FsZW5kYXIuXG4gICAgICogRWFjaCByb3cgcmVwcmVzZW50cyBhIGZ1bGwgd2Vlazsgd2VlayBlbnRyaWVzIGFyZSBJQ2FsZW5kYXJEYXRlIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geWVhclxuICAgICAqIEBwYXJhbSBtb250aFxuICAgICAqIEByZXR1cm5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ2FsZW5kYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgbW9udGhkYXRlc2NhbGVuZGFyKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZXh0cmFXZWVrOiBib29sZWFuID0gZmFsc2UpOiBJQ2FsZW5kYXJEYXRlW11bXSB7XG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5tb250aGRhdGVzKHllYXIsIG1vbnRoLCBleHRyYVdlZWspO1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHJhbmdlKDAsIGRhdGVzLmxlbmd0aCwgNykpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGRhdGVzLnNsaWNlKGksIGkgKyA3KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdGltZWRlbHRhKGRhdGU6IERhdGUsIGludGVydmFsOiBzdHJpbmcsIHVuaXRzOiBudW1iZXIpOiBEYXRlIHtcbiAgICAgICAgY29uc3QgcmV0ID0gbmV3IERhdGUoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tSb2xsb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXQuZ2V0RGF0ZSgpICE9PSBkYXRlLmdldERhdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldC5zZXREYXRlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAoaW50ZXJ2YWwudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgcmV0LnNldEZ1bGxZZWFyKHJldC5nZXRGdWxsWWVhcigpICsgdW5pdHMpO1xuICAgICAgICAgICAgICAgIGNoZWNrUm9sbG92ZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgICAgIHJldC5zZXRNb250aChyZXQuZ2V0TW9udGgoKSArIDMgKiB1bml0cyk7XG4gICAgICAgICAgICAgICAgY2hlY2tSb2xsb3ZlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHJldC5zZXRNb250aChyZXQuZ2V0TW9udGgoKSArIHVuaXRzKTtcbiAgICAgICAgICAgICAgICBjaGVja1JvbGxvdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICByZXQuc2V0RGF0ZShyZXQuZ2V0RGF0ZSgpICsgNyAqIHVuaXRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgcmV0LnNldERhdGUocmV0LmdldERhdGUoKSArIHVuaXRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHJldC5zZXRUaW1lKHJldC5nZXRUaW1lKCkgKyB1bml0cyAqIDM2MDAwMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICByZXQuc2V0VGltZShyZXQuZ2V0VGltZSgpICsgdW5pdHMgKiA2MDAwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIHJldC5zZXRUaW1lKHJldC5nZXRUaW1lKCkgKyB1bml0cyAqIDEwMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwgc3BlY2lmaWVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0VG9QYXJ0cyhkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZywgb3B0aW9uczogYW55LCBwYXJ0czogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGZ1bGw6IGZvcm1hdHRlci5mb3JtYXQoZGF0ZSlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoKGZvcm1hdHRlciBhcyBhbnkpLmZvcm1hdFRvUGFydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcnRzID0gKGZvcm1hdHRlciBhcyBhbnkpLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvVHlwZSA9IChwYXJ0VHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmb3JtYXR0ZWRQYXJ0cy5maW5kSW5kZXgoKHsgdHlwZSB9KSA9PiB0eXBlID09PSBwYXJ0VHlwZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbzogSUZvcm1hdHRlZFBhcnRzID0geyB2YWx1ZTogJycsIGxpdGVyYWw6ICcnLCBjb21iaW5lZDogJyd9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRUeXBlID09PSAnZXJhJyAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG8udmFsdWUgPSBmb3JtYXR0ZWRQYXJ0c1tpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydFR5cGUgPT09ICdlcmEnICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvLnZhbHVlID0gZm9ybWF0dGVkUGFydHNbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgIG8ubGl0ZXJhbCA9IGZvcm1hdHRlZFBhcnRzW2luZGV4ICsgMV0gPyBmb3JtYXR0ZWRQYXJ0c1tpbmRleCArIDFdLnZhbHVlIDogJyc7XG4gICAgICAgICAgICAgICAgby5jb21iaW5lZCA9IFtvLnZhbHVlLCBvLmxpdGVyYWxdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHBhcnRzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2VhY2hdID0gdG9UeXBlKGVhY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHBhcnRzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2VhY2hdID0geyB2YWx1ZTogJycsIGxpdGVyYWw6ICcnLCBjb21iaW5lZDogJyd9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUlDYWxlbmRhckRhdGUoZGF0ZTogRGF0ZSwgeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogSUNhbGVuZGFyRGF0ZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgaXNDdXJyZW50TW9udGg6IGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBkYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoLFxuICAgICAgICAgICAgaXNOZXh0TW9udGg6IHRoaXMuaXNOZXh0TW9udGgoZGF0ZSwgeWVhciwgbW9udGgpLFxuICAgICAgICAgICAgaXNQcmV2TW9udGg6IHRoaXMuaXNQcmV2aW91c01vbnRoKGRhdGUsIHllYXIsIG1vbnRoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNQcmV2aW91c01vbnRoKGRhdGU6IERhdGUsIHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpIDwgbW9udGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSA8IHllYXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc05leHRNb250aChkYXRlOiBEYXRlLCB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSA+IG1vbnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSA+IHllYXI7XG4gICAgfVxufVxuIl19