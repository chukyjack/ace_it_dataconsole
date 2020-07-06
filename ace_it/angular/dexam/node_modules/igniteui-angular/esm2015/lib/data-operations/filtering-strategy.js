/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FilteringLogic } from './filtering-expression.interface';
import { FilteringExpressionsTree } from './filtering-expressions-tree';
/**
 * @record
 */
export function IFilteringStrategy() { }
if (false) {
    /**
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    IFilteringStrategy.prototype.filter = function (data, expressionsTree) { };
}
/**
 * @abstract
 */
export class BaseFilteringStrategy {
    /**
     * @param {?} rec
     * @param {?} expr
     * @return {?}
     */
    findMatchByExpression(rec, expr) {
        /** @type {?} */
        const cond = expr.condition;
        /** @type {?} */
        const val = this.getFieldValue(rec, expr.fieldName);
        return cond.logic(val, expr.searchVal, expr.ignoreCase);
    }
    /**
     * @param {?} rec
     * @param {?} expressions
     * @return {?}
     */
    matchRecord(rec, expressions) {
        if (expressions) {
            if (expressions instanceof FilteringExpressionsTree) {
                /** @type {?} */
                const expressionsTree = (/** @type {?} */ (expressions));
                /** @type {?} */
                const operator = (/** @type {?} */ (expressionsTree.operator));
                /** @type {?} */
                let matchOperand;
                /** @type {?} */
                let operand;
                if (expressionsTree.filteringOperands && expressionsTree.filteringOperands.length) {
                    for (let i = 0; i < expressionsTree.filteringOperands.length; i++) {
                        operand = expressionsTree.filteringOperands[i];
                        matchOperand = this.matchRecord(rec, operand);
                        // Return false if at least one operand does not match and the filtering logic is And
                        if (!matchOperand && operator === FilteringLogic.And) {
                            return false;
                        }
                        // Return true if at least one operand matches and the filtering logic is Or
                        if (matchOperand && operator === FilteringLogic.Or) {
                            return true;
                        }
                    }
                    return matchOperand;
                }
                return true;
            }
            else {
                /** @type {?} */
                const expression = (/** @type {?} */ (expressions));
                return this.findMatchByExpression(rec, expression);
            }
        }
        return true;
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    BaseFilteringStrategy.prototype.filter = function (data, expressionsTree) { };
    /**
     * @abstract
     * @protected
     * @param {?} rec
     * @param {?} fieldName
     * @return {?}
     */
    BaseFilteringStrategy.prototype.getFieldValue = function (rec, fieldName) { };
}
export class FilteringStrategy extends BaseFilteringStrategy {
    /**
     * @template T
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    filter(data, expressionsTree) {
        /** @type {?} */
        let i;
        /** @type {?} */
        let rec;
        /** @type {?} */
        const len = data.length;
        /** @type {?} */
        const res = [];
        if (!expressionsTree || !expressionsTree.filteringOperands || expressionsTree.filteringOperands.length === 0 || !len) {
            return data;
        }
        for (i = 0; i < len; i++) {
            rec = data[i];
            if (this.matchRecord(rec, expressionsTree)) {
                res.push(rec);
            }
        }
        return res;
    }
    /**
     * @protected
     * @param {?} rec
     * @param {?} fieldName
     * @return {?}
     */
    getFieldValue(rec, fieldName) {
        return rec[fieldName];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUF3QixNQUFNLGtDQUFrQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBNkIsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUVuRyx3Q0FFQzs7Ozs7OztJQURHLDJFQUF1RTs7Ozs7QUFHM0UsTUFBTSxPQUFnQixxQkFBcUI7Ozs7OztJQUtoQyxxQkFBcUIsQ0FBQyxHQUFXLEVBQUUsSUFBMEI7O2NBQzFELElBQUksR0FBRyxJQUFJLENBQUMsU0FBUzs7Y0FDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBVyxFQUFFLFdBQTZEO1FBQ3pGLElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxXQUFXLFlBQVksd0JBQXdCLEVBQUU7O3NCQUMzQyxlQUFlLEdBQUcsbUJBQUEsV0FBVyxFQUE2Qjs7c0JBQzFELFFBQVEsR0FBRyxtQkFBQSxlQUFlLENBQUMsUUFBUSxFQUFrQjs7b0JBQ3ZELFlBQVk7O29CQUFFLE9BQU87Z0JBRXpCLElBQUksZUFBZSxDQUFDLGlCQUFpQixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7b0JBQy9FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMvRCxPQUFPLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBRTlDLHFGQUFxRjt3QkFDckYsSUFBSSxDQUFDLFlBQVksSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLEdBQUcsRUFBRTs0QkFDbEQsT0FBTyxLQUFLLENBQUM7eUJBQ2hCO3dCQUVELDRFQUE0RTt3QkFDNUUsSUFBSSxZQUFZLElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxFQUFFLEVBQUU7NEJBQ2hELE9BQU8sSUFBSSxDQUFDO3lCQUNmO3FCQUNKO29CQUVELE9BQU8sWUFBWSxDQUFDO2lCQUN2QjtnQkFFRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNOztzQkFDRyxVQUFVLEdBQUcsbUJBQUEsV0FBVyxFQUF3QjtnQkFDdEQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7Ozs7Ozs7O0lBN0NHLDhFQUF1Rjs7Ozs7Ozs7SUFFdkYsOEVBQXNFOztBQTZDMUUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFxQjs7Ozs7OztJQUNqRCxNQUFNLENBQUksSUFBUyxFQUFFLGVBQTBDOztZQUM5RCxDQUFDOztZQUNELEdBQUc7O2NBQ0QsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNOztjQUNqQixHQUFHLEdBQVEsRUFBRTtRQUNuQixJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2xILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRVMsYUFBYSxDQUFDLEdBQVcsRUFBRSxTQUFpQjtRQUNsRCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJpbmdMb2dpYywgSUZpbHRlcmluZ0V4cHJlc3Npb24gfSBmcm9tICcuL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuL2ZpbHRlcmluZy1leHByZXNzaW9ucy10cmVlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsdGVyaW5nU3RyYXRlZ3kge1xuICAgIGZpbHRlcihkYXRhOiBhbnlbXSwgZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTogYW55W107XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRmlsdGVyaW5nU3RyYXRlZ3kgaW1wbGVtZW50cyBJRmlsdGVyaW5nU3RyYXRlZ3kgIHtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZmlsdGVyKGRhdGE6IGFueVtdLCBleHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpOiBhbnlbXTtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRGaWVsZFZhbHVlKHJlYzogb2JqZWN0LCBmaWVsZE5hbWU6IHN0cmluZyk6IGFueTtcblxuICAgIHB1YmxpYyBmaW5kTWF0Y2hCeUV4cHJlc3Npb24ocmVjOiBvYmplY3QsIGV4cHI6IElGaWx0ZXJpbmdFeHByZXNzaW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbmQgPSBleHByLmNvbmRpdGlvbjtcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy5nZXRGaWVsZFZhbHVlKHJlYywgZXhwci5maWVsZE5hbWUpO1xuICAgICAgICByZXR1cm4gY29uZC5sb2dpYyh2YWwsIGV4cHIuc2VhcmNoVmFsLCBleHByLmlnbm9yZUNhc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYXRjaFJlY29yZChyZWM6IG9iamVjdCwgZXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfCBJRmlsdGVyaW5nRXhwcmVzc2lvbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZXhwcmVzc2lvbnMpIHtcbiAgICAgICAgICAgIGlmIChleHByZXNzaW9ucyBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25zVHJlZSA9IGV4cHJlc3Npb25zIGFzIElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSBleHByZXNzaW9uc1RyZWUub3BlcmF0b3IgYXMgRmlsdGVyaW5nTG9naWM7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoT3BlcmFuZCwgb3BlcmFuZDtcblxuICAgICAgICAgICAgICAgIGlmIChleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMgJiYgZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmFuZCA9IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoT3BlcmFuZCA9IHRoaXMubWF0Y2hSZWNvcmQocmVjLCBvcGVyYW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGF0IGxlYXN0IG9uZSBvcGVyYW5kIGRvZXMgbm90IG1hdGNoIGFuZCB0aGUgZmlsdGVyaW5nIGxvZ2ljIGlzIEFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaE9wZXJhbmQgJiYgb3BlcmF0b3IgPT09IEZpbHRlcmluZ0xvZ2ljLkFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9wZXJhbmQgbWF0Y2hlcyBhbmQgdGhlIGZpbHRlcmluZyBsb2dpYyBpcyBPclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoT3BlcmFuZCAmJiBvcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuT3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaE9wZXJhbmQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9ucyBhcyBJRmlsdGVyaW5nRXhwcmVzc2lvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kTWF0Y2hCeUV4cHJlc3Npb24ocmVjLCBleHByZXNzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlcmluZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzZUZpbHRlcmluZ1N0cmF0ZWd5IHtcbiAgICBwdWJsaWMgZmlsdGVyPFQ+KGRhdGE6IFRbXSwgZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTogVFtdIHtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCByZWM7XG4gICAgICAgIGNvbnN0IGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXM6IFRbXSA9IFtdO1xuICAgICAgICBpZiAoIWV4cHJlc3Npb25zVHJlZSB8fCAhZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzIHx8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGggPT09IDAgfHwgIWxlbikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZWMgPSBkYXRhW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hSZWNvcmQocmVjLCBleHByZXNzaW9uc1RyZWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocmVjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRGaWVsZFZhbHVlKHJlYzogb2JqZWN0LCBmaWVsZE5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiByZWNbZmllbGROYW1lXTtcbiAgICB9XG59XG4iXX0=