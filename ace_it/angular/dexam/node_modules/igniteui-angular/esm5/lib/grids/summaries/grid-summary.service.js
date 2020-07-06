/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataUtil } from '../../data-operations/data-util';
import { cloneArray } from '../../core/utils';
/**
 * @hidden
 */
var IgxGridSummaryService = /** @class */ (function () {
    function IgxGridSummaryService() {
        this.summaryCacheMap = new Map();
        this.rootSummaryID = 'igxGridRootSummary';
        this.summaryHeight = 0;
        this.maxSummariesLenght = 0;
        this.groupingExpressions = [];
        this.retriggerRootPipe = 0;
        this.deleteOperation = false;
    }
    /**
     * @return {?}
     */
    IgxGridSummaryService.prototype.recalculateSummaries = /**
     * @return {?}
     */
    function () {
        this.resetSummaryHeight();
        this.grid.calculateGridHeight();
        this.grid.cdr.detectChanges();
    };
    /**
     * @param {?=} args
     * @return {?}
     */
    IgxGridSummaryService.prototype.clearSummaryCache = /**
     * @param {?=} args
     * @return {?}
     */
    function (args) {
        if (!this.summaryCacheMap.size) {
            return;
        }
        if (!args) {
            this.summaryCacheMap.clear();
            if (this.grid && this.grid.rootSummariesEnabled) {
                this.retriggerRootPipe++;
            }
            return;
        }
        if (args.data) {
            /** @type {?} */
            var rowID = this.grid.primaryKey ? args.data[this.grid.primaryKey] : args.data;
            this.removeSummaries(rowID);
        }
        if (args.rowID !== undefined && args.rowID !== null) {
            /** @type {?} */
            var columnName = args.cellID ? this.grid.columnList.find(function (col) { return col.index === args.cellID.columnID; }).field : undefined;
            if (columnName && this.grid.rowEditable) {
                return;
            }
            /** @type {?} */
            var isGroupedColumn = this.grid.groupingExpressions &&
                this.grid.groupingExpressions.map(function (expr) { return expr.fieldName; }).indexOf(columnName) !== -1;
            if (columnName && isGroupedColumn) {
                columnName = undefined;
            }
            this.removeSummaries(args.rowID, columnName);
        }
    };
    /**
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    IgxGridSummaryService.prototype.removeSummaries = /**
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    function (rowID, columnName) {
        var _this = this;
        this.deleteSummaryCache(this.rootSummaryID, columnName);
        if (this.summaryCacheMap.size === 1 && this.summaryCacheMap.has(this.rootSummaryID)) {
            return;
        }
        if (this.isTreeGrid) {
            if (this.grid.transactions.enabled && this.deleteOperation) {
                this.deleteOperation = false;
                // TODO: this.removeChildRowSummaries(rowID, columnName);
                this.summaryCacheMap.clear();
                return;
            }
            this.removeAllTreeGridSummaries(rowID, columnName);
        }
        else if (this.isHierarchicalGrid) {
            if (this.grid.transactions.enabled && this.deleteOperation) {
                this.deleteOperation = false;
                this.summaryCacheMap.clear();
            }
        }
        else {
            /** @type {?} */
            var summaryIds = this.getSummaryID(rowID, this.grid.groupingExpressions);
            summaryIds.forEach(function (id) {
                _this.deleteSummaryCache(id, columnName);
            });
        }
    };
    /**
     * @param {?} columnName
     * @return {?}
     */
    IgxGridSummaryService.prototype.removeSummariesCachePerColumn = /**
     * @param {?} columnName
     * @return {?}
     */
    function (columnName) {
        this.summaryCacheMap.forEach(function (cache) {
            if (cache.get(columnName)) {
                cache.delete(columnName);
            }
        });
        if (this.grid.rootSummariesEnabled) {
            this.retriggerRootPipe++;
        }
    };
    /**
     * @return {?}
     */
    IgxGridSummaryService.prototype.calcMaxSummaryHeight = /**
     * @return {?}
     */
    function () {
        if (this.summaryHeight) {
            return this.summaryHeight;
        }
        if (!this.grid.data) {
            return this.summaryHeight = 0;
        }
        /** @type {?} */
        var maxSummaryLength = 0;
        this.grid.columnList.filter(function (col) { return col.hasSummary && !col.hidden; }).forEach(function (column) {
            /** @type {?} */
            var getCurrentSummaryColumn = column.summaries.operate([]).length;
            if (getCurrentSummaryColumn) {
                if (maxSummaryLength < getCurrentSummaryColumn) {
                    maxSummaryLength = getCurrentSummaryColumn;
                }
            }
        });
        this.maxSummariesLenght = maxSummaryLength;
        this.summaryHeight = maxSummaryLength * this.grid.defaultSummaryHeight;
        return this.summaryHeight;
    };
    /**
     * @param {?} rowID
     * @param {?} data
     * @return {?}
     */
    IgxGridSummaryService.prototype.calculateSummaries = /**
     * @param {?} rowID
     * @param {?} data
     * @return {?}
     */
    function (rowID, data) {
        /** @type {?} */
        var rowSummaries = this.summaryCacheMap.get(rowID);
        if (!rowSummaries) {
            rowSummaries = new Map();
            this.summaryCacheMap.set(rowID, rowSummaries);
        }
        if (!this.hasSummarizedColumns || !data) {
            return rowSummaries;
        }
        this.grid.columnList.filter(function (col) { return col.hasSummary; }).forEach(function (column) {
            if (!rowSummaries.get(column.field)) {
                /** @type {?} */
                var columnValues = data.map(function (record) { return record[column.field]; });
                rowSummaries.set(column.field, column.summaries.operate(columnValues));
            }
        });
        return rowSummaries;
    };
    /**
     * @return {?}
     */
    IgxGridSummaryService.prototype.resetSummaryHeight = /**
     * @return {?}
     */
    function () {
        this.summaryHeight = 0;
        ((/** @type {?} */ (this.grid)))._summaryPipeTrigger++;
        if (this.grid.rootSummariesEnabled) {
            this.retriggerRootPipe++;
        }
    };
    /**
     * @param {?} groupingArgs
     * @return {?}
     */
    IgxGridSummaryService.prototype.updateSummaryCache = /**
     * @param {?} groupingArgs
     * @return {?}
     */
    function (groupingArgs) {
        if (this.summaryCacheMap.size === 0 || !this.hasSummarizedColumns) {
            return;
        }
        if (this.groupingExpressions.length === 0) {
            this.groupingExpressions = groupingArgs.expressions.map(function (record) { return record.fieldName; });
            return;
        }
        if (groupingArgs.length === 0) {
            this.groupingExpressions = [];
            this.clearSummaryCache();
            return;
        }
        this.compareGroupingExpressions(this.groupingExpressions, groupingArgs);
        this.groupingExpressions = groupingArgs.expressions.map(function (record) { return record.fieldName; });
    };
    Object.defineProperty(IgxGridSummaryService.prototype, "hasSummarizedColumns", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var summarizedColumns = this.grid.columnList.filter(function (col) { return col.hasSummary && !col.hidden; });
            return summarizedColumns.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} id
     * @param {?} columnName
     * @return {?}
     */
    IgxGridSummaryService.prototype.deleteSummaryCache = /**
     * @private
     * @param {?} id
     * @param {?} columnName
     * @return {?}
     */
    function (id, columnName) {
        if (this.summaryCacheMap.get(id)) {
            /** @type {?} */
            var filteringApplied = columnName && this.grid.filteringExpressionsTree &&
                this.grid.filteringExpressionsTree.filteringOperands.map(function (expr) { return expr.fieldName; }).indexOf(columnName) !== -1;
            if (columnName && this.summaryCacheMap.get(id).get(columnName) && !filteringApplied) {
                this.summaryCacheMap.get(id).delete(columnName);
            }
            else {
                this.summaryCacheMap.delete(id);
            }
            if (id === this.rootSummaryID && this.grid.rootSummariesEnabled) {
                this.retriggerRootPipe++;
            }
        }
    };
    /**
     * @private
     * @param {?} rowID
     * @param {?} groupingExpressions
     * @return {?}
     */
    IgxGridSummaryService.prototype.getSummaryID = /**
     * @private
     * @param {?} rowID
     * @param {?} groupingExpressions
     * @return {?}
     */
    function (rowID, groupingExpressions) {
        var _this = this;
        if (groupingExpressions.length === 0) {
            return [];
        }
        /** @type {?} */
        var summaryIDs = [];
        /** @type {?} */
        var data = this.grid.data;
        if (this.grid.transactions.enabled) {
            data = DataUtil.mergeTransactions(cloneArray(this.grid.data), this.grid.transactions.getAggregatedChanges(true), this.grid.primaryKey);
        }
        /** @type {?} */
        var rowData = this.grid.primaryKey ? data.find(function (rec) { return rec[_this.grid.primaryKey] === rowID; }) : rowID;
        /** @type {?} */
        var id = '{ ';
        groupingExpressions.forEach(function (expr) {
            id += "'" + expr.fieldName + "': '" + rowData[expr.fieldName] + "'";
            summaryIDs.push(id.concat(' }'));
            id += ', ';
        });
        return summaryIDs;
    };
    /**
     * @private
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    IgxGridSummaryService.prototype.removeAllTreeGridSummaries = /**
     * @private
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    function (rowID, columnName) {
        /** @type {?} */
        var row = this.grid.records.get(rowID);
        if (!row) {
            return;
        }
        row = row.children ? row : row.parent;
        while (row) {
            rowID = row.rowID;
            this.deleteSummaryCache(rowID, columnName);
            row = row.parent;
        }
    };
    // TODO: remove only deleted rows
    // TODO: remove only deleted rows
    /**
     * @private
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    IgxGridSummaryService.prototype.removeChildRowSummaries = 
    // TODO: remove only deleted rows
    /**
     * @private
     * @param {?} rowID
     * @param {?=} columnName
     * @return {?}
     */
    function (rowID, columnName) {
    };
    /**
     * @private
     * @param {?} current
     * @param {?} groupingArgs
     * @return {?}
     */
    IgxGridSummaryService.prototype.compareGroupingExpressions = /**
     * @private
     * @param {?} current
     * @param {?} groupingArgs
     * @return {?}
     */
    function (current, groupingArgs) {
        var _this = this;
        /** @type {?} */
        var newExpressions = groupingArgs.expressions.map(function (record) { return record.fieldName; });
        /** @type {?} */
        var removedCols = groupingArgs.ungroupedColumns;
        if (current.length <= newExpressions.length) {
            /** @type {?} */
            var newExpr = newExpressions.slice(0, current.length).toString();
            if (current.toString() !== newExpr) {
                this.clearSummaryCache();
            }
        }
        else {
            /** @type {?} */
            var currExpr = current.slice(0, newExpressions.length).toString();
            if (currExpr !== newExpressions.toString()) {
                this.clearSummaryCache();
                return;
            }
            removedCols.map(function (col) { return col.field; }).forEach(function (colName) {
                _this.summaryCacheMap.forEach(function (cache, id) {
                    if (id.indexOf(colName) !== -1) {
                        _this.summaryCacheMap.delete(id);
                    }
                });
            });
        }
    };
    Object.defineProperty(IgxGridSummaryService.prototype, "isTreeGrid", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.grid.nativeElement.tagName.toLowerCase() === 'igx-tree-grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridSummaryService.prototype, "isHierarchicalGrid", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.grid.nativeElement.tagName.toLowerCase() === 'igx-hierarchical-grid';
        },
        enumerable: true,
        configurable: true
    });
    IgxGridSummaryService.decorators = [
        { type: Injectable }
    ];
    return IgxGridSummaryService;
}());
export { IgxGridSummaryService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxGridSummaryService.prototype.summaryCacheMap;
    /** @type {?} */
    IgxGridSummaryService.prototype.grid;
    /** @type {?} */
    IgxGridSummaryService.prototype.rootSummaryID;
    /** @type {?} */
    IgxGridSummaryService.prototype.summaryHeight;
    /** @type {?} */
    IgxGridSummaryService.prototype.maxSummariesLenght;
    /** @type {?} */
    IgxGridSummaryService.prototype.groupingExpressions;
    /** @type {?} */
    IgxGridSummaryService.prototype.retriggerRootPipe;
    /** @type {?} */
    IgxGridSummaryService.prototype.deleteOperation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zdW1tYXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL3N1bW1hcmllcy9ncmlkLXN1bW1hcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRzlDO0lBQUE7UUFFYyxvQkFBZSxHQUFvQyxJQUFJLEdBQUcsRUFBMkMsQ0FBQztRQUV6RyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBcU5uQyxDQUFDOzs7O0lBbk5VLG9EQUFvQjs7O0lBQTNCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0saURBQWlCOzs7O0lBQXhCLFVBQXlCLElBQUs7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFD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bnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hTdW1tYXJ5UmVzdWx0IH0gZnJvbSAnLi9ncmlkLXN1bW1hcnknO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcblxuLyoqIEBoaWRkZW4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkU3VtbWFyeVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdW1tYXJ5Q2FjaGVNYXA6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIGFueVtdPj4gPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgSWd4U3VtbWFyeVJlc3VsdFtdPj4oKTtcbiAgICBwdWJsaWMgZ3JpZDtcbiAgICBwdWJsaWMgcm9vdFN1bW1hcnlJRCA9ICdpZ3hHcmlkUm9vdFN1bW1hcnknO1xuICAgIHB1YmxpYyBzdW1tYXJ5SGVpZ2h0ID0gMDtcbiAgICBwdWJsaWMgbWF4U3VtbWFyaWVzTGVuZ2h0ID0gMDtcbiAgICBwdWJsaWMgZ3JvdXBpbmdFeHByZXNzaW9ucyA9IFtdO1xuICAgIHB1YmxpYyByZXRyaWdnZXJSb290UGlwZSA9IDA7XG4gICAgcHVibGljIGRlbGV0ZU9wZXJhdGlvbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHJlY2FsY3VsYXRlU3VtbWFyaWVzKCkge1xuICAgICAgICB0aGlzLnJlc2V0U3VtbWFyeUhlaWdodCgpO1xuICAgICAgICB0aGlzLmdyaWQuY2FsY3VsYXRlR3JpZEhlaWdodCgpO1xuICAgICAgICB0aGlzLmdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTdW1tYXJ5Q2FjaGUoYXJncz8pIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1bW1hcnlDYWNoZU1hcC5zaXplKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmNsZWFyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMuZ3JpZC5yb290U3VtbWFyaWVzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmV0cmlnZ2VyUm9vdFBpcGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJRCA9IHRoaXMuZ3JpZC5wcmltYXJ5S2V5ID8gYXJncy5kYXRhW3RoaXMuZ3JpZC5wcmltYXJ5S2V5XSA6IGFyZ3MuZGF0YTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3VtbWFyaWVzKHJvd0lEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5yb3dJRCAhPT0gdW5kZWZpbmVkICYmIGFyZ3Mucm93SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5OYW1lID0gYXJncy5jZWxsSUQgPyB0aGlzLmdyaWQuY29sdW1uTGlzdC5maW5kKGNvbCA9PiBjb2wuaW5kZXggPT09IGFyZ3MuY2VsbElELmNvbHVtbklEKS5maWVsZCA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChjb2x1bW5OYW1lICYmIHRoaXMuZ3JpZC5yb3dFZGl0YWJsZSkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgY29uc3QgaXNHcm91cGVkQ29sdW1uID0gdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMubWFwKGV4cHIgPT4gZXhwci5maWVsZE5hbWUpLmluZGV4T2YoY29sdW1uTmFtZSkgIT09IC0xO1xuICAgICAgICAgICAgaWYgKGNvbHVtbk5hbWUgJiYgaXNHcm91cGVkQ29sdW1uICkge1xuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVN1bW1hcmllcyhhcmdzLnJvd0lELCBjb2x1bW5OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVTdW1tYXJpZXMocm93SUQsIGNvbHVtbk5hbWU/KSB7XG4gICAgICAgIHRoaXMuZGVsZXRlU3VtbWFyeUNhY2hlKHRoaXMucm9vdFN1bW1hcnlJRCwgY29sdW1uTmFtZSk7XG4gICAgICAgIGlmICh0aGlzLnN1bW1hcnlDYWNoZU1hcC5zaXplID09PSAxICYmIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmhhcyh0aGlzLnJvb3RTdW1tYXJ5SUQpKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAodGhpcy5pc1RyZWVHcmlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkICYmIHRoaXMuZGVsZXRlT3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVPcGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzLnJlbW92ZUNoaWxkUm93U3VtbWFyaWVzKHJvd0lELCBjb2x1bW5OYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsVHJlZUdyaWRTdW1tYXJpZXMocm93SUQsIGNvbHVtbk5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIaWVyYXJjaGljYWxHcmlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkICYmIHRoaXMuZGVsZXRlT3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVPcGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBjb25zdCBzdW1tYXJ5SWRzID0gdGhpcy5nZXRTdW1tYXJ5SUQocm93SUQsIHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zKTtcbiAgICAgICAgICAgc3VtbWFyeUlkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3VtbWFyeUNhY2hlKGlkLCBjb2x1bW5OYW1lKTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlU3VtbWFyaWVzQ2FjaGVQZXJDb2x1bW4oY29sdW1uTmFtZSkge1xuICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5mb3JFYWNoKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlLmdldChjb2x1bW5OYW1lKSkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmRlbGV0ZShjb2x1bW5OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucm9vdFN1bW1hcmllc0VuYWJsZWQpIHsgIHRoaXMucmV0cmlnZ2VyUm9vdFBpcGUrKzsgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjTWF4U3VtbWFyeUhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VtbWFyeUhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VtbWFyeUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ3JpZC5kYXRhKSB7cmV0dXJuIHRoaXMuc3VtbWFyeUhlaWdodCA9IDA7IH1cbiAgICAgICAgbGV0IG1heFN1bW1hcnlMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoKGNvbCkgPT4gY29sLmhhc1N1bW1hcnkgJiYgIWNvbC5oaWRkZW4pLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2V0Q3VycmVudFN1bW1hcnlDb2x1bW4gPSBjb2x1bW4uc3VtbWFyaWVzLm9wZXJhdGUoW10pLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChnZXRDdXJyZW50U3VtbWFyeUNvbHVtbikge1xuICAgICAgICAgICAgICAgIGlmIChtYXhTdW1tYXJ5TGVuZ3RoIDwgZ2V0Q3VycmVudFN1bW1hcnlDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4U3VtbWFyeUxlbmd0aCA9IGdldEN1cnJlbnRTdW1tYXJ5Q29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWF4U3VtbWFyaWVzTGVuZ2h0ID0gbWF4U3VtbWFyeUxlbmd0aDtcbiAgICAgICAgdGhpcy5zdW1tYXJ5SGVpZ2h0ID0gIG1heFN1bW1hcnlMZW5ndGggKiB0aGlzLmdyaWQuZGVmYXVsdFN1bW1hcnlIZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bW1hcnlIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGN1bGF0ZVN1bW1hcmllcyhyb3dJRCwgZGF0YSkge1xuICAgICAgICBsZXQgcm93U3VtbWFyaWVzID0gdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuZ2V0KHJvd0lEKTtcbiAgICAgICAgaWYgKCFyb3dTdW1tYXJpZXMpIHtcbiAgICAgICAgICAgIHJvd1N1bW1hcmllcyA9IG5ldyBNYXA8c3RyaW5nLCBJZ3hTdW1tYXJ5UmVzdWx0W10+KCk7XG4gICAgICAgICAgICB0aGlzLnN1bW1hcnlDYWNoZU1hcC5zZXQocm93SUQsIHJvd1N1bW1hcmllcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhc1N1bW1hcml6ZWRDb2x1bW5zIHx8ICFkYXRhKSB7cmV0dXJuIHJvd1N1bW1hcmllczsgfVxuICAgICAgICB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoY29sID0+IGNvbC5oYXNTdW1tYXJ5KS5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGlmICghcm93U3VtbWFyaWVzLmdldChjb2x1bW4uZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFsdWVzID0gZGF0YS5tYXAocmVjb3JkID0+IHJlY29yZFtjb2x1bW4uZmllbGRdKTtcbiAgICAgICAgICAgICAgICByb3dTdW1tYXJpZXMuc2V0KGNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN1bW1hcmllcy5vcGVyYXRlKGNvbHVtblZhbHVlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd1N1bW1hcmllcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRTdW1tYXJ5SGVpZ2h0KCkge1xuICAgICAgICB0aGlzLnN1bW1hcnlIZWlnaHQgPSAwO1xuICAgICAgICAodGhpcy5ncmlkIGFzIGFueSkuX3N1bW1hcnlQaXBlVHJpZ2dlcisrO1xuICAgICAgICBpZiAodGhpcy5ncmlkLnJvb3RTdW1tYXJpZXNFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZ2dlclJvb3RQaXBlKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU3VtbWFyeUNhY2hlKGdyb3VwaW5nQXJncykge1xuICAgICAgICBpZiAodGhpcy5zdW1tYXJ5Q2FjaGVNYXAuc2l6ZSA9PT0gMCB8fCAhdGhpcy5oYXNTdW1tYXJpemVkQ29sdW1ucykgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucyA9IGdyb3VwaW5nQXJncy5leHByZXNzaW9ucy5tYXAocmVjb3JkID0+IHJlY29yZC5maWVsZE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncm91cGluZ0FyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdW1tYXJ5Q2FjaGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBhcmVHcm91cGluZ0V4cHJlc3Npb25zKHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucywgZ3JvdXBpbmdBcmdzKTtcbiAgICAgICAgdGhpcy5ncm91cGluZ0V4cHJlc3Npb25zID0gZ3JvdXBpbmdBcmdzLmV4cHJlc3Npb25zLm1hcChyZWNvcmQgPT4gcmVjb3JkLmZpZWxkTmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNTdW1tYXJpemVkQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc3VtbWFyaXplZENvbHVtbnMgPSB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoY29sID0+IGNvbC5oYXNTdW1tYXJ5ICYmICFjb2wuaGlkZGVuKTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcml6ZWRDb2x1bW5zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVTdW1tYXJ5Q2FjaGUoaWQsIGNvbHVtbk5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VtbWFyeUNhY2hlTWFwLmdldChpZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmluZ0FwcGxpZWQgPSBjb2x1bW5OYW1lICYmIHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5tYXAoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lKS5pbmRleE9mKGNvbHVtbk5hbWUpICE9PSAtMTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5OYW1lICYmIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmdldChpZCkuZ2V0KGNvbHVtbk5hbWUpICYmICFmaWx0ZXJpbmdBcHBsaWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuZ2V0KGlkKS5kZWxldGUoY29sdW1uTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQgPT09IHRoaXMucm9vdFN1bW1hcnlJRCAmJiB0aGlzLmdyaWQucm9vdFN1bW1hcmllc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZ2dlclJvb3RQaXBlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFN1bW1hcnlJRChyb3dJRCwgZ3JvdXBpbmdFeHByZXNzaW9ucykge1xuICAgICAgICBpZiAoZ3JvdXBpbmdFeHByZXNzaW9ucy5sZW5ndGggPT09IDApIHsgcmV0dXJuIFtdOyB9XG4gICAgICAgIGNvbnN0IHN1bW1hcnlJRHMgPSBbXTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdyaWQuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgZGF0YSA9IERhdGFVdGlsLm1lcmdlVHJhbnNhY3Rpb25zKFxuICAgICAgICAgICAgICAgIGNsb25lQXJyYXkodGhpcy5ncmlkLmRhdGEpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZ2V0QWdncmVnYXRlZENoYW5nZXModHJ1ZSksXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnByaW1hcnlLZXlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IHRoaXMuZ3JpZC5wcmltYXJ5S2V5ID8gZGF0YS5maW5kKHJlYyA9PiByZWNbdGhpcy5ncmlkLnByaW1hcnlLZXldID09PSByb3dJRCkgOiByb3dJRDtcbiAgICAgICAgbGV0IGlkID0gJ3sgJztcbiAgICAgICAgZ3JvdXBpbmdFeHByZXNzaW9ucy5mb3JFYWNoKGV4cHIgPT4ge1xuICAgICAgICAgICAgaWQgKz0gYCcke2V4cHIuZmllbGROYW1lfSc6ICcke3Jvd0RhdGFbZXhwci5maWVsZE5hbWVdfSdgO1xuICAgICAgICAgICAgICAgIHN1bW1hcnlJRHMucHVzaChpZC5jb25jYXQoJyB9JykpO1xuICAgICAgICAgICAgICAgIGlkICs9ICcsICc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VtbWFyeUlEcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUFsbFRyZWVHcmlkU3VtbWFyaWVzKHJvd0lELCBjb2x1bW5OYW1lPykge1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5ncmlkLnJlY29yZHMuZ2V0KHJvd0lEKTtcbiAgICAgICAgaWYgKCFyb3cpIHsgcmV0dXJuOyB9XG4gICAgICAgIHJvdyA9IHJvdy5jaGlsZHJlbiA/IHJvdyA6IHJvdy5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChyb3cpIHtcbiAgICAgICAgICAgIHJvd0lEID0gcm93LnJvd0lEO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVTdW1tYXJ5Q2FjaGUocm93SUQsIGNvbHVtbk5hbWUpO1xuICAgICAgICAgICAgcm93ID0gcm93LnBhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IHJlbW92ZSBvbmx5IGRlbGV0ZWQgcm93c1xuICAgIHByaXZhdGUgcmVtb3ZlQ2hpbGRSb3dTdW1tYXJpZXMocm93SUQsIGNvbHVtbk5hbWU/KSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wYXJlR3JvdXBpbmdFeHByZXNzaW9ucyhjdXJyZW50LCBncm91cGluZ0FyZ3MpIHtcbiAgICAgICAgY29uc3QgbmV3RXhwcmVzc2lvbnMgPSBncm91cGluZ0FyZ3MuZXhwcmVzc2lvbnMubWFwKHJlY29yZCA9PiByZWNvcmQuZmllbGROYW1lKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZENvbHMgPSBncm91cGluZ0FyZ3MudW5ncm91cGVkQ29sdW1ucztcbiAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoIDw9IG5ld0V4cHJlc3Npb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbmV3RXhwciA9IG5ld0V4cHJlc3Npb25zLnNsaWNlKDAsIGN1cnJlbnQubGVuZ3RoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQudG9TdHJpbmcoKSAhPT0gbmV3RXhwcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdW1tYXJ5Q2FjaGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJFeHByID0gY3VycmVudC5zbGljZSgwLCBuZXdFeHByZXNzaW9ucy5sZW5ndGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoY3VyckV4cHIgIT09IG5ld0V4cHJlc3Npb25zLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3VtbWFyeUNhY2hlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlZENvbHMubWFwKGNvbCA9PiBjb2wuZmllbGQpLmZvckVhY2goY29sTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJ5Q2FjaGVNYXAuZm9yRWFjaCgoY2FjaGUsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYgKGlkLmluZGV4T2YoY29sTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeUNhY2hlTWFwLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBpc1RyZWVHcmlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LXRyZWUtZ3JpZCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaXNIaWVyYXJjaGljYWxHcmlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWhpZXJhcmNoaWNhbC1ncmlkJztcbiAgICB9XG5cbn1cbiJdfQ==