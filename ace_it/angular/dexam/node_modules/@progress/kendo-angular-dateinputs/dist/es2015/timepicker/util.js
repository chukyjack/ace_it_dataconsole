import { cloneDate } from '@progress/kendo-date-math';
import { TIME_PART } from './models/time-part.default';
const isEqualTillMinute = (value, min) => value.getHours() === min.getHours() && value.getMinutes() === min.getMinutes();
const ɵ0 = isEqualTillMinute;
const isEqualTillSecond = (value, min) => isEqualTillMinute(value, min) && value.getSeconds() === min.getSeconds();
const ɵ1 = isEqualTillSecond;
const isEqualTillMillisecond = (value, min) => isEqualTillSecond(value, min) && value.getMilliseconds() === min.getMilliseconds();
const ɵ2 = isEqualTillMillisecond;
const ɵ3 = (value) => value.getHours(), ɵ4 = (_, min) => min.getHours(), ɵ5 = (value) => value.getMinutes(), ɵ6 = (value, min) => isEqualTillMinute(value, min) ? min.getMinutes() : 0, ɵ7 = (value) => value.getSeconds(), ɵ8 = (value, min) => isEqualTillSecond(value, min) ? min.getSeconds() : 0, ɵ9 = (value) => value.getMilliseconds(), ɵ10 = (value, min) => isEqualTillMillisecond(value, min) ? min.getMilliseconds() : 0;
const defaultGetters = [
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
const left = getter => (origin, _) => getter(origin);
const ɵ11 = left;
const right = getter => (_, candidate) => getter(candidate);
const ɵ12 = right;
const convertToObject = (parts) => parts.reduce((obj, p) => { obj[p.type] = p.type; return obj; }, {});
const ɵ13 = convertToObject;
const getterByPart = parts => g => parts[g.type] ? right(g.getter) : left(g.getter);
const ɵ14 = getterByPart;
const gettersFactory = getters => parts => (getters.map(getterByPart(convertToObject(parts))));
const ɵ15 = gettersFactory;
const snapValue = (getter, minGetter, step) => (date, min) => {
    const value = getter(date);
    const minValue = minGetter(date, min);
    const rest = value - minValue;
    if (rest < 0) {
        return minValue;
    }
    const mod = rest % step;
    return value - mod + (mod > step / 2 ? step : 0);
};
const ɵ16 = snapValue;
const snappersFactory = (getters) => steps => (getters.map(g => {
    const step = steps[g.type];
    return step ? snapValue(g.getter, g.minGetter, step) : g.getter;
}));
const ɵ17 = snappersFactory;
/**
 * @hidden
 */
export const generateGetters = gettersFactory(defaultGetters);
/**
 * @hidden
 */
export const generateSnappers = snappersFactory(defaultGetters);
/**
 * @hidden
 */
export const valueMerger = getters => (origin, candidate) => {
    origin.setHours(...getters.map(g => g(origin, candidate)));
    return origin;
};
/**
 * @hidden
 */
export const snapTime = snappers => (candidate, min) => {
    const date = cloneDate(candidate);
    date.setHours(...snappers.map(s => s(date, min)));
    return date;
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17 };
