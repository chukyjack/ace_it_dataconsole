/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const clear = (el) => el === 0 || Boolean(el);
const ɵ0 = clear;
/** @type {?} */
const first = (arr) => arr[0];
const ɵ1 = first;
/** @type {?} */
const last = (arr) => arr[arr.length - 1];
const ɵ2 = last;
export class IgxSummaryOperand {
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
    static count(data) {
        return data.length;
    }
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
    operate(data = []) {
        return [{
                key: 'count',
                label: 'Count',
                summaryResult: IgxSummaryOperand.count(data)
            }];
    }
}
// @dynamic
export class IgxNumberSummaryOperand extends IgxSummaryOperand {
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
    static min(data) {
        return data.length && data.filter(clear).length ? data.filter(clear).reduce((a, b) => Math.min(a, b)) : 0;
    }
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
    static max(data) {
        return data.length && data.filter(clear).length ? data.filter(clear).reduce((a, b) => Math.max(a, b)) : 0;
    }
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
    static sum(data) {
        return data.length && data.filter(clear).length ? data.filter(clear).reduce((a, b) => +a + +b) : 0;
    }
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
    static average(data) {
        return data.length && data.filter(clear).length ? this.sum(data) / this.count(data) : 0;
    }
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
    operate(data = []) {
        /** @type {?} */
        const result = super.operate(data);
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
    }
}
// @dynamic
export class IgxDateSummaryOperand extends IgxSummaryOperand {
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
    static latest(data) {
        return data.length && data.filter(clear).length ?
            first(data.filter(clear).sort((a, b) => new Date(b).valueOf() - new Date(a).valueOf())) : undefined;
    }
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
    static earliest(data) {
        return data.length && data.filter(clear).length ?
            last(data.filter(clear).sort((a, b) => new Date(b).valueOf() - new Date(a).valueOf())) : undefined;
    }
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
    operate(data = []) {
        /** @type {?} */
        const result = super.operate(data);
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
    }
}
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSx3Q0FHQzs7O0lBRkcsdUNBQWtCOztJQUNsQiwyQ0FBb0I7Ozs7O0FBRXhCLHNDQUlDOzs7SUFIRywrQkFBWTs7SUFDWixpQ0FBYzs7SUFDZCx5Q0FBbUI7Ozs7O0FBR3ZCLG9DQUlDOzs7SUFIRyxtQ0FBMkM7O0lBQzNDLDZCQUFhOztJQUNiLHlDQUF5Qjs7O01BR3ZCLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDOzs7TUFDdkMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7TUFDdkIsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0FBRXpDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7Ozs7O0lBU25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVztRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qk0sT0FBTyxDQUFDLE9BQWMsRUFBRTtRQUMzQixPQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLE9BQU87Z0JBQ1osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDL0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOztBQUdELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7Ozs7Ozs7O0lBU25ELE1BQU0sQ0FBQyxHQUFH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QUcsRUFBRSxRQUFRO1lBQ2IsS0FBSyxFQUFFLFFBQVE7WUFDZixhQUFhLEVBQUUscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNwRCxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElTdW1tYXJ5RXhwcmVzc2lvbiB7XG4gICAgZmllbGROYW1lOiBzdHJpbmc7XG4gICAgY3VzdG9tU3VtbWFyeT86IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSWd4U3VtbWFyeVJlc3VsdCB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBzdW1tYXJ5UmVzdWx0OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1bW1hcnlSZWNvcmQge1xuICAgIHN1bW1hcmllczogTWFwPHN0cmluZywgSWd4U3VtbWFyeVJlc3VsdFtdPjtcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgY2VsbEluZGVudGF0aW9uPzogbnVtYmVyO1xufVxuXG5jb25zdCBjbGVhciA9IChlbCkgPT4gZWwgPT09IDAgfHwgQm9vbGVhbihlbCk7XG5jb25zdCBmaXJzdCA9IChhcnIpID0+IGFyclswXTtcbmNvbnN0IGxhc3QgPSAoYXJyKSA9PiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuXG5leHBvcnQgY2xhc3MgSWd4U3VtbWFyeU9wZXJhbmQge1xuICAgIC8qKlxuICAgICAqIENvdW50cyBhbGwgdGhlIHJlY29yZHMgaW4gdGhlIGRhdGEgc291cmNlLlxuICAgICAqIElmIGZpbHRlcmluZyBpcyBhcHBsaWVkLCBjb3VudHMgb25seSB0aGUgZmlsdGVyZWQgcmVjb3Jkcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogSWd4U3VtbWFyeU9wZXJhbmQuY291bnQoZGF0YVNvdXJjZSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjb3VudChkYXRhOiBhbnlbXSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHN0YXRpYyBgY291bnRgIG1ldGhvZCBhbmQgcmV0dXJucyBgSWd4U3VtbWFyeVJlc3VsdFtdYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW50ZXJmYWNlIElneFN1bW1hcnlSZXN1bHQge1xuICAgICAqICAga2V5OiBzdHJpbmc7XG4gICAgICogICBsYWJlbDogc3RyaW5nO1xuICAgICAqICAgc3VtbWFyeVJlc3VsdDogYW55O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaW5oZXJpdGVkIGNsYXNzZXMgdG8gcHJvdmlkZSBjdXN0b21pemF0aW9uIGZvciB0aGUgYHN1bW1hcnlgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjbGFzcyBDdXN0b21TdW1tYXJ5IGV4dGVuZHMgSWd4U3VtbWFyeU9wZXJhbmQge1xuICAgICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAgICogICAgIHN1cGVyKCk7XG4gICAgICogICB9XG4gICAgICogICBwdWJsaWMgb3BlcmF0ZShkYXRhPzogYW55W10pOiBJZ3hTdW1tYXJ5UmVzdWx0W10ge1xuICAgICAqICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgKiAgICAgcmVzdWx0LnB1c2goe1xuICAgICAqICAgICAgIGtleTogXCJ0ZXN0XCIsXG4gICAgICogICAgICAgbGFiZWw6IFwiVGVzdFwiLFxuICAgICAqICAgICAgIHN1bW1hcnlSZXN1bHQ6IElneFN1bW1hcnlPcGVyYW5kLmNvdW50KGRhdGEpXG4gICAgICogICAgIH0pO1xuICAgICAqICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiB0aGlzLmdyaWQuZ2V0Q29sdW1uQnlOYW1lKCdDb2x1bW5OYW1lJykuc3VtbWFyaWVzID0gQ3VzdG9tU3VtbWFyeTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlcmF0ZShkYXRhOiBhbnlbXSA9IFtdKTogSWd4U3VtbWFyeVJlc3VsdFtdIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBrZXk6ICdjb3VudCcsXG4gICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgIHN1bW1hcnlSZXN1bHQ6IElneFN1bW1hcnlPcGVyYW5kLmNvdW50KGRhdGEpXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZCBleHRlbmRzIElneFN1bW1hcnlPcGVyYW5kIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG51bWVyaWMgdmFsdWUgaW4gdGhlIHByb3ZpZGVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBJZiBmaWx0ZXJpbmcgaXMgYXBwbGllZCwgcmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgZmlsdGVyZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5taW4oZGF0YSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE51bWJlclN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtaW4oZGF0YTogYW55W10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggJiYgZGF0YS5maWx0ZXIoY2xlYXIpLmxlbmd0aCA/IGRhdGEuZmlsdGVyKGNsZWFyKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIpKSA6IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gbnVtZXJpYyB2YWx1ZSBpbiB0aGUgcHJvdmlkZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIElmIGZpbHRlcmluZyBpcyBhcHBsaWVkLCByZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIHRoZSBmaWx0ZXJlZCBkYXRhIHJlY29yZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIElneE51bWJlclN1bW1hcnlPcGVyYW5kLm1heChkYXRhKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIG1heChkYXRhOiBhbnlbXSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCAmJiBkYXRhLmZpbHRlcihjbGVhcikubGVuZ3RoID8gZGF0YS5maWx0ZXIoY2xlYXIpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYikpIDogMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBudW1lcmljIHZhbHVlcyBpbiB0aGUgcHJvdmlkZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIElmIGZpbHRlcmluZyBpcyBhcHBsaWVkLCByZXR1cm5zIHRoZSBzdW0gb2YgdGhlIG51bWVyaWMgdmFsdWVzIGluIHRoZSBkYXRhIHJlY29yZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIElneE51bWJlclN1bW1hcnlPcGVyYW5kLnN1bShkYXRhKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHN1bShkYXRhOiBhbnlbXSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCAmJiBkYXRhLmZpbHRlcihjbGVhcikubGVuZ3RoID8gZGF0YS5maWx0ZXIoY2xlYXIpLnJlZHVjZSgoYSwgYikgPT4gK2EgKyArYikgOiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhdmVyYWdlIG51bWVyaWMgdmFsdWUgaW4gdGhlIGRhdGEgcHJvdmlkZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIElmIGZpbHRlcmluZyBpcyBhcHBsaWVkLCByZXR1cm5zIHRoZSBhdmVyYWdlIG51bWVyaWMgdmFsdWUgaW4gdGhlIGZpbHRlcmVkIGRhdGEgcmVjb3Jkcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogSWd4U3VtbWFyeU9wZXJhbmQuYXZlcmFnZShkYXRhKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGF2ZXJhZ2UoZGF0YTogYW55W10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggJiYgZGF0YS5maWx0ZXIoY2xlYXIpLmxlbmd0aCA/IHRoaXMuc3VtKGRhdGEpIC8gdGhpcy5jb3VudChkYXRhKSA6IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBzdGF0aWMgbWV0aG9kcyBhbmQgcmV0dXJucyBgSWd4U3VtbWFyeVJlc3VsdFtdYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW50ZXJmYWNlIElneFN1bW1hcnlSZXN1bHQge1xuICAgICAqICAga2V5OiBzdHJpbmc7XG4gICAgICogICBsYWJlbDogc3RyaW5nO1xuICAgICAqICAgc3VtbWFyeVJlc3VsdDogYW55O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaW5oZXJpdGVkIGNsYXNzZXMgdG8gcHJvdmlkZSBjdXN0b21pemF0aW9uIGZvciB0aGUgYHN1bW1hcnlgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjbGFzcyBDdXN0b21OdW1iZXJTdW1tYXJ5IGV4dGVuZHMgSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQge1xuICAgICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAgICogICAgIHN1cGVyKCk7XG4gICAgICogICB9XG4gICAgICogICBwdWJsaWMgb3BlcmF0ZShkYXRhPzogYW55W10pOiBJZ3hTdW1tYXJ5UmVzdWx0W10ge1xuICAgICAqICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgKiAgICAgcmVzdWx0LnB1c2goe1xuICAgICAqICAgICAgIGtleTogXCJhdmdcIixcbiAgICAgKiAgICAgICBsYWJlbDogXCJBdmdcIixcbiAgICAgKiAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5hdmVyYWdlKGRhdGEpXG4gICAgICogICAgIH0pO1xuICAgICAqICAgICByZXN1bHQucHVzaCh7XG4gICAgICogICAgICAga2V5OiBcIm1heFwiLFxuICAgICAqICAgICAgIGxhYmVsOiBcIk1heFwiLFxuICAgICAqICAgICAgIHN1bW1hcnlSZXN1bHQ6IElneE51bWJlclN1bW1hcnlPcGVyYW5kLm1heChkYXRhKVxuICAgICAqICAgICB9KTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogdGhpcy5ncmlkLmdldENvbHVtbkJ5TmFtZSgnQ29sdW1uTmFtZScpLnN1bW1hcmllcyA9IEN1c3RvbU51bWJlclN1bW1hcnk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE51bWJlclN1bW1hcnlPcGVyYW5kXG4gICAgICovXG4gICAgcHVibGljIG9wZXJhdGUoZGF0YTogYW55W10gPSBbXSk6IElneFN1bW1hcnlSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLm9wZXJhdGUoZGF0YSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogJ21pbicsXG4gICAgICAgICAgICBsYWJlbDogJ01pbicsXG4gICAgICAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5taW4oZGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogJ21heCcsXG4gICAgICAgICAgICBsYWJlbDogJ01heCcsXG4gICAgICAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5tYXgoZGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogJ3N1bScsXG4gICAgICAgICAgICBsYWJlbDogJ1N1bScsXG4gICAgICAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZC5zdW0oZGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgbGFiZWw6ICdBdmcnLFxuICAgICAgICAgICAgc3VtbWFyeVJlc3VsdDogSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQuYXZlcmFnZShkYXRhKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgSWd4RGF0ZVN1bW1hcnlPcGVyYW5kIGV4dGVuZHMgSWd4U3VtbWFyeU9wZXJhbmQge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCBkYXRlIHZhbHVlIGluIHRoZSBkYXRhIHJlY29yZHMuXG4gICAgICogSWYgZmlsdGVyaW5nIGlzIGFwcGxpZWQsIHJldHVybnMgdGhlIGxhdGVzdCBkYXRlIHZhbHVlIGluIHRoZSBmaWx0ZXJlZCBkYXRhIHJlY29yZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIElneERhdGVTdW1tYXJ5T3BlcmFuZC5sYXRlc3QoZGF0YSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneERhdGVTdW1tYXJ5T3BlcmFuZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbGF0ZXN0KGRhdGE6IGFueVtdKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCAmJiBkYXRhLmZpbHRlcihjbGVhcikubGVuZ3RoID9cbiAgICAgICAgICAgIGZpcnN0KGRhdGEuZmlsdGVyKGNsZWFyKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiKS52YWx1ZU9mKCkgLSBuZXcgRGF0ZShhKS52YWx1ZU9mKCkpKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWFybGllc3QgZGF0ZSB2YWx1ZSBpbiB0aGUgZGF0YSByZWNvcmRzLlxuICAgICAqIElmIGZpbHRlcmluZyBpcyBhcHBsaWVkLCByZXR1cm5zIHRoZSBsYXRlc3QgZGF0ZSB2YWx1ZSBpbiB0aGUgZmlsdGVyZWQgZGF0YSByZWNvcmRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmQuZWFybGllc3QoZGF0YSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneERhdGVTdW1tYXJ5T3BlcmFuZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZWFybGllc3QoZGF0YTogYW55W10pIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoICYmIGRhdGEuZmlsdGVyKGNsZWFyKS5sZW5ndGggP1xuICAgICAgICAgICAgbGFzdChkYXRhLmZpbHRlcihjbGVhcikuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYikudmFsdWVPZigpIC0gbmV3IERhdGUoYSkudmFsdWVPZigpKSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBzdGF0aWMgbWV0aG9kcyBhbmQgcmV0dXJucyBgSWd4U3VtbWFyeVJlc3VsdFtdYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW50ZXJmYWNlIElneFN1bW1hcnlSZXN1bHQge1xuICAgICAqICAga2V5OiBzdHJpbmc7XG4gICAgICogICBsYWJlbDogc3RyaW5nO1xuICAgICAqICAgc3VtbWFyeVJlc3VsdDogYW55O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaW5oZXJpdGVkIGNsYXNzZXMgdG8gcHJvdmlkZSBjdXN0b21pemF0aW9uIGZvciB0aGUgYHN1bW1hcnlgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjbGFzcyBDdXN0b21EYXRlU3VtbWFyeSBleHRlbmRzIElneERhdGVTdW1tYXJ5T3BlcmFuZCB7XG4gICAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgKiAgICAgc3VwZXIoKTtcbiAgICAgKiAgIH1cbiAgICAgKiAgIHB1YmxpYyBvcGVyYXRlKGRhdGE/OiBhbnlbXSk6IElneFN1bW1hcnlSZXN1bHRbXSB7XG4gICAgICogICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAqICAgICByZXN1bHQucHVzaCh7XG4gICAgICogICAgICAga2V5OiBcImxhdGVzdFwiLFxuICAgICAqICAgICAgIGxhYmVsOiBcIkxhdGVzdCBEYXRlXCIsXG4gICAgICogICAgICAgc3VtbWFyeVJlc3VsdDogSWd4RGF0ZVN1bW1hcnlPcGVyYW5kLmxhdGVzdChkYXRhKVxuICAgICAqICAgICB9KTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogdGhpcy5ncmlkLmdldENvbHVtbkJ5TmFtZSgnQ29sdW1uTmFtZScpLnN1bW1hcmllcyA9IEN1c3RvbURhdGVTdW1tYXJ5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlcmF0ZShkYXRhOiBhbnlbXSA9IFtdKTogSWd4U3VtbWFyeVJlc3VsdFtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIub3BlcmF0ZShkYXRhKTtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAga2V5OiAnZWFybGllc3QnLFxuICAgICAgICAgICAgbGFiZWw6ICdFYXJsaWVzdCcsXG4gICAgICAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmQuZWFybGllc3QoZGF0YSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGtleTogJ2xhdGVzdCcsXG4gICAgICAgICAgICBsYWJlbDogJ0xhdGVzdCcsXG4gICAgICAgICAgICBzdW1tYXJ5UmVzdWx0OiBJZ3hEYXRlU3VtbWFyeU9wZXJhbmQubGF0ZXN0KGRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==