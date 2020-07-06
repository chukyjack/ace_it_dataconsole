/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilteringExpressionsTree = /** @class */ (function () {
    function FilteringExpressionsTree(operator, fieldName) {
        /**
         * Sets/gets the filtering operands.
         * ```typescript
         * const gridExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
         * const expression = [
         * {
         *   condition: IgxStringFilteringOperand.instance().condition('contains'),
         *   fieldName: 'Column Field',
         *   searchVal: 'Value',
         *   ignoreCase: false
         * }];
         * gridExpressionsTree.filteringOperands.push(expression);
         * this.grid.filteringExpressionsTree = gridExpressionsTree;
         * ```
         * ```typescript
         * let filteringOperands = gridExpressionsTree.filteringOperands;
         * ```
         * \@memberof FilteringExpressionsTree
         */
        this.filteringOperands = [];
        this.operator = operator;
        this.fieldName = fieldName;
    }
    /**
     * Returns the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpression = gridExpressionTree.find('Column Field');
     * ```
     * @memberof FilteringExpressionsTree
     */
    /**
     * Returns the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpression = gridExpressionTree.find('Column Field');
     * ```
     * \@memberof FilteringExpressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    FilteringExpressionsTree.prototype.find = /**
     * Returns the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpression = gridExpressionTree.find('Column Field');
     * ```
     * \@memberof FilteringExpressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        /** @type {?} */
        var index = this.findIndex(fieldName);
        if (index > -1) {
            return this.filteringOperands[index];
        }
        return null;
    };
    /**
     * Returns the index of the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpressionIndex = gridExpressionTree.findIndex('Column Field');
     * ```
     * @memberof FilteringExpressionsTree
     */
    /**
     * Returns the index of the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpressionIndex = gridExpressionTree.findIndex('Column Field');
     * ```
     * \@memberof FilteringExpressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    FilteringExpressionsTree.prototype.findIndex = /**
     * Returns the index of the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpressionIndex = gridExpressionTree.findIndex('Column Field');
     * ```
     * \@memberof FilteringExpressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        /** @type {?} */
        var expr;
        for (var i = 0; i < this.filteringOperands.length; i++) {
            expr = this.filteringOperands[i];
            if (expr instanceof FilteringExpressionsTree) {
                if (this.isFilteringExpressionsTreeForColumn(expr, fieldName)) {
                    return i;
                }
            }
            else {
                if (((/** @type {?} */ (expr))).fieldName === fieldName) {
                    return i;
                }
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} expressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    FilteringExpressionsTree.prototype.isFilteringExpressionsTreeForColumn = /**
     * @protected
     * @param {?} expressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    function (expressionsTree, fieldName) {
        if (expressionsTree.fieldName === fieldName) {
            return true;
        }
        /** @type {?} */
        var expr;
        for (var i = 0; i < expressionsTree.filteringOperands.length; i++) {
            expr = expressionsTree.filteringOperands[i];
            if ((expr instanceof FilteringExpressionsTree)) {
                return this.isFilteringExpressionsTreeForColumn(expr, fieldName);
            }
            else {
                return ((/** @type {?} */ (expr))).fieldName === fieldName;
            }
        }
        return false;
    };
    return FilteringExpressionsTree;
}());
export { FilteringExpressionsTree };
if (false) {
    /**
     * Sets/gets the filtering operands.
     * ```typescript
     * const gridExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
     * const expression = [
     * {
     *   condition: IgxStringFilteringOperand.instance().condition('contains'),
     *   fieldName: 'Column Field',
     *   searchVal: 'Value',
     *   ignoreCase: false
     * }];
     * gridExpressionsTree.filteringOperands.push(expression);
     * this.grid.filteringExpressionsTree = gridExpressionsTree;
     * ```
     * ```typescript
     * let filteringOperands = gridExpressionsTree.filteringOperands;
     * ```
     * \@memberof FilteringExpressionsTree
     * @type {?}
     */
    FilteringExpressionsTree.prototype.filteringOperands;
    /**
     * Sets/gets the operator.
     * ```typescript
     * gridExpressionsTree.operator = FilteringLogic.And;
     * ```
     * ```typescript
     * let operator = gridExpressionsTree.operator;
     * ```
     * \@memberof FilteringExpressionsTree
     * @type {?}
     */
    FilteringExpressionsTree.prototype.operator;
    /**
     * Sets/gets the field name of the column where the filtering expression is placed.
     * ```typescript
     *  gridExpressionTree.fieldName = 'Column Field';
     * ```
     * ```typescript
     * let columnField = expressionTree.fieldName;
     * ```
     * \@memberof FilteringExpressionsTree
     * @type {?}
     */
    FilteringExpressionsTree.prototype.fieldName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBV0E7SUErQ0ksa0NBQVksUUFBd0IsRUFBRSxTQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUExQnhELHNCQUFpQixHQUF5RCxFQUFFLENBQUM7UUEyQnpFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSSx1Q0FBSTs7Ozs7Ozs7O0lBQVgsVUFBWSxTQUFpQjs7WUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRXZDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7O0lBQ0ksNENBQVM7Ozs7Ozs7OztJQUFoQixVQUFpQixTQUFpQjs7WUFDMUIsSUFBSTtRQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLFlBQVksd0JBQXdCLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLG1DQUFtQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtvQkFDM0QsT0FBTyxDQUFDLENBQUM7aUJBQ1o7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUF3QixDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDeEQsT0FBTyxDQUFDLENBQUM7aUJBQ1o7YUFDSjtTQUNKO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFUyxzRUFBbUM7Ozs7OztJQUE3QyxVQUE4QyxlQUEwQyxFQUFFLFNBQWlCO1FBQ3ZHLElBQUksZUFBZSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDZjs7WUFFRyxJQUFJO1FBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0QsSUFBSSxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxZQUFZLHdCQUF3QixDQUFDLEVBQUU7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLG1DQUFtQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDSCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUF3QixDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQzthQUNqRTtTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQS9HRCxJQStHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUExRkcscURBQTZFOzs7Ozs7Ozs7Ozs7SUFZN0UsNENBQXlCOzs7Ozs7Ozs7Ozs7SUFZekIsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb24sIEZpbHRlcmluZ0xvZ2ljIH0gZnJvbSAnLi9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB7XG4gICAgZmlsdGVyaW5nT3BlcmFuZHM6IChJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb24pW107XG4gICAgb3BlcmF0b3I6IEZpbHRlcmluZ0xvZ2ljO1xuICAgIGZpZWxkTmFtZT86IHN0cmluZztcblxuICAgIGZpbmQoZmllbGROYW1lOiBzdHJpbmcpOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb247XG4gICAgZmluZEluZGV4KGZpZWxkTmFtZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIGltcGxlbWVudHMgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGZpbHRlcmluZyBvcGVyYW5kcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JpZEV4cHJlc3Npb25zVHJlZSA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kKTtcbiAgICAgKiBjb25zdCBleHByZXNzaW9uID0gW1xuICAgICAqIHtcbiAgICAgKiAgIGNvbmRpdGlvbjogSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbignY29udGFpbnMnKSxcbiAgICAgKiAgIGZpZWxkTmFtZTogJ0NvbHVtbiBGaWVsZCcsXG4gICAgICogICBzZWFyY2hWYWw6ICdWYWx1ZScsXG4gICAgICogICBpZ25vcmVDYXNlOiBmYWxzZVxuICAgICAqIH1dO1xuICAgICAqIGdyaWRFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaChleHByZXNzaW9uKTtcbiAgICAgKiB0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlID0gZ3JpZEV4cHJlc3Npb25zVHJlZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGZpbHRlcmluZ09wZXJhbmRzID0gZ3JpZEV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlXG4gICAgICovXG4gICAgZmlsdGVyaW5nT3BlcmFuZHM6IChJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb24pW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgb3BlcmF0b3IuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGdyaWRFeHByZXNzaW9uc1RyZWUub3BlcmF0b3IgPSBGaWx0ZXJpbmdMb2dpYy5BbmQ7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBvcGVyYXRvciA9IGdyaWRFeHByZXNzaW9uc1RyZWUub3BlcmF0b3I7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZVxuICAgICAqL1xuICAgIG9wZXJhdG9yOiBGaWx0ZXJpbmdMb2dpYztcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgZmllbGQgbmFtZSBvZiB0aGUgY29sdW1uIHdoZXJlIHRoZSBmaWx0ZXJpbmcgZXhwcmVzc2lvbiBpcyBwbGFjZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBncmlkRXhwcmVzc2lvblRyZWUuZmllbGROYW1lID0gJ0NvbHVtbiBGaWVsZCc7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5GaWVsZCA9IGV4cHJlc3Npb25UcmVlLmZpZWxkTmFtZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlXG4gICAgICovXG4gICAgZmllbGROYW1lPzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3I6IEZpbHRlcmluZ0xvZ2ljLCBmaWVsZE5hbWU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaWx0ZXJpbmcgZXhwcmVzc2lvbiBmb3IgYSBjb2x1bW4gd2l0aCB0aGUgcHJvdmlkZWQgZmllbGROYW1lLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyaW5nRXhwcmVzc2lvbiA9IGdyaWRFeHByZXNzaW9uVHJlZS5maW5kKCdDb2x1bW4gRmllbGQnKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlXG4gICAgICovXG4gICAgcHVibGljIGZpbmQoZmllbGROYW1lOiBzdHJpbmcpOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb24ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4KGZpZWxkTmFtZSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ09wZXJhbmRzW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaWx0ZXJpbmcgZXhwcmVzc2lvbiBmb3IgYSBjb2x1bW4gd2l0aCB0aGUgcHJvdmlkZWQgZmllbGROYW1lLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyaW5nRXhwcmVzc2lvbkluZGV4ID0gZ3JpZEV4cHJlc3Npb25UcmVlLmZpbmRJbmRleCgnQ29sdW1uIEZpZWxkJyk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kSW5kZXgoZmllbGROYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBsZXQgZXhwcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBleHByID0gdGhpcy5maWx0ZXJpbmdPcGVyYW5kc1tpXTtcbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWVGb3JDb2x1bW4oZXhwciwgZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoZXhwciBhcyBJRmlsdGVyaW5nRXhwcmVzc2lvbikuZmllbGROYW1lID09PSBmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZUZvckNvbHVtbihleHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIGZpZWxkTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChleHByZXNzaW9uc1RyZWUuZmllbGROYW1lID09PSBmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGV4cHI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBleHByID0gZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzW2ldO1xuICAgICAgICAgICAgaWYgKChleHByIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlRm9yQ29sdW1uKGV4cHIsIGZpZWxkTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZXhwciBhcyBJRmlsdGVyaW5nRXhwcmVzc2lvbikuZmllbGROYW1lID09PSBmaWVsZE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19