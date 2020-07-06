/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { IgxIconService } from '../../icon/icon.service';
import { FilteringExpressionsTree } from '../../data-operations/filtering-expressions-tree';
import icons from './svgIcons';
import { FilteringLogic } from '../../data-operations/filtering-expression.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IgxDatePipeComponent } from '../grid.common';
import { GridBaseAPIService } from '../api.service';
/** @type {?} */
const FILTERING_ICONS_FONT_SET = 'filtering-icons';
/**
 * @hidden
 */
export class ExpressionUI {
    constructor() {
        this.isSelected = false;
        this.isVisible = true;
    }
}
if (false) {
    /** @type {?} */
    ExpressionUI.prototype.expression;
    /** @type {?} */
    ExpressionUI.prototype.beforeOperator;
    /** @type {?} */
    ExpressionUI.prototype.afterOperator;
    /** @type {?} */
    ExpressionUI.prototype.isSelected;
    /** @type {?} */
    ExpressionUI.prototype.isVisible;
}
/**
 * @hidden
 */
export class IgxFilteringService {
    /**
     * @param {?} gridAPI
     * @param {?} iconService
     */
    constructor(gridAPI, iconService) {
        this.gridAPI = gridAPI;
        this.iconService = iconService;
        this.columnsWithComplexFilter = new Set();
        this.areEventsSubscribed = false;
        this.destroy$ = new Subject();
        this.isFiltering = false;
        this.columnToExpressionsMap = new Map();
        this.columnStartIndex = -1;
        this.isFilterRowVisible = false;
        this.filteredColumn = null;
        this.selectedExpression = null;
        this.columnToFocus = null;
        this.shouldFocusNext = false;
        this.columnToMoreIconHidden = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    get displayContainerWidth() {
        return parseInt(this.grid.parentVirtDir.dc.instance._viewContainer.element.nativeElement.offsetWidth, 10);
    }
    /**
     * @return {?}
     */
    get displayContainerScrollLeft() {
        return parseInt(this.grid.parentVirtDir.getHorizontalScroll().scrollLeft, 10);
    }
    /**
     * @return {?}
     */
    get areAllColumnsInView() {
        return parseInt(this.grid.parentVirtDir.dc.instance._viewContainer.element.nativeElement.offsetWidth, 10) === 0;
    }
    /**
     * @return {?}
     */
    get unpinnedFilterableColumns() {
        return this.grid.unpinnedColumns.filter(col => !col.columnGroup && col.filterable);
    }
    /**
     * @return {?}
     */
    get unpinnedColumns() {
        return this.grid.unpinnedColumns.filter(col => !col.columnGroup);
    }
    /**
     * @return {?}
     */
    get datePipe() {
        if (!this._datePipe) {
            this._datePipe = new IgxDatePipeComponent(this.grid.locale);
        }
        return this._datePipe;
    }
    /**
     * Subscribe to grid's events.
     * @return {?}
     */
    subscribeToEvents() {
        if (!this.areEventsSubscribed) {
            this.areEventsSubscribed = true;
            this.grid.onColumnResized.pipe(takeUntil(this.destroy$)).subscribe((eventArgs) => {
                this.updateFilteringCell(eventArgs.column);
            });
            this.grid.parentVirtDir.onChunkLoad.pipe(takeUntil(this.destroy$)).subscribe((eventArgs) => {
                if (eventArgs.startIndex !== this.columnStartIndex) {
                    this.columnStartIndex = eventArgs.startIndex;
                    this.grid.filterCellList.forEach((filterCell) => {
                        filterCell.updateFilterCellArea();
                    });
                }
                if (this.columnToFocus) {
                    this.focusFilterCellChip(this.columnToFocus, false);
                    this.columnToFocus = null;
                }
            });
            this.grid.onColumnMovingEnd.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.grid.filterCellList.forEach((filterCell) => {
                    filterCell.updateFilterCellArea();
                });
            });
        }
    }
    /**
     * Internal method to create expressionsTree and filter grid used in both filter modes.
     * @param {?} field
     * @param {?=} expressions
     * @return {?}
     */
    filterInternal(field, expressions = null) {
        this.isFiltering = true;
        /** @type {?} */
        let expressionsTree;
        if (expressions instanceof FilteringExpressionsTree) {
            expressionsTree = expressions;
        }
        else {
            expressionsTree = this.createSimpleFilteringTree(field, expressions);
        }
        if (expressionsTree.filteringOperands.length === 0) {
            this.clearFilter(field);
        }
        else {
            this.filter(field, null, expressionsTree);
        }
        this.isFiltering = false;
    }
    /**
     * Execute filtering on the grid.
     * @param {?} field
     * @param {?} value
     * @param {?=} conditionOrExpressionTree
     * @param {?=} ignoreCase
     * @return {?}
     */
    filter(field, value, conditionOrExpressionTree, ignoreCase) {
        /** @type {?} */
        const col = this.gridAPI.get_column_by_name(field);
        /** @type {?} */
        const filteringIgnoreCase = ignoreCase || (col ? col.filteringIgnoreCase : false);
        if (conditionOrExpressionTree) {
            this.gridAPI.filter(field, value, conditionOrExpressionTree, filteringIgnoreCase);
        }
        else {
            /** @type {?} */
            const expressionsTreeForColumn = this.grid.filteringExpressionsTree.find(field);
            if (!expressionsTreeForColumn) {
                throw new Error('Invalid condition or Expression Tree!');
            }
            else if (expressionsTreeForColumn instanceof FilteringExpressionsTree) {
                this.gridAPI.filter(field, value, expressionsTreeForColumn, filteringIgnoreCase);
            }
            else {
                /** @type {?} */
                const expressionForColumn = (/** @type {?} */ (expressionsTreeForColumn));
                this.gridAPI.filter(field, value, expressionForColumn.condition, filteringIgnoreCase);
            }
        }
        // Wait for the change detection to update filtered data through the pipes and then emit the event.
        requestAnimationFrame(() => this.grid.onFilteringDone.emit(col.filteringExpressionsTree));
    }
    /**
     * Clear the filter of a given column.
     * @param {?} field
     * @return {?}
     */
    clearFilter(field) {
        if (field) {
            /** @type {?} */
            const column = this.gridAPI.get_column_by_name(field);
            if (!column) {
                return;
            }
        }
        this.isFiltering = true;
        this.gridAPI.clear_filter(field);
        // Wait for the change detection to update filtered data through the pipes and then emit the event.
        requestAnimationFrame(() => this.grid.onFilteringDone.emit(null));
        if (field) {
            /** @type {?} */
            const expressions = this.getExpressions(field);
            expressions.length = 0;
        }
        this.isFiltering = false;
    }
    /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     * @param {?} value
     * @param {?} condition
     * @param {?=} ignoreCase
     * @return {?}
     */
    filterGlobal(value, condition, ignoreCase) {
        this.gridAPI.filter_global(value, condition, ignoreCase);
        // Wait for the change detection to update filtered data through the pipes and then emit the event.
        requestAnimationFrame(() => this.grid.onFilteringDone.emit(this.grid.filteringExpressionsTree));
    }
    /**
     * Register filtering SVG icons in the icon service.
     * @return {?}
     */
    registerSVGIcons() {
        for (const icon of icons) {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        }
    }
    /**
     * Returns the ExpressionUI array for a given column.
     * @param {?} columnId
     * @return {?}
     */
    getExpressions(columnId) {
        if (!this.columnToExpressionsMap.has(columnId)) {
            /** @type {?} */
            const column = this.grid.columns.find((col) => col.field === columnId);
            /** @type {?} */
            const expressionUIs = new Array();
            this.generateExpressionsList(column.filteringExpressionsTree, this.grid.filteringExpressionsTree.operator, expressionUIs);
            this.columnToExpressionsMap.set(columnId, expressionUIs);
            return expressionUIs;
        }
        return this.columnToExpressionsMap.get(columnId);
    }
    /**
     * Recreates all ExpressionUIs for all columns. Executed after filtering to refresh the cache.
     * @return {?}
     */
    refreshExpressions() {
        if (!this.isFiltering) {
            this.columnsWithComplexFilter.clear();
            this.columnToExpressionsMap.forEach((value, key) => {
                /** @type {?} */
                const column = this.grid.columns.find((col) => col.field === key);
                if (column) {
                    value.length = 0;
                    this.generateExpressionsList(column.filteringExpressionsTree, this.grid.filteringExpressionsTree.operator, value);
                    /** @type {?} */
                    const isComplex = this.isFilteringTreeComplex(column.filteringExpressionsTree);
                    if (isComplex) {
                        this.columnsWithComplexFilter.add(key);
                    }
                    this.updateFilteringCell(column);
                }
                else {
                    this.columnToExpressionsMap.delete(key);
                }
            });
        }
    }
    /**
     * Remove an ExpressionUI for a given column.
     * @param {?} columnId
     * @param {?} indexToRemove
     * @return {?}
     */
    removeExpression(columnId, indexToRemove) {
        /** @type {?} */
        const expressionsList = this.getExpressions(columnId);
        if (indexToRemove === 0 && expressionsList.length > 1) {
            expressionsList[1].beforeOperator = null;
        }
        else if (indexToRemove === expressionsList.length - 1) {
            expressionsList[indexToRemove - 1].afterOperator = null;
        }
        else {
            expressionsList[indexToRemove - 1].afterOperator = expressionsList[indexToRemove + 1].beforeOperator;
            expressionsList[0].beforeOperator = null;
            expressionsList[expressionsList.length - 1].afterOperator = null;
        }
        expressionsList.splice(indexToRemove, 1);
    }
    /**
     * Generate filtering tree for a given column from existing ExpressionUIs.
     * @param {?} columnId
     * @param {?=} expressionUIList
     * @return {?}
     */
    createSimpleFilteringTree(columnId, expressionUIList = null) {
        /** @type {?} */
        const expressionsList = expressionUIList ? expressionUIList : this.getExpressions(columnId);
        /** @type {?} */
        const expressionsTree = new FilteringExpressionsTree(FilteringLogic.Or, columnId);
        /** @type {?} */
        let currAndBranch;
        /** @type {?} */
        let currExpressionUI;
        for (let i = 0; i < expressionsList.length; i++) {
            currExpressionUI = expressionsList[i];
            if (!currExpressionUI.expression.condition.isUnary && currExpressionUI.expression.searchVal === null) {
                if (currExpressionUI.afterOperator === FilteringLogic.And && !currAndBranch) {
                    currAndBranch = new FilteringExpressionsTree(FilteringLogic.And, columnId);
                    expressionsTree.filteringOperands.push(currAndBranch);
                }
                continue;
            }
            if ((currExpressionUI.beforeOperator === undefined || currExpressionUI.beforeOperator === null ||
                currExpressionUI.beforeOperator === FilteringLogic.Or) &&
                currExpressionUI.afterOperator === FilteringLogic.And) {
                currAndBranch = new FilteringExpressionsTree(FilteringLogic.And, columnId);
                expressionsTree.filteringOperands.push(currAndBranch);
                currAndBranch.filteringOperands.push(currExpressionUI.expression);
            }
            else if (currExpressionUI.beforeOperator === FilteringLogic.And) {
                currAndBranch.filteringOperands.push(currExpressionUI.expression);
            }
            else {
                expressionsTree.filteringOperands.push(currExpressionUI.expression);
                currAndBranch = null;
            }
        }
        return expressionsTree;
    }
    /**
     * Returns whether a complex filter is applied to a given column.
     * @param {?} columnId
     * @return {?}
     */
    isFilterComplex(columnId) {
        if (this.columnsWithComplexFilter.has(columnId)) {
            return true;
        }
        /** @type {?} */
        const column = this.grid.columns.find((col) => col.field === columnId);
        /** @type {?} */
        const isComplex = this.isFilteringTreeComplex(column.filteringExpressionsTree);
        if (isComplex) {
            this.columnsWithComplexFilter.add(columnId);
        }
        return isComplex;
    }
    /**
     * Returns the string representation of the FilteringLogic operator.
     * @param {?} operator
     * @return {?}
     */
    getOperatorAsString(operator) {
        if (operator === 0) {
            return this.grid.resourceStrings.igx_grid_filter_operator_and;
        }
        else {
            return this.grid.resourceStrings.igx_grid_filter_operator_or;
        }
    }
    /**
     * Generate the label of a chip from a given filtering expression.
     * @param {?} expression
     * @return {?}
     */
    getChipLabel(expression) {
        if (expression.condition.isUnary) {
            return this.grid.resourceStrings[`igx_grid_filter_${expression.condition.name}`] || expression.condition.name;
        }
        else if (expression.searchVal instanceof Date) {
            return this.datePipe.transform(expression.searchVal, this.grid.locale);
        }
        else {
            return expression.searchVal;
        }
    }
    /**
     * Updates the content of a filterCell.
     * @param {?} column
     * @return {?}
     */
    updateFilteringCell(column) {
        /** @type {?} */
        const filterCell = column.filterCell;
        if (filterCell) {
            filterCell.updateFilterCellArea();
        }
    }
    /**
     * Focus a chip in a filterCell.
     * @param {?} column
     * @param {?} focusFirst
     * @return {?}
     */
    focusFilterCellChip(column, focusFirst) {
        /** @type {?} */
        const filterCell = column.filterCell;
        if (filterCell) {
            filterCell.focusChip(focusFirst);
        }
    }
    /**
     * Focus the close button in the filtering row.
     * @return {?}
     */
    focusFilterRowCloseButton() {
        this.grid.filteringRow.closeButton.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    get filteredData() {
        return this.grid.filteredData;
    }
    /**
     * Scrolls to a filterCell.
     * @param {?} column
     * @param {?} shouldFocusNext
     * @return {?}
     */
    scrollToFilterCell(column, shouldFocusNext) {
        this.grid.nativeElement.focus({ preventScroll: true });
        this.columnToFocus = column;
        this.shouldFocusNext = shouldFocusNext;
        /** @type {?} */
        let currentColumnRight = 0;
        /** @type {?} */
        let currentColumnLeft = 0;
        for (let index = 0; index < this.unpinnedColumns.length; index++) {
            currentColumnRight += parseInt(this.unpinnedColumns[index].width, 10);
            if (this.unpinnedColumns[index] === column) {
                currentColumnLeft = currentColumnRight - parseInt(this.unpinnedColumns[index].width, 10);
                break;
            }
        }
        /** @type {?} */
        const forOfDir = this.grid.headerContainer;
        /** @type {?} */
        const width = this.displayContainerWidth + this.displayContainerScrollLeft;
        if (shouldFocusNext) {
            forOfDir.getHorizontalScroll().scrollLeft += currentColumnRight - width;
        }
        else {
            forOfDir.getHorizontalScroll().scrollLeft = currentColumnLeft;
        }
    }
    /**
     * @private
     * @param {?} expressions
     * @return {?}
     */
    isFilteringTreeComplex(expressions) {
        if (!expressions) {
            return false;
        }
        if (expressions instanceof FilteringExpressionsTree) {
            /** @type {?} */
            const expressionsTree = (/** @type {?} */ (expressions));
            if (expressionsTree.operator === FilteringLogic.Or) {
                /** @type {?} */
                const andOperatorsCount = this.getChildAndOperatorsCount(expressionsTree);
                // having more that 'And' and operator in the sub-tree means that the filter could not be represented without parentheses.
                return andOperatorsCount > 1;
            }
            /** @type {?} */
            let isComplex = false;
            for (let i = 0; i < expressionsTree.filteringOperands.length; i++) {
                isComplex = isComplex || this.isFilteringTreeComplex(expressionsTree.filteringOperands[i]);
            }
            return isComplex;
        }
        return false;
    }
    /**
     * @private
     * @param {?} expressions
     * @return {?}
     */
    getChildAndOperatorsCount(expressions) {
        /** @type {?} */
        let count = 0;
        /** @type {?} */
        let operand;
        for (let i = 0; i < expressions.filteringOperands.length; i++) {
            operand = expressions[i];
            if (operand instanceof FilteringExpressionsTree) {
                if (operand.operator === FilteringLogic.And) {
                    count++;
                }
                count = count + this.getChildAndOperatorsCount(operand);
            }
        }
        return count;
    }
    /**
     * @param {?} expressions
     * @param {?} operator
     * @param {?} expressionsUIs
     * @return {?}
     */
    generateExpressionsList(expressions, operator, expressionsUIs) {
        this.generateExpressionsListRecursive(expressions, operator, expressionsUIs);
        // The beforeOperator of the first expression and the afterOperator of the last expression should be null
        if (expressionsUIs.length) {
            expressionsUIs[expressionsUIs.length - 1].afterOperator = null;
        }
    }
    /**
     * @private
     * @param {?} expressions
     * @param {?} operator
     * @param {?} expressionsUIs
     * @return {?}
     */
    generateExpressionsListRecursive(expressions, operator, expressionsUIs) {
        if (!expressions) {
            return;
        }
        if (expressions instanceof FilteringExpressionsTree) {
            /** @type {?} */
            const expressionsTree = (/** @type {?} */ (expressions));
            for (let i = 0; i < expressionsTree.filteringOperands.length; i++) {
                this.generateExpressionsListRecursive(expressionsTree.filteringOperands[i], expressionsTree.operator, expressionsUIs);
            }
            if (expressionsUIs.length) {
                expressionsUIs[expressionsUIs.length - 1].afterOperator = operator;
            }
        }
        else {
            /** @type {?} */
            const exprUI = new ExpressionUI();
            exprUI.expression = (/** @type {?} */ (expressions));
            exprUI.afterOperator = operator;
            /** @type {?} */
            const prevExprUI = expressionsUIs[expressionsUIs.length - 1];
            if (prevExprUI) {
                exprUI.beforeOperator = prevExprUI.afterOperator;
            }
            expressionsUIs.push(exprUI);
        }
    }
    /**
     * @return {?}
     */
    isFilteringExpressionsTreeEmpty() {
        /** @type {?} */
        const expressionTree = this.grid.filteringExpressionsTree;
        if (!expressionTree.filteringOperands || !expressionTree.filteringOperands.length) {
            return true;
        }
        /** @type {?} */
        let expr;
        for (let i = 0; i < expressionTree.filteringOperands.length; i++) {
            expr = expressionTree.filteringOperands[i];
            if ((expr instanceof FilteringExpressionsTree)) {
                /** @type {?} */
                const exprTree = (/** @type {?} */ (expr));
                if (exprTree.filteringOperands && exprTree.filteringOperands.length) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
}
IgxFilteringService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IgxFilteringService.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxIconService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.columnsWithComplexFilter;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.areEventsSubscribed;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.isFiltering;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.columnToExpressionsMap;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype._datePipe;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.columnStartIndex;
    /** @type {?} */
    IgxFilteringService.prototype.gridId;
    /** @type {?} */
    IgxFilteringService.prototype.isFilterRowVisible;
    /** @type {?} */
    IgxFilteringService.prototype.filteredColumn;
    /** @type {?} */
    IgxFilteringService.prototype.selectedExpression;
    /** @type {?} */
    IgxFilteringService.prototype.columnToFocus;
    /** @type {?} */
    IgxFilteringService.prototype.shouldFocusNext;
    /** @type {?} */
    IgxFilteringService.prototype.columnToMoreIconHidden;
    /** @type {?} */
    IgxFilteringService.prototype.grid;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.gridAPI;
    /**
     * @type {?}
     * @private
     */
    IgxFilteringService.prototype.iconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1maWx0ZXJpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBNkIsTUFBTSxrREFBa0QsQ0FBQztBQUV2SCxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUF3QixjQUFjLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFOUMsd0JBQXdCLEdBQUcsaUJBQWlCOzs7O0FBS2xELE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBSVcsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Q0FBQTs7O0lBTEcsa0NBQXdDOztJQUN4QyxzQ0FBc0M7O0lBQ3RDLHFDQUFxQzs7SUFDckMsa0NBQTBCOztJQUMxQixpQ0FBd0I7Ozs7O0FBTzVCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBb0I1QixZQUFvQixPQUFxRSxFQUFVLFdBQTJCO1FBQTFHLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBbEJ0SCw2QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FB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LEdBQUcsbUJBQUEsSUFBSSxFQUE0QjtnQkFDakQsSUFBSSxRQUFRLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtvQkFDakUsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OztZQXRlSixVQUFVOzs7O1lBbEJGLGtCQUFrQjtZQVpsQixjQUFjOzs7Ozs7O0lBaUNuQix1REFBcUQ7Ozs7O0lBQ3JELGtEQUFvQzs7Ozs7SUFDcEMsdUNBQTBDOzs7OztJQUMxQywwQ0FBNEI7Ozs7O0lBQzVCLHFEQUFtRTs7Ozs7SUFDbkUsd0NBQXdDOzs7OztJQUN4QywrQ0FBOEI7O0lBRTlCLHFDQUFzQjs7SUFDdEIsaURBQWtDOztJQUNsQyw2Q0FBaUQ7O0lBQ2pELGlEQUF1RDs7SUFDdkQsNENBQWdEOztJQUNoRCw4Q0FBK0I7O0lBQy9CLHFEQUEyRDs7SUFFM0QsbUNBQTJCOzs7OztJQUVmLHNDQUE2RTs7Ozs7SUFBRSwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEljb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaWNvbi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLCBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9ucy10cmVlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJQ29sdW1uUmVzaXplRXZlbnRBcmdzLCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IGljb25zIGZyb20gJy4vc3ZnSWNvbnMnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb24sIEZpbHRlcmluZ0xvZ2ljIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJRm9yT2ZTdGF0ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4R3JpZFNvcnRpbmdQaXBlIH0gZnJvbSAnLi4vZ3JpZC9ncmlkLnBpcGVzJztcbmltcG9ydCB7IElneERhdGVQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC5jb21tb24nO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24nO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuXG5jb25zdCBGSUxURVJJTkdfSUNPTlNfRk9OVF9TRVQgPSAnZmlsdGVyaW5nLWljb25zJztcblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25VSSB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uO1xuICAgIHB1YmxpYyBiZWZvcmVPcGVyYXRvcjogRmlsdGVyaW5nTG9naWM7XG4gICAgcHVibGljIGFmdGVyT3BlcmF0b3I6IEZpbHRlcmluZ0xvZ2ljO1xuICAgIHB1YmxpYyBpc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgcHVibGljIGlzVmlzaWJsZSA9IHRydWU7XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgY29sdW1uc1dpdGhDb21wbGV4RmlsdGVyID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgcHJpdmF0ZSBhcmVFdmVudHNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBpc0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgY29sdW1uVG9FeHByZXNzaW9uc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBFeHByZXNzaW9uVUlbXT4oKTtcbiAgICBwcml2YXRlIF9kYXRlUGlwZTogSWd4RGF0ZVBpcGVDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBjb2x1bW5TdGFydEluZGV4ID0gLTE7XG5cbiAgICBwdWJsaWMgZ3JpZElkOiBzdHJpbmc7XG4gICAgcHVibGljIGlzRmlsdGVyUm93VmlzaWJsZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBmaWx0ZXJlZENvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgc2VsZWN0ZWRFeHByZXNzaW9uOiBJRmlsdGVyaW5nRXhwcmVzc2lvbiA9IG51bGw7XG4gICAgcHVibGljIGNvbHVtblRvRm9jdXM6IElneENvbHVtbkNvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHNob3VsZEZvY3VzTmV4dCA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb2x1bW5Ub01vcmVJY29uSGlkZGVuID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cbiAgICBncmlkOiBJZ3hHcmlkQmFzZUNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+LCBwcml2YXRlIGljb25TZXJ2aWNlOiBJZ3hJY29uU2VydmljZSkge31cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRpc3BsYXlDb250YWluZXJXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgMTApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdyaWQucGFyZW50VmlydERpci5nZXRIb3Jpem9udGFsU2Nyb2xsKCkuc2Nyb2xsTGVmdCwgMTApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXJlQWxsQ29sdW1uc0luVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgMTApID09PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhY29sLmNvbHVtbkdyb3VwICYmIGNvbC5maWx0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHVucGlubmVkQ29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhY29sLmNvbHVtbkdyb3VwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGVQaXBlKCk6IElneERhdGVQaXBlQ29tcG9uZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRlUGlwZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0ZVBpcGUgPSBuZXcgSWd4RGF0ZVBpcGVDb21wb25lbnQodGhpcy5ncmlkLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVQaXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBncmlkJ3MgZXZlbnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdWJzY3JpYmVUb0V2ZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFyZUV2ZW50c1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXJlRXZlbnRzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5vbkNvbHVtblJlc2l6ZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnRBcmdzOiBJQ29sdW1uUmVzaXplRXZlbnRBcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJpbmdDZWxsKGV2ZW50QXJncy5jb2x1bW4pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2ZW50QXJnczogSUZvck9mU3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRBcmdzLnN0YXJ0SW5kZXggIT09IHRoaXMuY29sdW1uU3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblN0YXJ0SW5kZXggPSBldmVudEFyZ3Muc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlckNlbGxMaXN0LmZvckVhY2goKGZpbHRlckNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNlbGwudXBkYXRlRmlsdGVyQ2VsbEFyZWEoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtblRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0ZpbHRlckNlbGxDaGlwKHRoaXMuY29sdW1uVG9Gb2N1cywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRvRm9jdXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdyaWQub25Db2x1bW5Nb3ZpbmdFbmQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlckNlbGxMaXN0LmZvckVhY2goKGZpbHRlckNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ2VsbC51cGRhdGVGaWx0ZXJDZWxsQXJlYSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gY3JlYXRlIGV4cHJlc3Npb25zVHJlZSBhbmQgZmlsdGVyIGdyaWQgdXNlZCBpbiBib3RoIGZpbHRlciBtb2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVySW50ZXJuYWwoZmllbGQ6IHN0cmluZywgZXhwcmVzc2lvbnM6IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IEFycmF5PEV4cHJlc3Npb25VST4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNGaWx0ZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIGxldCBleHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGlmIChleHByZXNzaW9ucyBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNUcmVlID0gZXhwcmVzc2lvbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHByZXNzaW9uc1RyZWUgPSB0aGlzLmNyZWF0ZVNpbXBsZUZpbHRlcmluZ1RyZWUoZmllbGQsIGV4cHJlc3Npb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVyKGZpZWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyKGZpZWxkLCBudWxsLCBleHByZXNzaW9uc1RyZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGUgZmlsdGVyaW5nIG9uIHRoZSBncmlkLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXIoZmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSwgY29uZGl0aW9uT3JFeHByZXNzaW9uVHJlZT86IElGaWx0ZXJpbmdPcGVyYXRpb24gfCBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLFxuICAgICAgICBpZ25vcmVDYXNlPzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdyaWRBUEkuZ2V0X2NvbHVtbl9ieV9uYW1lKGZpZWxkKTtcbiAgICAgICAgY29uc3QgZmlsdGVyaW5nSWdub3JlQ2FzZSA9IGlnbm9yZUNhc2UgfHwgKGNvbCA/IGNvbC5maWx0ZXJpbmdJZ25vcmVDYXNlIDogZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb25kaXRpb25PckV4cHJlc3Npb25UcmVlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuZmlsdGVyKGZpZWxkLCB2YWx1ZSwgY29uZGl0aW9uT3JFeHByZXNzaW9uVHJlZSwgZmlsdGVyaW5nSWdub3JlQ2FzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWVGb3JDb2x1bW4gPSB0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLmZpbmQoZmllbGQpO1xuICAgICAgICAgICAgaWYgKCFleHByZXNzaW9uc1RyZWVGb3JDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29uZGl0aW9uIG9yIEV4cHJlc3Npb24gVHJlZSEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbnNUcmVlRm9yQ29sdW1uIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmZpbHRlcihmaWVsZCwgdmFsdWUsIGV4cHJlc3Npb25zVHJlZUZvckNvbHVtbiwgZmlsdGVyaW5nSWdub3JlQ2FzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25Gb3JDb2x1bW4gPSBleHByZXNzaW9uc1RyZWVGb3JDb2x1bW4gYXMgSUZpbHRlcmluZ0V4cHJlc3Npb247XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmZpbHRlcihmaWVsZCwgdmFsdWUsIGV4cHJlc3Npb25Gb3JDb2x1bW4uY29uZGl0aW9uLCBmaWx0ZXJpbmdJZ25vcmVDYXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXJlZCBkYXRhIHRocm91Z2ggdGhlIHBpcGVzIGFuZCB0aGVuIGVtaXQgdGhlIGV2ZW50LlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5ncmlkLm9uRmlsdGVyaW5nRG9uZS5lbWl0KGNvbC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZmlsdGVyIG9mIGEgZ2l2ZW4gY29sdW1uLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcihmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkQVBJLmdldF9jb2x1bW5fYnlfbmFtZShmaWVsZCk7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNGaWx0ZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFQSS5jbGVhcl9maWx0ZXIoZmllbGQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXJlZCBkYXRhIHRocm91Z2ggdGhlIHBpcGVzIGFuZCB0aGVuIGVtaXQgdGhlIGV2ZW50LlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5ncmlkLm9uRmlsdGVyaW5nRG9uZS5lbWl0KG51bGwpKTtcblxuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gdGhpcy5nZXRFeHByZXNzaW9ucyhmaWVsZCk7XG4gICAgICAgICAgICBleHByZXNzaW9ucy5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgYWxsIHRoZSBgSWd4Q29sdW1uQ29tcG9uZW50YCBpbiB0aGUgYElneEdyaWRDb21wb25lbnRgIHdpdGggdGhlIHNhbWUgY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXJHbG9iYWwodmFsdWU6IGFueSwgY29uZGl0aW9uLCBpZ25vcmVDYXNlPykge1xuICAgICAgICB0aGlzLmdyaWRBUEkuZmlsdGVyX2dsb2JhbCh2YWx1ZSwgY29uZGl0aW9uLCBpZ25vcmVDYXNlKTtcblxuICAgICAgICAvLyBXYWl0IGZvciB0aGUgY2hhbmdlIGRldGVjdGlvbiB0byB1cGRhdGUgZmlsdGVyZWQgZGF0YSB0aHJvdWdoIHRoZSBwaXBlcyBhbmQgdGhlbiBlbWl0IHRoZSBldmVudC5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZ3JpZC5vbkZpbHRlcmluZ0RvbmUuZW1pdCh0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZmlsdGVyaW5nIFNWRyBpY29ucyBpbiB0aGUgaWNvbiBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3RlclNWR0ljb25zKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IGljb24gb2YgaWNvbnMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pY29uU2VydmljZS5pc1N2Z0ljb25DYWNoZWQoaWNvbi5uYW1lLCBGSUxURVJJTkdfSUNPTlNfRk9OVF9TRVQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU2VydmljZS5hZGRTdmdJY29uRnJvbVRleHQoaWNvbi5uYW1lLCBpY29uLnZhbHVlLCBGSUxURVJJTkdfSUNPTlNfRk9OVF9TRVQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgRXhwcmVzc2lvblVJIGFycmF5IGZvciBhIGdpdmVuIGNvbHVtbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXhwcmVzc2lvbnMoY29sdW1uSWQ6IHN0cmluZyk6IEV4cHJlc3Npb25VSVtdIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtblRvRXhwcmVzc2lvbnNNYXAuaGFzKGNvbHVtbklkKSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCgoY29sKSA9PiBjb2wuZmllbGQgPT09IGNvbHVtbklkKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25VSXMgPSBuZXcgQXJyYXk8RXhwcmVzc2lvblVJPigpO1xuXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRXhwcmVzc2lvbnNMaXN0KGNvbHVtbi5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUub3BlcmF0b3IsIGV4cHJlc3Npb25VSXMpO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5Ub0V4cHJlc3Npb25zTWFwLnNldChjb2x1bW5JZCwgZXhwcmVzc2lvblVJcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uVUlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uVG9FeHByZXNzaW9uc01hcC5nZXQoY29sdW1uSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3JlYXRlcyBhbGwgRXhwcmVzc2lvblVJcyBmb3IgYWxsIGNvbHVtbnMuIEV4ZWN1dGVkIGFmdGVyIGZpbHRlcmluZyB0byByZWZyZXNoIHRoZSBjYWNoZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaEV4cHJlc3Npb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1dpdGhDb21wbGV4RmlsdGVyLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1uVG9FeHByZXNzaW9uc01hcC5mb3JFYWNoKCh2YWx1ZTogRXhwcmVzc2lvblVJW10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCgoY29sKSA9PiBjb2wuZmllbGQgPT09IGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFeHByZXNzaW9uc0xpc3QoY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgdGhpcy5ncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5vcGVyYXRvciwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IHRoaXMuaXNGaWx0ZXJpbmdUcmVlQ29tcGxleChjb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zV2l0aENvbXBsZXhGaWx0ZXIuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcmluZ0NlbGwoY29sdW1uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRvRXhwcmVzc2lvbnNNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gRXhwcmVzc2lvblVJIGZvciBhIGdpdmVuIGNvbHVtbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlRXhwcmVzc2lvbihjb2x1bW5JZDogc3RyaW5nLCBpbmRleFRvUmVtb3ZlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbnNMaXN0ID0gdGhpcy5nZXRFeHByZXNzaW9ucyhjb2x1bW5JZCk7XG5cbiAgICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPT09IDAgJiYgZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGV4cHJlc3Npb25zTGlzdFsxXS5iZWZvcmVPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXhUb1JlbW92ZSA9PT0gZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGV4cHJlc3Npb25zTGlzdFtpbmRleFRvUmVtb3ZlIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHByZXNzaW9uc0xpc3RbaW5kZXhUb1JlbW92ZSAtIDFdLmFmdGVyT3BlcmF0b3IgPSBleHByZXNzaW9uc0xpc3RbaW5kZXhUb1JlbW92ZSArIDFdLmJlZm9yZU9wZXJhdG9yO1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNMaXN0WzBdLmJlZm9yZU9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgICAgIGV4cHJlc3Npb25zTGlzdFtleHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBleHByZXNzaW9uc0xpc3Quc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGZpbHRlcmluZyB0cmVlIGZvciBhIGdpdmVuIGNvbHVtbiBmcm9tIGV4aXN0aW5nIEV4cHJlc3Npb25VSXMuXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZVNpbXBsZUZpbHRlcmluZ1RyZWUoY29sdW1uSWQ6IHN0cmluZywgZXhwcmVzc2lvblVJTGlzdCA9IG51bGwpOiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc0xpc3QgPSBleHByZXNzaW9uVUlMaXN0ID8gZXhwcmVzc2lvblVJTGlzdCA6IHRoaXMuZ2V0RXhwcmVzc2lvbnMoY29sdW1uSWQpO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKEZpbHRlcmluZ0xvZ2ljLk9yLCBjb2x1bW5JZCk7XG4gICAgICAgIGxldCBjdXJyQW5kQnJhbmNoOiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGxldCBjdXJyRXhwcmVzc2lvblVJOiBFeHByZXNzaW9uVUk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzaW9uc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJFeHByZXNzaW9uVUkgPSBleHByZXNzaW9uc0xpc3RbaV07XG5cbiAgICAgICAgICAgIGlmICghY3VyckV4cHJlc3Npb25VSS5leHByZXNzaW9uLmNvbmRpdGlvbi5pc1VuYXJ5ICYmIGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VyckV4cHJlc3Npb25VSS5hZnRlck9wZXJhdG9yID09PSBGaWx0ZXJpbmdMb2dpYy5BbmQgJiYgIWN1cnJBbmRCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaCA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kLCBjb2x1bW5JZCk7XG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJBbmRCcmFuY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKChjdXJyRXhwcmVzc2lvblVJLmJlZm9yZU9wZXJhdG9yID09PSB1bmRlZmluZWQgfHwgY3VyckV4cHJlc3Npb25VSS5iZWZvcmVPcGVyYXRvciA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICBjdXJyRXhwcmVzc2lvblVJLmJlZm9yZU9wZXJhdG9yID09PSBGaWx0ZXJpbmdMb2dpYy5PcikgJiZcbiAgICAgICAgICAgICAgICBjdXJyRXhwcmVzc2lvblVJLmFmdGVyT3BlcmF0b3IgPT09IEZpbHRlcmluZ0xvZ2ljLkFuZCkge1xuXG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaCA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kLCBjb2x1bW5JZCk7XG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLnB1c2goY3VyckFuZEJyYW5jaCk7XG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaC5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbik7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckV4cHJlc3Npb25VSS5iZWZvcmVPcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuQW5kKSB7XG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaC5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbik7XG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNUcmVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBhIGNvbXBsZXggZmlsdGVyIGlzIGFwcGxpZWQgdG8gYSBnaXZlbiBjb2x1bW4uXG4gICAgICovXG4gICAgcHVibGljIGlzRmlsdGVyQ29tcGxleChjb2x1bW5JZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnNXaXRoQ29tcGxleEZpbHRlci5oYXMoY29sdW1uSWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5zLmZpbmQoKGNvbCkgPT4gY29sLmZpZWxkID09PSBjb2x1bW5JZCk7XG4gICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IHRoaXMuaXNGaWx0ZXJpbmdUcmVlQ29tcGxleChjb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTtcbiAgICAgICAgaWYgKGlzQ29tcGxleCkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zV2l0aENvbXBsZXhGaWx0ZXIuYWRkKGNvbHVtbklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0NvbXBsZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBGaWx0ZXJpbmdMb2dpYyBvcGVyYXRvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T3BlcmF0b3JBc1N0cmluZyhvcGVyYXRvcjogRmlsdGVyaW5nTG9naWMpOiBhbnkge1xuICAgICAgICBpZiAob3BlcmF0b3IgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2ZpbHRlcl9vcGVyYXRvcl9hbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5ncy5pZ3hfZ3JpZF9maWx0ZXJfb3BlcmF0b3Jfb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgbGFiZWwgb2YgYSBjaGlwIGZyb20gYSBnaXZlbiBmaWx0ZXJpbmcgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q2hpcExhYmVsKGV4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uKTogYW55IHtcbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY29uZGl0aW9uLmlzVW5hcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzW2BpZ3hfZ3JpZF9maWx0ZXJfJHtleHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lfWBdIHx8IGV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbi5zZWFyY2hWYWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZXhwcmVzc2lvbi5zZWFyY2hWYWwsIHRoaXMuZ3JpZC5sb2NhbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb24uc2VhcmNoVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29udGVudCBvZiBhIGZpbHRlckNlbGwuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUZpbHRlcmluZ0NlbGwoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyQ2VsbCA9IGNvbHVtbi5maWx0ZXJDZWxsO1xuICAgICAgICBpZiAoZmlsdGVyQ2VsbCkge1xuICAgICAgICAgICAgZmlsdGVyQ2VsbC51cGRhdGVGaWx0ZXJDZWxsQXJlYSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgYSBjaGlwIGluIGEgZmlsdGVyQ2VsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXNGaWx0ZXJDZWxsQ2hpcChjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCwgZm9jdXNGaXJzdDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBmaWx0ZXJDZWxsID0gY29sdW1uLmZpbHRlckNlbGw7XG4gICAgICAgIGlmIChmaWx0ZXJDZWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJDZWxsLmZvY3VzQ2hpcChmb2N1c0ZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvY3VzIHRoZSBjbG9zZSBidXR0b24gaW4gdGhlIGZpbHRlcmluZyByb3cuXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzRmlsdGVyUm93Q2xvc2VCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdSb3cuY2xvc2VCdXR0b24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIGEgZmlsdGVyQ2VsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9GaWx0ZXJDZWxsKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBzaG91bGRGb2N1c05leHQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgICAgICAgdGhpcy5jb2x1bW5Ub0ZvY3VzID0gY29sdW1uO1xuICAgICAgICB0aGlzLnNob3VsZEZvY3VzTmV4dCA9IHNob3VsZEZvY3VzTmV4dDtcblxuICAgICAgICBsZXQgY3VycmVudENvbHVtblJpZ2h0ID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRDb2x1bW5MZWZ0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudW5waW5uZWRDb2x1bW5zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY3VycmVudENvbHVtblJpZ2h0ICs9IHBhcnNlSW50KHRoaXMudW5waW5uZWRDb2x1bW5zW2luZGV4XS53aWR0aCwgMTApO1xuICAgICAgICAgICAgaWYgKHRoaXMudW5waW5uZWRDb2x1bW5zW2luZGV4XSA9PT0gY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbHVtbkxlZnQgPSBjdXJyZW50Q29sdW1uUmlnaHQgLSBwYXJzZUludCh0aGlzLnVucGlubmVkQ29sdW1uc1tpbmRleF0ud2lkdGgsIDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvck9mRGlyID0gdGhpcy5ncmlkLmhlYWRlckNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRpc3BsYXlDb250YWluZXJXaWR0aCArIHRoaXMuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQ7XG4gICAgICAgIGlmIChzaG91bGRGb2N1c05leHQpIHtcbiAgICAgICAgICAgIGZvck9mRGlyLmdldEhvcml6b250YWxTY3JvbGwoKS5zY3JvbGxMZWZ0ICs9IGN1cnJlbnRDb2x1bW5SaWdodCAtIHdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yT2ZEaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnNjcm9sbExlZnQgPSBjdXJyZW50Q29sdW1uTGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNGaWx0ZXJpbmdUcmVlQ29tcGxleChleHByZXNzaW9uczogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IElGaWx0ZXJpbmdFeHByZXNzaW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZXhwcmVzc2lvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHByZXNzaW9ucyBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbnNUcmVlID0gZXhwcmVzc2lvbnMgYXMgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25zVHJlZS5vcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuT3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmRPcGVyYXRvcnNDb3VudCA9IHRoaXMuZ2V0Q2hpbGRBbmRPcGVyYXRvcnNDb3VudChleHByZXNzaW9uc1RyZWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gaGF2aW5nIG1vcmUgdGhhdCAnQW5kJyBhbmQgb3BlcmF0b3IgaW4gdGhlIHN1Yi10cmVlIG1lYW5zIHRoYXQgdGhlIGZpbHRlciBjb3VsZCBub3QgYmUgcmVwcmVzZW50ZWQgd2l0aG91dCBwYXJlbnRoZXNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gYW5kT3BlcmF0b3JzQ291bnQgPiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXNDb21wbGV4ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlzQ29tcGxleCA9IGlzQ29tcGxleCB8fCB0aGlzLmlzRmlsdGVyaW5nVHJlZUNvbXBsZXgoZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGlzQ29tcGxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkQW5kT3BlcmF0b3JzQ291bnQoZXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpOiBudW1iZXIge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgb3BlcmFuZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzaW9ucy5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3BlcmFuZCA9IGV4cHJlc3Npb25zW2ldO1xuICAgICAgICAgICAgaWYgKG9wZXJhbmQgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmFuZC5vcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuQW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnQgPSBjb3VudCArIHRoaXMuZ2V0Q2hpbGRBbmRPcGVyYXRvcnNDb3VudChvcGVyYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVFeHByZXNzaW9uc0xpc3QoZXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfCBJRmlsdGVyaW5nRXhwcmVzc2lvbixcbiAgICAgICAgb3BlcmF0b3I6IEZpbHRlcmluZ0xvZ2ljLFxuICAgICAgICBleHByZXNzaW9uc1VJczogRXhwcmVzc2lvblVJW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUV4cHJlc3Npb25zTGlzdFJlY3Vyc2l2ZShleHByZXNzaW9ucywgb3BlcmF0b3IsIGV4cHJlc3Npb25zVUlzKTtcblxuICAgICAgICAvLyBUaGUgYmVmb3JlT3BlcmF0b3Igb2YgdGhlIGZpcnN0IGV4cHJlc3Npb24gYW5kIHRoZSBhZnRlck9wZXJhdG9yIG9mIHRoZSBsYXN0IGV4cHJlc3Npb24gc2hvdWxkIGJlIG51bGxcbiAgICAgICAgaWYgKGV4cHJlc3Npb25zVUlzLmxlbmd0aCkge1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNVSXNbZXhwcmVzc2lvbnNVSXMubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlRXhwcmVzc2lvbnNMaXN0UmVjdXJzaXZlKGV4cHJlc3Npb25zOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogRmlsdGVyaW5nTG9naWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uc1VJczogRXhwcmVzc2lvblVJW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFleHByZXNzaW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb25zIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBleHByZXNzaW9ucyBhcyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFeHByZXNzaW9uc0xpc3RSZWN1cnNpdmUoZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzW2ldLCBleHByZXNzaW9uc1RyZWUub3BlcmF0b3IsIGV4cHJlc3Npb25zVUlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uc1VJcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uc1VJc1tleHByZXNzaW9uc1VJcy5sZW5ndGggLSAxXS5hZnRlck9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBleHByVUkgPSBuZXcgRXhwcmVzc2lvblVJKCk7XG4gICAgICAgICAgICBleHByVUkuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zIGFzIElGaWx0ZXJpbmdFeHByZXNzaW9uO1xuICAgICAgICAgICAgZXhwclVJLmFmdGVyT3BlcmF0b3IgPSBvcGVyYXRvcjtcblxuICAgICAgICAgICAgY29uc3QgcHJldkV4cHJVSSA9IGV4cHJlc3Npb25zVUlzW2V4cHJlc3Npb25zVUlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKHByZXZFeHByVUkpIHtcbiAgICAgICAgICAgICAgICBleHByVUkuYmVmb3JlT3BlcmF0b3IgPSBwcmV2RXhwclVJLmFmdGVyT3BlcmF0b3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb25zVUlzLnB1c2goZXhwclVJKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uVHJlZSA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGlmICghZXhwcmVzc2lvblRyZWUuZmlsdGVyaW5nT3BlcmFuZHMgfHwgIWV4cHJlc3Npb25UcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXhwcjogYW55O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcmVzc2lvblRyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGV4cHIgPSBleHByZXNzaW9uVHJlZS5maWx0ZXJpbmdPcGVyYW5kc1tpXTtcblxuICAgICAgICAgICAgaWYgKChleHByIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJUcmVlID0gZXhwciBhcyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgICAgICAgICAgaWYgKGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzICYmIGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19