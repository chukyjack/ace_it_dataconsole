/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DataUtil } from '../../data-operations/data-util';
import { GridBaseAPIService } from '../api.service';
import { BaseFilteringStrategy } from '../../data-operations/filtering-strategy';
/**
 * @hidden
 */
var /**
 * @hidden
 */
TreeGridFilteringStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(TreeGridFilteringStrategy, _super);
    function TreeGridFilteringStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    TreeGridFilteringStrategy.prototype.filter = /**
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    function (data, expressionsTree) {
        return this.filterImpl(data, expressionsTree, undefined);
    };
    /**
     * @private
     * @param {?} data
     * @param {?} expressionsTree
     * @param {?} parent
     * @return {?}
     */
    TreeGridFilteringStrategy.prototype.filterImpl = /**
     * @private
     * @param {?} data
     * @param {?} expressionsTree
     * @param {?} parent
     * @return {?}
     */
    function (data, expressionsTree, parent) {
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
            rec = DataUtil.cloneTreeGridRecord(data[i]);
            rec.parent = parent;
            if (rec.children) {
                /** @type {?} */
                var filteredChildren = this.filterImpl(rec.children, expressionsTree, rec);
                rec.children = filteredChildren.length > 0 ? filteredChildren : null;
            }
            if (this.matchRecord(rec, expressionsTree)) {
                res.push(rec);
            }
            else if (rec.children && rec.children.length > 0) {
                rec.isFilteredOutParent = true;
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
    TreeGridFilteringStrategy.prototype.getFieldValue = /**
     * @protected
     * @param {?} rec
     * @param {?} fieldName
     * @return {?}
     */
    function (rec, fieldName) {
        /** @type {?} */
        var hierarchicalRecord = (/** @type {?} */ (rec));
        return hierarchicalRecord.data[fieldName];
    };
    return TreeGridFilteringStrategy;
}(BaseFilteringStrategy));
/**
 * @hidden
 */
export { TreeGridFilteringStrategy };
/**
 * @hidden
 */
