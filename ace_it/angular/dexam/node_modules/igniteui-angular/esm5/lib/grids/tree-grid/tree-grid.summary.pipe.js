/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { GridSummaryPosition, GridSummaryCalculationMode } from '../grid-base.component';
/**
 * @hidden
 */
var IgxTreeGridSummaryPipe = /** @class */ (function () {
    function IgxTreeGridSummaryPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} flatData
     * @param {?} hasSummary
     * @param {?} summaryCalculationMode
     * @param {?} summaryPosition
     * @param {?} id
     * @param {?} pipeTrigger
     * @param {?} summaryPipeTrigger
     * @return {?}
     */
    IgxTreeGridSummaryPipe.prototype.transform = /**
     * @param {?} flatData
     * @param {?} hasSummary
     * @param {?} summaryCalculationMode
     * @param {?} summaryPosition
     * @param {?} id
     * @param {?} pipeTrigger
     * @param {?} summaryPipeTrigger
     * @return {?}
     */
    function (flatData, hasSummary, summaryCalculationMode, summaryPosition, id, pipeTrigger, summaryPipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        if (!flatData || !hasSummary || summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly) {
            return flatData;
        }
        return this.addSummaryRows(grid, flatData, summaryPosition);
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} collection
     * @param {?} summaryPosition
     * @return {?}
     */
    IgxTreeGridSummaryPipe.prototype.addSummaryRows = /**
     * @private
     * @param {?} grid
     * @param {?} collection
     * @param {?} summaryPosition
     * @return {?}
     */
    function (grid, collection, summaryPosition) {
        /** @type {?} */
        var recordsWithSummary = [];
        /** @type {?} */
        var maxSummaryHeight = grid.summaryService.calcMaxSummaryHeight();
        for (var i = 0; i < collection.length; i++) {
            /** @type {?} */
            var record = collection[i];
            recordsWithSummary.push(record);
            /** @type {?} */
            var isExpanded = record.children && record.children.length > 0 && record.expanded;
            if (summaryPosition === GridSummaryPosition.bottom && !isExpanded) {
                /** @type {?} */
                var childRecord = record;
                /** @type {?} */
                var parent_1 = record.parent;
                while (parent_1) {
                    /** @type {?} */
                    var children = parent_1.children;
                    if (children[children.length - 1] === childRecord) {
                        /** @type {?} */
                        var childData = children.filter(function (r) { return !r.isFilteredOutParent; }).map(function (r) { return r.data; });
                        childData = this.removeDeletedRecord(grid, parent_1.rowID, childData);
                        /** @type {?} */
                        var summaries = grid.summaryService.calculateSummaries(parent_1.rowID, childData);
                        /** @type {?} */
                        var summaryRecord = {
                            summaries: summaries,
                            max: maxSummaryHeight,
                            cellIndentation: parent_1.level + 1
                        };
                        recordsWithSummary.push(summaryRecord);
                        childRecord = parent_1;
                        parent_1 = childRecord.parent;
                    }
                    else {
                        break;
                    }
                }
            }
            else if (summaryPosition === GridSummaryPosition.top && isExpanded) {
                /** @type {?} */
                var childData = record.children.filter(function (r) { return !r.isFilteredOutParent; }).map(function (r) { return r.data; });
                childData = this.removeDeletedRecord(grid, record.rowID, childData);
                /** @type {?} */
                var summaries = grid.summaryService.calculateSummaries(record.rowID, childData);
                /** @type {?} */
                var summaryRecord = {
                    summaries: summaries,
                    max: maxSummaryHeight,
                    cellIndentation: record.level + 1
                };
                recordsWithSummary.push(summaryRecord);
            }
        }
        return recordsWithSummary;
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} rowId
     * @param {?} data
     * @return {?}
     */
    IgxTreeGridSummaryPipe.prototype.removeDeletedRecord = /**
     * @private
     * @param {?} grid
     * @param {?} rowId
     * @param {?} data
     * @return {?}
     */
    function (grid, rowId, data) {
        if (!grid.transactions.enabled || !grid.cascadeOnDelete) {
            return data;
        }
        /** @type {?} */
        var deletedRows = grid.transactions.getTransactionLog().filter(function (t) { return t.type === 'delete'; }).map(function (t) { return t.id; });
        /** @type {?} */
        var row = grid.records.get(rowId);
        if (!row && deletedRows.lenght === 0) {
            return [];
        }
        row = row.children ? row : row.parent;
        while (row) {
            rowId = row.rowID;
            if (deletedRows.indexOf(rowId) !== -1) {
                return [];
            }
            row = row.parent;
        }
        deletedRows.forEach(function (rowID) {
            /** @type {?} */
            var tempData = grid.primaryKey ? data.map(function (rec) { return rec[grid.primaryKey]; }) : data;
            /** @type {?} */
            var index = tempData.indexOf(rowID);
            if (index !== -1) {
                data.splice(index, 1);
            }
        });
        return data;
    };
    IgxTreeGridSummaryPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridSummary',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridSummaryPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridSummaryPipe;
}());
export { IgxTreeGridSummaryPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridSummaryPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLnN1bW1hcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5zdW1tYXJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBd0IsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNbEk7SUFPSSxnQ0FBWSxPQUFxRTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUF1QixPQUFPLEVBQUEsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7Ozs7OztJQUVLLDBDQUFTOzs7Ozs7Ozs7O0lBQWhCLFVBQWlCLFFBQTJCLEVBQ3hDLFVBQW1CLEVBQ25CLHNCQUFrRCxFQUNsRCxlQUFvQyxFQUNwQyxFQUFVLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEI7O1lBQ3JELElBQUksR0FBeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBRXBELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLElBQUksc0JBQXNCLEtBQUssMEJBQTBCLENBQUMsYUFBYSxFQUFFO1lBQ2pHLE9BQU8sUUFBUSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7Ozs7SUFFTywrQ0FBYzs7Ozs7OztJQUF0QixVQUF1QixJQUEwQixFQUFFLFVBQTZCLEVBQUUsZUFBb0M7O1lBQzVHLGtCQUFrQixHQUFHLEVBQUU7O1lBQ3ZCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUU7UUFFbkUsS0FBSyxJQUFJLENB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TSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN6QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Z0JBakdKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixJQUFJLEVBQUUsSUFBSTtpQkFDYjs7OztnQkFWUSxrQkFBa0I7O0lBeUczQiw2QkFBQztDQUFBLEFBbEdELElBa0dDO1NBOUZZLHNCQUFzQjs7Ozs7O0lBQy9CLHlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFRyZWVHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBHcmlkU3VtbWFyeVBvc2l0aW9uLCBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElUcmVlR3JpZFJlY29yZCB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVN1bW1hcnlSZWNvcmQgfSBmcm9tICcuLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5JztcblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRTdW1tYXJ5JyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkU3VtbWFyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oZmxhdERhdGE6IElUcmVlR3JpZFJlY29yZFtdLFxuICAgICAgICBoYXNTdW1tYXJ5OiBib29sZWFuLFxuICAgICAgICBzdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlOiBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSxcbiAgICAgICAgc3VtbWFyeVBvc2l0aW9uOiBHcmlkU3VtbWFyeVBvc2l0aW9uLFxuICAgICAgICBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyLCBzdW1tYXJ5UGlwZVRyaWdnZXI6IG51bWJlcik6IGFueVtdIHtcbiAgICAgICAgY29uc3QgZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcblxuICAgICAgICBpZiAoIWZsYXREYXRhIHx8ICFoYXNTdW1tYXJ5IHx8IHN1bW1hcnlDYWxjdWxhdGlvbk1vZGUgPT09IEdyaWRTdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlLnJvb3RMZXZlbE9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0RGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFN1bW1hcnlSb3dzKGdyaWQsIGZsYXREYXRhLCBzdW1tYXJ5UG9zaXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU3VtbWFyeVJvd3MoZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQsIGNvbGxlY3Rpb246IElUcmVlR3JpZFJlY29yZFtdLCBzdW1tYXJ5UG9zaXRpb246IEdyaWRTdW1tYXJ5UG9zaXRpb24pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlY29yZHNXaXRoU3VtbWFyeSA9IFtdO1xuICAgICAgICBjb25zdCBtYXhTdW1tYXJ5SGVpZ2h0ID0gZ3JpZC5zdW1tYXJ5U2VydmljZS5jYWxjTWF4U3VtbWFyeUhlaWdodCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gY29sbGVjdGlvbltpXTtcbiAgICAgICAgICAgIHJlY29yZHNXaXRoU3VtbWFyeS5wdXNoKHJlY29yZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSByZWNvcmQuY2hpbGRyZW4gJiYgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgcmVjb3JkLmV4cGFuZGVkO1xuXG4gICAgICAgICAgICBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLmJvdHRvbSAmJiAhaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZFJlY29yZCA9IHJlY29yZDtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gcmVjb3JkLnBhcmVudDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdID09PSBjaGlsZFJlY29yZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZERhdGEgPSBjaGlsZHJlbi5maWx0ZXIociA9PiAhci5pc0ZpbHRlcmVkT3V0UGFyZW50KS5tYXAociA9PiByLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREYXRhID0gdGhpcy5yZW1vdmVEZWxldGVkUmVjb3JkKGdyaWQsIHBhcmVudC5yb3dJRCwgY2hpbGREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcmllcyA9IGdyaWQuc3VtbWFyeVNlcnZpY2UuY2FsY3VsYXRlU3VtbWFyaWVzKHBhcmVudC5yb3dJRCwgY2hpbGREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWNvcmQ6IElTdW1tYXJ5UmVjb3JkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcmllczogc3VtbWFyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4U3VtbWFyeUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZW50YXRpb246IHBhcmVudC5sZXZlbCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzV2l0aFN1bW1hcnkucHVzaChzdW1tYXJ5UmVjb3JkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRSZWNvcmQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZFJlY29yZC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLnRvcCAmJiBpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkRGF0YSA9IHJlY29yZC5jaGlsZHJlbi5maWx0ZXIociA9PiAhci5pc0ZpbHRlcmVkT3V0UGFyZW50KS5tYXAociA9PiByLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNoaWxkRGF0YSA9IHRoaXMucmVtb3ZlRGVsZXRlZFJlY29yZChncmlkLCByZWNvcmQucm93SUQsIGNoaWxkRGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyaWVzID0gZ3JpZC5zdW1tYXJ5U2VydmljZS5jYWxjdWxhdGVTdW1tYXJpZXMocmVjb3JkLnJvd0lELCBjaGlsZERhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWNvcmQ6IElTdW1tYXJ5UmVjb3JkID0ge1xuICAgICAgICAgICAgICAgICAgICBzdW1tYXJpZXM6IHN1bW1hcmllcyxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXhTdW1tYXJ5SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZW50YXRpb246IHJlY29yZC5sZXZlbCArIDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlY29yZHNXaXRoU3VtbWFyeS5wdXNoKHN1bW1hcnlSZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWNvcmRzV2l0aFN1bW1hcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVEZWxldGVkUmVjb3JkKGdyaWQsIHJvd0lkLCBkYXRhKSB7XG4gICAgICAgIGlmICghZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCB8fCAhZ3JpZC5jYXNjYWRlT25EZWxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRSb3dzID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0VHJhbnNhY3Rpb25Mb2coKS5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdkZWxldGUnKS5tYXAodCA9PiB0LmlkKTtcbiAgICAgICAgbGV0IHJvdyA9IGdyaWQucmVjb3Jkcy5nZXQocm93SWQpO1xuICAgICAgICBpZiAoIXJvdyAmJiBkZWxldGVkUm93cy5sZW5naHQgPT09IDApIHsgcmV0dXJuIFtdOyB9XG4gICAgICAgIHJvdyA9IHJvdy5jaGlsZHJlbiA/IHJvdyA6IHJvdy5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChyb3cpIHtcbiAgICAgICAgICAgIHJvd0lkID0gcm93LnJvd0lEO1xuICAgICAgICAgICAgaWYgKGRlbGV0ZWRSb3dzLmluZGV4T2Yocm93SWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdyA9IHJvdy5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlZFJvd3MuZm9yRWFjaChyb3dJRCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRGF0YSA9IGdyaWQucHJpbWFyeUtleSA/IGRhdGEubWFwKHJlYyA9PiByZWNbZ3JpZC5wcmltYXJ5S2V5XSkgOiBkYXRhO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0ZW1wRGF0YS5pbmRleE9mKHJvd0lEKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG4iXX0=