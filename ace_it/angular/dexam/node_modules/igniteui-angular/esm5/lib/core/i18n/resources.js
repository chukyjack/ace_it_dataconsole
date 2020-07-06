/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GridResourceStringsEN } from './grid-resources';
import { TimePickerResourceStringsEN } from './time-picker-resources';
import { cloneValue } from '../utils';
/**
 * @record
 */
export function IResourceStrings() { }
/**
 * @hidden
 * @type {?}
 */
export var CurrentResourceStrings = {
    GridResStrings: cloneValue(GridResourceStringsEN),
    TimePickerResStrings: cloneValue(TimePickerResourceStringsEN)
};
/**
 * @param {?} currentStrings
 * @param {?} newStrings
 * @return {?}
 */
function updateResourceStrings(currentStrings, newStrings) {
    var e_1, _a;
    try {
        for (var _b = tslib_1.__values(Object.keys(newStrings)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            if (key in currentStrings) {
                currentStrings[key] = newStrings[key];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * Changes the resource strings for all components in the application
 * ```
 * @param {?} resourceStrings to be applied
 * @return {?}
 */
export function changei18n(resourceStrings) {
    var e_2, _a;
    try {
        for (var _b = tslib_1.__values(Object.keys(CurrentResourceStrings)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            updateResourceStrings(CurrentResourceStrings[key], resourceStrings);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
/**
 * Returns current resource strings for all components
 * @return {?}
 */
export function getCurrentResourceStrings() {
    return tslib_1.__assign({}, CurrentResourceStrings.GridResStrings, CurrentResourceStrings.TimePickerResStrings);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2kxOG4vcmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF3QixxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBOEIsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRXRDLHNDQUE2Rjs7Ozs7QUFLN0YsTUFBTSxLQUFPLHNCQUFzQixHQUFHO0lBQ2xDLGNBQWMsRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUM7SUFDakQsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLDJCQUEyQixDQUFDO0NBQ2hFOzs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLGNBQWdDLEVBQUUsVUFBNEI7OztRQUN6RixLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtZQUF0QyxJQUFNLEdBQUcsV0FBQTtZQUNWLElBQUksR0FBRyxJQUFJLGNBQWMsRUFBRTtnQkFDdkIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QztTQUNKOzs7Ozs7Ozs7QUFDTCxDQUFDOzs7Ozs7O0FBT0QsTUFBTSxVQUFVLFVBQVUsQ0FBQyxlQUFpQzs7O1FBQ3hELEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUEsZ0JBQUEsNEJBQUU7WUFBbEQsSUFBTSxHQUFHLFdBQUE7WUFDVixxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUN2RTs7Ozs7Ozs7O0FBQ0wsQ0FBQzs7Ozs7QUFLRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3JDLDRCQUNXLHNCQUFzQixDQUFDLGNBQWMsRUFDckMsc0JBQXNCLENBQUMsb0JBQW9CLEVBQ3BEO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHcmlkUmVzb3VyY2VTdHJpbmdzLCBHcmlkUmVzb3VyY2VTdHJpbmdzRU4gfSBmcm9tICcuL2dyaWQtcmVzb3VyY2VzJztcbmltcG9ydCB7IElUaW1lUGlja2VyUmVzb3VyY2VTdHJpbmdzLCBUaW1lUGlja2VyUmVzb3VyY2VTdHJpbmdzRU4gfSBmcm9tICcuL3RpbWUtcGlja2VyLXJlc291cmNlcyc7XG5pbXBvcnQgeyBjbG9uZVZhbHVlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZVN0cmluZ3MgZXh0ZW5kcyBJR3JpZFJlc291cmNlU3RyaW5ncywgSVRpbWVQaWNrZXJSZXNvdXJjZVN0cmluZ3Mge31cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBDdXJyZW50UmVzb3VyY2VTdHJpbmdzID0ge1xuICAgIEdyaWRSZXNTdHJpbmdzOiBjbG9uZVZhbHVlKEdyaWRSZXNvdXJjZVN0cmluZ3NFTiksXG4gICAgVGltZVBpY2tlclJlc1N0cmluZ3M6IGNsb25lVmFsdWUoVGltZVBpY2tlclJlc291cmNlU3RyaW5nc0VOKVxufTtcblxuZnVuY3Rpb24gdXBkYXRlUmVzb3VyY2VTdHJpbmdzKGN1cnJlbnRTdHJpbmdzOiBJUmVzb3VyY2VTdHJpbmdzLCBuZXdTdHJpbmdzOiBJUmVzb3VyY2VTdHJpbmdzICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1N0cmluZ3MpKSB7XG4gICAgICAgIGlmIChrZXkgaW4gY3VycmVudFN0cmluZ3MpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmdzW2tleV0gPSBuZXdTdHJpbmdzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgcmVzb3VyY2Ugc3RyaW5ncyBmb3IgYWxsIGNvbXBvbmVudHMgaW4gdGhlIGFwcGxpY2F0aW9uXG4gKiBgYGBcbiAqIEBwYXJhbSByZXNvdXJjZVN0cmluZ3MgdG8gYmUgYXBwbGllZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlaTE4bihyZXNvdXJjZVN0cmluZ3M6IElSZXNvdXJjZVN0cmluZ3MpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhDdXJyZW50UmVzb3VyY2VTdHJpbmdzKSkge1xuICAgICAgICB1cGRhdGVSZXNvdXJjZVN0cmluZ3MoQ3VycmVudFJlc291cmNlU3RyaW5nc1trZXldLCByZXNvdXJjZVN0cmluZ3MpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGN1cnJlbnQgcmVzb3VyY2Ugc3RyaW5ncyBmb3IgYWxsIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRSZXNvdXJjZVN0cmluZ3MoKTogSVJlc291cmNlU3RyaW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLkN1cnJlbnRSZXNvdXJjZVN0cmluZ3MuR3JpZFJlc1N0cmluZ3MsXG4gICAgICAgICAgICAuLi5DdXJyZW50UmVzb3VyY2VTdHJpbmdzLlRpbWVQaWNrZXJSZXNTdHJpbmdzXG4gICAgfTtcbn1cbiJdfQ==