var IgxTreeGridFilteringPipe = /** @class */ (function () {
    function IgxTreeGridFilteringPipe(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} hierarchyData
     * @param {?} expressionsTree
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    IgxTreeGridFilteringPipe.prototype.transform = /**
     * @param {?} hierarchyData
     * @param {?} expressionsTree
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    function (hierarchyData, expressionsTree, id, pipeTrigger) {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var state = {
            expressionsTree: expressionsTree,
            strategy: new TreeGridFilteringStrategy()
        };
        this.resetFilteredOutProperty(grid.records);
        if (!state.expressionsTree ||
            !state.expressionsTree.filteringOperands ||
            state.expressionsTree.filteringOperands.length === 0) {
            grid.filteredData = null;
            return hierarchyData;
        }
        /** @type {?} */
        var result = this.filter(hierarchyData, state);
        /** @type {?} */
        var filteredData = [];
        this.expandAllRecursive(grid, result, grid.expansionStates, filteredData);
        grid.filteredData = filteredData;
        return result;
    };
    /**
     * @private
     * @param {?} map
     * @return {?}
     */
    IgxTreeGridFilteringPipe.prototype.resetFilteredOutProperty = /**
     * @private
     * @param {?} map
     * @return {?}
     */
    function (map) {
        /** @type {?} */
        var keys = Array.from(map.keys());
        for (var i = 0; i < keys.length; i++) {
            map.get(keys[i]).isFilteredOutParent = undefined;
        }
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} data
     * @param {?} expandedStates
     * @param {?} filteredData
     * @return {?}
     */
    IgxTreeGridFilteringPipe.prototype.expandAllRecursive = /**
     * @private
     * @param {?} grid
     * @param {?} data
     * @param {?} expandedStates
     * @param {?} filteredData
     * @return {?}
     */
    function (grid, data, expandedStates, filteredData) {
        for (var i = 0; i < data.length; i++) {
            /** @type {?} */
            var rec = data[i];
            filteredData.push(rec.data);
            this.updateNonProcessedRecord(grid, rec);
            if (rec.children && rec.children.length > 0) {
                expandedStates.set(rec.rowID, true);
                this.expandAllRecursive(grid, rec.children, expandedStates, filteredData);
            }
        }
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} record
     * @return {?}
     */
    IgxTreeGridFilteringPipe.prototype.updateNonProcessedRecord = /**
     * @private
     * @param {?} grid
     * @param {?} record
     * @return {?}
     */
    function (grid, record) {
        /** @type {?} */
        var rec = grid.records.get(record.rowID);
        rec.isFilteredOutParent = record.isFilteredOutParent;
    };
    /**
     * @private
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    IgxTreeGridFilteringPipe.prototype.filter = /**
     * @private
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    function (data, state) {
        return state.strategy.filter(data, state.expressionsTree);
    };
    IgxTreeGridFilteringPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'treeGridFiltering',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    IgxTreeGridFilteringPipe.ctorParameters = function () { return [
        { type: GridBaseAPIService }
    ]; };
    return IgxTreeGridFilteringPipe;
}());
export { IgxTreeGridFilteringPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridFilteringPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmZpbHRlcmluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLmZpbHRlcmluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBT2pGOzs7O0lBQStDLHFEQUFxQjtJQUFwRTs7SUFtQ0EsQ0FBQzs7Ozs7O0lBbENVLDBDQUFNOzs7OztJQUFiLFVBQWMsSUFBdUIsRUFBRSxlQUEwQztRQUM3RSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7OztJQUVPLDhDQUFVOzs7Ozs7O0lBQWxCLFVBQW1CLElBQXVCLEVBQUUsZUFBMEMsRUFBRSxNQUF1Qjs7WUFDdkcsQ0FBUzs7WUFDVCxHQUFvQjs7WUFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNOztZQUNqQixHQUFHLEdBQXNCLEVBQUU7UUFDakMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNsSCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FB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QkFDekIsSUFBSSxFQUFFLElBQUk7aUJBQ2I7Ozs7Z0JBbkRRLGtCQUFrQjs7SUFpSDNCLCtCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0E3RFksd0JBQXdCOzs7Ozs7SUFDakMsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFRyZWVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUnO1xuaW1wb3J0IHsgQmFzZUZpbHRlcmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nU3RhdGUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJVHJlZUdyaWRSZWNvcmQgfSBmcm9tICcuL3RyZWUtZ3JpZC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElneFRyZWVHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQnO1xuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFRyZWVHcmlkRmlsdGVyaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNlRmlsdGVyaW5nU3RyYXRlZ3kge1xuICAgIHB1YmxpYyBmaWx0ZXIoZGF0YTogSVRyZWVHcmlkUmVjb3JkW10sIGV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSk6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVySW1wbChkYXRhLCBleHByZXNzaW9uc1RyZWUsIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJJbXBsKGRhdGE6IElUcmVlR3JpZFJlY29yZFtdLCBleHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIHBhcmVudDogSVRyZWVHcmlkUmVjb3JkKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBsZXQgcmVjOiBJVHJlZUdyaWRSZWNvcmQ7XG4gICAgICAgIGNvbnN0IGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXM6IElUcmVlR3JpZFJlY29yZFtdID0gW107XG4gICAgICAgIGlmICghZXhwcmVzc2lvbnNUcmVlIHx8ICFleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMgfHwgZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCA9PT0gMCB8fCAhbGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlYyA9IERhdGFVdGlsLmNsb25lVHJlZUdyaWRSZWNvcmQoZGF0YVtpXSk7XG4gICAgICAgICAgICByZWMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgaWYgKHJlYy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW4gPSB0aGlzLmZpbHRlckltcGwocmVjLmNoaWxkcmVuLCBleHByZXNzaW9uc1RyZWUsIHJlYyk7XG4gICAgICAgICAgICAgICAgcmVjLmNoaWxkcmVuID0gZmlsdGVyZWRDaGlsZHJlbi5sZW5ndGggPiAwID8gZmlsdGVyZWRDaGlsZHJlbiA6IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoUmVjb3JkKHJlYywgZXhwcmVzc2lvbnNUcmVlKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHJlYyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYy5jaGlsZHJlbiAmJiByZWMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlYy5pc0ZpbHRlcmVkT3V0UGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXMucHVzaChyZWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEZpZWxkVmFsdWUocmVjOiBvYmplY3QsIGZpZWxkTmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc3QgaGllcmFyY2hpY2FsUmVjb3JkID0gPElUcmVlR3JpZFJlY29yZD5yZWM7XG4gICAgICAgIHJldHVybiBoaWVyYXJjaGljYWxSZWNvcmQuZGF0YVtmaWVsZE5hbWVdO1xuICAgIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJlZUdyaWRGaWx0ZXJpbmcnLFxuICAgIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRGaWx0ZXJpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBncmlkQVBJOiBJZ3hUcmVlR3JpZEFQSVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4pIHtcbiAgICAgICAgdGhpcy5ncmlkQVBJID0gPElneFRyZWVHcmlkQVBJU2VydmljZT5ncmlkQVBJO1xuICAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKGhpZXJhcmNoeURhdGE6IElUcmVlR3JpZFJlY29yZFtdLCBleHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsXG4gICAgICAgIGlkOiBzdHJpbmcsIHBpcGVUcmlnZ2VyOiBudW1iZXIpOiBJVHJlZUdyaWRSZWNvcmRbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQ6IElneFRyZWVHcmlkQ29tcG9uZW50ID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgZXhwcmVzc2lvbnNUcmVlOiBleHByZXNzaW9uc1RyZWUsXG4gICAgICAgICAgICBzdHJhdGVneTogbmV3IFRyZWVHcmlkRmlsdGVyaW5nU3RyYXRlZ3koKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZE91dFByb3BlcnR5KGdyaWQucmVjb3Jkcyk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5leHByZXNzaW9uc1RyZWUgfHxcbiAgICAgICAgICAgICFzdGF0ZS5leHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMgfHxcbiAgICAgICAgICAgIHN0YXRlLmV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGdyaWQuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBoaWVyYXJjaHlEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5maWx0ZXIoaGllcmFyY2h5RGF0YSwgc3RhdGUpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGE6IGFueVtdID0gW107XG4gICAgICAgIHRoaXMuZXhwYW5kQWxsUmVjdXJzaXZlKGdyaWQsIHJlc3VsdCwgZ3JpZC5leHBhbnNpb25TdGF0ZXMsIGZpbHRlcmVkRGF0YSk7XG4gICAgICAgIGdyaWQuZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZpbHRlcmVkT3V0UHJvcGVydHkobWFwOiBNYXA8YW55LCBJVHJlZUdyaWRSZWNvcmQ+KSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBBcnJheS5mcm9tKG1hcC5rZXlzKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hcC5nZXQoa2V5c1tpXSkuaXNGaWx0ZXJlZE91dFBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXhwYW5kQWxsUmVjdXJzaXZlKGdyaWQ6IElneFRyZWVHcmlkQ29tcG9uZW50LCBkYXRhOiBJVHJlZUdyaWRSZWNvcmRbXSxcbiAgICAgICAgZXhwYW5kZWRTdGF0ZXM6IE1hcDxhbnksIGJvb2xlYW4+LCBmaWx0ZXJlZERhdGE6IGFueVtdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVjID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YS5wdXNoKHJlYy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTm9uUHJvY2Vzc2VkUmVjb3JkKGdyaWQsIHJlYyk7XG5cbiAgICAgICAgICAgIGlmIChyZWMuY2hpbGRyZW4gJiYgcmVjLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZFN0YXRlcy5zZXQocmVjLnJvd0lELCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFsbFJlY3Vyc2l2ZShncmlkLCByZWMuY2hpbGRyZW4sIGV4cGFuZGVkU3RhdGVzLCBmaWx0ZXJlZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVOb25Qcm9jZXNzZWRSZWNvcmQoZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQsIHJlY29yZDogSVRyZWVHcmlkUmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IHJlYyA9IGdyaWQucmVjb3Jkcy5nZXQocmVjb3JkLnJvd0lEKTtcbiAgICAgICAgcmVjLmlzRmlsdGVyZWRPdXRQYXJlbnQgPSByZWNvcmQuaXNGaWx0ZXJlZE91dFBhcmVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlcihkYXRhOiBJVHJlZUdyaWRSZWNvcmRbXSwgc3RhdGU6IElGaWx0ZXJpbmdTdGF0ZSk6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0cmF0ZWd5LmZpbHRlcihkYXRhLCBzdGF0ZS5leHByZXNzaW9uc1RyZWUpO1xuICAgIH1cbn1cbiJdfQ==