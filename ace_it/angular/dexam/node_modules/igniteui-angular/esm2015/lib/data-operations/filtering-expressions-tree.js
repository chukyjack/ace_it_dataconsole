/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FilteringExpressionsTree {
    /**
     * @param {?} operator
     * @param {?=} fieldName
     */
    constructor(operator, fieldName) {
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
     * \@memberof FilteringExpressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    find(fieldName) {
        /** @type {?} */
        const index = this.findIndex(fieldName);
        if (index > -1) {
            return this.filteringOperands[index];
        }
        return null;
    }
    /**
     * Returns the index of the filtering expression for a column with the provided fieldName.
     * ```typescript
     * let filteringExpressionIndex = gridExpressionTree.findIndex('Column Field');
     * ```
     * \@memberof FilteringExpressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    findIndex(fieldName) {
        /** @type {?} */
        let expr;
        for (let i = 0; i < this.filteringOperands.length; i++) {
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
    }
    /**
     * @protected
     * @param {?} expressionsTree
     * @param {?} fieldName
     * @return {?}
     */
    isFilteringExpressionsTreeForColumn(expressionsTree, fieldName) {
        if (expressionsTree.fieldName === fieldName) {
            return true;
        }
        /** @type {?} */
        let expr;
        for (let i = 0; i < expressionsTree.filteringOperands.length; i++) {
            expr = expressionsTree.filteringOperands[i];
            if ((expr instanceof FilteringExpressionsTree)) {
                return this.isFilteringExpressionsTreeForColumn(expr, fieldName);
            }
            else {
                return ((/** @type {?} */ (expr))).fieldName === fieldName;
            }
        }
        return false;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBV0EsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUErQ2pDLFlBQVksUUFBd0IsRUFBRSxTQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUExQnhELHNCQUFpQixHQUF5RCxFQUFFLENBQUM7UUEyQnpFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7Ozs7SUFTTSxJQUFJLENBQUMsU0FBaUI7O2NBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUV2QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7OztJQVNNLFNBQVMsQ0FBQyxTQUFpQjs7WUFDMUIsSUFBSTtRQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLFlBQVksd0JBQXdCLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLG1DQUFtQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtvQkFDM0QsT0FBTyxDQUFDLENBQUM7aUJBQ1o7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUF3QixDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDeEQsT0FBTyxDQUFDLENBQUM7aUJBQ1o7YUFDSjtTQUNKO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFUyxtQ0FBbUMsQ0FBQyxlQUEwQyxFQUFFLFNBQWlCO1FBQ3ZHLElBQUksZUFBZSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDZjs7WUFFRyxJQUFJO1FBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0QsSUFBSSxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxZQUFZLHdCQUF3QixDQUFDLEVBQUU7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLG1DQUFtQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDSCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUF3QixDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQzthQUNqRTtTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMUZHLHFEQUE2RTs7Ozs7Ozs7Ozs7O0lBWTdFLDRDQUF5Qjs7Ozs7Ozs7Ozs7O0lBWXpCLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGaWx0ZXJpbmdFeHByZXNzaW9uLCBGaWx0ZXJpbmdMb2dpYyB9IGZyb20gJy4vZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUge1xuICAgIGZpbHRlcmluZ09wZXJhbmRzOiAoSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IElGaWx0ZXJpbmdFeHByZXNzaW9uKVtdO1xuICAgIG9wZXJhdG9yOiBGaWx0ZXJpbmdMb2dpYztcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmc7XG5cbiAgICBmaW5kKGZpZWxkTmFtZTogc3RyaW5nKTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IElGaWx0ZXJpbmdFeHByZXNzaW9uO1xuICAgIGZpbmRJbmRleChmaWVsZE5hbWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSBpbXBsZW1lbnRzIElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUge1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBmaWx0ZXJpbmcgb3BlcmFuZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyaWRFeHByZXNzaW9uc1RyZWUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKEZpbHRlcmluZ0xvZ2ljLkFuZCk7XG4gICAgICogY29uc3QgZXhwcmVzc2lvbiA9IFtcbiAgICAgKiB7XG4gICAgICogICBjb25kaXRpb246IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oJ2NvbnRhaW5zJyksXG4gICAgICogICBmaWVsZE5hbWU6ICdDb2x1bW4gRmllbGQnLFxuICAgICAqICAgc2VhcmNoVmFsOiAnVmFsdWUnLFxuICAgICAqICAgaWdub3JlQ2FzZTogZmFsc2VcbiAgICAgKiB9XTtcbiAgICAgKiBncmlkRXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLnB1c2goZXhwcmVzc2lvbik7XG4gICAgICogdGhpcy5ncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSA9IGdyaWRFeHByZXNzaW9uc1RyZWU7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWx0ZXJpbmdPcGVyYW5kcyA9IGdyaWRFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZVxuICAgICAqL1xuICAgIGZpbHRlcmluZ09wZXJhbmRzOiAoSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IElGaWx0ZXJpbmdFeHByZXNzaW9uKVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIG9wZXJhdG9yLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBncmlkRXhwcmVzc2lvbnNUcmVlLm9wZXJhdG9yID0gRmlsdGVyaW5nTG9naWMuQW5kO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgb3BlcmF0b3IgPSBncmlkRXhwcmVzc2lvbnNUcmVlLm9wZXJhdG9yO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWVcbiAgICAgKi9cbiAgICBvcGVyYXRvcjogRmlsdGVyaW5nTG9naWM7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGZpZWxkIG5hbWUgb2YgdGhlIGNvbHVtbiB3aGVyZSB0aGUgZmlsdGVyaW5nIGV4cHJlc3Npb24gaXMgcGxhY2VkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgZ3JpZEV4cHJlc3Npb25UcmVlLmZpZWxkTmFtZSA9ICdDb2x1bW4gRmllbGQnO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uRmllbGQgPSBleHByZXNzaW9uVHJlZS5maWVsZE5hbWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZVxuICAgICAqL1xuICAgIGZpZWxkTmFtZT86IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBGaWx0ZXJpbmdMb2dpYywgZmllbGROYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlsdGVyaW5nIGV4cHJlc3Npb24gZm9yIGEgY29sdW1uIHdpdGggdGhlIHByb3ZpZGVkIGZpZWxkTmFtZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGZpbHRlcmluZ0V4cHJlc3Npb24gPSBncmlkRXhwcmVzc2lvblRyZWUuZmluZCgnQ29sdW1uIEZpZWxkJyk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kKGZpZWxkTmFtZTogc3RyaW5nKTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IElGaWx0ZXJpbmdFeHByZXNzaW9uIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleChmaWVsZE5hbWUpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJpbmdPcGVyYW5kc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlsdGVyaW5nIGV4cHJlc3Npb24gZm9yIGEgY29sdW1uIHdpdGggdGhlIHByb3ZpZGVkIGZpZWxkTmFtZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGZpbHRlcmluZ0V4cHJlc3Npb25JbmRleCA9IGdyaWRFeHByZXNzaW9uVHJlZS5maW5kSW5kZXgoJ0NvbHVtbiBGaWVsZCcpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZmluZEluZGV4KGZpZWxkTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGV4cHI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZXhwciA9IHRoaXMuZmlsdGVyaW5nT3BlcmFuZHNbaV07XG4gICAgICAgICAgICBpZiAoZXhwciBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlRm9yQ29sdW1uKGV4cHIsIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKGV4cHIgYXMgSUZpbHRlcmluZ0V4cHJlc3Npb24pLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWVGb3JDb2x1bW4oZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLCBmaWVsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZXhwcmVzc2lvbnNUcmVlLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBleHByO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZXhwciA9IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kc1tpXTtcbiAgICAgICAgICAgIGlmICgoZXhwciBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZUZvckNvbHVtbihleHByLCBmaWVsZE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGV4cHIgYXMgSUZpbHRlcmluZ0V4cHJlc3Npb24pLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==