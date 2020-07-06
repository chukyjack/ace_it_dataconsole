/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @record
 */
export function ISummaryExpression() { }
if (false) {
    /** @type {?} */
    ISummaryExpression.prototype.fieldName;
    /** @type {?|undefined} */
    ISummaryExpression.prototype.customSummary;
}
/**
 * @record
 */
export function IgxSummaryResult() { }
if (false) {
    /** @type {?} */
    IgxSummaryResult.prototype.key;
    /** @type {?} */
    IgxSummaryResult.prototype.label;
    /** @type {?} */
    IgxSummaryResult.prototype.summaryResult;
}
/**
 * @record
 */
export function ISummaryRecord() { }
if (false) {
    /** @type {?} */
    ISummaryRecord.prototype.summaries;
    /** @type {?|undefined} */
    ISummaryRecord.prototype.max;
    /** @type {?|undefined} */
    ISummaryRecord.prototype.cellIndentation;
}
/** @type {?} */
var clear = function (el) { return el === 0 || Boolean(el); };
var ɵ0 = clear;
/** @type {?} */
var first = function (arr) { return arr[0]; };
var ɵ1 = first;
/** @type {?} */
var last = function (arr) { return arr[arr.length - 1]; };
var ɵ2 = last;
var IgxSummaryOperand = /** @class */ (function () {
    function IgxSummaryOperand() {
    }
    /**
     * Counts all the records in the data source.
     * If filtering is applied, counts only the filtered records.
     * ```typescript
     * IgxSummaryOperand.count(dataSource);
     * ```
     * @memberof IgxSummaryOperand
     */
    /**
     * Counts all the records in the data source.
     * If filtering is applied, counts only the filtered records.
     * ```typescript
     * IgxSummaryOperand.count(dataSource);
     * ```
     * \@memberof IgxSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxSummaryOperand.count = /**
     * Counts all the records in the data source.
     * If filtering is applied, counts only the filtered records.
     * ```typescript
     * IgxSummaryOperand.count(dataSource);
     * ```
     * \@memberof IgxSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length;
    };
    /**
     * Executes the static `count` method and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomSummary extends IgxSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "test",
     *       label: "Test",
     *       summaryResult: IgxSummaryOperand.count(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomSummary;
     * ```
     * @memberof IgxSummaryOperand
     */
    /**
     * Executes the static `count` method and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomSummary extends IgxSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "test",
     *       label: "Test",
     *       summaryResult: IgxSummaryOperand.count(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomSummary;
     * ```
     * \@memberof IgxSummaryOperand
     * @param {?=} data
     * @return {?}
     */
    IgxSummaryOperand.prototype.operate = /**
     * Executes the static `count` method and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomSummary extends IgxSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "test",
     *       label: "Test",
     *       summaryResult: IgxSummaryOperand.count(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomSummary;
     * ```
     * \@memberof IgxSummaryOperand
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        if (data === void 0) { data = []; }
        return [{
                key: 'count',
                label: 'Count',
                summaryResult: IgxSummaryOperand.count(data)
            }];
    };
    return IgxSummaryOperand;
}());
export { IgxSummaryOperand };
// @dynamic
var 
// @dynamic
IgxNumberSummaryOperand = /** @class */ (function (_super) {
    tslib_1.__extends(IgxNumberSummaryOperand, _super);
    function IgxNumberSummaryOperand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the minimum numeric value in the provided data records.
     * If filtering is applied, returns the minimum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.min(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    /**
     * Returns the minimum numeric value in the provided data records.
     * If filtering is applied, returns the minimum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.min(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxNumberSummaryOperand.min = /**
     * Returns the minimum numeric value in the provided data records.
     * If filtering is applied, returns the minimum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.min(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length && data.filter(clear).length ? data.filter(clear).reduce(function (a, b) { return Math.min(a, b); }) : 0;
    };
    /**
     * Returns the maximum numeric value in the provided data records.
     * If filtering is applied, returns the maximum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.max(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    /**
     * Returns the maximum numeric value in the provided data records.
     * If filtering is applied, returns the maximum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.max(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxNumberSummaryOperand.max = /**
     * Returns the maximum numeric value in the provided data records.
     * If filtering is applied, returns the maximum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.max(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length && data.filter(clear).length ? data.filter(clear).reduce(function (a, b) { return Math.max(a, b); }) : 0;
    };
    /**
     * Returns the sum of the numeric values in the provided data records.
     * If filtering is applied, returns the sum of the numeric values in the data records.
     * ```typescript
     * IgxNumberSummaryOperand.sum(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    /**
     * Returns the sum of the numeric values in the provided data records.
     * If filtering is applied, returns the sum of the numeric values in the data records.
     * ```typescript
     * IgxNumberSummaryOperand.sum(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxNumberSummaryOperand.sum = /**
     * Returns the sum of the numeric values in the provided data records.
     * If filtering is applied, returns the sum of the numeric values in the data records.
     * ```typescript
     * IgxNumberSummaryOperand.sum(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length && data.filter(clear).length ? data.filter(clear).reduce(function (a, b) { return +a + +b; }) : 0;
    };
    /**
     * Returns the average numeric value in the data provided data records.
     * If filtering is applied, returns the average numeric value in the filtered data records.
     * ```typescript
     * IgxSummaryOperand.average(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    /**
     * Returns the average numeric value in the data provided data records.
     * If filtering is applied, returns the average numeric value in the filtered data records.
     * ```typescript
     * IgxSummaryOperand.average(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxNumberSummaryOperand.average = /**
     * Returns the average numeric value in the data provided data records.
     * If filtering is applied, returns the average numeric value in the filtered data records.
     * ```typescript
     * IgxSummaryOperand.average(data);
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length && data.filter(clear).length ? this.sum(data) / this.count(data) : 0;
    };
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomNumberSummary extends IgxNumberSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "avg",
     *       label: "Avg",
     *       summaryResult: IgxNumberSummaryOperand.average(data)
     *     });
     *     result.push({
     *       key: "max",
     *       label: "Max",
     *       summaryResult: IgxNumberSummaryOperand.max(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomNumberSummary;
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomNumberSummary extends IgxNumberSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "avg",
     *       label: "Avg",
     *       summaryResult: IgxNumberSummaryOperand.average(data)
     *     });
     *     result.push({
     *       key: "max",
     *       label: "Max",
     *       summaryResult: IgxNumberSummaryOperand.max(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomNumberSummary;
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?=} data
     * @return {?}
     */
    IgxNumberSummaryOperand.prototype.operate = /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomNumberSummary extends IgxNumberSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "avg",
     *       label: "Avg",
     *       summaryResult: IgxNumberSummaryOperand.average(data)
     *     });
     *     result.push({
     *       key: "max",
     *       label: "Max",
     *       summaryResult: IgxNumberSummaryOperand.max(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomNumberSummary;
     * ```
     * \@memberof IgxNumberSummaryOperand
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        if (data === void 0) { data = []; }
        /** @type {?} */
        var result = _super.prototype.operate.call(this, data);
        result.push({
            key: 'min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        result.push({
            key: 'sum',
            label: 'Sum',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        result.push({
            key: 'average',
            label: 'Avg',
            summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    };
    return IgxNumberSummaryOperand;
}(IgxSummaryOperand));
// @dynamic
export { IgxNumberSummaryOperand };
// @dynamic
var 
// @dynamic
IgxDateSummaryOperand = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDateSummaryOperand, _super);
    function IgxDateSummaryOperand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the latest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.latest(data);
     * ```
     * @memberof IgxDateSummaryOperand
     */
    /**
     * Returns the latest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.latest(data);
     * ```
     * \@memberof IgxDateSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxDateSummaryOperand.latest = /**
     * Returns the latest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.latest(data);
     * ```
     * \@memberof IgxDateSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length && data.filter(clear).length ?
            first(data.filter(clear).sort(function (a, b) { return new Date(b).valueOf() - new Date(a).valueOf(); })) : undefined;
    };
    /**
     * Returns the earliest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.earliest(data);
     * ```
     * @memberof IgxDateSummaryOperand
     */
    /**
     * Returns the earliest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.earliest(data);
     * ```
     * \@memberof IgxDateSummaryOperand
     * @param {?} data
     * @return {?}
     */
    IgxDateSummaryOperand.earliest = /**
     * Returns the earliest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.earliest(data);
     * ```
     * \@memberof IgxDateSummaryOperand
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.length && data.filter(clear).length ?
            last(data.filter(clear).sort(function (a, b) { return new Date(b).valueOf() - new Date(a).valueOf(); })) : undefined;
    };
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomDateSummary extends IgxDateSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "latest",
     *       label: "Latest Date",
     *       summaryResult: IgxDateSummaryOperand.latest(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomDateSummary;
     * ```
     * @memberof IgxDateSummaryOperand
     */
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomDateSummary extends IgxDateSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "latest",
     *       label: "Latest Date",
     *       summaryResult: IgxDateSummaryOperand.latest(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomDateSummary;
     * ```
     * \@memberof IgxDateSummaryOperand
     * @param {?=} data
     * @return {?}
     */
    IgxDateSummaryOperand.prototype.operate = /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomDateSummary extends IgxDateSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "latest",
     *       label: "Latest Date",
     *       summaryResult: IgxDateSummaryOperand.latest(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomDateSummary;
     * ```
     * \@memberof IgxDateSummaryOperand
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        if (data === void 0) { data = []; }
        /** @type {?} */
        var result = _super.prototype.operate.call(this, data);
        result.push({
            key: 'earliest',
            label: 'Earliest',
            summaryResult: IgxDateSummaryOperand.earliest(data)
        });
        result.push({
            key: 'latest',
            label: 'Latest',
            summaryResult: IgxDateSummaryOperand.latest(data)
        });
        return result;
    };
    return IgxDateSummaryOperand;
}(IgxSummaryOperand));
// @dynamic
export { IgxDateSummaryOperand };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBR0M7OztJQUZHLHVDQUFrQjs7SUFDbEIsMkNBQW9COzs7OztBQUV4QixzQ0FJQzs7O0lBSEcsK0JBQVk7O0lBQ1osaUNBQWM7O0lBQ2QseUNBQW1COzs7OztBQUd2QixvQ0FJQzs7O0lBSEcsbUNBQTJDOztJQUMzQyw2QkFBYTs7SUFDYix5Q0FBeUI7OztJQUd2QixLQUFLLEdBQUcsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBdkIsQ0FBdUI7OztJQUN2QyxLQUFLLEdBQUcsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTTs7O0lBQ3ZCLElBQUksR0FBRyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFuQixDQUFtQjs7QUFFekM7SUFBQTtJQWdEQSxDQUFDO0lBL0NHOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7O0lBQ1csdUJBQUs7Ozs7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBVztRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNEJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNJLG1DQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWQsVUFBZSxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLFNBQWdCO1FBQzNCLE9BQU8sQ0FBQztnQkFDSixHQUFHLEVBQUUsT0FBTztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxhQUFh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LENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRyxDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E0Qkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0ksdUNBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBZCxVQUFlLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsU0FBZ0I7O1lBQ3JCLE1BQU0sR0FBRyxpQkFBTSxPQUFPLFlBQUMsSUFBSSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsVUFBVTtZQUNmLEtBQUssRUFBRSxVQUFVO1lBQ2pCLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RELENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsUUFBUTtZQUNiLEtBQUssRUFBRSxRQUFRO1lBQ2YsYUFBYSxFQUFFLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDcEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXBFRCxDQUEyQyxpQkFBaUIsR0FvRTNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3VtbWFyeUV4cHJlc3Npb24ge1xuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xuICAgIGN1c3RvbVN1bW1hcnk/OiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElneFN1bW1hcnlSZXN1bHQge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgc3VtbWFyeVJlc3VsdDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdW1tYXJ5UmVjb3JkIHtcbiAgICBzdW1tYXJpZXM6IE1hcDxzdHJpbmcsIElneFN1bW1hcnlSZXN1bHRbXT47XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIGNlbGxJbmRlbnRhdGlvbj86IG51bWJlcjtcbn1cblxuY29uc3QgY2xlYXIgPSAoZWwpID0+IGVsID09PSAwIHx8IEJvb2xlYW4oZWwpO1xuY29uc3QgZmlyc3QgPSAoYXJyKSA9PiBhcnJbMF07XG5jb25zdCBsYXN0ID0gKGFycikgPT4gYXJyW2Fyci5sZW5ndGggLSAxXTtcblxuZXhwb3J0IGNsYXNzIElneFN1bW1hcnlPcGVyYW5kIHtcbiAgICAvKipcbiAgICAgKiBDb3VudHMgYWxsIHRoZSByZWNvcmRzIGluIHRoZSBkYXRhIHNvdXJjZS5cbiAgICAgKiBJZiBmaWx0ZXJpbmcgaXMgYXBwbGllZCwgY291bnRzIG9ubHkgdGhlIGZpbHRlcmVkIHJlY29yZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIElneFN1bW1hcnlPcGVyYW5kLmNvdW50KGRhdGFTb3VyY2UpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTdW1tYXJ5T3BlcmFuZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY291bnQoZGF0YTogYW55W10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBzdGF0aWMgYGNvdW50YCBtZXRob2QgYW5kIHJldHVybnMgYElneFN1bW1hcnlSZXN1bHRbXWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGludGVyZmFjZSBJZ3hTdW1tYXJ5UmVzdWx0IHtcbiAgICAgKiAgIGtleTogc3RyaW5nO1xuICAgICAqICAgbGFiZWw6IHN0cmluZztcbiAgICAgKiAgIHN1bW1hcnlSZXN1bHQ6IGFueTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGluaGVyaXRlZCBjbGFzc2VzIHRvIHByb3ZpZGUgY3VzdG9taXphdGlvbiBmb3IgdGhlIGBzdW1tYXJ5YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2xhc3MgQ3VzdG9tU3VtbWFyeSBleHRlbmRzIElneFN1bW1hcnlPcGVyYW5kIHtcbiAgICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAqICAgICBzdXBlcigpO1xuICAgICAqICAgfVxuICAgICAqICAgcHVibGljIG9wZXJhdGUoZGF0YT86IGFueVtdKTogSWd4U3VtbWFyeVJlc3VsdFtdIHtcbiAgICAgKiAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICogICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgKiAgICAgICBrZXk6IFwidGVzdFwiLFxuICAgICAqICAgICAgIGxhYmVsOiBcIlRlc3RcIixcbiAgICAgKiAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hTdW1tYXJ5T3BlcmFuZC5jb3VudChkYXRhKVxuICAgICAqICAgICB9KTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogdGhpcy5ncmlkLmdldENvbHVtbkJ5TmFtZSgnQ29sdW1uTmFtZScpLnN1bW1hcmllcyA9IEN1c3RvbVN1bW1hcnk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIG9wZXJhdGUoZGF0YTogYW55W10gPSBbXSk6IElneFN1bW1hcnlSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAga2V5OiAnY291bnQnLFxuICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hTdW1tYXJ5T3BlcmFuZC5jb3VudChkYXRhKVxuICAgICAgICB9XTtcbiAgICB9XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQgZXh0ZW5kcyBJZ3hTdW1tYXJ5T3BlcmFuZCB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWluaW11bSBudW1lcmljIHZhbHVlIGluIHRoZSBwcm92aWRlZCBkYXRhIHJlY29yZHMuXG4gICAgICogSWYgZmlsdGVyaW5nIGlzIGFwcGxpZWQsIHJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIGZpbHRlcmVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQubWluKGRhdGEpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbWluKGRhdGE6IGFueVtdKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoICYmIGRhdGEuZmlsdGVyKGNsZWFyKS5sZW5ndGggPyBkYXRhLmZpbHRlcihjbGVhcikucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1pbihhLCBiKSkgOiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG51bWVyaWMgdmFsdWUgaW4gdGhlIHByb3ZpZGVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBJZiBmaWx0ZXJpbmcgaXMgYXBwbGllZCwgcmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgZmlsdGVyZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5tYXgoZGF0YSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE51bWJlclN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtYXgoZGF0YTogYW55W10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggJiYgZGF0YS5maWx0ZXIoY2xlYXIpLmxlbmd0aCA/IGRhdGEuZmlsdGVyKGNsZWFyKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIpKSA6IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgbnVtZXJpYyB2YWx1ZXMgaW4gdGhlIHByb3ZpZGVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBJZiBmaWx0ZXJpbmcgaXMgYXBwbGllZCwgcmV0dXJucyB0aGUgc3VtIG9mIHRoZSBudW1lcmljIHZhbHVlcyBpbiB0aGUgZGF0YSByZWNvcmRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5zdW0oZGF0YSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE51bWJlclN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzdW0oZGF0YTogYW55W10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggJiYgZGF0YS5maWx0ZXIoY2xlYXIpLmxlbmd0aCA/IGRhdGEuZmlsdGVyKGNsZWFyKS5yZWR1Y2UoKGEsIGIpID0+ICthICsgK2IpIDogMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXZlcmFnZSBudW1lcmljIHZhbHVlIGluIHRoZSBkYXRhIHByb3ZpZGVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBJZiBmaWx0ZXJpbmcgaXMgYXBwbGllZCwgcmV0dXJucyB0aGUgYXZlcmFnZSBudW1lcmljIHZhbHVlIGluIHRoZSBmaWx0ZXJlZCBkYXRhIHJlY29yZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIElneFN1bW1hcnlPcGVyYW5kLmF2ZXJhZ2UoZGF0YSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE51bWJlclN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhdmVyYWdlKGRhdGE6IGFueVtdKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoICYmIGRhdGEuZmlsdGVyKGNsZWFyKS5sZW5ndGggPyB0aGlzLnN1bShkYXRhKSAvIHRoaXMuY291bnQoZGF0YSkgOiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgc3RhdGljIG1ldGhvZHMgYW5kIHJldHVybnMgYElneFN1bW1hcnlSZXN1bHRbXWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGludGVyZmFjZSBJZ3hTdW1tYXJ5UmVzdWx0IHtcbiAgICAgKiAgIGtleTogc3RyaW5nO1xuICAgICAqICAgbGFiZWw6IHN0cmluZztcbiAgICAgKiAgIHN1bW1hcnlSZXN1bHQ6IGFueTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGluaGVyaXRlZCBjbGFzc2VzIHRvIHByb3ZpZGUgY3VzdG9taXphdGlvbiBmb3IgdGhlIGBzdW1tYXJ5YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2xhc3MgQ3VzdG9tTnVtYmVyU3VtbWFyeSBleHRlbmRzIElneE51bWJlclN1bW1hcnlPcGVyYW5kIHtcbiAgICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAqICAgICBzdXBlcigpO1xuICAgICAqICAgfVxuICAgICAqICAgcHVibGljIG9wZXJhdGUoZGF0YT86IGFueVtdKTogSWd4U3VtbWFyeVJlc3VsdFtdIHtcbiAgICAgKiAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICogICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgKiAgICAgICBrZXk6IFwiYXZnXCIsXG4gICAgICogICAgICAgbGFiZWw6IFwiQXZnXCIsXG4gICAgICogICAgICAgc3VtbWFyeVJlc3VsdDogSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQuYXZlcmFnZShkYXRhKVxuICAgICAqICAgICB9KTtcbiAgICAgKiAgICAgcmVzdWx0LnB1c2goe1xuICAgICAqICAgICAgIGtleTogXCJtYXhcIixcbiAgICAgKiAgICAgICBsYWJlbDogXCJNYXhcIixcbiAgICAgKiAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5tYXgoZGF0YSlcbiAgICAgKiAgICAgfSk7XG4gICAgICogICAgIHJldHVybiByZXN1bHQ7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIHRoaXMuZ3JpZC5nZXRDb2x1bW5CeU5hbWUoJ0NvbHVtbk5hbWUnKS5zdW1tYXJpZXMgPSBDdXN0b21OdW1iZXJTdW1tYXJ5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZFxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVyYXRlKGRhdGE6IGFueVtdID0gW10pOiBJZ3hTdW1tYXJ5UmVzdWx0W10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5vcGVyYXRlKGRhdGEpO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBrZXk6ICdtaW4nLFxuICAgICAgICAgICAgbGFiZWw6ICdNaW4nLFxuICAgICAgICAgICAgc3VtbWFyeVJlc3VsdDogSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQubWluKGRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBrZXk6ICdtYXgnLFxuICAgICAgICAgICAgbGFiZWw6ICdNYXgnLFxuICAgICAgICAgICAgc3VtbWFyeVJlc3VsdDogSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQubWF4KGRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBrZXk6ICdzdW0nLFxuICAgICAgICAgICAgbGFiZWw6ICdTdW0nLFxuICAgICAgICAgICAgc3VtbWFyeVJlc3VsdDogSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQuc3VtKGRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBrZXk6ICdhdmVyYWdlJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQXZnJyxcbiAgICAgICAgICAgIHN1bW1hcnlSZXN1bHQ6IElneE51bWJlclN1bW1hcnlPcGVyYW5kLmF2ZXJhZ2UoZGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIElneERhdGVTdW1tYXJ5T3BlcmFuZCBleHRlbmRzIElneFN1bW1hcnlPcGVyYW5kIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgZGF0ZSB2YWx1ZSBpbiB0aGUgZGF0YSByZWNvcmRzLlxuICAgICAqIElmIGZpbHRlcmluZyBpcyBhcHBsaWVkLCByZXR1cm5zIHRoZSBsYXRlc3QgZGF0ZSB2YWx1ZSBpbiB0aGUgZmlsdGVyZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmQubGF0ZXN0KGRhdGEpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxhdGVzdChkYXRhOiBhbnlbXSkge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggJiYgZGF0YS5maWx0ZXIoY2xlYXIpLmxlbmd0aCA/XG4gICAgICAgICAgICBmaXJzdChkYXRhLmZpbHRlcihjbGVhcikuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYikudmFsdWVPZigpIC0gbmV3IERhdGUoYSkudmFsdWVPZigpKSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVhcmxpZXN0IGRhdGUgdmFsdWUgaW4gdGhlIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBJZiBmaWx0ZXJpbmcgaXMgYXBwbGllZCwgcmV0dXJucyB0aGUgbGF0ZXN0IGRhdGUgdmFsdWUgaW4gdGhlIGZpbHRlcmVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogSWd4RGF0ZVN1bW1hcnlPcGVyYW5kLmVhcmxpZXN0KGRhdGEpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGVhcmxpZXN0KGRhdGE6IGFueVtdKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCAmJiBkYXRhLmZpbHRlcihjbGVhcikubGVuZ3RoID9cbiAgICAgICAgICAgIGxhc3QoZGF0YS5maWx0ZXIoY2xlYXIpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIpLnZhbHVlT2YoKSAtIG5ldyBEYXRlKGEpLnZhbHVlT2YoKSkpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgc3RhdGljIG1ldGhvZHMgYW5kIHJldHVybnMgYElneFN1bW1hcnlSZXN1bHRbXWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGludGVyZmFjZSBJZ3hTdW1tYXJ5UmVzdWx0IHtcbiAgICAgKiAgIGtleTogc3RyaW5nO1xuICAgICAqICAgbGFiZWw6IHN0cmluZztcbiAgICAgKiAgIHN1bW1hcnlSZXN1bHQ6IGFueTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGluaGVyaXRlZCBjbGFzc2VzIHRvIHByb3ZpZGUgY3VzdG9taXphdGlvbiBmb3IgdGhlIGBzdW1tYXJ5YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2xhc3MgQ3VzdG9tRGF0ZVN1bW1hcnkgZXh0ZW5kcyBJZ3hEYXRlU3VtbWFyeU9wZXJhbmQge1xuICAgICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAgICogICAgIHN1cGVyKCk7XG4gICAgICogICB9XG4gICAgICogICBwdWJsaWMgb3BlcmF0ZShkYXRhPzogYW55W10pOiBJZ3hTdW1tYXJ5UmVzdWx0W10ge1xuICAgICAqICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgKiAgICAgcmVzdWx0LnB1c2goe1xuICAgICAqICAgICAgIGtleTogXCJsYXRlc3RcIixcbiAgICAgKiAgICAgICBsYWJlbDogXCJMYXRlc3QgRGF0ZVwiLFxuICAgICAqICAgICAgIHN1bW1hcnlSZXN1bHQ6IElneERhdGVTdW1tYXJ5T3BlcmFuZC5sYXRlc3QoZGF0YSlcbiAgICAgKiAgICAgfSk7XG4gICAgICogICAgIHJldHVybiByZXN1bHQ7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIHRoaXMuZ3JpZC5nZXRDb2x1bW5CeU5hbWUoJ0NvbHVtbk5hbWUnKS5zdW1tYXJpZXMgPSBDdXN0b21EYXRlU3VtbWFyeTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RGF0ZVN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIG9wZXJhdGUoZGF0YTogYW55W10gPSBbXSk6IElneFN1bW1hcnlSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLm9wZXJhdGUoZGF0YSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogJ2VhcmxpZXN0JyxcbiAgICAgICAgICAgIGxhYmVsOiAnRWFybGllc3QnLFxuICAgICAgICAgICAgc3VtbWFyeVJlc3VsdDogSWd4RGF0ZVN1bW1hcnlPcGVyYW5kLmVhcmxpZXN0KGRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBrZXk6ICdsYXRlc3QnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYXRlc3QnLFxuICAgICAgICAgICAgc3VtbWFyeVJlc3VsdDogSWd4RGF0ZVN1bW1hcnlPcGVyYW5kLmxhdGVzdChkYXRhKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=