/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @abstract
 */
BaseFilteringStrategy = /** @class */ (function () {
    function BaseFilteringStrategy() {
    }
    /**
     * @param {?} rec
     * @param {?} expr
     * @return {?}
     */
    BaseFilteringStrategy.prototype.findMatchByExpression = /**
     * @param {?} rec
     * @param {?} expr
     * @return {?}
     */
    function (rec, expr) {
        /** @type {?} */
        var cond = expr.condition;
        /** @type {?} */
        var val = this.getFieldValue(rec, expr.fieldName);
        return cond.logic(val, expr.searchVal, expr.ignoreCase);
    };
    /**
     * @param {?} rec
     * @param {?} expressions
     * @return {?}
     */
    BaseFilteringStrategy.prototype.matchRecord = /**
     * @param {?} rec
     * @param {?} expressions
     * @return {?}
     */
    function (rec, expressions) {
        if (expressions) {
            if (expressions instanceof FilteringExpressionsTree) {
                /** @type {?} */
                var expressionsTree = (/** @type {?} */ (expressions));
                /** @type {?} */
                var operator = (/** @type {?} */ (expressionsTree.operator));
                /** @type {?} */
                var matchOperand = void 0;
                /** @type {?} */
                var operand = void 0;
                if (expressionsTree.filteringOperands && expressionsTree.filteringOperands.length) {
                    for (var i = 0; i < expressionsTree.filteringOperands.length; i++) {
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
                var expression = (/** @type {?} */ (expressions));
                return this.findMatchByExpression(rec, expression);
            }
        }
        return true;
    };
    return BaseFilteringStrategy;
}());
/**
 * @abstract
 */
export { BaseFilteringStrategy };
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
var FilteringStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(FilteringStrategy, _super);
    function FilteringStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @template T
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    FilteringStrategy.prototype.filter = /**
     * @template T
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    function (data, expressionsTree) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var rec;
        /** @type {?} */
        var len = data.length;
        /** @type {?} */
        var res = [];
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
    };
    /**
     * @protected
     * @param {?} rec
     * @param {?} fieldName
     * @return {?}
     */
    FilteringStrategy.prototype.getFieldValue = /**
     * @protected
     * @param {?} rec
     * @param {?} fieldName
     * @return {?}
     */
    function (rec, fieldName) {
        return rec[fieldName];
    };
    return FilteringStrategy;
}(BaseFilteringStrategy));
export { FilteringStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQTZCLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFbkcsd0NBRUM7Ozs7Ozs7SUFERywyRUFBdUU7Ozs7O0FBRzNFOzs7O0lBQUE7SUE4Q0EsQ0FBQzs7Ozs7O0lBekNVLHFEQUFxQjs7Ozs7SUFBNUIsVUFBNkIsR0FBVyxFQUFFLElBQTBCOztZQUMxRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1lBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBRU0sMkNBQVc7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxXQUE2RDtRQUN6RixJQUFJLFdBQVcsRUFBRTtZQUNiLElBQUksV0FBVyxZQUFZLHdCQUF3QixFQUFFOztvQkFDM0MsZUFBZSxHQUFHLG1CQUFBLFdBQVcsRUFBNkI7O29CQUMxRCxRQUFRLEdBQUcsbUJBQUEsZUFBZSxDQUFDLFFBQVEsRUFBa0I7O29CQUN2RCxZQUFZLFNBQUE7O29CQUFFLE9BQU8sU0FBQTtnQkFFekIsSUFBSSxlQUFlLENBQUMsaUJBQWlCLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtvQkFDL0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQy9ELE9BQU8sR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9DLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFFOUMscUZBQXFGO3dCQUNyRixJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsR0FBRyxFQUFFOzRCQUNsRCxPQUFPLEtBQUssQ0FBQzt5QkFDaEI7d0JBRUQsNEVBQTRFO3dCQUM1RSxJQUFJLFlBQVksSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLEVBQUUsRUFBRTs0QkFDaEQsT0FBTyxJQUFJLENBQUM7eUJBQ2Y7cUJBQ0o7b0JBRUQsT0FBTyxZQUFZLENBQUM7aUJBQ3ZCO2dCQUVELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07O29CQUNHLFVBQVUsR0FBRyxtQkFBQSxXQUFXLEVBQXdCO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdEQ7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7Ozs7Ozs7Ozs7OztJQTdDRyw4RUFBdUY7Ozs7Ozs7O0lBRXZGLDhFQUFzRTs7QUE2QzFFO0lBQXVDLDZDQUFxQjtJQUE1RDs7SUFxQkEsQ0FBQzs7Ozs7OztJQXBCVSxrQ0FBTTs7Ozs7O0lBQWIsVUFBaUIsSUFBUyxFQUFFLGVBQTBDOztZQUM5RCxDQUFDOztZQUNELEdBQUc7O1lBQ0QsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNOztZQUNqQixHQUFHLEdBQVEsRUFBRTtRQUNuQixJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2xILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRVMseUNBQWE7Ozs7OztJQUF2QixVQUF3QixHQUFXLEVBQUUsU0FBaUI7UUFDbEQsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUF1QyxxQkFBcUIsR0FxQjNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVyaW5nTG9naWMsIElGaWx0ZXJpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLCBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIH0gZnJvbSAnLi9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlcmluZ1N0cmF0ZWd5IHtcbiAgICBmaWx0ZXIoZGF0YTogYW55W10sIGV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSk6IGFueVtdO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZpbHRlcmluZ1N0cmF0ZWd5IGltcGxlbWVudHMgSUZpbHRlcmluZ1N0cmF0ZWd5ICB7XG4gICAgcHVibGljIGFic3RyYWN0IGZpbHRlcihkYXRhOiBhbnlbXSwgZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTogYW55W107XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0RmllbGRWYWx1ZShyZWM6IG9iamVjdCwgZmllbGROYW1lOiBzdHJpbmcpOiBhbnk7XG5cbiAgICBwdWJsaWMgZmluZE1hdGNoQnlFeHByZXNzaW9uKHJlYzogb2JqZWN0LCBleHByOiBJRmlsdGVyaW5nRXhwcmVzc2lvbik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb25kID0gZXhwci5jb25kaXRpb247XG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0RmllbGRWYWx1ZShyZWMsIGV4cHIuZmllbGROYW1lKTtcbiAgICAgICAgcmV0dXJuIGNvbmQubG9naWModmFsLCBleHByLnNlYXJjaFZhbCwgZXhwci5pZ25vcmVDYXNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWF0Y2hSZWNvcmQocmVjOiBvYmplY3QsIGV4cHJlc3Npb25zOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb24pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGV4cHJlc3Npb25zKSB7XG4gICAgICAgICAgICBpZiAoZXhwcmVzc2lvbnMgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBleHByZXNzaW9ucyBhcyBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gZXhwcmVzc2lvbnNUcmVlLm9wZXJhdG9yIGFzIEZpbHRlcmluZ0xvZ2ljO1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaE9wZXJhbmQsIG9wZXJhbmQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzICYmIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhbmQgPSBleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaE9wZXJhbmQgPSB0aGlzLm1hdGNoUmVjb3JkKHJlYywgb3BlcmFuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBhdCBsZWFzdCBvbmUgb3BlcmFuZCBkb2VzIG5vdCBtYXRjaCBhbmQgdGhlIGZpbHRlcmluZyBsb2dpYyBpcyBBbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hPcGVyYW5kICYmIG9wZXJhdG9yID09PSBGaWx0ZXJpbmdMb2dpYy5BbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvcGVyYW5kIG1hdGNoZXMgYW5kIHRoZSBmaWx0ZXJpbmcgbG9naWMgaXMgT3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaE9wZXJhbmQgJiYgb3BlcmF0b3IgPT09IEZpbHRlcmluZ0xvZ2ljLk9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hPcGVyYW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnMgYXMgSUZpbHRlcmluZ0V4cHJlc3Npb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZE1hdGNoQnlFeHByZXNzaW9uKHJlYywgZXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJpbmdTdHJhdGVneSBleHRlbmRzIEJhc2VGaWx0ZXJpbmdTdHJhdGVneSB7XG4gICAgcHVibGljIGZpbHRlcjxUPihkYXRhOiBUW10sIGV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSk6IFRbXSB7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgcmVjO1xuICAgICAgICBjb25zdCBsZW4gPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzOiBUW10gPSBbXTtcbiAgICAgICAgaWYgKCFleHByZXNzaW9uc1RyZWUgfHwgIWV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcyB8fCBleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoID09PSAwIHx8ICFsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmVjID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoUmVjb3JkKHJlYywgZXhwcmVzc2lvbnNUcmVlKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHJlYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RmllbGRWYWx1ZShyZWM6IG9iamVjdCwgZmllbGROYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gcmVjW2ZpZWxkTmFtZV07XG4gICAgfVxufVxuIl19