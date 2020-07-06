/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Output } from '@angular/core';
import { cloneValue } from '../../core/utils';
import { DataUtil } from '../../data-operations/data-util';
import { ExportUtilities } from './export-utilities';
/**
 * onRowExport event arguments
 * this.exporterService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
 * // set args properties here
 * })
 * @record
 */
export function IRowExportingEventArgs() { }
if (false) {
    /**
     * Contains the exporting row data
     * @type {?}
     */
    IRowExportingEventArgs.prototype.rowData;
    /**
     * Contains the exporting row index
     * @type {?}
     */
    IRowExportingEventArgs.prototype.rowIndex;
    /**
     * Skip the exporting row when set to true
     * @type {?}
     */
    IRowExportingEventArgs.prototype.cancel;
}
/**
 * onColumnExport event arguments
 * ```typescript
 * this.exporterService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
 * // set args properties here
 * });
 * ```
 * @record
 */
export function IColumnExportingEventArgs() { }
if (false) {
    /**
     * Contains the exporting column header
     * @type {?}
     */
    IColumnExportingEventArgs.prototype.header;
    /**
     * Contains the exporting column field name
     * @type {?}
     */
    IColumnExportingEventArgs.prototype.field;
    /**
     * Contains the exporting column index
     * @type {?}
     */
    IColumnExportingEventArgs.prototype.columnIndex;
    /**
     * Skip the exporting column when set to true
     * @type {?}
     */
    IColumnExportingEventArgs.prototype.cancel;
    /**
     * Export the column's data without applying its formatter, when set to true
     * @type {?}
     */
    IColumnExportingEventArgs.prototype.skipFormatter;
}
/**
 * @abstract
 */
