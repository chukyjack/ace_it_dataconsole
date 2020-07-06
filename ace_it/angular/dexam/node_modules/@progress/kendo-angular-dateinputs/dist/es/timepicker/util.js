import { cloneDate } from '@progress/kendo-date-math';
import { TIME_PART } from './models/time-part.default';
var isEqualTillMinute = function (value, min) { return value.getHours() === min.getHours() && value.getMinutes() === min.getMinutes(); };
var ɵ0 = isEqualTillMinute;
var isEqualTillSecond = function (value, min) { return isEqualTillMinute(value, min) && value.getSeconds() === min.getSeconds(); };
var ɵ1 = isEqualTillSecond;
var isEqualTillMillisecond = function (value, min) { return isEqualTillSecond(value, min) && value.getMilliseconds() === min.getMilliseconds(); };
var ɵ2 = isEqualTillMillisecond;
var ɵ3 = function (value) { return value.getHours(); }, ɵ4 = function (_, min) { return min.getHours(); }, ɵ5 = function (value) { return value.getMinutes(); }, ɵ6 = function (value, min) { return isEqualTillMinute(value, min) ? min.getMinutes() : 0; }, ɵ7 = function (value) { return value.getSeconds(); }, ɵ8 = function (value, min) { return isEqualTillSecond(value, min) ? min.getSeconds() : 0; }, ɵ9 = function (value) { return value.getMilliseconds(); }, ɵ10 = function (value, min) { return isEqualTillMillisecond(value, min) ? min.getMilliseconds() : 0; };
var defaultGetters = [
    {
        type: TIME_PART.hour,
        getter: ɵ3,
        minGetter: ɵ4
    }, {
        type: TIME_PART.minute,
        getter: ɵ5,
        minGetter: ɵ6
    }, {
        type: TIME_PART.second,
        getter: ɵ7,
        minGetter: ɵ8
    }, {
        type: TIME_PART.millisecond,
        getter: ɵ9,
        minGetter: ɵ10
    }
];
var left = function (getter) { return function (origin, _) { return getter(origin); }; };
var ɵ11 = left;
var right = function (getter) { return function (_, candidate) { return getter(candidate); }; };
var ɵ12 = right;
var convertToObject = function (parts) { return parts.reduce(function (obj, p) { obj[p.type] = p.type; return obj; }, {}); };
var ɵ13 = convertToObject;
var getterByPart = function (parts) { return function (g) { return parts[g.type] ? right(g.getter) : left(g.getter); }; };
var ɵ14 = getterByPart;
var gettersFactory = function (getters) { return function (parts) { return (getters.map(getterByPart(convertToObject(parts)))); }; };
var ɵ15 = gettersFactory;
var snapValue = function (getter, minGetter, step) { return function (date, min) {
    var value = getter(date);
    var minValue = minGetter(date, min);
    var rest = value - minValue;
    if (rest < 0) {
        return minValue;
    }
    var mod = rest % step;
    return value - mod + (mod > step / 2 ? step : 0);
}; };
var ɵ16 = snapValue;
var snappersFactory = function (getters) { return function (steps) { return (getters.map(function (g) {
    var step = steps[g.type];
    return step ? snapValue(g.getter, g.minGetter, step) : g.getter;
})); }; };
var ɵ17 = snappersFactory;
/**
 * @hidden
 */
export var generateGetters = gettersFactory(defaultGetters);
/**
 * @hidden
 */
export var generateSnappers = snappersFactory(defaultGetters);
/**
 * @hidden
 */
export var valueMerger = function (getters) { return function (origin, candidate) {
    origin.setHours.apply(origin, getters.map(function (g) { return g(origin, candidate); }));
    return origin;
}; };
/**
 * @hidden
 */
export var snapTime = function (snappers) { return function (candidate, min) {
    var date = cloneDate(candidate);
    date.setHours.apply(date, snappers.map(function (s) { return s(date, min); }));
    return date;
}; };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17 };
