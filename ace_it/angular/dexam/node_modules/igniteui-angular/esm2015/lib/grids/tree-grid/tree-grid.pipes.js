/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { cloneArray, cloneHierarchicalArray } from '../../core/utils';
import { DataUtil } from '../../data-operations/data-util';
import { GridBaseAPIService } from '../api.service';
/**
 * @hidden
 */
export class IgxTreeGridHierarchizingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
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
    transform(collection, primaryKey, foreignKey, childDataKey, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        let hierarchicalRecords = [];
        /** @type {?} */
        const treeGridRecordsMap = new Map();
        /** @type {?} */
        const flatData = [];
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
    }
    /**
     * @private
     * @param {?} primaryKey
     * @param {?} rowData
     * @return {?}
     */
    getRowID(primaryKey, rowData) {
        return primaryKey ? rowData[primaryKey] : rowData;
    }
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
    hierarchizeFlatData(id, collection, primaryKey, foreignKey, map, flatData) {
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const missingParentRecords = [];
        collection.forEach(row => {
            /** @type {?} */
            const record = {
                rowID: this.getRowID(primaryKey, row),
                data: row,
                children: []
            };
            /** @type {?} */
            const parent = map.get(row[foreignKey]);
            if (parent) {
                record.parent = parent;
                parent.children.push(record);
            }
            else {
                missingParentRecords.push(record);
            }
            map.set(row[primaryKey], record);
        });
        missingParentRecords.forEach(record => {
            /** @type {?} */
            const parent = map.get(record.data[foreignKey]);
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
    }
    /**
     * @private
     * @param {?} id
     * @param {?} collection
     * @param {?} indentationLevel
     * @param {?} flatData
     * @return {?}
     */
    setIndentationLevels(id, collection, indentationLevel, flatData) {
        for (let i = 0; i < collection.length; i++) {
            /** @type {?} */
            const record = collection[i];
            record.level = indentationLevel;
            record.expanded = this.gridAPI.get_row_expansion_state(record);
            flatData.push(record.data);
            if (record.children && record.children.length > 0) {
                this.setIndentationLevels(id, record.children, indentationLevel + 1, flatData);
            }
        }
    }
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
    hierarchizeRecursive(id, collection, primaryKey, childDataKey, parent, flatData, indentationLevel, map) {
        /** @type {?} */
        const result = [];
        for (let i = 0; i < collection.length; i++) {
            /** @type {?} */
            const item = collection[i];
            /** @type {?} */
            const record = {
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
    }
}
IgxTreeGridHierarchizingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridHierarchizing',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridHierarchizingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
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
export class IgxTreeGridFlatteningPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
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
    transform(collection, id, expandedLevels, expandedStates, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const data = [];
        grid.processedRootRecords = collection;
        grid.processedRecords = new Map();
        this.getFlatDataRecursive(collection, data, expandedLevels, expandedStates, id, true);
        grid.processedExpandedFlatData = data.map(r => r.data);
        return data;
    }
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
    getFlatDataRecursive(collection, data, expandedLevels, expandedStates, gridID, parentExpanded) {
        if (!collection || !collection.length) {
            return;
        }
        /** @type {?} */
        const grid = this.gridAPI.grid;
        for (let i = 0; i < collection.length; i++) {
            /** @type {?} */
            const hierarchicalRecord = collection[i];
            if (parentExpanded) {
                data.push(hierarchicalRecord);
            }
            hierarchicalRecord.expanded = this.gridAPI.get_row_expansion_state(hierarchicalRecord);
            this.updateNonProcessedRecordExpansion(grid, hierarchicalRecord);
            grid.processedRecords.set(hierarchicalRecord.rowID, hierarchicalRecord);
            this.getFlatDataRecursive(hierarchicalRecord.children, data, expandedLevels, expandedStates, gridID, parentExpanded && hierarchicalRecord.expanded);
        }
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} record
     * @return {?}
     */
    updateNonProcessedRecordExpansion(grid, record) {
        /** @type {?} */
        const rec = grid.records.get(record.rowID);
        rec.expanded = record.expanded;
    }
}
IgxTreeGridFlatteningPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridFlattening',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridFlatteningPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
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
export class IgxTreeGridSortingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} hierarchicalData
     * @param {?} expressions
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(hierarchicalData, expressions, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        let result;
        if (!expressions.length) {
            result = hierarchicalData;
        }
        else {
            result = DataUtil.treeGridSort(hierarchicalData, expressions);
        }
        /** @type {?} */
        const filteredSortedData = [];
        this.flattenTreeGridRecords(result, filteredSortedData);
        grid.filteredSortedData = filteredSortedData;
        return result;
    }
    /**
     * @private
     * @param {?} records
     * @param {?} flatData
     * @return {?}
     */
    flattenTreeGridRecords(records, flatData) {
        if (records && records.length) {
            for (const record of records) {
                flatData.push(record.data);
                this.flattenTreeGridRecords(record.children, flatData);
            }
        }
    }
}
IgxTreeGridSortingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridSorting',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridSortingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
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
export class IgxTreeGridPagingPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
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
    transform(collection, page = 0, perPage = 15, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        if (!grid.paging) {
            return collection;
        }
        /** @type {?} */
        const len = collection.length;
        /** @type {?} */
        const totalPages = Math.ceil(len / perPage);
        /** @type {?} */
        const state = {
            index: (totalPages > 0 && page >= totalPages) ? totalPages - 1 : page,
            recordsPerPage: perPage
        };
        /** @type {?} */
        const result = DataUtil.page(cloneArray(collection), state);
        grid.pagingState = state;
        ((/** @type {?} */ (grid)))._page = state.index;
        return result;
    }
}
IgxTreeGridPagingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridPaging',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridPagingPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
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
export class IgxTreeGridTransactionPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} collection
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(collection, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        if (collection && grid.transactions.enabled) {
            /** @type {?} */
            const aggregatedChanges = grid.transactions.getAggregatedChanges(true);
            if (aggregatedChanges.length > 0) {
                /** @type {?} */
                const primaryKey = grid.primaryKey;
                if (!primaryKey) {
                    return collection;
                }
                /** @type {?} */
                const foreignKey = grid.foreignKey;
                /** @type {?} */
                const childDataKey = grid.childDataKey;
                if (foreignKey) {
                    /** @type {?} */
                    const flatDataClone = cloneArray(collection);
                    return DataUtil.mergeTransactions(flatDataClone, aggregatedChanges, grid.primaryKey);
                }
                else if (childDataKey) {
                    /** @type {?} */
                    const hierarchicalDataClone = cloneHierarchicalArray(collection, childDataKey);
                    return DataUtil.mergeHierarchicalTransactions(hierarchicalDataClone, aggregatedChanges, childDataKey, grid.primaryKey);
                }
            }
        }
        return collection;
    }
}
IgxTreeGridTransactionPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridTransaction',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridTransactionPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridTransactionPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLnBpcGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBYXBELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFHckMsWUFBWSxPQUFxRTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUF1QixPQUFPLEVBQUEsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQWlCLEVBQUUsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQzVGLEVBQVUsRUFBRSxXQUFtQjs7Y0FDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7WUFDMUIsbUJBQW1CLEdBQXNCLEVBQUU7O2NBQ3pDLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUF3Qjs7Y0FDcEQsUUFBUSxHQUFVLEVBQUU7UUFFMUIsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1lBQzFCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEg7YUFBTSxJQUFJLFlBQVksRUFBRTtZQUNyQixtQkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFF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Q2xELElBQUksR0FBeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ3BELElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFOztrQkFDbkMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7WUFDdEUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztzQkFDeEIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNiLE9BQU8sVUFBVSxDQUFDO2lCQUNyQjs7c0JBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVOztzQkFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO2dCQUV0QyxJQUFJLFVBQVUsRUFBRTs7MEJBQ04sYUFBYSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQzVDLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUM3QixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDeEI7cUJBQU0sSUFBSSxZQUFZLEVBQUU7OzBCQUNmLHFCQUFxQixHQUFHLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7b0JBQzlFLE9BQU8sUUFBUSxDQUFDLDZCQUE2QixDQUN6QyxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7OztZQTNDSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsSUFBSSxFQUFFLElBQUk7YUFDYjs7OztZQXBRUSxrQkFBa0I7Ozs7Ozs7SUF1UXZCLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNsb25lQXJyYXksIGNsb25lSGllcmFyY2hpY2FsQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZEFQSVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtZ3JpZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVHJlZUdyaWRSZWNvcmQgfSBmcm9tICcuL3RyZWUtZ3JpZC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQnO1xuaW1wb3J0IHsgSVNvcnRpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuXG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RyZWVHcmlkSGllcmFyY2hpemluZycsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZEhpZXJhcmNoaXppbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBncmlkQVBJOiBJZ3hUcmVlR3JpZEFQSVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJID0gPElneFRyZWVHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogYW55W10sIHByaW1hcnlLZXk6IHN0cmluZywgZm9yZWlnbktleTogc3RyaW5nLCBjaGlsZERhdGFLZXk6IHN0cmluZyxcbiAgICAgICAgaWQ6IHN0cmluZywgcGlwZVRyaWdnZXI6IG51bWJlcik6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgICAgICBsZXQgaGllcmFyY2hpY2FsUmVjb3JkczogSVRyZWVHcmlkUmVjb3JkW10gPSBbXTtcbiAgICAgICAgY29uc3QgdHJlZUdyaWRSZWNvcmRzTWFwID0gbmV3IE1hcDxhbnksIElUcmVlR3JpZFJlY29yZD4oKTtcbiAgICAgICAgY29uc3QgZmxhdERhdGE6IGFueVtdID0gW107XG5cbiAgICAgICAgaWYgKHByaW1hcnlLZXkgJiYgZm9yZWlnbktleSkge1xuICAgICAgICAgICAgaGllcmFyY2hpY2FsUmVjb3JkcyA9IHRoaXMuaGllcmFyY2hpemVGbGF0RGF0YShpZCwgY29sbGVjdGlvbiwgcHJpbWFyeUtleSwgZm9yZWlnbktleSwgdHJlZUdyaWRSZWNvcmRzTWFwLCBmbGF0RGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGREYXRhS2V5KSB7XG4gICAgICAgICAgICBoaWVyYXJjaGljYWxSZWNvcmRzID0gdGhpcy5oaWVyYXJjaGl6ZVJlY3Vyc2l2ZShpZCwgY29sbGVjdGlvbiwgcHJpbWFyeUtleSwgY2hpbGREYXRhS2V5LCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZmxhdERhdGEsIDAsIHRyZWVHcmlkUmVjb3Jkc01hcCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmlkLmZsYXREYXRhID0gZmxhdERhdGE7XG4gICAgICAgIGdyaWQucmVjb3JkcyA9IHRyZWVHcmlkUmVjb3Jkc01hcDtcbiAgICAgICAgZ3JpZC5yb290UmVjb3JkcyA9IGhpZXJhcmNoaWNhbFJlY29yZHM7XG4gICAgICAgIHJldHVybiBoaWVyYXJjaGljYWxSZWNvcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Um93SUQocHJpbWFyeUtleTogYW55LCByb3dEYXRhOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHByaW1hcnlLZXkgPyByb3dEYXRhW3ByaW1hcnlLZXldIDogcm93RGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZXJhcmNoaXplRmxhdERhdGEoaWQ6IHN0cmluZywgY29sbGVjdGlvbjogYW55W10sIHByaW1hcnlLZXk6IHN0cmluZywgZm9yZWlnbktleTogc3RyaW5nLFxuICAgICAgICBtYXA6IE1hcDxhbnksIElUcmVlR3JpZFJlY29yZD4sIGZsYXREYXRhOiBhbnlbXSk6XG4gICAgICAgIElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBJVHJlZUdyaWRSZWNvcmRbXSA9IFtdO1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyZW50UmVjb3JkczogSVRyZWVHcmlkUmVjb3JkW10gPSBbXTtcbiAgICAgICAgY29sbGVjdGlvbi5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQ6IElUcmVlR3JpZFJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICByb3dJRDogdGhpcy5nZXRSb3dJRChwcmltYXJ5S2V5LCByb3cpLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBtYXAuZ2V0KHJvd1tmb3JlaWduS2V5XSk7XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nUGFyZW50UmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcC5zZXQocm93W3ByaW1hcnlLZXldLCByZWNvcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtaXNzaW5nUGFyZW50UmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBtYXAuZ2V0KHJlY29yZC5kYXRhW2ZvcmVpZ25LZXldKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHJlY29yZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0SW5kZW50YXRpb25MZXZlbHMoaWQsIHJlc3VsdCwgMCwgZmxhdERhdGEpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbmRlbnRhdGlvbkxldmVscyhpZDogc3RyaW5nLCBjb2xsZWN0aW9uOiBJVHJlZUdyaWRSZWNvcmRbXSwgaW5kZW50YXRpb25MZXZlbDogbnVtYmVyLCBmbGF0RGF0YTogYW55W10pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSBjb2xsZWN0aW9uW2ldO1xuICAgICAgICAgICAgcmVjb3JkLmxldmVsID0gaW5kZW50YXRpb25MZXZlbDtcbiAgICAgICAgICAgIHJlY29yZC5leHBhbmRlZCA9IHRoaXMuZ3JpZEFQSS5nZXRfcm93X2V4cGFuc2lvbl9zdGF0ZShyZWNvcmQpO1xuICAgICAgICAgICAgZmxhdERhdGEucHVzaChyZWNvcmQuZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQuY2hpbGRyZW4gJiYgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluZGVudGF0aW9uTGV2ZWxzKGlkLCByZWNvcmQuY2hpbGRyZW4sIGluZGVudGF0aW9uTGV2ZWwgKyAxLCBmbGF0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZXJhcmNoaXplUmVjdXJzaXZlKGlkOiBzdHJpbmcsIGNvbGxlY3Rpb246IGFueVtdLCBwcmltYXJ5S2V5OiBzdHJpbmcsIGNoaWxkRGF0YUtleTogc3RyaW5nLFxuICAgICAgICBwYXJlbnQ6IElUcmVlR3JpZFJlY29yZCwgZmxhdERhdGE6IGFueVtdLCBpbmRlbnRhdGlvbkxldmVsOiBudW1iZXIsIG1hcDogTWFwPGFueSwgSVRyZWVHcmlkUmVjb3JkPik6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBJVHJlZUdyaWRSZWNvcmRbXSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNvbGxlY3Rpb25baV07XG4gICAgICAgICAgICBjb25zdCByZWNvcmQ6IElUcmVlR3JpZFJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICByb3dJRDogdGhpcy5nZXRSb3dJRChwcmltYXJ5S2V5LCBpdGVtKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtLFxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgIGxldmVsOiBpbmRlbnRhdGlvbkxldmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjb3JkLmV4cGFuZGVkID0gdGhpcy5ncmlkQVBJLmdldF9yb3dfZXhwYW5zaW9uX3N0YXRlKHJlY29yZCk7XG4gICAgICAgICAgICBmbGF0RGF0YS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgbWFwLnNldChyZWNvcmQucm93SUQsIHJlY29yZCk7XG4gICAgICAgICAgICByZWNvcmQuY2hpbGRyZW4gPSBpdGVtW2NoaWxkRGF0YUtleV0gP1xuICAgICAgICAgICAgICAgIHRoaXMuaGllcmFyY2hpemVSZWN1cnNpdmUoaWQsIGl0ZW1bY2hpbGREYXRhS2V5XSwgcHJpbWFyeUtleSwgY2hpbGREYXRhS2V5LCByZWNvcmQsIGZsYXREYXRhLCBpbmRlbnRhdGlvbkxldmVsICsgMSwgbWFwKSA6XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocmVjb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4vKipcbiAqQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RyZWVHcmlkRmxhdHRlbmluZycsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZEZsYXR0ZW5pbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBncmlkQVBJOiBJZ3hUcmVlR3JpZEFQSVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJID0gPElneFRyZWVHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY29sbGVjdGlvbjogSVRyZWVHcmlkUmVjb3JkW10sIGlkOiBzdHJpbmcsXG4gICAgICAgIGV4cGFuZGVkTGV2ZWxzOiBudW1iZXIsIGV4cGFuZGVkU3RhdGVzOiBNYXA8YW55LCBib29sZWFuPiwgcGlwZVRyaWdnZXI6IG51bWJlcik6IGFueVtdIHtcblxuICAgICAgICBjb25zdCBncmlkOiBJZ3hUcmVlR3JpZENvbXBvbmVudCA9IHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgICAgICBjb25zdCBkYXRhOiBJVHJlZUdyaWRSZWNvcmRbXSA9IFtdO1xuXG4gICAgICAgIGdyaWQucHJvY2Vzc2VkUm9vdFJlY29yZHMgPSBjb2xsZWN0aW9uO1xuICAgICAgICBncmlkLnByb2Nlc3NlZFJlY29yZHMgPSBuZXcgTWFwPGFueSwgSVRyZWVHcmlkUmVjb3JkPigpO1xuXG4gICAgICAgIHRoaXMuZ2V0RmxhdERhdGFSZWN1cnNpdmUoY29sbGVjdGlvbiwgZGF0YSwgZXhwYW5kZWRMZXZlbHMsIGV4cGFuZGVkU3RhdGVzLCBpZCwgdHJ1ZSk7XG5cbiAgICAgICAgZ3JpZC5wcm9jZXNzZWRFeHBhbmRlZEZsYXREYXRhID0gZGF0YS5tYXAociA9PiByLmRhdGEpO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RmxhdERhdGFSZWN1cnNpdmUoY29sbGVjdGlvbjogSVRyZWVHcmlkUmVjb3JkW10sIGRhdGE6IElUcmVlR3JpZFJlY29yZFtdLFxuICAgICAgICBleHBhbmRlZExldmVsczogbnVtYmVyLCBleHBhbmRlZFN0YXRlczogTWFwPGFueSwgYm9vbGVhbj4sIGdyaWRJRDogc3RyaW5nLFxuICAgICAgICBwYXJlbnRFeHBhbmRlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb24gfHwgIWNvbGxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZXJhcmNoaWNhbFJlY29yZCA9IGNvbGxlY3Rpb25baV07XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaChoaWVyYXJjaGljYWxSZWNvcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWVyYXJjaGljYWxSZWNvcmQuZXhwYW5kZWQgPSB0aGlzLmdyaWRBUEkuZ2V0X3Jvd19leHBhbnNpb25fc3RhdGUoaGllcmFyY2hpY2FsUmVjb3JkKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVOb25Qcm9jZXNzZWRSZWNvcmRFeHBhbnNpb24oZ3JpZCwgaGllcmFyY2hpY2FsUmVjb3JkKTtcblxuICAgICAgICAgICAgZ3JpZC5wcm9jZXNzZWRSZWNvcmRzLnNldChoaWVyYXJjaGljYWxSZWNvcmQucm93SUQsIGhpZXJhcmNoaWNhbFJlY29yZCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0RmxhdERhdGFSZWN1cnNpdmUoaGllcmFyY2hpY2FsUmVjb3JkLmNoaWxkcmVuLCBkYXRhLCBleHBhbmRlZExldmVscyxcbiAgICAgICAgICAgICAgICBleHBhbmRlZFN0YXRlcywgZ3JpZElELCBwYXJlbnRFeHBhbmRlZCAmJiBoaWVyYXJjaGljYWxSZWNvcmQuZXhwYW5kZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVOb25Qcm9jZXNzZWRSZWNvcmRFeHBhbnNpb24oZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQsIHJlY29yZDogSVRyZWVHcmlkUmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IHJlYyA9IGdyaWQucmVjb3Jkcy5nZXQocmVjb3JkLnJvd0lEKTtcbiAgICAgICAgcmVjLmV4cGFuZGVkID0gcmVjb3JkLmV4cGFuZGVkO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRTb3J0aW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkU29ydGluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybShcbiAgICAgICAgaGllcmFyY2hpY2FsRGF0YTogSVRyZWVHcmlkUmVjb3JkW10sXG4gICAgICAgIGV4cHJlc3Npb25zOiBJU29ydGluZ0V4cHJlc3Npb25bXSxcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgcGlwZVRyaWdnZXI6IG51bWJlcik6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZEFQSS5ncmlkO1xuXG4gICAgICAgIGxldCByZXN1bHQ6IElUcmVlR3JpZFJlY29yZFtdO1xuICAgICAgICBpZiAoIWV4cHJlc3Npb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gaGllcmFyY2hpY2FsRGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IERhdGFVdGlsLnRyZWVHcmlkU29ydChoaWVyYXJjaGljYWxEYXRhLCBleHByZXNzaW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsdGVyZWRTb3J0ZWREYXRhID0gW107XG4gICAgICAgIHRoaXMuZmxhdHRlblRyZWVHcmlkUmVjb3JkcyhyZXN1bHQsIGZpbHRlcmVkU29ydGVkRGF0YSk7XG4gICAgICAgIGdyaWQuZmlsdGVyZWRTb3J0ZWREYXRhID0gZmlsdGVyZWRTb3J0ZWREYXRhO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmbGF0dGVuVHJlZUdyaWRSZWNvcmRzKHJlY29yZHM6IElUcmVlR3JpZFJlY29yZFtdLCBmbGF0RGF0YTogYW55W10pIHtcbiAgICAgICAgaWYgKHJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICBmbGF0RGF0YS5wdXNoKHJlY29yZC5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZsYXR0ZW5UcmVlR3JpZFJlY29yZHMocmVjb3JkLmNoaWxkcmVuLCBmbGF0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RyZWVHcmlkUGFnaW5nJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkUGFnaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgZ3JpZEFQSTogSWd4VHJlZUdyaWRBUElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+KSB7XG4gICAgICAgIHRoaXMuZ3JpZEFQSSA9IDxJZ3hUcmVlR3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvbGxlY3Rpb246IElUcmVlR3JpZFJlY29yZFtdLCBwYWdlID0gMCwgcGVyUGFnZSA9IDE1LCBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGlmICghZ3JpZC5wYWdpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwobGVuIC8gcGVyUGFnZSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBpbmRleDogKHRvdGFsUGFnZXMgPiAwICYmIHBhZ2UgPj0gdG90YWxQYWdlcykgPyB0b3RhbFBhZ2VzIC0gMSA6IHBhZ2UsXG4gICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogcGVyUGFnZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogSVRyZWVHcmlkUmVjb3JkW10gPSBEYXRhVXRpbC5wYWdlKGNsb25lQXJyYXkoY29sbGVjdGlvbiksIHN0YXRlKTtcbiAgICAgICAgZ3JpZC5wYWdpbmdTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAoZ3JpZCBhcyBhbnkpLl9wYWdlID0gc3RhdGUuaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4vKiogQGhpZGRlbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmVlR3JpZFRyYW5zYWN0aW9uJyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkVHJhbnNhY3Rpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGNvbGxlY3Rpb246IGFueVtdLCBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyKTogYW55W10ge1xuICAgICAgICBjb25zdCBncmlkOiBJZ3hUcmVlR3JpZENvbXBvbmVudCA9IHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiBncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkQ2hhbmdlcyA9IGdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKHRydWUpO1xuICAgICAgICAgICAgaWYgKGFnZ3JlZ2F0ZWRDaGFuZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmltYXJ5S2V5ID0gZ3JpZC5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgIGlmICghcHJpbWFyeUtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlaWduS2V5ID0gZ3JpZC5mb3JlaWduS2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YUtleSA9IGdyaWQuY2hpbGREYXRhS2V5O1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvcmVpZ25LZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxhdERhdGFDbG9uZSA9IGNsb25lQXJyYXkoY29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVXRpbC5tZXJnZVRyYW5zYWN0aW9ucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXREYXRhQ2xvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkQ2hhbmdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQucHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZERhdGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGllcmFyY2hpY2FsRGF0YUNsb25lID0gY2xvbmVIaWVyYXJjaGljYWxBcnJheShjb2xsZWN0aW9uLCBjaGlsZERhdGFLZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVV0aWwubWVyZ2VIaWVyYXJjaGljYWxUcmFuc2FjdGlvbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaGljYWxEYXRhQ2xvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkQ2hhbmdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGF0YUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQucHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxufVxuIl19