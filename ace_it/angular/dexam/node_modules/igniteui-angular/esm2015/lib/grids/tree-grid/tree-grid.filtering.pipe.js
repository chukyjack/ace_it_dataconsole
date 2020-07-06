/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DataUtil } from '../../data-operations/data-util';
import { GridBaseAPIService } from '../api.service';
import { BaseFilteringStrategy } from '../../data-operations/filtering-strategy';
/**
 * @hidden
 */
export class TreeGridFilteringStrategy extends BaseFilteringStrategy {
    /**
     * @param {?} data
     * @param {?} expressionsTree
     * @return {?}
     */
    filter(data, expressionsTree) {
        return this.filterImpl(data, expressionsTree, undefined);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} expressionsTree
     * @param {?} parent
     * @return {?}
     */
    filterImpl(data, expressionsTree, parent) {
        /** @type {?} */
        let i;
        /** @type {?} */
        let rec;
        /** @type {?} */
        const len = data.length;
        /** @type {?} */
        const res = [];
        if (!expressionsTree || !expressionsTree.filteringOperands || expressionsTree.filteringOperands.length === 0 || !len) {
            return data;
        }
        for (i = 0; i < len; i++) {
            rec = DataUtil.cloneTreeGridRecord(data[i]);
            rec.parent = parent;
            if (rec.children) {
                /** @type {?} */
                const filteredChildren = this.filterImpl(rec.children, expressionsTree, rec);
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
    }
    /**
     * @protected
     * @param {?} rec
     * @param {?} fieldName
     * @return {?}
     */
    getFieldValue(rec, fieldName) {
        /** @type {?} */
        const hierarchicalRecord = (/** @type {?} */ (rec));
        return hierarchicalRecord.data[fieldName];
    }
}
/**
 * @hidden
 */
export class IgxTreeGridFilteringPipe {
    /**
     * @param {?} gridAPI
     */
    constructor(gridAPI) {
        this.gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * @param {?} hierarchyData
     * @param {?} expressionsTree
     * @param {?} id
     * @param {?} pipeTrigger
     * @return {?}
     */
    transform(hierarchyData, expressionsTree, id, pipeTrigger) {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const state = {
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
        const result = this.filter(hierarchyData, state);
        /** @type {?} */
        const filteredData = [];
        this.expandAllRecursive(grid, result, grid.expansionStates, filteredData);
        grid.filteredData = filteredData;
        return result;
    }
    /**
     * @private
     * @param {?} map
     * @return {?}
     */
    resetFilteredOutProperty(map) {
        /** @type {?} */
        const keys = Array.from(map.keys());
        for (let i = 0; i < keys.length; i++) {
            map.get(keys[i]).isFilteredOutParent = undefined;
        }
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} data
     * @param {?} expandedStates
     * @param {?} filteredData
     * @return {?}
     */
    expandAllRecursive(grid, data, expandedStates, filteredData) {
        for (let i = 0; i < data.length; i++) {
            /** @type {?} */
            const rec = data[i];
            filteredData.push(rec.data);
            this.updateNonProcessedRecord(grid, rec);
            if (rec.children && rec.children.length > 0) {
                expandedStates.set(rec.rowID, true);
                this.expandAllRecursive(grid, rec.children, expandedStates, filteredData);
            }
        }
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} record
     * @return {?}
     */
    updateNonProcessedRecord(grid, record) {
        /** @type {?} */
        const rec = grid.records.get(record.rowID);
        rec.isFilteredOutParent = record.isFilteredOutParent;
    }
    /**
     * @private
     * @param {?} data
     * @param {?} state
     * @return {?}
     */
    filter(data, state) {
        return state.strategy.filter(data, state.expressionsTree);
    }
}
IgxTreeGridFilteringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'treeGridFiltering',
                pure: true
            },] }
];
/** @nocollapse */
IgxTreeGridFilteringPipe.ctorParameters = () => [
    { type: GridBaseAPIService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridFilteringPipe.prototype.gridAPI;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmZpbHRlcmluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLmZpbHRlcmluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFPakYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHFCQUFxQjs7Ozs7O0lBQ3pELE1BQU0sQ0FBQyxJQUF1QixFQUFFLGVBQTBDO1FBQzdFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQXVCLEVBQUUsZUFBMEMsRUFBRSxNQUF1Qjs7WUFDdkcsQ0FBUzs7WUFDVCxHQUFvQjs7Y0FDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNOztjQUNqQixHQUFHLEdBQXNCLEVBQUU7UUFDakMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNsSCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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QUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUM1QixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRXpDLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUM3RTtTQUNKO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLHdCQUF3QixDQUFDLElBQTBCLEVBQUUsTUFBdUI7O2NBQzFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDekQsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxJQUF1QixFQUFFLEtBQXNCO1FBQzFELE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUFoRUosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLElBQUksRUFBRSxJQUFJO2FBQ2I7Ozs7WUFuRFEsa0JBQWtCOzs7Ozs7O0lBcUR2QiwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVXRpbCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbnMtdHJlZSc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7IElGaWx0ZXJpbmdTdGF0ZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElUcmVlR3JpZFJlY29yZCB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWdyaWQtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi4vZ3JpZCc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRGaWx0ZXJpbmdTdHJhdGVneSBleHRlbmRzIEJhc2VGaWx0ZXJpbmdTdHJhdGVneSB7XG4gICAgcHVibGljIGZpbHRlcihkYXRhOiBJVHJlZUdyaWRSZWNvcmRbXSwgZXhwcmVzc2lvbnNUcmVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJJbXBsKGRhdGEsIGV4cHJlc3Npb25zVHJlZSwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlckltcGwoZGF0YTogSVRyZWVHcmlkUmVjb3JkW10sIGV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSwgcGFyZW50OiBJVHJlZUdyaWRSZWNvcmQpOiBJVHJlZUdyaWRSZWNvcmRbXSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGxldCByZWM6IElUcmVlR3JpZFJlY29yZDtcbiAgICAgICAgY29uc3QgbGVuID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlczogSVRyZWVHcmlkUmVjb3JkW10gPSBbXTtcbiAgICAgICAgaWYgKCFleHByZXNzaW9uc1RyZWUgfHwgIWV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcyB8fCBleHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoID09PSAwIHx8ICFsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmVjID0gRGF0YVV0aWwuY2xvbmVUcmVlR3JpZFJlY29yZChkYXRhW2ldKTtcbiAgICAgICAgICAgIHJlYy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICBpZiAocmVjLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRDaGlsZHJlbiA9IHRoaXMuZmlsdGVySW1wbChyZWMuY2hpbGRyZW4sIGV4cHJlc3Npb25zVHJlZSwgcmVjKTtcbiAgICAgICAgICAgICAgICByZWMuY2hpbGRyZW4gPSBmaWx0ZXJlZENoaWxkcmVuLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZENoaWxkcmVuIDogbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hSZWNvcmQocmVjLCBleHByZXNzaW9uc1RyZWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocmVjKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjLmNoaWxkcmVuICYmIHJlYy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVjLmlzRmlsdGVyZWRPdXRQYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHJlYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RmllbGRWYWx1ZShyZWM6IG9iamVjdCwgZmllbGROYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBoaWVyYXJjaGljYWxSZWNvcmQgPSA8SVRyZWVHcmlkUmVjb3JkPnJlYztcbiAgICAgICAgcmV0dXJuIGhpZXJhcmNoaWNhbFJlY29yZC5kYXRhW2ZpZWxkTmFtZV07XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmVlR3JpZEZpbHRlcmluZycsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZEZpbHRlcmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGdyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPikge1xuICAgICAgICB0aGlzLmdyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oaGllcmFyY2h5RGF0YTogSVRyZWVHcmlkUmVjb3JkW10sIGV4cHJlc3Npb25zVHJlZTogSUZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSxcbiAgICAgICAgaWQ6IHN0cmluZywgcGlwZVRyaWdnZXI6IG51bWJlcik6IElUcmVlR3JpZFJlY29yZFtdIHtcbiAgICAgICAgY29uc3QgZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBleHByZXNzaW9uc1RyZWU6IGV4cHJlc3Npb25zVHJlZSxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBuZXcgVHJlZUdyaWRGaWx0ZXJpbmdTdHJhdGVneSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkT3V0UHJvcGVydHkoZ3JpZC5yZWNvcmRzKTtcblxuICAgICAgICBpZiAoIXN0YXRlLmV4cHJlc3Npb25zVHJlZSB8fFxuICAgICAgICAgICAgIXN0YXRlLmV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcyB8fFxuICAgICAgICAgICAgc3RhdGUuZXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZ3JpZC5maWx0ZXJlZERhdGEgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGhpZXJhcmNoeURhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmZpbHRlcihoaWVyYXJjaHlEYXRhLCBzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YTogYW55W10gPSBbXTtcbiAgICAgICAgdGhpcy5leHBhbmRBbGxSZWN1cnNpdmUoZ3JpZCwgcmVzdWx0LCBncmlkLmV4cGFuc2lvblN0YXRlcywgZmlsdGVyZWREYXRhKTtcbiAgICAgICAgZ3JpZC5maWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGE7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RmlsdGVyZWRPdXRQcm9wZXJ0eShtYXA6IE1hcDxhbnksIElUcmVlR3JpZFJlY29yZD4pIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IEFycmF5LmZyb20obWFwLmtleXMoKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFwLmdldChrZXlzW2ldKS5pc0ZpbHRlcmVkT3V0UGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHBhbmRBbGxSZWN1cnNpdmUoZ3JpZDogSWd4VHJlZUdyaWRDb21wb25lbnQsIGRhdGE6IElUcmVlR3JpZFJlY29yZFtdLFxuICAgICAgICBleHBhbmRlZFN0YXRlczogTWFwPGFueSwgYm9vbGVhbj4sIGZpbHRlcmVkRGF0YTogYW55W10pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWMgPSBkYXRhW2ldO1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2gocmVjLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOb25Qcm9jZXNzZWRSZWNvcmQoZ3JpZCwgcmVjKTtcblxuICAgICAgICAgICAgaWYgKHJlYy5jaGlsZHJlbiAmJiByZWMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkU3RhdGVzLnNldChyZWMucm93SUQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWxsUmVjdXJzaXZlKGdyaWQsIHJlYy5jaGlsZHJlbiwgZXhwYW5kZWRTdGF0ZXMsIGZpbHRlcmVkRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU5vblByb2Nlc3NlZFJlY29yZChncmlkOiBJZ3hUcmVlR3JpZENvbXBvbmVudCwgcmVjb3JkOiBJVHJlZUdyaWRSZWNvcmQpIHtcbiAgICAgICAgY29uc3QgcmVjID0gZ3JpZC5yZWNvcmRzLmdldChyZWNvcmQucm93SUQpO1xuICAgICAgICByZWMuaXNGaWx0ZXJlZE91dFBhcmVudCA9IHJlY29yZC5pc0ZpbHRlcmVkT3V0UGFyZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyKGRhdGE6IElUcmVlR3JpZFJlY29yZFtdLCBzdGF0ZTogSUZpbHRlcmluZ1N0YXRlKTogSVRyZWVHcmlkUmVjb3JkW10ge1xuICAgICAgICByZXR1cm4gc3RhdGUuc3RyYXRlZ3kuZmlsdGVyKGRhdGEsIHN0YXRlLmV4cHJlc3Npb25zVHJlZSk7XG4gICAgfVxufVxuIl19