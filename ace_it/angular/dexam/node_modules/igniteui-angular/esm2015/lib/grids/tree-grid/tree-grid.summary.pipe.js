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
export class IgxTreeGridSummaryPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
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
    transform(flatData, hasSummary, summaryCalculationMode, summaryPosition, id, pipeTrigger, summaryPipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        if (!flatData || !hasSummary || summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly) {
            return flatData;
        }
        return this.addSummaryRows(grid, flatData, summaryPosition);
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} collection
     * @param {?} summaryPosition
     * @return {?}
     */
    addSummaryRows(grid, collection, summaryPosition) {
        /** @type {?} */
        const recordsWithSummary = [];
        /** @type {?} */
        const maxSummaryHeight = grid.summaryService.calcMaxSummaryHeight();
        for (let i = 0; i < collection.length; i++) {
            /** @type {?} */
            const record = collection[i];
            recordsWithSummary.push(record);
            /** @type {?} */
            const isExpanded = record.children && record.children.length > 0 && record.expanded;
            if (summaryPosition === GridSummaryPosition.bottom && !isExpanded) {
                /** @type {?} */
                let childRecord = record;
                /** @type {?} */
                let parent = record.parent;
                while (parent) {
                    /** @type {?} */
                    const children = parent.children;
                    if (children[children.length - 1] === childRecord) {
                        /** @type {?} */
                        let childData = children.filter(r => !r.isFilteredOutParent).map(r => r.data);
                        childData = this.removeDeletedRecord(grid, parent.rowID, childData);
                        /** @type {?} */
                        const summaries = grid.summaryService.calculateSummaries(parent.rowID, childData);
                        /** @type {?} */
                        const summaryRecord = {
                            summaries: summaries,
                            max: maxSummaryHeight,
                            cellIndentation: parent.level + 1
                        };
                        recordsWithSummary.push(summaryRecord);
                        childRecord = parent;
                        parent = childRecord.parent;
                    }
                    else {
                        break;
                    }
                }
            }
            else if (summaryPosition === GridSummaryPosition.top && isExpanded) {
                /** @type {?} */
                let childData = record.children.filter(r => !r.isFilteredOutParent).map(r => r.data);
                childData = this.removeDeletedRecord(grid, record.rowID, childData);
                /** @type {?} */
                const summaries = grid.summaryService.calculateSummaries(record.rowID, childData);
                /** @type {?} */
                const summaryRecord = {
                    summaries: summaries,
                    max: maxSummaryHeight,
                    cellIndentation: record.level + 1
                };
                recordsWithSummary.push(summaryRecord);
            }
        }
        return recordsWithSummary;
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} rowId
     * @param {?} data
     * @return {?}
     */
    removeDeletedRecord(grid, rowId, data) {
        if (!grid.transactions.enabled || !grid.cascadeOnDelete) {
            return data;
        }
        /** @type {?} */
        const deletedRows = grid.transactions.getTransactionLog().filter(t => t.type === 'delete').map(t => t.id);
        /** @type {?} */
        let row = grid.records.get(rowId);
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
        deletedRows.forEach(rowID => {
            /** @type {?} */
            const tempData = grid.primaryKey ? data.map(rec => rec[grid.primaryKey]) : data;
            /** @type {?} */
            const index = tempData.indexOf(rowID);
            if (index !== -1) {
                data.splice(index, 1);
            }
        });
        return data;
    }
}
IgxTreeGridSummaryPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridSummary',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridSummaryPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridSummaryPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLnN1bW1hcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5zdW1tYXJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBd0IsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFVbEksTUFBTSxPQUFPLHNCQUFzQjs7OztJQUcvQixZQUFZLE9BQXFFO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQXVCLE9BQU8sRUFBQSxDQUFDO0lBQ2pELENBQUM7Ozs7Ozs7Ozs7O0lBRUssU0FBUyxDQUFDLFFBQTJCLEVBQ3hDLFVBQW1CLEVBQ25CLHNCQUFrRCxFQUNsRCxlQUFvQyxFQUNwQyxFQUFVLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEI7O2NBQ3JELElBQUksR0FBeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBRXBELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLElBQUksc0JBQXNCLEtBQUssMEJBQTBCLENBQUMsYUFBYSxFQUFFO1lBQ2pHLE9BQU8sUUFBUSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsSUFBMEIsRUFBRSxVQUE2QixFQUFFLGVBQW9DOztjQUM1RyxrQkFBa0IsR0FBRyxFQUFFOztjQUN2QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFO1FBRW5FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FB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LElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsSUFBSTthQUNiOzs7O1lBVlEsa0JBQWtCOzs7Ozs7O0lBWXZCLHlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFRyZWVHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBHcmlkU3VtbWFyeVBvc2l0aW9uLCBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElUcmVlR3JpZFJlY29yZCB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVN1bW1hcnlSZWNvcmQgfSBmcm9tICcuLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5JztcblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRTdW1tYXJ5JyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIElneFRyZWVHcmlkU3VtbWFyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oZmxhdERhdGE6IElUcmVlR3JpZFJlY29yZFtdLFxuICAgICAgICBoYXNTdW1tYXJ5OiBib29sZWFuLFxuICAgICAgICBzdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlOiBHcmlkU3VtbWFyeUNhbGN1bGF0aW9uTW9kZSxcbiAgICAgICAgc3VtbWFyeVBvc2l0aW9uOiBHcmlkU3VtbWFyeVBvc2l0aW9uLFxuICAgICAgICBpZDogc3RyaW5nLCBwaXBlVHJpZ2dlcjogbnVtYmVyLCBzdW1tYXJ5UGlwZVRyaWdnZXI6IG51bWJlcik6IGFueVtdIHtcbiAgICAgICAgY29uc3QgZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcblxuICAgICAgICBpZiAoIWZsYXREYXRhIHx8ICFoYXNTdW1tYXJ5IHx8IHN1bW1hcnlDYWxjdWxhdGlvbk1vZGUgPT09IEdyaWRTdW1tYXJ5Q2FsY3VsYXRpb25Nb2RlLnJvb3RMZXZlbE9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0RGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFN1bW1hcnlSb3dzKGdyaWQsIGZsYXREYXRhLCBzdW1tYXJ5UG9zaXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU3VtbWFyeVJvd3MoZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQsIGNvbGxlY3Rpb246IElUcmVlR3JpZFJlY29yZFtdLCBzdW1tYXJ5UG9zaXRpb246IEdyaWRTdW1tYXJ5UG9zaXRpb24pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlY29yZHNXaXRoU3VtbWFyeSA9IFtdO1xuICAgICAgICBjb25zdCBtYXhTdW1tYXJ5SGVpZ2h0ID0gZ3JpZC5zdW1tYXJ5U2VydmljZS5jYWxjTWF4U3VtbWFyeUhlaWdodCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gY29sbGVjdGlvbltpXTtcbiAgICAgICAgICAgIHJlY29yZHNXaXRoU3VtbWFyeS5wdXNoKHJlY29yZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSByZWNvcmQuY2hpbGRyZW4gJiYgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgcmVjb3JkLmV4cGFuZGVkO1xuXG4gICAgICAgICAgICBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLmJvdHRvbSAmJiAhaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZFJlY29yZCA9IHJlY29yZDtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gcmVjb3JkLnBhcmVudDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdID09PSBjaGlsZFJlY29yZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZERhdGEgPSBjaGlsZHJlbi5maWx0ZXIociA9PiAhci5pc0ZpbHRlcmVkT3V0UGFyZW50KS5tYXAociA9PiByLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREYXRhID0gdGhpcy5yZW1vdmVEZWxldGVkUmVjb3JkKGdyaWQsIHBhcmVudC5yb3dJRCwgY2hpbGREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcmllcyA9IGdyaWQuc3VtbWFyeVNlcnZpY2UuY2FsY3VsYXRlU3VtbWFyaWVzKHBhcmVudC5yb3dJRCwgY2hpbGREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWNvcmQ6IElTdW1tYXJ5UmVjb3JkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcmllczogc3VtbWFyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4U3VtbWFyeUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZW50YXRpb246IHBhcmVudC5sZXZlbCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzV2l0aFN1bW1hcnkucHVzaChzdW1tYXJ5UmVjb3JkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRSZWNvcmQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZFJlY29yZC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VtbWFyeVBvc2l0aW9uID09PSBHcmlkU3VtbWFyeVBvc2l0aW9uLnRvcCAmJiBpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkRGF0YSA9IHJlY29yZC5jaGlsZHJlbi5maWx0ZXIociA9PiAhci5pc0ZpbHRlcmVkT3V0UGFyZW50KS5tYXAociA9PiByLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNoaWxkRGF0YSA9IHRoaXMucmVtb3ZlRGVsZXRlZFJlY29yZChncmlkLCByZWNvcmQucm93SUQsIGNoaWxkRGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyaWVzID0gZ3JpZC5zdW1tYXJ5U2VydmljZS5jYWxjdWxhdGVTdW1tYXJpZXMocmVjb3JkLnJvd0lELCBjaGlsZERhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWNvcmQ6IElTdW1tYXJ5UmVjb3JkID0ge1xuICAgICAgICAgICAgICAgICAgICBzdW1tYXJpZXM6IHN1bW1hcmllcyxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXhTdW1tYXJ5SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZW50YXRpb246IHJlY29yZC5sZXZlbCArIDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlY29yZHNXaXRoU3VtbWFyeS5wdXNoKHN1bW1hcnlSZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWNvcmRzV2l0aFN1bW1hcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVEZWxldGVkUmVjb3JkKGdyaWQsIHJvd0lkLCBkYXRhKSB7XG4gICAgICAgIGlmICghZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCB8fCAhZ3JpZC5jYXNjYWRlT25EZWxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRSb3dzID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0VHJhbnNhY3Rpb25Mb2coKS5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdkZWxldGUnKS5tYXAodCA9PiB0LmlkKTtcbiAgICAgICAgbGV0IHJvdyA9IGdyaWQucmVjb3Jkcy5nZXQocm93SWQpO1xuICAgICAgICBpZiAoIXJvdyAmJiBkZWxldGVkUm93cy5sZW5naHQgPT09IDApIHsgcmV0dXJuIFtdOyB9XG4gICAgICAgIHJvdyA9IHJvdy5jaGlsZHJlbiA/IHJvdyA6IHJvdy5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChyb3cpIHtcbiAgICAgICAgICAgIHJvd0lkID0gcm93LnJvd0lEO1xuICAgICAgICAgICAgaWYgKGRlbGV0ZWRSb3dzLmluZGV4T2Yocm93SWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdyA9IHJvdy5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlZFJvd3MuZm9yRWFjaChyb3dJRCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRGF0YSA9IGdyaWQucHJpbWFyeUtleSA/IGRhdGEubWFwKHJlYyA9PiByZWNbZ3JpZC5wcmltYXJ5S2V5XSkgOiBkYXRhO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0ZW1wRGF0YS5pbmRleE9mKHJvd0lEKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG4iXX0=