export class IgxBaseExporter {
    constructor() {
        this.flatRecords = [];
        this._isTreeGrid = false;
        this._indexOfLastPinnedColumn = -1;
        this._sort = null;
        /**
         * This event is emitted when a row is exported.
         * ```typescript
         * this.exporterService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
         * // put event handler code here
         * });
         * ```
         * \@memberof IgxBaseExporter
         */
        this.onRowExport = new EventEmitter();
        /**
         * This event is emitted when a column is exported.
         * ```typescript
         * this.exporterService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
         * // put event handler code here
         * });
         * ```
         * \@memberof IgxBaseExporter
         */
        this.onColumnExport = new EventEmitter();
    }
    /**
     * Method for exporting IgxGrid component's data.
     * ```typescript
     * this.exporterService.export(this.igxGridForExport, this.exportOptions);
     * ```
     * \@memberof IgxBaseExporter
     * @param {?} grid
     * @param {?} options
     * @return {?}
     */
    export(grid, options) {
        if (options === undefined || options === null) {
            throw Error('No options provided!');
        }
        /** @type {?} */
        const columns = grid.columnList.toArray();
        this._columnList = new Array(columns.length);
        /** @type {?} */
        const hiddenColumns = [];
        /** @type {?} */
        let lastVisbleColumnIndex = -1;
        columns.forEach((column) => {
            /** @type {?} */
            const columnHeader = column.header !== '' ? column.header : column.field;
            /** @type {?} */
            const exportColumn = !column.hidden || options.ignoreColumnsVisibility;
            /** @type {?} */
            const index = options.ignoreColumnsOrder ? column.index : column.visibleIndex;
            /** @type {?} */
            const columnInfo = {
                header: columnHeader,
                field: column.field,
                skip: !exportColumn,
                formatter: column.formatter,
                skipFormatter: false
            };
            if (index !== -1) {
                this._columnList[index] = columnInfo;
                lastVisbleColumnIndex = Math.max(lastVisbleColumnIndex, index);
            }
            else {
                hiddenColumns.push(columnInfo);
            }
            if (column.pinned && exportColumn) {
                this._indexOfLastPinnedColumn = index;
            }
        });
        // Append the hidden columns to the end of the list
        hiddenColumns.forEach((hiddenColumn) => {
            this._columnList[++lastVisbleColumnIndex] = hiddenColumn;
        });
        /** @type {?} */
        const data = this.prepareData(grid, options);
        this.exportData(data, options);
    }
    /**
     * Method for exporting any kind of array data.
     * ```typescript
     * this.exporterService.exportData(this.arrayForExport, this.exportOptions);
     * ```
     * \@memberof IgxBaseExporter
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    exportData(data, options) {
        if (options === undefined || options === null) {
            throw Error('No options provided!');
        }
        if (!this._columnList || this._columnList.length === 0) {
            /** @type {?} */
            const keys = ExportUtilities.getKeysFromData(data);
            this._columnList = keys.map((k) => ({ header: k, field: k, skip: false }));
        }
        /** @type {?} */
        let skippedPinnedColumnsCount = 0;
        /** @type {?} */
        let columnsWithoutHeaderCount = 1;
        this._columnList.forEach((column, index) => {
            if (!column.skip) {
                /** @type {?} */
                const columnExportArgs = {
                    header: ExportUtilities.isNullOrWhitespaces(column.header) ?
                        'Column' + columnsWithoutHeaderCount++ : column.header,
                    field: column.field,
                    columnIndex: index,
                    cancel: false,
                    skipFormatter: false
                };
                this.onColumnExport.emit(columnExportArgs);
                column.header = columnExportArgs.header;
                column.skip = columnExportArgs.cancel;
                column.skipFormatter = columnExportArgs.skipFormatter;
                if (column.skip && index <= this._indexOfLastPinnedColumn) {
                    skippedPinnedColumnsCount++;
                }
                if (this._sort && this._sort.fieldName === column.field) {
                    if (column.skip) {
                        this._sort = null;
                    }
                    else {
                        this._sort.fieldName = column.header;
                    }
                }
            }
        });
        this._indexOfLastPinnedColumn -= skippedPinnedColumnsCount;
        /** @type {?} */
        const dataToExport = new Array();
        /** @type {?} */
        const isSpecialData = ExportUtilities.isSpecialData(data);
        data.forEach((row, index) => {
            this.exportRow(dataToExport, row, index, isSpecialData);
        });
        this.exportDataImplementation(dataToExport, options);
        this.resetDefaults();
    }
    /**
     * @private
     * @param {?} data
     * @param {?} rowData
     * @param {?} index
     * @param {?} isSpecialData
     * @return {?}
     */
    exportRow(data, rowData, index, isSpecialData) {
        /** @type {?} */
        let row;
        if (!isSpecialData) {
            row = this._columnList.reduce((a, e) => {
                if (!e.skip) {
                    /** @type {?} */
                    const rawValue = this._isTreeGrid ? rowData.data[e.field] : rowData[e.field];
                    a[e.header] = e.formatter && !e.skipFormatter ? e.formatter(rawValue) : rawValue;
                }
                return a;
            }, {});
        }
        else {
            row = this._isTreeGrid ? rowData.data : rowData;
        }
        /** @type {?} */
        const rowArgs = {
            rowData: row,
            rowIndex: index,
            cancel: false
        };
        this.onRowExport.emit(rowArgs);
        if (!rowArgs.cancel) {
            data.push({ rowData: rowArgs.rowData, originalRowData: rowData });
        }
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} options
     * @return {?}
     */
    prepareData(grid, options) {
        this.flatRecords = [];
        /** @type {?} */
        let rootRecords = grid.rootRecords;
        this._isTreeGrid = rootRecords !== undefined;
        if (this._isTreeGrid) {
            this.prepareHierarchicalData(rootRecords);
        }
        /** @type {?} */
        let data = this._isTreeGrid ? this.flatRecords : grid.data;
        if (grid.filteringExpressionsTree &&
            grid.filteringExpressionsTree.filteringOperands.length > 0 &&
            !options.ignoreFiltering) {
            /** @type {?} */
            const filteringState = {
                expressionsTree: grid.filteringExpressionsTree,
                logic: grid.filteringLogic
            };
            if (this._isTreeGrid) {
                this.flatRecords = [];
                rootRecords = DataUtil.treeGridFilter(rootRecords, filteringState);
                this.prepareHierarchicalData(rootRecords);
                data = this.flatRecords;
            }
            else {
                data = DataUtil.filter(data, filteringState);
            }
        }
        if (grid.sortingExpressions &&
            grid.sortingExpressions.length > 0 &&
            !options.ignoreSorting) {
            this._sort = cloneValue(grid.sortingExpressions[0]);
            if (this._isTreeGrid) {
                this.flatRecords = [];
                rootRecords = DataUtil.treeGridSort(rootRecords, grid.sortingExpressions);
                this.prepareHierarchicalData(rootRecords);
                data = this.flatRecords;
            }
            else {
                data = DataUtil.sort(data, grid.sortingExpressions);
            }
        }
        return data;
    }
    /**
     * @private
     * @param {?} records
     * @return {?}
     */
    prepareHierarchicalData(records) {
        if (!records) {
            return;
        }
        for (let i = 0; i < records.length; i++) {
            /** @type {?} */
            const hierarchicalRecord = records[i];
            this.flatRecords.push(hierarchicalRecord);
            this.prepareHierarchicalData(hierarchicalRecord.children);
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetDefaults() {
        this._columnList = [];
        this._indexOfLastPinnedColumn = -1;
        this._sort = null;
        this.flatRecords = [];
    }
}
IgxBaseExporter.propDecorators = {
    onRowExport: [{ type: Output }],
    onColumnExport: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxBaseExporter.prototype._columnList;
    /**
     * @type {?}
     * @private
     */
    IgxBaseExporter.prototype.flatRecords;
    /**
     * @type {?}
     * @protected
     */
    IgxBaseExporter.prototype._isTreeGrid;
    /**
     * @type {?}
     * @protected
     */
    IgxBaseExporter.prototype._indexOfLastPinnedColumn;
    /**
     * @type {?}
     * @protected
     */
    IgxBaseExporter.prototype._sort;
    /**
     * This event is emitted when a row is exported.
     * ```typescript
     * this.exporterService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * \@memberof IgxBaseExporter
     * @type {?}
     */
    IgxBaseExporter.prototype.onRowExport;
    /**
     * This event is emitted when a column is exported.
     * ```typescript
     * this.exporterService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * \@memberof IgxBaseExporter
     * @type {?}
     */
    IgxBaseExporter.prototype.onColumnExport;
    /**
     * @abstract
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    IgxBaseExporter.prototype.exportDataImplementation = function (data, options) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1leHBvcnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXItY29tbW9uL2Jhc2UtZXhwb3J0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxZQUFZLEVBQ1osTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQVVyRCw0Q0FlQzs7Ozs7O0lBWEcseUNBQWE7Ozs7O0lBS2IsMENBQWlCOzs7OztJQUtqQix3Q0FBZ0I7Ozs7Ozs7Ozs7O0FBV3BCLCtDQXlCQzs7Ozs7O0lBckJHLDJDQUFlOzs7OztJQUtmLDBDQUFjOzs7OztJQUtkLGdEQUFvQjs7Ozs7SUFLcEIsMkNBQWdCOzs7OztJQUtoQixrREFBdUI7Ozs7O0FBRzNCLE1BQU0sT0FBZ0IsZUFBZTtJQUFyQztRQUVZLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsNkJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsVUFBSyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7OztRQVloQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDOzs7Ozs7Ozs7O1FBWXpELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7SUFrTjFFLENBQUM7Ozs7Ozs7Ozs7O0lBek1VLE1BQU0sQ0FBQyxJQUFTLEVBQUUsT0FBK0I7UUFDcEQsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxLQUFLLENBQUMsc0JBQXNCLENB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QyxDQUFDO1lBRXJDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7MEJBOU5BLE1BQU07NkJBWU4sTUFBTTs7Ozs7OztJQTVCUCxzQ0FBMkI7Ozs7O0lBQzNCLHNDQUF5Qjs7Ozs7SUFFekIsc0NBQThCOzs7OztJQUM5QixtREFBd0M7Ozs7O0lBQ3hDLGdDQUF1Qjs7Ozs7Ozs7Ozs7SUFXdkIsc0NBQ2dFOzs7Ozs7Ozs7OztJQVdoRSx5Q0FDc0U7Ozs7Ozs7O0lBb0h0RSxrRkFBZ0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNsb25lVmFsdWUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IERhdGFVdGlsIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5cbmltcG9ydCB7IEV4cG9ydFV0aWxpdGllcyB9IGZyb20gJy4vZXhwb3J0LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlIH0gZnJvbSAnLi9leHBvcnRlci1vcHRpb25zLWJhc2UnO1xuaW1wb3J0IHsgSVRyZWVHcmlkUmVjb3JkIH0gZnJvbSAnLi4vLi4vZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBvblJvd0V4cG9ydCBldmVudCBhcmd1bWVudHNcbiAqIHRoaXMuZXhwb3J0ZXJTZXJ2aWNlLm9uUm93RXhwb3J0LnN1YnNjcmliZSgoYXJnczogSVJvd0V4cG9ydGluZ0V2ZW50QXJncykgPT4ge1xuICogLy8gc2V0IGFyZ3MgcHJvcGVydGllcyBoZXJlXG4gKiB9KVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElSb3dFeHBvcnRpbmdFdmVudEFyZ3Mge1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIHRoZSBleHBvcnRpbmcgcm93IGRhdGFcbiAgICAgKi9cbiAgICByb3dEYXRhOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyB0aGUgZXhwb3J0aW5nIHJvdyBpbmRleFxuICAgICAqL1xuICAgIHJvd0luZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBTa2lwIHRoZSBleHBvcnRpbmcgcm93IHdoZW4gc2V0IHRvIHRydWVcbiAgICAgKi9cbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbi8qKlxuICAgICogb25Db2x1bW5FeHBvcnQgZXZlbnQgYXJndW1lbnRzXG4gICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgKiB0aGlzLmV4cG9ydGVyU2VydmljZS5vbkNvbHVtbkV4cG9ydC5zdWJzY3JpYmUoKGFyZ3M6IElDb2x1bW5FeHBvcnRpbmdFdmVudEFyZ3MpID0+IHtcbiAgICAqIC8vIHNldCBhcmdzIHByb3BlcnRpZXMgaGVyZVxuICAgICogfSk7XG4gICAgKiBgYGBcbiAgICAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uRXhwb3J0aW5nRXZlbnRBcmdzIHtcbiAgICAvKipcbiAgICAgKiBDb250YWlucyB0aGUgZXhwb3J0aW5nIGNvbHVtbiBoZWFkZXJcbiAgICAgKi9cbiAgICBoZWFkZXI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIHRoZSBleHBvcnRpbmcgY29sdW1uIGZpZWxkIG5hbWVcbiAgICAgKi9cbiAgICBmaWVsZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgdGhlIGV4cG9ydGluZyBjb2x1bW4gaW5kZXhcbiAgICAgKi9cbiAgICBjb2x1bW5JbmRleDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogU2tpcCB0aGUgZXhwb3J0aW5nIGNvbHVtbiB3aGVuIHNldCB0byB0cnVlXG4gICAgICovXG4gICAgY2FuY2VsOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRXhwb3J0IHRoZSBjb2x1bW4ncyBkYXRhIHdpdGhvdXQgYXBwbHlpbmcgaXRzIGZvcm1hdHRlciwgd2hlbiBzZXQgdG8gdHJ1ZVxuICAgICAqL1xuICAgIHNraXBGb3JtYXR0ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZ3hCYXNlRXhwb3J0ZXIge1xuICAgIHByaXZhdGUgX2NvbHVtbkxpc3Q6IGFueVtdO1xuICAgIHByaXZhdGUgZmxhdFJlY29yZHMgPSBbXTtcblxuICAgIHByb3RlY3RlZCBfaXNUcmVlR3JpZCA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfaW5kZXhPZkxhc3RQaW5uZWRDb2x1bW4gPSAtMTtcbiAgICBwcm90ZWN0ZWQgX3NvcnQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBlbWl0dGVkIHdoZW4gYSByb3cgaXMgZXhwb3J0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZXhwb3J0ZXJTZXJ2aWNlLm9uUm93RXhwb3J0LnN1YnNjcmliZSgoYXJnczogSVJvd0V4cG9ydGluZ0V2ZW50QXJncykgPT4ge1xuICAgICAqIC8vIHB1dCBldmVudCBoYW5kbGVyIGNvZGUgaGVyZVxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCYXNlRXhwb3J0ZXJcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Sb3dFeHBvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPElSb3dFeHBvcnRpbmdFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGVtaXR0ZWQgd2hlbiBhIGNvbHVtbiBpcyBleHBvcnRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRlclNlcnZpY2Uub25Db2x1bW5FeHBvcnQuc3Vic2NyaWJlKChhcmdzOiBJQ29sdW1uRXhwb3J0aW5nRXZlbnRBcmdzKSA9PiB7XG4gICAgICogLy8gcHV0IGV2ZW50IGhhbmRsZXIgY29kZSBoZXJlXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJhc2VFeHBvcnRlclxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNvbHVtbkV4cG9ydCA9IG5ldyBFdmVudEVtaXR0ZXI8SUNvbHVtbkV4cG9ydGluZ0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBmb3IgZXhwb3J0aW5nIElneEdyaWQgY29tcG9uZW50J3MgZGF0YS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRlclNlcnZpY2UuZXhwb3J0KHRoaXMuaWd4R3JpZEZvckV4cG9ydCwgdGhpcy5leHBvcnRPcHRpb25zKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QmFzZUV4cG9ydGVyXG4gICAgICovXG4gICAgcHVibGljIGV4cG9ydChncmlkOiBhbnksIG9wdGlvbnM6IElneEV4cG9ydGVyT3B0aW9uc0Jhc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gb3B0aW9ucyBwcm92aWRlZCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBncmlkLmNvbHVtbkxpc3QudG9BcnJheSgpO1xuICAgICAgICB0aGlzLl9jb2x1bW5MaXN0ID0gbmV3IEFycmF5PGFueT4oY29sdW1ucy5sZW5ndGgpO1xuXG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbHVtbnMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RWaXNibGVDb2x1bW5JbmRleCA9IC0xO1xuXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5IZWFkZXIgPSBjb2x1bW4uaGVhZGVyICE9PSAnJyA/IGNvbHVtbi5oZWFkZXIgOiBjb2x1bW4uZmllbGQ7XG4gICAgICAgICAgICBjb25zdCBleHBvcnRDb2x1bW4gPSAhY29sdW1uLmhpZGRlbiB8fCBvcHRpb25zLmlnbm9yZUNvbHVtbnNWaXNpYmlsaXR5O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBvcHRpb25zLmlnbm9yZUNvbHVtbnNPcmRlciA/IGNvbHVtbi5pbmRleCA6IGNvbHVtbi52aXNpYmxlSW5kZXg7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkluZm8gPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBjb2x1bW5IZWFkZXIsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgICAgICBza2lwOiAhZXhwb3J0Q29sdW1uLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogY29sdW1uLmZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBza2lwRm9ybWF0dGVyOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbHVtbkxpc3RbaW5kZXhdID0gY29sdW1uSW5mbztcbiAgICAgICAgICAgICAgICBsYXN0VmlzYmxlQ29sdW1uSW5kZXggPSBNYXRoLm1heChsYXN0VmlzYmxlQ29sdW1uSW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuQ29sdW1ucy5wdXNoKGNvbHVtbkluZm8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29sdW1uLnBpbm5lZCAmJiBleHBvcnRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleE9mTGFzdFBpbm5lZENvbHVtbiA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIGhpZGRlbiBjb2x1bW5zIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgaGlkZGVuQ29sdW1ucy5mb3JFYWNoKChoaWRkZW5Db2x1bW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbkxpc3RbKytsYXN0VmlzYmxlQ29sdW1uSW5kZXhdID0gaGlkZGVuQ29sdW1uO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcmVwYXJlRGF0YShncmlkLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5leHBvcnREYXRhKGRhdGEsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBmb3IgZXhwb3J0aW5nIGFueSBraW5kIG9mIGFycmF5IGRhdGEuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZXhwb3J0ZXJTZXJ2aWNlLmV4cG9ydERhdGEodGhpcy5hcnJheUZvckV4cG9ydCwgdGhpcy5leHBvcnRPcHRpb25zKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QmFzZUV4cG9ydGVyXG4gICAgICovXG4gICAgcHVibGljIGV4cG9ydERhdGEoZGF0YTogYW55W10sIG9wdGlvbnM6IElneEV4cG9ydGVyT3B0aW9uc0Jhc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gb3B0aW9ucyBwcm92aWRlZCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fY29sdW1uTGlzdCB8fCB0aGlzLl9jb2x1bW5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IEV4cG9ydFV0aWxpdGllcy5nZXRLZXlzRnJvbURhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5MaXN0ID0ga2V5cy5tYXAoKGspID0+ICh7IGhlYWRlcjogaywgZmllbGQ6IGssIHNraXA6IGZhbHNlIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBza2lwcGVkUGlubmVkQ29sdW1uc0NvdW50ID0gMDtcbiAgICAgICAgbGV0IGNvbHVtbnNXaXRob3V0SGVhZGVyQ291bnQgPSAxO1xuICAgICAgICB0aGlzLl9jb2x1bW5MaXN0LmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghY29sdW1uLnNraXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5FeHBvcnRBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IEV4cG9ydFV0aWxpdGllcy5pc051bGxPcldoaXRlc3BhY2VzKGNvbHVtbi5oZWFkZXIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdDb2x1bW4nICsgY29sdW1uc1dpdGhvdXRIZWFkZXJDb3VudCsrIDogY29sdW1uLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBza2lwRm9ybWF0dGVyOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbHVtbkV4cG9ydC5lbWl0KGNvbHVtbkV4cG9ydEFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgY29sdW1uLmhlYWRlciA9IGNvbHVtbkV4cG9ydEFyZ3MuaGVhZGVyO1xuICAgICAgICAgICAgICAgIGNvbHVtbi5za2lwID0gY29sdW1uRXhwb3J0QXJncy5jYW5jZWw7XG4gICAgICAgICAgICAgICAgY29sdW1uLnNraXBGb3JtYXR0ZXIgPSBjb2x1bW5FeHBvcnRBcmdzLnNraXBGb3JtYXR0ZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnNraXAgJiYgaW5kZXggPD0gdGhpcy5faW5kZXhPZkxhc3RQaW5uZWRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpcHBlZFBpbm5lZENvbHVtbnNDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0ICYmIHRoaXMuX3NvcnQuZmllbGROYW1lID09PSBjb2x1bW4uZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5za2lwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnQuZmllbGROYW1lID0gY29sdW1uLmhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5faW5kZXhPZkxhc3RQaW5uZWRDb2x1bW4gLT0gc2tpcHBlZFBpbm5lZENvbHVtbnNDb3VudDtcblxuICAgICAgICBjb25zdCBkYXRhVG9FeHBvcnQgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICBjb25zdCBpc1NwZWNpYWxEYXRhID0gRXhwb3J0VXRpbGl0aWVzLmlzU3BlY2lhbERhdGEoZGF0YSk7XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFJvdyhkYXRhVG9FeHBvcnQsIHJvdywgaW5kZXgsIGlzU3BlY2lhbERhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV4cG9ydERhdGFJbXBsZW1lbnRhdGlvbihkYXRhVG9FeHBvcnQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnJlc2V0RGVmYXVsdHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZXhwb3J0RGF0YUltcGxlbWVudGF0aW9uKGRhdGE6IGFueVtdLCBvcHRpb25zOiBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlKTogdm9pZDtcblxuICAgIHByaXZhdGUgZXhwb3J0Um93KGRhdGE6IGFueVtdLCByb3dEYXRhOiBhbnksIGluZGV4OiBudW1iZXIsIGlzU3BlY2lhbERhdGE6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHJvdztcblxuICAgICAgICBpZiAoIWlzU3BlY2lhbERhdGEpIHtcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuX2NvbHVtbkxpc3QucmVkdWNlKChhLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlLnNraXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3VmFsdWUgPSB0aGlzLl9pc1RyZWVHcmlkID8gcm93RGF0YS5kYXRhW2UuZmllbGRdIDogcm93RGF0YVtlLmZpZWxkXTtcbiAgICAgICAgICAgICAgICAgICAgYVtlLmhlYWRlcl0gPSBlLmZvcm1hdHRlciAmJiAhZS5za2lwRm9ybWF0dGVyID8gZS5mb3JtYXR0ZXIocmF3VmFsdWUpIDogcmF3VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93ID0gdGhpcy5faXNUcmVlR3JpZCA/IHJvd0RhdGEuZGF0YSA6IHJvd0RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dBcmdzID0ge1xuICAgICAgICAgICAgcm93RGF0YTogcm93LFxuICAgICAgICAgICAgcm93SW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uUm93RXhwb3J0LmVtaXQocm93QXJncyk7XG5cbiAgICAgICAgaWYgKCFyb3dBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgZGF0YS5wdXNoKHsgcm93RGF0YTogcm93QXJncy5yb3dEYXRhLCBvcmlnaW5hbFJvd0RhdGE6IHJvd0RhdGEgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXBhcmVEYXRhKGdyaWQ6IGFueSwgb3B0aW9uczogSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSk6IGFueVtdIHtcbiAgICAgICAgdGhpcy5mbGF0UmVjb3JkcyA9IFtdO1xuICAgICAgICBsZXQgcm9vdFJlY29yZHMgPSBncmlkLnJvb3RSZWNvcmRzO1xuICAgICAgICB0aGlzLl9pc1RyZWVHcmlkID0gcm9vdFJlY29yZHMgIT09IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5faXNUcmVlR3JpZCkge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlSGllcmFyY2hpY2FsRGF0YShyb290UmVjb3Jkcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2lzVHJlZUdyaWQgPyB0aGlzLmZsYXRSZWNvcmRzIDogZ3JpZC5kYXRhO1xuXG4gICAgICAgIGlmIChncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSAmJlxuICAgICAgICAgICAgZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUuZmlsdGVyaW5nT3BlcmFuZHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgIW9wdGlvbnMuaWdub3JlRmlsdGVyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJpbmdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uc1RyZWU6IGdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLFxuICAgICAgICAgICAgICAgIGxvZ2ljOiBncmlkLmZpbHRlcmluZ0xvZ2ljXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5faXNUcmVlR3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmxhdFJlY29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICByb290UmVjb3JkcyA9IERhdGFVdGlsLnRyZWVHcmlkRmlsdGVyKHJvb3RSZWNvcmRzLCBmaWx0ZXJpbmdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlSGllcmFyY2hpY2FsRGF0YShyb290UmVjb3Jkcyk7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmxhdFJlY29yZHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBEYXRhVXRpbC5maWx0ZXIoZGF0YSwgZmlsdGVyaW5nU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdyaWQuc29ydGluZ0V4cHJlc3Npb25zICYmXG4gICAgICAgICAgICBncmlkLnNvcnRpbmdFeHByZXNzaW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAhb3B0aW9ucy5pZ25vcmVTb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0ID0gY2xvbmVWYWx1ZShncmlkLnNvcnRpbmdFeHByZXNzaW9uc1swXSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1RyZWVHcmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGF0UmVjb3JkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJvb3RSZWNvcmRzID0gRGF0YVV0aWwudHJlZUdyaWRTb3J0KHJvb3RSZWNvcmRzLCBncmlkLnNvcnRpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlSGllcmFyY2hpY2FsRGF0YShyb290UmVjb3Jkcyk7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmxhdFJlY29yZHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBEYXRhVXRpbC5zb3J0KGRhdGEsIGdyaWQuc29ydGluZ0V4cHJlc3Npb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJlcGFyZUhpZXJhcmNoaWNhbERhdGEocmVjb3JkczogSVRyZWVHcmlkUmVjb3JkW10pIHtcbiAgICAgICAgaWYgKCFyZWNvcmRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBoaWVyYXJjaGljYWxSZWNvcmQgPSByZWNvcmRzW2ldO1xuXG4gICAgICAgICAgICB0aGlzLmZsYXRSZWNvcmRzLnB1c2goaGllcmFyY2hpY2FsUmVjb3JkKTtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUhpZXJhcmNoaWNhbERhdGEoaGllcmFyY2hpY2FsUmVjb3JkLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXREZWZhdWx0cygpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9pbmRleE9mTGFzdFBpbm5lZENvbHVtbiA9IC0xO1xuICAgICAgICB0aGlzLl9zb3J0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbGF0UmVjb3JkcyA9IFtdO1xuICAgIH1cbn1cbiJdfQ==