/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { cloneArray, cloneHierarchicalArray } from '../../core/utils';
import { DataUtil } from '../../data-operations/data-util';
import { GridBaseAPIService } from '../api.service';
/**
 * @hidden
 */
var IgxTreeGridHierarchizingPipe = /** @class */ (function () {
    function IgxTreeGridHierarchizingPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} primaryKey
     * @param {?} foreignKey
     * @param {?} childDataKey
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxTreeGridHierarchizingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} primaryKey
     * @param {?} foreignKey
     * @param {?} childDataKey
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, primaryKey, foreignKey, childDataKey, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var hierarchicalRecords = [];
        /** @type {?} */
        var treeGridRecordsMap = new Map();
        /** @type {?} */
        var flatData = [];
        if (primaryKey && foreignKey) {
            hierarchicalRecords = this.hierarchizeFlatData(id, collection, primaryKey, foreignKey, treeGridRecordsMap, flatData);
        }
        else if (childDataKey) {
            hierarchicalRecords = this.hierarchizeRecursive(id, collection, primaryKey, childDataKey, undefined, flatData, 0, treeGridRecordsMap);
        }
        grid.flatData = flatData;
        grid.records = treeGridRecordsMap;
        grid.rootRecords = hierarchicalRecords;
        return hierarchicalRecords;
    };
    /**
     * @private
     * @param {?} primaryKey
     * @param {?} rowData
     * @return {?}
     */
    IgxTreeGridHierarchizingPipe.prototype.getRowID = /**
     * @private
     * @param {?} primaryKey
     * @param {?} rowData
     * @return {?}
     */
    function (primaryKey, rowData) {
        return primaryKey ? rowData[primaryKey] : rowData;
    };
    /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} primaryKey
     * @param {?} foreignKey
     * @param {?} map
     * @param {?} flatData
     * @return {?}
     */
    IgxTreeGridHierarchizingPipe.prototype.hierarchizeFlatData = /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} primaryKey
     * @param {?} foreignKey
     * @param {?} map
     * @param {?} flatData
     * @return {?}
     */
    function (id, collection, primaryKey, foreignKey, map, flatData) {
        var _this = this;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var missingParentRecords = [];
        collection.forEach(function (row) {
            /** @type {?} */
            var record = {
                rowID: _this.getRowID(primaryKey, row),
                data: row,
                children: []
            };
            /** @type {?} */
            var parent = map.get(row[foreignKey]);
            if (parent) {
                record.parent = parent;
                parent.children.push(record);
            }
            else {
                missingParentRecords.push(record);
            }
            map.set(row[primaryKey], record);
        });
        missingParentRecords.forEach(function (record) {
            /** @type {?} */
            var parent = map.get(record.data[foreignKey]);
            if (parent) {
                record.parent = parent;
                parent.children.push(record);
            }
            else {
                result.push(record);
            }
        });
        this.setIndentationLevels(id, result, 0, flatData);
        return result;
    };
    /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} indentationLevel
     * @param {?} flatData
     * @return {?}
     */
    IgxTreeGridHierarchizingPipe.prototype.setIndentationLevels = /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} indentationLevel
     * @param {?} flatData
     * @return {?}
     */
    function (id, collection, indentationLevel, flatData) {
        for (var i = 0; i < collection.length; i++) {
            /** @type {?} */
            var record = collection[i];
            record.level = indentationLevel;
            record.expanded = this.gridAPI.get_row_expansion_state(record);
            flatData.push(record.data);
            if (record.children && record.children.length > 0) {
                this.setIndentationLevels(id, record.children, indentationLevel + 1, flatData);
            }
        }
    };
    /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} primaryKey
     * @param {?} childDataKey
     * @param {?} parent
     * @param {?} flatData
     * @param {?} indentationLevel
     * @param {?} map
     * @return {?}
     */
    IgxTreeGridHierarchizingPipe.prototype.hierarchizeRecursive = /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} primaryKey
     * @param {?} childDataKey
     * @param {?} parent
     * @param {?} flatData
     * @param {?} indentationLevel
     * @param {?} map
     * @return {?}
     */
    function (id, collection, primaryKey, childDataKey, parent, flatData, indentationLevel, map) {
        /** @type {?} */
        var result = [];
        for (var i = 0; i < collection.length; i++) {
            /** @type {?} */
            var item = collection[i];
            /** @type {?} */
            var record = {
                rowID: this.getRowID(primaryKey, item),
                data: item,
                parent: parent,
                level: indentationLevel
            };
            record.expanded = this.gridAPI.get_row_expansion_state(record);
            flatData.push(item);
            map.set(record.rowID, record);
            record.children = item[childDataKey] ?
                this.hierarchizeRecursive(id, item[childDataKey], primaryKey, childDataKey, record, flatData, indentationLevel + 1, map) :
                undefined;
            result.push(record);
        }
        return result;
    };
    IgxTreeGridHierarchizingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridHierarchizing',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridHierarchizingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridHierarchizingPipe;
}());
export { IgxTreeGridHierarchizingPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridHierarchizingPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
var IgxTreeGridFlatteningPipe = /** @class */ (function () {
    function IgxTreeGridFlatteningPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} id
     * @param {?} expandedLevels
     * @param {?} expandedStates
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxTreeGridFlatteningPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} id
     * @param {?} expandedLevels
     * @param {?} expandedStates
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, id, expandedLevels, expandedStates, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var data = [];
        grid.processedRootRecords = collection;
        grid.processedRecords = new Map();
        this.getFlatDataRecursive(collection, data, expandedLevels, expandedStates, id, true);
        grid.processedExpandedFlatData = data.map(function (r) { return r.data; });
        return data;
    };
    /**
     * @private
     * @param {?} collection
     * @param {?} data
     * @param {?} expandedLevels
     * @param {?} expandedStates
     * @param {?} gridID
     * @param {?} parentExpanded
     * @return {?}
     */
    IgxTreeGridFlatteningPipe.prototype.getFlatDataRecursive = /**
     * @private
     * @param {?} collection
     * @param {?} data
     * @param {?} expandedLevels
     * @param {?} expandedStates
     * @param {?} gridID
     * @param {?} parentExpanded
     * @return {?}
     */
    function (collection, data, expandedLevels, expandedStates, gridID, parentExpanded) {
        if (!collection || !collection.length) {
            return;
        }
        /** @type {?} */
        var grid = this.gridAPI.grid;
        for (var i = 0; i < collection.length; i++) {
            /** @type {?} */
            var hierarchicalRecord = collection[i];
            if (parentExpanded) {
                data.push(hierarchicalRecord);
            }
            hierarchicalRecord.expanded = this.gridAPI.get_row_expansion_state(hierarchicalRecord);
            this.updateNonProcessedRecordExpansion(grid, hierarchicalRecord);
            grid.processedRecords.set(hierarchicalRecord.rowID, hierarchicalRecord);
            this.getFlatDataRecursive(hierarchicalRecord.children, data, expandedLevels, expandedStates, gridID, parentExpanded && hierarchicalRecord.expanded);
        }
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} record
     * @return {?}
     */
    IgxTreeGridFlatteningPipe.prototype.updateNonProcessedRecordExpansion = /**
     * @private
     * @param {?} grid
     * @param {?} record
     * @return {?}
     */
    function (grid, record) {
        /** @type {?} */
        var rec = grid.records.get(record.rowID);
        rec.expanded = record.expanded;
    };
    IgxTreeGridFlatteningPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridFlattening',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridFlatteningPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridFlatteningPipe;
}());
export { IgxTreeGridFlatteningPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridFlatteningPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
var IgxTreeGridSortingPipe = /** @class */ (function () {
    function IgxTreeGridSortingPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} hierarchicalData
     * @param {?} expressions
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxTreeGridSortingPipe.prototype.transform = /**
     * @param {?} hierarchicalData
     * @param {?} expressions
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (hierarchicalData, expressions, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var result;
        if (!expressions.length) {
            result = hierarchicalData;
        }
        else {
            result = DataUtil.treeGridSort(hierarchicalData, expressions);
        }
        /** @type {?} */
        var filteredSortedData = [];
        this.flattenTreeGridRecords(result, filteredSortedData);
        grid.filteredSortedData = filteredSortedData;
        return result;
    };
    /**
     * @private
     * @param {?} records
     * @param {?} flatData
     * @return {?}
     */
    IgxTreeGridSortingPipe.prototype.flattenTreeGridRecords = /**
     * @private
     * @param {?} records
     * @param {?} flatData
     * @return {?}
     */
    function (records, flatData) {
        var e_1, _a;
        if (records && records.length) {
            try {
                for (var records_1 = tslib_1.__values(records), records_1_1 = records_1.next(); !records_1_1.done; records_1_1 = records_1.next()) {
                    var record = records_1_1.value;
                    flatData.push(record.data);
                    this.flattenTreeGridRecords(record.children, flatData);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (records_1_1 && !records_1_1.done && (_a = records_1.return)) _a.call(records_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    IgxTreeGridSortingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridSorting',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridSortingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridSortingPipe;
}());
export { IgxTreeGridSortingPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridSortingPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
var IgxTreeGridPagingPipe = /** @class */ (function () {
    function IgxTreeGridPagingPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?=} page
     * @param {?=} perPage
     * @param {?=} id
     * @param {?=} pipeTrigger
     * @return {?}
     */
    IgxTreeGridPagingPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?=} page
     * @param {?=} perPage
     * @param {?=} id
     * @param {?=} pipeTrigger
     * @return {?}
     */
    function (collection, page, perPage, id, pipeTrigger) {
        if (page === void 0) { page = 0; }
        if (perPage === void 0) { perPage = 15; }
        /** @type {?} */
        var grid = this.gridAPI.grid;
        if (!grid.paging) {
            return collection;
        }
        /** @type {?} */
        var len = collection.length;
        /** @type {?} */
        var totalPages = Math.ceil(len / perPage);
        /** @type {?} */
        var state = {
            index: (totalPages > 0 && page >= totalPages) ? totalPages - 1 : page,
            recordsPerPage: perPage
        };
        /** @type {?} */
        var result = DataUtil.page(cloneArray(collection), state);
        grid.pagingState = state;
        ((/** @type {?} */ (grid)))._page = state.index;
        return result;
    };
    IgxTreeGridPagingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridPaging',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridPagingPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridPagingPipe;
}());
export { IgxTreeGridPagingPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridPagingPipe.prototype.gridAPI;
}
/**
 * @hidden
 */
var IgxTreeGridTransactionPipe = /** @class */ (function () {
    function IgxTreeGridTransactionPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxTreeGridTransactionPipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (collection, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        if (collection && grid.transactions.enabled) {
            /** @type {?} */
            var aggregatedChanges = grid.transactions.getAggregatedChanges(true);
            if (aggregatedChanges.length > 0) {
                /** @type {?} */
                var primaryKey = grid.primaryKey;
                if (!primaryKey) {
                    return collection;
                }
                /** @type {?} */
                var foreignKey = grid.foreignKey;
                /** @type {?} */
                var childDataKey = grid.childDataKey;
                if (foreignKey) {
                    /** @type {?} */
                    var flatDataClone = cloneArray(collection);
                    return DataUtil.mergeTransactions(flatDataClone, aggregatedChanges, grid.primaryKey);
                }
                else if (childDataKey) {
                    /** @type {?} */
                    var hierarchicalDataClone = cloneHierarchicalArray(collection, childDataKey);
                    return DataUtil.mergeHierarchicalTransactions(hierarchicalDataClone, aggregatedChanges, childDataKey, grid.primaryKey);
                }
            }
        }
        return collection;
    };
    IgxTreeGridTransactionPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridTransaction',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridTransactionPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridTransactionPipe;
}());
export { IgxTreeGridTransactionPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridTransactionPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLnBpcGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVNwRDtJQU9JLHNDQUFZLE9BQXFFO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQXVCLE9BQU8sRUFBQSxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7Ozs7SUFFTSxnREFBUzs7Ozs7Ozs7O0lBQWhCLFVBQWlCLFVBQWlCLEVBQUUsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQzVGLEVBQVUsRUFBRSxXQUFtQjs7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7WUFDMUIsbUJBQW1CLEdBQXNCLEVBQUU7O1lBQ3pDLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUF3Qjs7WUFDcEQsUUFBUSxHQUFVLEVBQUU7UUFFMUIsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1lBQzFCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEg7YUFBTSxJQUFJLFlBQVksRUFBRTtZQUNyQixtQkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDL0YsUUFBUSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDO1FBQ3ZDLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQzs7Ozs7OztJQUVPLCtDQUFROzs7Ozs7SUFBaEIsVUFBaUIsVUFBZSxFQUFFLE9BQVk7UUFDMUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7Ozs7O0lBRU8sMERBQW1COzs7Ozs7Ozs7O0lBQTNCLFVBQTRCLEVBQVUsRUFBRSxVQUFpQixFQUFFLFVBQWtCLEVBQUUsVUFBa0IsRUFDN0YsR0FBOEIsRUFBRSxRQUFlO1FBRG5ELGlCQW1DQzs7WUFoQ1MsTUFBTSxHQUFzQixFQUFFOztZQUM5QixvQkFBb0IsR0FBc0IsRUFBRTtRQUNsRCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7Z0JBQ1osTUFBTSxHQUFvQjtnQkFDNUIsS0FBSyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztnQkFDckMsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDZjs7Z0JBQ0ssTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksTUFBTSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7WUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07O2dCQUN6QixNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksTUFBTSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbkQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7Ozs7O0lBRU8sMkRBQW9COzs7Ozs7OztJQUE1QixVQUE2QixFQUFVLEVBQUUsVUFBNkIsRUFBRSxnQkFBd0IsRUFBRSxRQUFlO1FBQzdHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztZQUNoQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0IsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLGdCQUFnQixHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNsRjtTQUNKO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztJQUVPLDJEQUFvQjs7Ozs7Ozs7Ozs7O0lBQTVCLFVBQTZCLEVBQVUsRUFBRSxVQUFpQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFDaEcsTUFBdUIsRUFBRSxRQUFlLEVBQUUsZ0JBQXdCLEVBQUUsR0FBOEI7O1lBQzVGLE1BQU0sR0FBc0IsRUFBRTtRQUVwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2xDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDOztnQkFDcEIsTUFBTSxHQUFvQjtnQkFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztnQkFDdEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsS0FBSyxFQUFFLGdCQUFnQjthQUMxQjtZQUNELE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFILFNBQVMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnQkEzR0osSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSx1QkFBdUI7b0JBQzdCLElBQUksRUFBRSxJQUFJO2lCQUNiOzs7O2dCQVpRLGtCQUFrQjs7SUFxSDNCLG1DQUFDO0NBQUEsQUE1R0QsSUE0R0M7U0F4R1ksNEJBQTRCOzs7Ozs7SUFDckMsK0NBQXVDOzs7OztBQTRHM0M7SUFPSSxtQ0FBWSxPQUFxRTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUF1QixPQUFPLEVBQUEsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7Ozs7SUFFTSw2Q0FBUzs7Ozs7Ozs7SUFBaEIsVUFBaUIsVUFBNkIsRUFBRSxFQUFVLEVBQ3RELGNBQXNCLEVBQUUsY0FBaUMsRUFBRSxXQUFtQjs7WUFFeEUsSUFBSSxHQUF5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O1lBQzlDLElBQUksR0FBc0IsRUFBRTtRQUVsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUV4RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFFdkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFFTyx3REFBb0I7Ozs7Ozs7Ozs7SUFBNUIsVUFBNkIsVUFBNkIsRUFBRSxJQUF1QixFQUMvRSxjQUFzQixFQUFFLGNBQWlDLEVBQUUsTUFBYyxFQUN6RSxjQUF1QjtRQUN2QixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPO1NBQ1Y7O1lBQ0ssSUFBSSxHQUF5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7UUFFcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNsQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBRXhDLElBQUksY0FBYyxFQUFFO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDakM7WUFFRCxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXZGLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBRXhFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFDdkUsY0FBYyxFQUFFLE1BQU0sRUFBRSxjQUFjLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUU7SUFDTCxDQUFDOzs7Ozs7O0lBRU8scUVBQWlDOzs7Ozs7SUFBekMsVUFBMEMsSUFBMEIsRUFBRSxNQUF1Qjs7WUFDbkYsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7O2dCQXhESixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLG9CQUFvQjtvQkFDMUIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBN0hRLGtCQUFrQjs7SUFtTDNCLGdDQUFDO0NBQUEsQUF6REQsSUF5REM7U0FyRFkseUJBQXlCOzs7Ozs7SUFDbEMsNENBQXVDOzs7OztBQXVEM0M7SUFPSSxnQ0FBWSxPQUFxRTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUF1QixPQUFPLEVBQUEsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7OztJQUVNLDBDQUFTOzs7Ozs7O0lBQWhCLFVBQ0ksZ0JBQW1DLEVBQ25DLFdBQWlDLEVBQ2pDLEVBQVUsRUFDVixXQUFtQjs7WUFDYixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztZQUUxQixNQUF5QjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNyQixNQUFNLEdBQUcsZ0JBQWdCLENBQUM7U0FDN0I7YUFBTTtZQUNILE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2pFOztZQUNLLGtCQUFrQixHQUFHLEVBQUU7UUFDN0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUU3QyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBRU8sdURBQXNCOzs7Ozs7SUFBOUIsVUFBK0IsT0FBMEIsRUFBRSxRQUFlOztRQUN0RSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOztnQkFDM0IsS0FBcUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtvQkFBekIsSUFBTSxNQUFNLG9CQUFBO29CQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDMUQ7Ozs7Ozs7OztTQUNKO0lBQ0wsQ0FBQzs7Z0JBdENKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixJQUFJLEVBQUUsSUFBSTtpQkFDYjs7OztnQkF6TFEsa0JBQWtCOztJQTZOM0IsNkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQW5DWSxzQkFBc0I7Ozs7OztJQUMvQix5Q0FBdUM7Ozs7O0FBcUMzQztJQU9JLCtCQUFZLE9BQXFFO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQXVCLE9BQU8sRUFBQSxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7OztJQUVNLHlDQUFTOzs7Ozs7OztJQUFoQixVQUFpQixVQUE2QixFQUFFLElBQVEsRUFBRSxPQUFZLEVBQUUsRUFBVSxFQUFFLFdBQW1CO1FBQXZELHFCQUFBLEVBQUEsUUFBUTtRQUFFLHdCQUFBLEVBQUEsWUFBWTs7WUFDNUQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sVUFBVSxDQUFDO1NBQ3JCOztZQUVLLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTTs7WUFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzs7WUFFckMsS0FBSyxHQUFHO1lBQ1YsS0FBSyxFQUFFLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDckUsY0FBYyxFQUFFLE9BQU87U0FDMUI7O1lBRUssTUFBTSxHQUFzQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRWxDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7O2dCQTlCSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBbk9RLGtCQUFrQjs7SUErUDNCLDRCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlkscUJBQXFCOzs7Ozs7SUFDOUIsd0NBQXVDOzs7OztBQTRCM0M7SUFRSSxvQ0FBWSxPQUFxRTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUF1QixPQUFPLEVBQUEsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7O0lBRUQsOENBQVM7Ozs7OztJQUFULFVBQVUsVUFBaUIsRUFBRSxFQUFVLEVBQUUsV0FBbUI7O1lBQ2xELElBQUksR0FBeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ3BELElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFOztnQkFDbkMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7WUFDdEUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztvQkFDeEIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNiLE9BQU8sVUFBVSxDQUFDO2lCQUNyQjs7b0JBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVOztvQkFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO2dCQUV0QyxJQUFJLFVBQVUsRUFBRTs7d0JBQ04sYUFBYSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQzVDLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUM3QixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDeEI7cUJBQU0sSUFBSSxZQUFZLEVBQUU7O3dCQUNmLHFCQUFxQixHQUFHLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7b0JBQzlFLE9BQU8sUUFBUSxDQUFDLDZCQUE2QixDQUN6QyxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7O2dCQTNDSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLHFCQUFxQjtvQkFDM0IsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBcFFRLGtCQUFrQjs7SUE2UzNCLGlDQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F4Q1ksMEJBQTBCOzs7Ozs7SUFFbkMsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2xvbmVBcnJheSwgY2xvbmVIaWVyYXJjaGljYWxBcnJheSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IElneFRyZWVHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFRyZWVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElUcmVlR3JpZFJlY29yZCB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi4vZ3JpZCc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRIaWVyYXJjaGl6aW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkSGllcmFyY2hpemluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBhbnlbXSwgcHJpbWFyeUtleTogc3RyaW5nLCBmb3JlaWduS2V5OiBzdHJpbmcsIGNoaWxkRGF0YUtleTogc3RyaW5nLFxuICAgICAgICBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGxldCBoaWVyYXJjaGljYWxSZWNvcmRzOiBJVHJlZUdyaWRSZWNvcmRbXSA9IFtdO1xuICAgICAgICBjb25zdCB0cmVlR3JpZFJlY29yZHNNYXAgPSBuZXcgTWFwPGFueSwgSVRyZWVHcmlkUmVjb3JkPigpO1xuICAgICAgICBjb25zdCBmbGF0RGF0YTogYW55W10gPSBbXTtcblxuICAgICAgICBpZiAocHJpbWFyeUtleSAmJiBmb3JlaWduS2V5KSB7XG4gICAgICAgICAgICBoaWVyYXJjaGljYWxSZWNvcmRzID0gdGhpcy5oaWVyYXJjaGl6ZUZsYXREYXRhKGlkLCBjb2xsZWN0aW9uLCBwcmltYXJ5S2V5LCBmb3JlaWduS2V5LCB0cmVlR3JpZFJlY29yZHNNYXAsIGZsYXREYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZERhdGFLZXkpIHtcbiAgICAgICAgICAgIGhpZXJhcmNoaWNhbFJlY29yZHMgPSB0aGlzLmhpZXJhcmNoaXplUmVjdXJzaXZlKGlkLCBjb2xsZWN0aW9uLCBwcmltYXJ5S2V5LCBjaGlsZERhdGFLZXksIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBmbGF0RGF0YSwgMCwgdHJlZUdyaWRSZWNvcmRzTWFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWQuZmxhdERhdGEgPSBmbGF0RGF0YTtcbiAgICAgICAgZ3JpZC5yZWNvcmRzID0gdHJlZUdyaWRSZWNvcmRzTWFwO1xuICAgICAgICBncmlkLnJvb3RSZWNvcmRzID0gaGllcmFyY2hpY2FsUmVjb3JkcztcbiAgICAgICAgcmV0dXJuIGhpZXJhcmNoaWNhbFJlY29yZHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSb3dJRChwcmltYXJ5S2V5OiBhbnksIHJvd0RhdGE6IGFueSkge1xuICAgICAgICByZXR1cm4gcHJpbWFyeUtleSA/IHJvd0RhdGFbcHJpbWFyeUtleV0gOiByb3dEYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGllcmFyY2hpemVGbGF0RGF0YShpZDogc3RyaW5nLCBjb2xsZWN0aW9uOiBhbnlbXSwgcHJpbWFyeUtleTogc3RyaW5nLCBmb3JlaWduS2V5OiBzdHJpbmcsXG4gICAgICAgIG1hcDogTWFwPGFueSwgSVRyZWVHcmlkUmVjb3JkPiwgZmxhdERhdGE6IGFueVtdKTpcbiAgICAgICAgSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IElUcmVlR3JpZFJlY29yZFtdID0gW107XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJlbnRSZWNvcmRzOiBJVHJlZUdyaWRSZWNvcmRbXSA9IFtdO1xuICAgICAgICBjb2xsZWN0aW9uLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZDogSVRyZWVHcmlkUmVjb3JkID0ge1xuICAgICAgICAgICAgICAgIHJvd0lEOiB0aGlzLmdldFJvd0lEKHByaW1hcnlLZXksIHJvdyksXG4gICAgICAgICAgICAgICAgZGF0YTogcm93LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG1hcC5nZXQocm93W2ZvcmVpZ25LZXldKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHJlY29yZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pc3NpbmdQYXJlbnRSZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFwLnNldChyb3dbcHJpbWFyeUtleV0sIHJlY29yZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1pc3NpbmdQYXJlbnRSZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG1hcC5nZXQocmVjb3JkLmRhdGFbZm9yZWlnbktleV0pO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJlY29yZC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gocmVjb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRJbmRlbnRhdGlvbkxldmVscyhpZCwgcmVzdWx0LCAwLCBmbGF0RGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEluZGVudGF0aW9uTGV2ZWxzKGlkOiBzdHJpbmcsIGNvbGxlY3Rpb246IElUcmVlR3JpZFJlY29yZFtdLCBpbmRlbnRhdGlvbkxldmVsOiBudW1iZXIsIGZsYXREYXRhOiBhbnlbXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IGNvbGxlY3Rpb25baV07XG4gICAgICAgICAgICByZWNvcmQubGV2ZWwgPSBpbmRlbnRhdGlvbkxldmVsO1xuICAgICAgICAgICAgcmVjb3JkLmV4cGFuZGVkID0gdGhpcy5ncmlkQVBJLmdldF9yb3dfZXhwYW5zaW9uX3N0YXRlKHJlY29yZCk7XG4gICAgICAgICAgICBmbGF0RGF0YS5wdXNoKHJlY29yZC5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKHJlY29yZC5jaGlsZHJlbiAmJiByZWNvcmQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5kZW50YXRpb25MZXZlbHMoaWQsIHJlY29yZC5jaGlsZHJlbiwgaW5kZW50YXRpb25MZXZlbCArIDEsIGZsYXREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGllcmFyY2hpemVSZWN1cnNpdmUoaWQ6IHN0cmluZywgY29sbGVjdGlvbjogYW55W10sIHByaW1hcnlLZXk6IHN0cmluZywgY2hpbGREYXRhS2V5OiBzdHJpbmcsXG4gICAgICAgIHBhcmVudDogSVRyZWVHcmlkUmVjb3JkLCBmbGF0RGF0YTogYW55W10sIGluZGVudGF0aW9uTGV2ZWw6IG51bWJlciwgbWFwOiBNYXA8YW55LCBJVHJlZUdyaWRSZWNvcmQ+KTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IElUcmVlR3JpZFJlY29yZFtdID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY29sbGVjdGlvbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZDogSVRyZWVHcmlkUmVjb3JkID0ge1xuICAgICAgICAgICAgICAgIHJvd0lEOiB0aGlzLmdldFJvd0lEKHByaW1hcnlLZXksIGl0ZW0pLFxuICAgICAgICAgICAgICAgIGRhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGluZGVudGF0aW9uTGV2ZWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWNvcmQuZXhwYW5kZWQgPSB0aGlzLmdyaWRBUEkuZ2V0X3Jvd19leHBhbnNpb25fc3RhdGUocmVjb3JkKTtcbiAgICAgICAgICAgIGZsYXREYXRhLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBtYXAuc2V0KHJlY29yZC5yb3dJRCwgcmVjb3JkKTtcbiAgICAgICAgICAgIHJlY29yZC5jaGlsZHJlbiA9IGl0ZW1bY2hpbGREYXRhS2V5XSA/XG4gICAgICAgICAgICAgICAgdGhpcy5oaWVyYXJjaGl6ZVJlY3Vyc2l2ZShpZCwgaXRlbVtjaGlsZERhdGFLZXldLCBwcmltYXJ5S2V5LCBjaGlsZERhdGFLZXksIHJlY29yZCwgZmxhdERhdGEsIGluZGVudGF0aW9uTGV2ZWwgKyAxLCBtYXApIDpcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXN1bHQucHVzaChyZWNvcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRGbGF0dGVuaW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkRmxhdHRlbmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBJVHJlZUdyaWRSZWNvcmRbXSwgaWQ6IHN0cmluZyxcbiAgICAgICAgZXhwYW5kZWRMZXZlbHM6IG51bWJlciwgZXhwYW5kZWRTdGF0ZXM6IE1hcDxhbnksIGJvb2xlYW4+LCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuXG4gICAgICAgIGNvbnN0IGdyaWQ6IElneFRyZWVHcmlkQ29tcG9uZW50ID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGNvbnN0IGRhdGE6IElUcmVlR3JpZFJlY29yZFtdID0gW107XG5cbiAgICAgICAgZ3JpZC5wcm9jZXNzZWRSb290UmVjb3JkcyA9IGNvbGxlY3Rpb247XG4gICAgICAgIGdyaWQucHJvY2Vzc2VkUmVjb3JkcyA9IG5ldyBNYXA8YW55LCBJVHJlZUdyaWRSZWNvcmQ+KCk7XG5cbiAgICAgICAgdGhpcy5nZXRGbGF0RGF0YVJlY3Vyc2l2ZShjb2xsZWN0aW9uLCBkYXRhLCBleHBhbmRlZExldmVscywgZXhwYW5kZWRTdGF0ZXMsIGlkLCB0cnVlKTtcblxuICAgICAgICBncmlkLnByb2Nlc3NlZEV4cGFuZGVkRmxhdERhdGEgPSBkYXRhLm1hcChyID0+IHIuZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGbGF0RGF0YVJlY3Vyc2l2ZShjb2xsZWN0aW9uOiBJVHJlZUdyaWRSZWNvcmRbXSwgZGF0YTogSVRyZWVHcmlkUmVjb3JkW10sXG4gICAgICAgIGV4cGFuZGVkTGV2ZWxzOiBudW1iZXIsIGV4cGFuZGVkU3RhdGVzOiBNYXA8YW55LCBib29sZWFuPiwgZ3JpZElEOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudEV4cGFuZGVkOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghY29sbGVjdGlvbiB8fCAhY29sbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmlkOiBJZ3hUcmVlR3JpZENvbXBvbmVudCA9IHRoaXMuZ3JpZEFQSS5ncmlkO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaGllcmFyY2hpY2FsUmVjb3JkID0gY29sbGVjdGlvbltpXTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudEV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGhpZXJhcmNoaWNhbFJlY29yZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZXJhcmNoaWNhbFJlY29yZC5leHBhbmRlZCA9IHRoaXMuZ3JpZEFQSS5nZXRfcm93X2V4cGFuc2lvbl9zdGF0ZShoaWVyYXJjaGljYWxSZWNvcmQpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5vblByb2Nlc3NlZFJlY29yZEV4cGFuc2lvbihncmlkLCBoaWVyYXJjaGljYWxSZWNvcmQpO1xuXG4gICAgICAgICAgICBncmlkLnByb2Nlc3NlZFJlY29yZHMuc2V0KGhpZXJhcmNoaWNhbFJlY29yZC5yb3dJRCwgaGllcmFyY2hpY2FsUmVjb3JkKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRGbGF0RGF0YVJlY3Vyc2l2ZShoaWVyYXJjaGljYWxSZWNvcmQuY2hpbGRyZW4sIGRhdGEsIGV4cGFuZGVkTGV2ZWxzLFxuICAgICAgICAgICAgICAgIGV4cGFuZGVkU3RhdGVzLCBncmlkSUQsIHBhcmVudEV4cGFuZGVkICYmIGhpZXJhcmNoaWNhbFJlY29yZC5leHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU5vblByb2Nlc3NlZFJlY29yZEV4cGFuc2lvbihncmlkOiBJZ3hUcmVlR3JpZENvbXBvbmVudCwgcmVjb3JkOiBJVHJlZUdyaWRSZWNvcmQpIHtcbiAgICAgICAgY29uc3QgcmVjID0gZ3JpZC5yZWNvcmRzLmdldChyZWNvcmQucm93SUQpO1xuICAgICAgICByZWMuZXhwYW5kZWQgPSByZWNvcmQuZXhwYW5kZWQ7XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmVlR3JpZFNvcnRpbmcnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRTb3J0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgZ3JpZEFQSTogSWd4VHJlZUdyaWRBUElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7XG4gICAgICAgIHRoaXMuZ3JpZEFQSSA9IDxJZ3hUcmVlR3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKFxuICAgICAgICBoaWVyYXJjaGljYWxEYXRhOiBJVHJlZUdyaWRSZWNvcmRbXSxcbiAgICAgICAgZXhwcmVzc2lvbnM6IElTb3J0aW5nRXhwcmVzc2lvbltdLFxuICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICBwaXBlVHJpZ2dlcjogbnVtYmVyKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG5cbiAgICAgICAgbGV0IHJlc3VsdDogSVRyZWVHcmlkUmVjb3JkW107XG4gICAgICAgIGlmICghZXhwcmVzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBoaWVyYXJjaGljYWxEYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gRGF0YVV0aWwudHJlZUdyaWRTb3J0KGhpZXJhcmNoaWNhbERhdGEsIGV4cHJlc3Npb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZERhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5mbGF0dGVuVHJlZUdyaWRSZWNvcmRzKHJlc3VsdCwgZmlsdGVyZWRTb3J0ZWREYXRhKTtcbiAgICAgICAgZ3JpZC5maWx0ZXJlZFNvcnRlZERhdGEgPSBmaWx0ZXJlZFNvcnRlZERhdGE7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsYXR0ZW5UcmVlR3JpZFJlY29yZHMocmVjb3JkczogSVRyZWVHcmlkUmVjb3JkW10sIGZsYXREYXRhOiBhbnlbXSkge1xuICAgICAgICBpZiAocmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuICAgICAgICAgICAgICAgIGZsYXREYXRhLnB1c2gocmVjb3JkLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxhdHRlblRyZWVHcmlkUmVjb3JkcyhyZWNvcmQuY2hpbGRyZW4sIGZsYXREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRQYWdpbmcnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRQYWdpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBncmlkQVBJOiBJZ3hUcmVlR3JpZEFQSVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJID0gPElneFRyZWVHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogSVRyZWVHcmlkUmVjb3JkW10sIHBhZ2UgPSAwLCBwZXJQYWdlID0gMTUsIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIpOiBJVHJlZUdyaWRSZWNvcmRbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgaWYgKCFncmlkLnBhZ2luZykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChsZW4gLyBwZXJQYWdlKTtcblxuICAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGluZGV4OiAodG90YWxQYWdlcyA+IDAgJiYgcGFnZSA+PSB0b3RhbFBhZ2VzKSA/IHRvdGFsUGFnZXMgLSAxIDogcGFnZSxcbiAgICAgICAgICAgIHJlY29yZHNQZXJQYWdlOiBwZXJQYWdlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBJVHJlZUdyaWRSZWNvcmRbXSA9IERhdGFVdGlsLnBhZ2UoY2xvbmVBcnJheShjb2xsZWN0aW9uKSwgc3RhdGUpO1xuICAgICAgICBncmlkLnBhZ2luZ1N0YXRlID0gc3RhdGU7XG4gICAgICAgIChncmlkIGFzIGFueSkuX3BhZ2UgPSBzdGF0ZS5pbmRleDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbi8qKiBAaGlkZGVuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RyZWVHcmlkVHJhbnNhY3Rpb24nLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRUcmFuc2FjdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHByaXZhdGUgZ3JpZEFQSTogSWd4VHJlZUdyaWRBUElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7XG4gICAgICAgIHRoaXMuZ3JpZEFQSSA9IDxJZ3hUcmVlR3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneFRyZWVHcmlkQ29tcG9uZW50ID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGlmIChjb2xsZWN0aW9uICYmIGdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRDaGFuZ2VzID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0QWdncmVnYXRlZENoYW5nZXModHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYWdncmVnYXRlZENoYW5nZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSBncmlkLnByaW1hcnlLZXk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmltYXJ5S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVpZ25LZXkgPSBncmlkLmZvcmVpZ25LZXk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGREYXRhS2V5ID0gZ3JpZC5jaGlsZERhdGFLZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZm9yZWlnbktleSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbGF0RGF0YUNsb25lID0gY2xvbmVBcnJheShjb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFVdGlsLm1lcmdlVHJhbnNhY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdERhdGFDbG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRDaGFuZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkRGF0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWVyYXJjaGljYWxEYXRhQ2xvbmUgPSBjbG9uZUhpZXJhcmNoaWNhbEFycmF5KGNvbGxlY3Rpb24sIGNoaWxkRGF0YUtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVXRpbC5tZXJnZUhpZXJhcmNoaWNhbFRyYW5zYWN0aW9ucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoaWNhbERhdGFDbG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRDaGFuZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREYXRhS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG59XG4iXX0=