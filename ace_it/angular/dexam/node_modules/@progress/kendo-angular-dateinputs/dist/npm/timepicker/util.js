"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kendo_date_math_1 = require("@progress/kendo-date-math");
var time_part_default_1 = require("./models/time-part.default");
var isEqualTillMinute = function (value, min) { return value.getHours() === min.getHours() && value.getMinutes() === min.getMinutes(); };
var ɵ0 = isEqualTillMinute;
exports.ɵ0 = ɵ0;
var isEqualTillSecond = function (value, min) { return isEqualTillMinute(value, min) && value.getSeconds() === min.getSeconds(); };
var ɵ1 = isEqualTillSecond;
exports.ɵ1 = ɵ1;
var isEqualTillMillisecond = function (value, min) { return isEqualTillSecond(value, min) && value.getMilliseconds() === min.getMilliseconds(); };
var ɵ2 = isEqualTillMillisecond;
exports.ɵ2 = ɵ2;
var ɵ3 = function (value) { return value.getHours(); }, ɵ4 = function (_, min) { return min.getHours(); }, ɵ5 = function (value) { return value.getMinutes(); }, ɵ6 = function (value, min) { return isEqualTillMinute(value, min) ? min.getMinutes() : 0; }, ɵ7 = function (value) { return value.getSeconds(); }, ɵ8 = function (value, min) { return isEqualTillSecond(value, min) ? min.getSeconds() : 0; }, ɵ9 = function (value) { return value.getMilliseconds(); }, ɵ10 = function (value, min) { return isEqualTillMillisecond(value, min) ? min.getMilliseconds() : 0; };
exports.ɵ3 = ɵ3;
exports.ɵ4 = ɵ4;
exports.ɵ5 = ɵ5;
exports.ɵ6 = ɵ6;
exports.ɵ7 = ɵ7;
exports.ɵ8 = ɵ8;
exports.ɵ9 = ɵ9;
exports.ɵ10 = ɵ10;
var defaultGetters = [
    {
        type: time_part_default_1.TIME_PART.hour,
        getter: ɵ3,
        minGetter: ɵ4
    }, {
        type: time_part_default_1.TIME_PART.minute,
        getter: ɵ5,
        minGetter: ɵ6
    }, {
        type: time_part_default_1.TIME_PART.second,
        getter: ɵ7,
        minGetter: ɵ8
    }, {
        type: time_part_default_1.TIME_PART.millisecond,
        getter: ɵ9,
        minGetter: ɵ10
    }
];
var left = function (getter) { return function (origin, _) { return getter(origin); }; };
var ɵ11 = left;
exports.ɵ11 = ɵ11;
var right = function (getter) { return function (_, candidate) { return getter(candidate); }; };
var ɵ12 = right;
exports.ɵ12 = ɵ12;
var convertToObject = function (parts) { return parts.reduce(function (obj, p) { obj[p.type] = p.type; return obj; }, {}); };
var ɵ13 = convertToObject;
exports.ɵ13 = ɵ13;
var getterByPart = function (parts) { return function (g) { return parts[g.type] ? right(g.getter) : left(g.getter); }; };
var ɵ14 = getterByPart;
exports.ɵ14 = ɵ14;
var gettersFactory = function (getters) { return function (parts) { return (getters.map(getterByPart(convertToObject(parts)))); }; };
var ɵ15 = gettersFactory;
exports.ɵ15 = ɵ15;
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
exports.ɵ16 = ɵ16;
var snappersFactory = function (getters) { return function (steps) { return (getters.map(function (g) {
    var step = steps[g.type];
    return step ? snapValue(g.getter, g.minGetter, step) : g.getter;
})); }; };
var ɵ17 = snappersFactory;
exports.ɵ17 = ɵ17;
/**
 * @hidden
 */
exports.generateGetters = gettersFactory(defaultGetters);
/**
 * @hidden
 */
exports.generateSnappers = snappersFactory(defaultGetters);
/**
 * @hidden
 */
exports.valueMerger = function (getters) { return function (origin, candidate) {
    origin.setHours.apply(origin, getters.map(function (g) { return g(origin, candidate); }));
    return origin;
}; };
/**
 * @hidden
 */
exports.snapTime = function (snappers) { return function (candidate, min) {
    var date = kendo_date_math_1.cloneDate(candidate);
    date.setHours.apply(date, snappers.map(function (s) { return s(date, min); }));
    return date;
}; };
