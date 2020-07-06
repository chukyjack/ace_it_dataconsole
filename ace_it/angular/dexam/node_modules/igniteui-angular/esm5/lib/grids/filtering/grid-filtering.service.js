/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var FILTERING_ICONS_FONT_SET = 'filtering-icons';
/**
 * @hidden
 */
var /**
 * @hidden
 */
ExpressionUI = /** @class */ (function () {
    function ExpressionUI() {
        this.isSelected = false;
        this.isVisible = true;
    }
    return ExpressionUI;
}());
/**
 * @hidden
 */
export { ExpressionUI };
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
var IgxFilteringService = /** @class */ (function () {
    function IgxFilteringService(gridAPI, iconService) {
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
    IgxFilteringService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    Object.defineProperty(IgxFilteringService.prototype, "displayContainerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt(this.grid.parentVirtDir.dc.instance._viewContainer.element.nativeElement.offsetWidth, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxFilteringService.prototype, "displayContainerScrollLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt(this.grid.parentVirtDir.getHorizontalScroll().scrollLeft, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxFilteringService.prototype, "areAllColumnsInView", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt(this.grid.parentVirtDir.dc.instance._viewContainer.element.nativeElement.offsetWidth, 10) === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxFilteringService.prototype, "unpinnedFilterableColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.unpinnedColumns.filter(function (col) { return !col.columnGroup && col.filterable; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxFilteringService.prototype, "unpinnedColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.unpinnedColumns.filter(function (col) { return !col.columnGroup; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxFilteringService.prototype, "datePipe", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._datePipe) {
                this._datePipe = new IgxDatePipeComponent(this.grid.locale);
            }
            return this._datePipe;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribe to grid's events.
     */
    /**
     * Subscribe to grid's events.
     * @return {?}
     */
    IgxFilteringService.prototype.subscribeToEvents = /**
     * Subscribe to grid's events.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.areEventsSubscribed) {
            this.areEventsSubscribed = true;
            this.grid.onColumnResized.pipe(takeUntil(this.destroy$)).subscribe(function (eventArgs) {
                _this.updateFilteringCell(eventArgs.column);
            });
            this.grid.parentVirtDir.onChunkLoad.pipe(takeUntil(this.destroy$)).subscribe(function (eventArgs) {
                if (eventArgs.startIndex !== _this.columnStartIndex) {
                    _this.columnStartIndex = eventArgs.startIndex;
                    _this.grid.filterCellList.forEach(function (filterCell) {
                        filterCell.updateFilterCellArea();
                    });
                }
                if (_this.columnToFocus) {
                    _this.focusFilterCellChip(_this.columnToFocus, false);
                    _this.columnToFocus = null;
                }
            });
            this.grid.onColumnMovingEnd.pipe(takeUntil(this.destroy$)).subscribe(function () {
                _this.grid.filterCellList.forEach(function (filterCell) {
                    filterCell.updateFilterCellArea();
                });
            });
        }
    };
    /**
     * Internal method to create expressionsTree and filter grid used in both filter modes.
     */
    /**
     * Internal method to create expressionsTree and filter grid used in both filter modes.
     * @param {?} field
     * @param {?=} expressions
     * @return {?}
     */
    IgxFilteringService.prototype.filterInternal = /**
     * Internal method to create expressionsTree and filter grid used in both filter modes.
     * @param {?} field
     * @param {?=} expressions
     * @return {?}
     */
    function (field, expressions) {
        if (expressions === void 0) { expressions = null; }
        this.isFiltering = true;
        /** @type {?} */
        var expressionsTree;
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
    };
    /**
     * Execute filtering on the grid.
     */
    /**
     * Execute filtering on the grid.
     * @param {?} field
     * @param {?} value
     * @param {?=} conditionOrExpressionTree
     * @param {?=} ignoreCase
     * @return {?}
     */
    IgxFilteringService.prototype.filter = /**
     * Execute filtering on the grid.
     * @param {?} field
     * @param {?} value
     * @param {?=} conditionOrExpressionTree
     * @param {?=} ignoreCase
     * @return {?}
     */
    function (field, value, conditionOrExpressionTree, ignoreCase) {
        var _this = this;
        /** @type {?} */
        var col = this.gridAPI.get_column_by_name(field);
        /** @type {?} */
        var filteringIgnoreCase = ignoreCase || (col ? col.filteringIgnoreCase : false);
        if (conditionOrExpressionTree) {
            this.gridAPI.filter(field, value, conditionOrExpressionTree, filteringIgnoreCase);
        }
        else {
            /** @type {?} */
            var expressionsTreeForColumn = this.grid.filteringExpressionsTree.find(field);
            if (!expressionsTreeForColumn) {
                throw new Error('Invalid condition or Expression Tree!');
            }
            else if (expressionsTreeForColumn instanceof FilteringExpressionsTree) {
                this.gridAPI.filter(field, value, expressionsTreeForColumn, filteringIgnoreCase);
            }
            else {
                /** @type {?} */
                var expressionForColumn = (/** @type {?} */ (expressionsTreeForColumn));
                this.gridAPI.filter(field, value, expressionForColumn.condition, filteringIgnoreCase);
            }
        }
        // Wait for the change detection to update filtered data through the pipes and then emit the event.
        requestAnimationFrame(function () { return _this.grid.onFilteringDone.emit(col.filteringExpressionsTree); });
    };
    /**
     * Clear the filter of a given column.
     */
    /**
     * Clear the filter of a given column.
     * @param {?} field
     * @return {?}
     */
    IgxFilteringService.prototype.clearFilter = /**
     * Clear the filter of a given column.
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (field) {
            /** @type {?} */
            var column = this.gridAPI.get_column_by_name(field);
            if (!column) {
                return;
            }
        }
        this.isFiltering = true;
        this.gridAPI.clear_filter(field);
        // Wait for the change detection to update filtered data through the pipes and then emit the event.
        requestAnimationFrame(function () { return _this.grid.onFilteringDone.emit(null); });
        if (field) {
            /** @type {?} */
            var expressions = this.getExpressions(field);
            expressions.length = 0;
        }
        this.isFiltering = false;
    };
    /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     */
    /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     * @param {?} value
     * @param {?} condition
     * @param {?=} ignoreCase
     * @return {?}
     */
    IgxFilteringService.prototype.filterGlobal = /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     * @param {?} value
     * @param {?} condition
     * @param {?=} ignoreCase
     * @return {?}
     */
    function (value, condition, ignoreCase) {
        var _this = this;
        this.gridAPI.filter_global(value, condition, ignoreCase);
        // Wait for the change detection to update filtered data through the pipes and then emit the event.
        requestAnimationFrame(function () { return _this.grid.onFilteringDone.emit(_this.grid.filteringExpressionsTree); });
    };
    /**
     * Register filtering SVG icons in the icon service.
     */
    /**
     * Register filtering SVG icons in the icon service.
     * @return {?}
     */
    IgxFilteringService.prototype.registerSVGIcons = /**
     * Register filtering SVG icons in the icon service.
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var icons_1 = tslib_1.__values(icons), icons_1_1 = icons_1.next(); !icons_1_1.done; icons_1_1 = icons_1.next()) {
                var icon = icons_1_1.value;
                if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                    this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (icons_1_1 && !icons_1_1.done && (_a = icons_1.return)) _a.call(icons_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Returns the ExpressionUI array for a given column.
     */
    /**
     * Returns the ExpressionUI array for a given column.
     * @param {?} columnId
     * @return {?}
     */
    IgxFilteringService.prototype.getExpressions = /**
     * Returns the ExpressionUI array for a given column.
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        if (!this.columnToExpressionsMap.has(columnId)) {
            /** @type {?} */
            var column = this.grid.columns.find(function (col) { return col.field === columnId; });
            /** @type {?} */
            var expressionUIs = new Array();
            this.generateExpressionsList(column.filteringExpressionsTree, this.grid.filteringExpressionsTree.operator, expressionUIs);
            this.columnToExpressionsMap.set(columnId, expressionUIs);
            return expressionUIs;
        }
        return this.columnToExpressionsMap.get(columnId);
    };
    /**
     * Recreates all ExpressionUIs for all columns. Executed after filtering to refresh the cache.
     */
    /**
     * Recreates all ExpressionUIs for all columns. Executed after filtering to refresh the cache.
     * @return {?}
     */
    IgxFilteringService.prototype.refreshExpressions = /**
     * Recreates all ExpressionUIs for all columns. Executed after filtering to refresh the cache.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isFiltering) {
            this.columnsWithComplexFilter.clear();
            this.columnToExpressionsMap.forEach(function (value, key) {
                /** @type {?} */
                var column = _this.grid.columns.find(function (col) { return col.field === key; });
                if (column) {
                    value.length = 0;
                    _this.generateExpressionsList(column.filteringExpressionsTree, _this.grid.filteringExpressionsTree.operator, value);
                    /** @type {?} */
                    var isComplex = _this.isFilteringTreeComplex(column.filteringExpressionsTree);
                    if (isComplex) {
                        _this.columnsWithComplexFilter.add(key);
                    }
                    _this.updateFilteringCell(column);
                }
                else {
                    _this.columnToExpressionsMap.delete(key);
                }
            });
        }
    };
    /**
     * Remove an ExpressionUI for a given column.
     */
    /**
     * Remove an ExpressionUI for a given column.
     * @param {?} columnId
     * @param {?} indexToRemove
     * @return {?}
     */
    IgxFilteringService.prototype.removeExpression = /**
     * Remove an ExpressionUI for a given column.
     * @param {?} columnId
     * @param {?} indexToRemove
     * @return {?}
     */
    function (columnId, indexToRemove) {
        /** @type {?} */
        var expressionsList = this.getExpressions(columnId);
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
    };
    /**
     * Generate filtering tree for a given column from existing ExpressionUIs.
     */
    /**
     * Generate filtering tree for a given column from existing ExpressionUIs.
     * @param {?} columnId
     * @param {?=} expressionUIList
     * @return {?}
     */
    IgxFilteringService.prototype.createSimpleFilteringTree = /**
     * Generate filtering tree for a given column from existing ExpressionUIs.
     * @param {?} columnId
     * @param {?=} expressionUIList
     * @return {?}
     */
    function (columnId, expressionUIList) {
        if (expressionUIList === void 0) { expressionUIList = null; }
        /** @type {?} */
        var expressionsList = expressionUIList ? expressionUIList : this.getExpressions(columnId);
        /** @type {?} */
        var expressionsTree = new FilteringExpressionsTree(FilteringLogic.Or, columnId);
        /** @type {?} */
        var currAndBranch;
        /** @type {?} */
        var currExpressionUI;
        for (var i = 0; i < expressionsList.length; i++) {
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
    };
    /**
     * Returns whether a complex filter is applied to a given column.
     */
    /**
     * Returns whether a complex filter is applied to a given column.
     * @param {?} columnId
     * @return {?}
     */
    IgxFilteringService.prototype.isFilterComplex = /**
     * Returns whether a complex filter is applied to a given column.
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        if (this.columnsWithComplexFilter.has(columnId)) {
            return true;
        }
        /** @type {?} */
        var column = this.grid.columns.find(function (col) { return col.field === columnId; });
        /** @type {?} */
        var isComplex = this.isFilteringTreeComplex(column.filteringExpressionsTree);
        if (isComplex) {
            this.columnsWithComplexFilter.add(columnId);
        }
        return isComplex;
    };
    /**
     * Returns the string representation of the FilteringLogic operator.
     */
    /**
     * Returns the string representation of the FilteringLogic operator.
     * @param {?} operator
     * @return {?}
     */
    IgxFilteringService.prototype.getOperatorAsString = /**
     * Returns the string representation of the FilteringLogic operator.
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        if (operator === 0) {
            return this.grid.resourceStrings.igx_grid_filter_operator_and;
        }
        else {
            return this.grid.resourceStrings.igx_grid_filter_operator_or;
        }
    };
    /**
     * Generate the label of a chip from a given filtering expression.
     */
    /**
     * Generate the label of a chip from a given filtering expression.
     * @param {?} expression
     * @return {?}
     */
    IgxFilteringService.prototype.getChipLabel = /**
     * Generate the label of a chip from a given filtering expression.
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        if (expression.condition.isUnary) {
            return this.grid.resourceStrings["igx_grid_filter_" + expression.condition.name] || expression.condition.name;
        }
        else if (expression.searchVal instanceof Date) {
            return this.datePipe.transform(expression.searchVal, this.grid.locale);
        }
        else {
            return expression.searchVal;
        }
    };
    /**
     * Updates the content of a filterCell.
     */
    /**
     * Updates the content of a filterCell.
     * @param {?} column
     * @return {?}
     */
    IgxFilteringService.prototype.updateFilteringCell = /**
     * Updates the content of a filterCell.
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var filterCell = column.filterCell;
        if (filterCell) {
            filterCell.updateFilterCellArea();
        }
    };
    /**
     * Focus a chip in a filterCell.
     */
    /**
     * Focus a chip in a filterCell.
     * @param {?} column
     * @param {?} focusFirst
     * @return {?}
     */
    IgxFilteringService.prototype.focusFilterCellChip = /**
     * Focus a chip in a filterCell.
     * @param {?} column
     * @param {?} focusFirst
     * @return {?}
     */
    function (column, focusFirst) {
        /** @type {?} */
        var filterCell = column.filterCell;
        if (filterCell) {
            filterCell.focusChip(focusFirst);
        }
    };
    /**
     * Focus the close button in the filtering row.
     */
    /**
     * Focus the close button in the filtering row.
     * @return {?}
     */
    IgxFilteringService.prototype.focusFilterRowCloseButton = /**
     * Focus the close button in the filtering row.
     * @return {?}
     */
    function () {
        this.grid.filteringRow.closeButton.nativeElement.focus();
    };
    Object.defineProperty(IgxFilteringService.prototype, "filteredData", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.filteredData;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Scrolls to a filterCell.
     */
    /**
     * Scrolls to a filterCell.
     * @param {?} column
     * @param {?} shouldFocusNext
     * @return {?}
     */
    IgxFilteringService.prototype.scrollToFilterCell = /**
     * Scrolls to a filterCell.
     * @param {?} column
     * @param {?} shouldFocusNext
     * @return {?}
     */
    function (column, shouldFocusNext) {
        this.grid.nativeElement.focus({ preventScroll: true });
        this.columnToFocus = column;
        this.shouldFocusNext = shouldFocusNext;
        /** @type {?} */
        var currentColumnRight = 0;
        /** @type {?} */
        var currentColumnLeft = 0;
        for (var index = 0; index < this.unpinnedColumns.length; index++) {
            currentColumnRight += parseInt(this.unpinnedColumns[index].width, 10);
            if (this.unpinnedColumns[index] === column) {
                currentColumnLeft = currentColumnRight - parseInt(this.unpinnedColumns[index].width, 10);
                break;
            }
        }
        /** @type {?} */
        var forOfDir = this.grid.headerContainer;
        /** @type {?} */
        var width = this.displayContainerWidth + this.displayContainerScrollLeft;
        if (shouldFocusNext) {
            forOfDir.getHorizontalScroll().scrollLeft += currentColumnRight - width;
        }
        else {
            forOfDir.getHorizontalScroll().scrollLeft = currentColumnLeft;
        }
    };
    /**
     * @private
     * @param {?} expressions
     * @return {?}
     */
    IgxFilteringService.prototype.isFilteringTreeComplex = /**
     * @private
     * @param {?} expressions
     * @return {?}
     */
    function (expressions) {
        if (!expressions) {
            return false;
        }
        if (expressions instanceof FilteringExpressionsTree) {
            /** @type {?} */
            var expressionsTree = (/** @type {?} */ (expressions));
            if (expressionsTree.operator === FilteringLogic.Or) {
                /** @type {?} */
                var andOperatorsCount = this.getChildAndOperatorsCount(expressionsTree);
                // having more that 'And' and operator in the sub-tree means that the filter could not be represented without parentheses.
                return andOperatorsCount > 1;
            }
            /** @type {?} */
            var isComplex = false;
            for (var i = 0; i < expressionsTree.filteringOperands.length; i++) {
                isComplex = isComplex || this.isFilteringTreeComplex(expressionsTree.filteringOperands[i]);
            }
            return isComplex;
        }
        return false;
    };
    /**
     * @private
     * @param {?} expressions
     * @return {?}
     */
    IgxFilteringService.prototype.getChildAndOperatorsCount = /**
     * @private
     * @param {?} expressions
     * @return {?}
     */
    function (expressions) {
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var operand;
        for (var i = 0; i < expressions.filteringOperands.length; i++) {
            operand = expressions[i];
            if (operand instanceof FilteringExpressionsTree) {
                if (operand.operator === FilteringLogic.And) {
                    count++;
                }
                count = count + this.getChildAndOperatorsCount(operand);
            }
        }
        return count;
    };
    /**
     * @param {?} expressions
     * @param {?} operator
     * @param {?} expressionsUIs
     * @return {?}
     */
    IgxFilteringService.prototype.generateExpressionsList = /**
     * @param {?} expressions
     * @param {?} operator
     * @param {?} expressionsUIs
     * @return {?}
     */
    function (expressions, operator, expressionsUIs) {
        this.generateExpressionsListRecursive(expressions, operator, expressionsUIs);
        // The beforeOperator of the first expression and the afterOperator of the last expression should be null
        if (expressionsUIs.length) {
            expressionsUIs[expressionsUIs.length - 1].afterOperator = null;
        }
    };
    /**
     * @private
     * @param {?} expressions
     * @param {?} operator
     * @param {?} expressionsUIs
     * @return {?}
     */
    IgxFilteringService.prototype.generateExpressionsListRecursive = /**
     * @private
     * @param {?} expressions
     * @param {?} operator
     * @param {?} expressionsUIs
     * @return {?}
     */
    function (expressions, operator, expressionsUIs) {
        if (!expressions) {
            return;
        }
        if (expressions instanceof FilteringExpressionsTree) {
            /** @type {?} */
            var expressionsTree = (/** @type {?} */ (expressions));
            for (var i = 0; i < expressionsTree.filteringOperands.length; i++) {
                this.generateExpressionsListRecursive(expressionsTree.filteringOperands[i], expressionsTree.operator, expressionsUIs);
            }
            if (expressionsUIs.length) {
                expressionsUIs[expressionsUIs.length - 1].afterOperator = operator;
            }
        }
        else {
            /** @type {?} */
            var exprUI = new ExpressionUI();
            exprUI.expression = (/** @type {?} */ (expressions));
            exprUI.afterOperator = operator;
            /** @type {?} */
            var prevExprUI = expressionsUIs[expressionsUIs.length - 1];
            if (prevExprUI) {
                exprUI.beforeOperator = prevExprUI.afterOperator;
            }
            expressionsUIs.push(exprUI);
        }
    };
    /**
     * @return {?}
     */
    IgxFilteringService.prototype.isFilteringExpressionsTreeEmpty = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var expressionTree = this.grid.filteringExpressionsTree;
        if (!expressionTree.filteringOperands || !expressionTree.filteringOperands.length) {
            return true;
        }
        /** @type {?} */
        var expr;
        for (var i = 0; i < expressionTree.filteringOperands.length; i++) {
            expr = expressionTree.filteringOperands[i];
            if ((expr instanceof FilteringExpressionsTree)) {
                /** @type {?} */
                var exprTree = (/** @type {?} */ (expr));
                if (exprTree.filteringOperands && exprTree.filteringOperands.length) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    };
    IgxFilteringService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IgxFilteringService.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxIconService }
    ]; };
    return IgxFilteringService;
}());
export { IgxFilteringService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1maWx0ZXJpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQTZCLE1BQU0sa0RBQWtELENBQUM7QUFFdkgsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBd0IsY0FBYyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDNUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTlDLHdCQUF3QixHQUFHLGlCQUFpQjs7OztBQUtsRDs7OztJQUFBO1FBSVcsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7Ozs7O0lBTEcsa0NBQXdDOztJQUN4QyxzQ0FBc0M7O0lBQ3RDLHFDQUFxQzs7SUFDckMsa0NBQTBCOztJQUMxQixpQ0FBd0I7Ozs7O0FBTTVCO0lBcUJJLDZCQUFvQixPQUFxRSxFQUFVLFdBQTJCO1FBQTFHLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBbEJ0SCw2QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQzdD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Z0JBWmxCLGNBQWM7O0lBcWdCdkIsMEJBQUM7Q0FBQSxBQXZlRCxJQXVlQztTQXRlWSxtQkFBbUI7Ozs7OztJQUU1Qix1REFBcUQ7Ozs7O0lBQ3JELGtEQUFvQzs7Ozs7SUFDcEMsdUNBQTBDOzs7OztJQUMxQywwQ0FBNEI7Ozs7O0lBQzVCLHFEQUFtRTs7Ozs7SUFDbkUsd0NBQXdDOzs7OztJQUN4QywrQ0FBOEI7O0lBRTlCLHFDQUFzQjs7SUFDdEIsaURBQWtDOztJQUNsQyw2Q0FBaUQ7O0lBQ2pELGlEQUF1RDs7SUFDdkQsNENBQWdEOztJQUNoRCw4Q0FBK0I7O0lBQy9CLHFEQUEyRDs7SUFFM0QsbUNBQTJCOzs7OztJQUVmLHNDQUE2RTs7Ozs7SUFBRSwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEljb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaWNvbi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLCBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9ucy10cmVlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJQ29sdW1uUmVzaXplRXZlbnRBcmdzLCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IGljb25zIGZyb20gJy4vc3ZnSWNvbnMnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb24sIEZpbHRlcmluZ0xvZ2ljIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJRm9yT2ZTdGF0ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4R3JpZFNvcnRpbmdQaXBlIH0gZnJvbSAnLi4vZ3JpZC9ncmlkLnBpcGVzJztcbmltcG9ydCB7IElneERhdGVQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC5jb21tb24nO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24nO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuXG5jb25zdCBGSUxURVJJTkdfSUNPTlNfRk9OVF9TRVQgPSAnZmlsdGVyaW5nLWljb25zJztcblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25VSSB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uO1xuICAgIHB1YmxpYyBiZWZvcmVPcGVyYXRvcjogRmlsdGVyaW5nTG9naWM7XG4gICAgcHVibGljIGFmdGVyT3BlcmF0b3I6IEZpbHRlcmluZ0xvZ2ljO1xuICAgIHB1YmxpYyBpc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgcHVibGljIGlzVmlzaWJsZSA9IHRydWU7XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgY29sdW1uc1dpdGhDb21wbGV4RmlsdGVyID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgcHJpdmF0ZSBhcmVFdmVudHNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBpc0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgY29sdW1uVG9FeHByZXNzaW9uc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBFeHByZXNzaW9uVUlbXT4oKTtcbiAgICBwcml2YXRlIF9kYXRlUGlwZTogSWd4RGF0ZVBpcGVDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBjb2x1bW5TdGFydEluZGV4ID0gLTE7XG5cbiAgICBwdWJsaWMgZ3JpZElkOiBzdHJpbmc7XG4gICAgcHVibGljIGlzRmlsdGVyUm93VmlzaWJsZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBmaWx0ZXJlZENvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgc2VsZWN0ZWRFeHByZXNzaW9uOiBJRmlsdGVyaW5nRXhwcmVzc2lvbiA9IG51bGw7XG4gICAgcHVibGljIGNvbHVtblRvRm9jdXM6IElneENvbHVtbkNvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHNob3VsZEZvY3VzTmV4dCA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb2x1bW5Ub01vcmVJY29uSGlkZGVuID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cbiAgICBncmlkOiBJZ3hHcmlkQmFzZUNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+LCBwcml2YXRlIGljb25TZXJ2aWNlOiBJZ3hJY29uU2VydmljZSkge31cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRpc3BsYXlDb250YWluZXJXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgMTApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdyaWQucGFyZW50VmlydERpci5nZXRIb3Jpem9udGFsU2Nyb2xsKCkuc2Nyb2xsTGVmdCwgMTApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXJlQWxsQ29sdW1uc0luVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgMTApID09PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhY29sLmNvbHVtbkdyb3VwICYmIGNvbC5maWx0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHVucGlubmVkQ29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhY29sLmNvbHVtbkdyb3VwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGVQaXBlKCk6IElneERhdGVQaXBlQ29tcG9uZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRlUGlwZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0ZVBpcGUgPSBuZXcgSWd4RGF0ZVBpcGVDb21wb25lbnQodGhpcy5ncmlkLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVQaXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBncmlkJ3MgZXZlbnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdWJzY3JpYmVUb0V2ZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFyZUV2ZW50c1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXJlRXZlbnRzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5vbkNvbHVtblJlc2l6ZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnRBcmdzOiBJQ29sdW1uUmVzaXplRXZlbnRBcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJpbmdDZWxsKGV2ZW50QXJncy5jb2x1bW4pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGV2ZW50QXJnczogSUZvck9mU3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRBcmdzLnN0YXJ0SW5kZXggIT09IHRoaXMuY29sdW1uU3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblN0YXJ0SW5kZXggPSBldmVudEFyZ3Muc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlckNlbGxMaXN0LmZvckVhY2goKGZpbHRlckNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNlbGwudXBkYXRlRmlsdGVyQ2VsbEFyZWEoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtblRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0ZpbHRlckNlbGxDaGlwKHRoaXMuY29sdW1uVG9Gb2N1cywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRvRm9jdXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdyaWQub25Db2x1bW5Nb3ZpbmdFbmQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlckNlbGxMaXN0LmZvckVhY2goKGZpbHRlckNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ2VsbC51cGRhdGVGaWx0ZXJDZWxsQXJlYSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gY3JlYXRlIGV4cHJlc3Npb25zVHJlZSBhbmQgZmlsdGVyIGdyaWQgdXNlZCBpbiBib3RoIGZpbHRlciBtb2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVySW50ZXJuYWwoZmllbGQ6IHN0cmluZywgZXhwcmVzc2lvbnM6IEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IEFycmF5PEV4cHJlc3Npb25VST4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNGaWx0ZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIGxldCBleHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGlmIChleHByZXNzaW9ucyBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNUcmVlID0gZXhwcmVzc2lvbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHByZXNzaW9uc1RyZWUgPSB0aGlzLmNyZWF0ZVNpbXBsZUZpbHRlcmluZ1RyZWUoZmllbGQsIGV4cHJlc3Npb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVyKGZpZWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyKGZpZWxkLCBudWxsLCBleHByZXNzaW9uc1RyZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGUgZmlsdGVyaW5nIG9uIHRoZSBncmlkLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXIoZmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSwgY29uZGl0aW9uT3JFeHByZXNzaW9uVHJlZT86IElGaWx0ZXJpbmdPcGVyYXRpb24gfCBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLFxuICAgICAgICBpZ25vcmVDYXNlPzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdyaWRBUEkuZ2V0X2NvbHVtbl9ieV9uYW1lKGZpZWxkKTtcbiAgICAgICAgY29uc3QgZmlsdGVyaW5nSWdub3JlQ2FzZSA9IGlnbm9yZUNhc2UgfHwgKGNvbCA/IGNvbC5maWx0ZXJpbmdJZ25vcmVDYXNlIDogZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb25kaXRpb25PckV4cHJlc3Npb25UcmVlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuZmlsdGVyKGZpZWxkLCB2YWx1ZSwgY29uZGl0aW9uT3JFeHByZXNzaW9uVHJlZSwgZmlsdGVyaW5nSWdub3JlQ2FzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWVGb3JDb2x1bW4gPSB0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLmZpbmQoZmllbGQpO1xuICAgICAgICAgICAgaWYgKCFleHByZXNzaW9uc1RyZWVGb3JDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29uZGl0aW9uIG9yIEV4cHJlc3Npb24gVHJlZSEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbnNUcmVlRm9yQ29sdW1uIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmZpbHRlcihmaWVsZCwgdmFsdWUsIGV4cHJlc3Npb25zVHJlZUZvckNvbHVtbiwgZmlsdGVyaW5nSWdub3JlQ2FzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25Gb3JDb2x1bW4gPSBleHByZXNzaW9uc1RyZWVGb3JDb2x1bW4gYXMgSUZpbHRlcmluZ0V4cHJlc3Npb247XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmZpbHRlcihmaWVsZCwgdmFsdWUsIGV4cHJlc3Npb25Gb3JDb2x1bW4uY29uZGl0aW9uLCBmaWx0ZXJpbmdJZ25vcmVDYXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXJlZCBkYXRhIHRocm91Z2ggdGhlIHBpcGVzIGFuZCB0aGVuIGVtaXQgdGhlIGV2ZW50LlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5ncmlkLm9uRmlsdGVyaW5nRG9uZS5lbWl0KGNvbC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZmlsdGVyIG9mIGEgZ2l2ZW4gY29sdW1uLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcihmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkQVBJLmdldF9jb2x1bW5fYnlfbmFtZShmaWVsZCk7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNGaWx0ZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ3JpZEFQSS5jbGVhcl9maWx0ZXIoZmllbGQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHVwZGF0ZSBmaWx0ZXJlZCBkYXRhIHRocm91Z2ggdGhlIHBpcGVzIGFuZCB0aGVuIGVtaXQgdGhlIGV2ZW50LlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5ncmlkLm9uRmlsdGVyaW5nRG9uZS5lbWl0KG51bGwpKTtcblxuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gdGhpcy5nZXRFeHByZXNzaW9ucyhmaWVsZCk7XG4gICAgICAgICAgICBleHByZXNzaW9ucy5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0ZpbHRlcmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgYWxsIHRoZSBgSWd4Q29sdW1uQ29tcG9uZW50YCBpbiB0aGUgYElneEdyaWRDb21wb25lbnRgIHdpdGggdGhlIHNhbWUgY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXJHbG9iYWwodmFsdWU6IGFueSwgY29uZGl0aW9uLCBpZ25vcmVDYXNlPykge1xuICAgICAgICB0aGlzLmdyaWRBUEkuZmlsdGVyX2dsb2JhbCh2YWx1ZSwgY29uZGl0aW9uLCBpZ25vcmVDYXNlKTtcblxuICAgICAgICAvLyBXYWl0IGZvciB0aGUgY2hhbmdlIGRldGVjdGlvbiB0byB1cGRhdGUgZmlsdGVyZWQgZGF0YSB0aHJvdWdoIHRoZSBwaXBlcyBhbmQgdGhlbiBlbWl0IHRoZSBldmVudC5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZ3JpZC5vbkZpbHRlcmluZ0RvbmUuZW1pdCh0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZmlsdGVyaW5nIFNWRyBpY29ucyBpbiB0aGUgaWNvbiBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3RlclNWR0ljb25zKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IGljb24gb2YgaWNvbnMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pY29uU2VydmljZS5pc1N2Z0ljb25DYWNoZWQoaWNvbi5uYW1lLCBGSUxURVJJTkdfSUNPTlNfRk9OVF9TRVQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU2VydmljZS5hZGRTdmdJY29uRnJvbVRleHQoaWNvbi5uYW1lLCBpY29uLnZhbHVlLCBGSUxURVJJTkdfSUNPTlNfRk9OVF9TRVQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgRXhwcmVzc2lvblVJIGFycmF5IGZvciBhIGdpdmVuIGNvbHVtbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXhwcmVzc2lvbnMoY29sdW1uSWQ6IHN0cmluZyk6IEV4cHJlc3Npb25VSVtdIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtblRvRXhwcmVzc2lvbnNNYXAuaGFzKGNvbHVtbklkKSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCgoY29sKSA9PiBjb2wuZmllbGQgPT09IGNvbHVtbklkKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25VSXMgPSBuZXcgQXJyYXk8RXhwcmVzc2lvblVJPigpO1xuXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRXhwcmVzc2lvbnNMaXN0KGNvbHVtbi5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUub3BlcmF0b3IsIGV4cHJlc3Npb25VSXMpO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5Ub0V4cHJlc3Npb25zTWFwLnNldChjb2x1bW5JZCwgZXhwcmVzc2lvblVJcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uVUlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uVG9FeHByZXNzaW9uc01hcC5nZXQoY29sdW1uSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3JlYXRlcyBhbGwgRXhwcmVzc2lvblVJcyBmb3IgYWxsIGNvbHVtbnMuIEV4ZWN1dGVkIGFmdGVyIGZpbHRlcmluZyB0byByZWZyZXNoIHRoZSBjYWNoZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaEV4cHJlc3Npb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1dpdGhDb21wbGV4RmlsdGVyLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1uVG9FeHByZXNzaW9uc01hcC5mb3JFYWNoKCh2YWx1ZTogRXhwcmVzc2lvblVJW10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCgoY29sKSA9PiBjb2wuZmllbGQgPT09IGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFeHByZXNzaW9uc0xpc3QoY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgdGhpcy5ncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5vcGVyYXRvciwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IHRoaXMuaXNGaWx0ZXJpbmdUcmVlQ29tcGxleChjb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zV2l0aENvbXBsZXhGaWx0ZXIuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcmluZ0NlbGwoY29sdW1uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRvRXhwcmVzc2lvbnNNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gRXhwcmVzc2lvblVJIGZvciBhIGdpdmVuIGNvbHVtbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlRXhwcmVzc2lvbihjb2x1bW5JZDogc3RyaW5nLCBpbmRleFRvUmVtb3ZlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbnNMaXN0ID0gdGhpcy5nZXRFeHByZXNzaW9ucyhjb2x1bW5JZCk7XG5cbiAgICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPT09IDAgJiYgZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGV4cHJlc3Npb25zTGlzdFsxXS5iZWZvcmVPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXhUb1JlbW92ZSA9PT0gZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGV4cHJlc3Npb25zTGlzdFtpbmRleFRvUmVtb3ZlIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHByZXNzaW9uc0xpc3RbaW5kZXhUb1JlbW92ZSAtIDFdLmFmdGVyT3BlcmF0b3IgPSBleHByZXNzaW9uc0xpc3RbaW5kZXhUb1JlbW92ZSArIDFdLmJlZm9yZU9wZXJhdG9yO1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNMaXN0WzBdLmJlZm9yZU9wZXJhdG9yID0gbnVsbDtcbiAgICAgICAgICAgIGV4cHJlc3Npb25zTGlzdFtleHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBleHByZXNzaW9uc0xpc3Quc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGZpbHRlcmluZyB0cmVlIGZvciBhIGdpdmVuIGNvbHVtbiBmcm9tIGV4aXN0aW5nIEV4cHJlc3Npb25VSXMuXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZVNpbXBsZUZpbHRlcmluZ1RyZWUoY29sdW1uSWQ6IHN0cmluZywgZXhwcmVzc2lvblVJTGlzdCA9IG51bGwpOiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc0xpc3QgPSBleHByZXNzaW9uVUlMaXN0ID8gZXhwcmVzc2lvblVJTGlzdCA6IHRoaXMuZ2V0RXhwcmVzc2lvbnMoY29sdW1uSWQpO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKEZpbHRlcmluZ0xvZ2ljLk9yLCBjb2x1bW5JZCk7XG4gICAgICAgIGxldCBjdXJyQW5kQnJhbmNoOiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGxldCBjdXJyRXhwcmVzc2lvblVJOiBFeHByZXNzaW9uVUk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzaW9uc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJFeHByZXNzaW9uVUkgPSBleHByZXNzaW9uc0xpc3RbaV07XG5cbiAgICAgICAgICAgIGlmICghY3VyckV4cHJlc3Npb25VSS5leHByZXNzaW9uLmNvbmRpdGlvbi5pc1VuYXJ5ICYmIGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VyckV4cHJlc3Npb25VSS5hZnRlck9wZXJhdG9yID09PSBGaWx0ZXJpbmdMb2dpYy5BbmQgJiYgIWN1cnJBbmRCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaCA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kLCBjb2x1bW5JZCk7XG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJBbmRCcmFuY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKChjdXJyRXhwcmVzc2lvblVJLmJlZm9yZU9wZXJhdG9yID09PSB1bmRlZmluZWQgfHwgY3VyckV4cHJlc3Npb25VSS5iZWZvcmVPcGVyYXRvciA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICBjdXJyRXhwcmVzc2lvblVJLmJlZm9yZU9wZXJhdG9yID09PSBGaWx0ZXJpbmdMb2dpYy5PcikgJiZcbiAgICAgICAgICAgICAgICBjdXJyRXhwcmVzc2lvblVJLmFmdGVyT3BlcmF0b3IgPT09IEZpbHRlcmluZ0xvZ2ljLkFuZCkge1xuXG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaCA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuQW5kLCBjb2x1bW5JZCk7XG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLnB1c2goY3VyckFuZEJyYW5jaCk7XG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaC5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbik7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckV4cHJlc3Npb25VSS5iZWZvcmVPcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuQW5kKSB7XG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaC5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKGN1cnJFeHByZXNzaW9uVUkuZXhwcmVzc2lvbik7XG4gICAgICAgICAgICAgICAgY3VyckFuZEJyYW5jaCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNUcmVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBhIGNvbXBsZXggZmlsdGVyIGlzIGFwcGxpZWQgdG8gYSBnaXZlbiBjb2x1bW4uXG4gICAgICovXG4gICAgcHVibGljIGlzRmlsdGVyQ29tcGxleChjb2x1bW5JZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnNXaXRoQ29tcGxleEZpbHRlci5oYXMoY29sdW1uSWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5zLmZpbmQoKGNvbCkgPT4gY29sLmZpZWxkID09PSBjb2x1bW5JZCk7XG4gICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IHRoaXMuaXNGaWx0ZXJpbmdUcmVlQ29tcGxleChjb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTtcbiAgICAgICAgaWYgKGlzQ29tcGxleCkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zV2l0aENvbXBsZXhGaWx0ZXIuYWRkKGNvbHVtbklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0NvbXBsZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBGaWx0ZXJpbmdMb2dpYyBvcGVyYXRvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T3BlcmF0b3JBc1N0cmluZyhvcGVyYXRvcjogRmlsdGVyaW5nTG9naWMpOiBhbnkge1xuICAgICAgICBpZiAob3BlcmF0b3IgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2ZpbHRlcl9vcGVyYXRvcl9hbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5ncy5pZ3hfZ3JpZF9maWx0ZXJfb3BlcmF0b3Jfb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgbGFiZWwgb2YgYSBjaGlwIGZyb20gYSBnaXZlbiBmaWx0ZXJpbmcgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q2hpcExhYmVsKGV4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uKTogYW55IHtcbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY29uZGl0aW9uLmlzVW5hcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzW2BpZ3hfZ3JpZF9maWx0ZXJfJHtleHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lfWBdIHx8IGV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbi5zZWFyY2hWYWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZXhwcmVzc2lvbi5zZWFyY2hWYWwsIHRoaXMuZ3JpZC5sb2NhbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb24uc2VhcmNoVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29udGVudCBvZiBhIGZpbHRlckNlbGwuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUZpbHRlcmluZ0NlbGwoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyQ2VsbCA9IGNvbHVtbi5maWx0ZXJDZWxsO1xuICAgICAgICBpZiAoZmlsdGVyQ2VsbCkge1xuICAgICAgICAgICAgZmlsdGVyQ2VsbC51cGRhdGVGaWx0ZXJDZWxsQXJlYSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgYSBjaGlwIGluIGEgZmlsdGVyQ2VsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXNGaWx0ZXJDZWxsQ2hpcChjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCwgZm9jdXNGaXJzdDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBmaWx0ZXJDZWxsID0gY29sdW1uLmZpbHRlckNlbGw7XG4gICAgICAgIGlmIChmaWx0ZXJDZWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJDZWxsLmZvY3VzQ2hpcChmb2N1c0ZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvY3VzIHRoZSBjbG9zZSBidXR0b24gaW4gdGhlIGZpbHRlcmluZyByb3cuXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzRmlsdGVyUm93Q2xvc2VCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdSb3cuY2xvc2VCdXR0b24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIGEgZmlsdGVyQ2VsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9GaWx0ZXJDZWxsKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBzaG91bGRGb2N1c05leHQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgICAgICAgdGhpcy5jb2x1bW5Ub0ZvY3VzID0gY29sdW1uO1xuICAgICAgICB0aGlzLnNob3VsZEZvY3VzTmV4dCA9IHNob3VsZEZvY3VzTmV4dDtcblxuICAgICAgICBsZXQgY3VycmVudENvbHVtblJpZ2h0ID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRDb2x1bW5MZWZ0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudW5waW5uZWRDb2x1bW5zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY3VycmVudENvbHVtblJpZ2h0ICs9IHBhcnNlSW50KHRoaXMudW5waW5uZWRDb2x1bW5zW2luZGV4XS53aWR0aCwgMTApO1xuICAgICAgICAgICAgaWYgKHRoaXMudW5waW5uZWRDb2x1bW5zW2luZGV4XSA9PT0gY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbHVtbkxlZnQgPSBjdXJyZW50Q29sdW1uUmlnaHQgLSBwYXJzZUludCh0aGlzLnVucGlubmVkQ29sdW1uc1tpbmRleF0ud2lkdGgsIDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvck9mRGlyID0gdGhpcy5ncmlkLmhlYWRlckNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmRpc3BsYXlDb250YWluZXJXaWR0aCArIHRoaXMuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQ7XG4gICAgICAgIGlmIChzaG91bGRGb2N1c05leHQpIHtcbiAgICAgICAgICAgIGZvck9mRGlyLmdldEhvcml6b250YWxTY3JvbGwoKS5zY3JvbGxMZWZ0ICs9IGN1cnJlbnRDb2x1bW5SaWdodCAtIHdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yT2ZEaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnNjcm9sbExlZnQgPSBjdXJyZW50Q29sdW1uTGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNGaWx0ZXJpbmdUcmVlQ29tcGxleChleHByZXNzaW9uczogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB8IElGaWx0ZXJpbmdFeHByZXNzaW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZXhwcmVzc2lvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHByZXNzaW9ucyBpbnN0YW5jZW9mIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbnNUcmVlID0gZXhwcmVzc2lvbnMgYXMgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25zVHJlZS5vcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuT3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmRPcGVyYXRvcnNDb3VudCA9IHRoaXMuZ2V0Q2hpbGRBbmRPcGVyYXRvcnNDb3VudChleHByZXNzaW9uc1RyZWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gaGF2aW5nIG1vcmUgdGhhdCAnQW5kJyBhbmQgb3BlcmF0b3IgaW4gdGhlIHN1Yi10cmVlIG1lYW5zIHRoYXQgdGhlIGZpbHRlciBjb3VsZCBub3QgYmUgcmVwcmVzZW50ZWQgd2l0aG91dCBwYXJlbnRoZXNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gYW5kT3BlcmF0b3JzQ291bnQgPiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXNDb21wbGV4ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlzQ29tcGxleCA9IGlzQ29tcGxleCB8fCB0aGlzLmlzRmlsdGVyaW5nVHJlZUNvbXBsZXgoZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGlzQ29tcGxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkQW5kT3BlcmF0b3JzQ291bnQoZXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpOiBudW1iZXIge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgb3BlcmFuZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzaW9ucy5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3BlcmFuZCA9IGV4cHJlc3Npb25zW2ldO1xuICAgICAgICAgICAgaWYgKG9wZXJhbmQgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmFuZC5vcGVyYXRvciA9PT0gRmlsdGVyaW5nTG9naWMuQW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnQgPSBjb3VudCArIHRoaXMuZ2V0Q2hpbGRBbmRPcGVyYXRvcnNDb3VudChvcGVyYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVFeHByZXNzaW9uc0xpc3QoZXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfCBJRmlsdGVyaW5nRXhwcmVzc2lvbixcbiAgICAgICAgb3BlcmF0b3I6IEZpbHRlcmluZ0xvZ2ljLFxuICAgICAgICBleHByZXNzaW9uc1VJczogRXhwcmVzc2lvblVJW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUV4cHJlc3Npb25zTGlzdFJlY3Vyc2l2ZShleHByZXNzaW9ucywgb3BlcmF0b3IsIGV4cHJlc3Npb25zVUlzKTtcblxuICAgICAgICAvLyBUaGUgYmVmb3JlT3BlcmF0b3Igb2YgdGhlIGZpcnN0IGV4cHJlc3Npb24gYW5kIHRoZSBhZnRlck9wZXJhdG9yIG9mIHRoZSBsYXN0IGV4cHJlc3Npb24gc2hvdWxkIGJlIG51bGxcbiAgICAgICAgaWYgKGV4cHJlc3Npb25zVUlzLmxlbmd0aCkge1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNVSXNbZXhwcmVzc2lvbnNVSXMubGVuZ3RoIC0gMV0uYWZ0ZXJPcGVyYXRvciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlRXhwcmVzc2lvbnNMaXN0UmVjdXJzaXZlKGV4cHJlc3Npb25zOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHwgSUZpbHRlcmluZ0V4cHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogRmlsdGVyaW5nTG9naWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uc1VJczogRXhwcmVzc2lvblVJW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFleHByZXNzaW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb25zIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBleHByZXNzaW9ucyBhcyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFeHByZXNzaW9uc0xpc3RSZWN1cnNpdmUoZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzW2ldLCBleHByZXNzaW9uc1RyZWUub3BlcmF0b3IsIGV4cHJlc3Npb25zVUlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uc1VJcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uc1VJc1tleHByZXNzaW9uc1VJcy5sZW5ndGggLSAxXS5hZnRlck9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBleHByVUkgPSBuZXcgRXhwcmVzc2lvblVJKCk7XG4gICAgICAgICAgICBleHByVUkuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zIGFzIElGaWx0ZXJpbmdFeHByZXNzaW9uO1xuICAgICAgICAgICAgZXhwclVJLmFmdGVyT3BlcmF0b3IgPSBvcGVyYXRvcjtcblxuICAgICAgICAgICAgY29uc3QgcHJldkV4cHJVSSA9IGV4cHJlc3Npb25zVUlzW2V4cHJlc3Npb25zVUlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKHByZXZFeHByVUkpIHtcbiAgICAgICAgICAgICAgICBleHByVUkuYmVmb3JlT3BlcmF0b3IgPSBwcmV2RXhwclVJLmFmdGVyT3BlcmF0b3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb25zVUlzLnB1c2goZXhwclVJKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0ZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uVHJlZSA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgIGlmICghZXhwcmVzc2lvblRyZWUuZmlsdGVyaW5nT3BlcmFuZHMgfHwgIWV4cHJlc3Npb25UcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXhwcjogYW55O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcmVzc2lvblRyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGV4cHIgPSBleHByZXNzaW9uVHJlZS5maWx0ZXJpbmdPcGVyYW5kc1tpXTtcblxuICAgICAgICAgICAgaWYgKChleHByIGluc3RhbmNlb2YgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJUcmVlID0gZXhwciBhcyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICAgICAgICAgICAgaWYgKGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzICYmIGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19