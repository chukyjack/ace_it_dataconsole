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
var IgxBaseExporter = /** @class */ (function () {
    function IgxBaseExporter() {
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
     * @memberof IgxBaseExporter
     */
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
    IgxBaseExporter.prototype.export = /**
     * Method for exporting IgxGrid component's data.
     * ```typescript
     * this.exporterService.export(this.igxGridForExport, this.exportOptions);
     * ```
     * \@memberof IgxBaseExporter
     * @param {?} grid
     * @param {?} options
     * @return {?}
     */
    function (grid, options) {
        var _this = this;
        if (options === undefined || options === null) {
            throw Error('No options provided!');
        }
        /** @type {?} */
        var columns = grid.columnList.toArray();
        this._columnList = new Array(columns.length);
        /** @type {?} */
        var hiddenColumns = [];
        /** @type {?} */
        var lastVisbleColumnIndex = -1;
        columns.forEach(function (column) {
            /** @type {?} */
            var columnHeader = column.header !== '' ? column.header : column.field;
            /** @type {?} */
            var exportColumn = !column.hidden || options.ignoreColumnsVisibility;
            /** @type {?} */
            var index = options.ignoreColumnsOrder ? column.index : column.visibleIndex;
            /** @type {?} */
            var columnInfo = {
                header: columnHeader,
                field: column.field,
                skip: !exportColumn,
                formatter: column.formatter,
                skipFormatter: false
            };
            if (index !== -1) {
                _this._columnList[index] = columnInfo;
                lastVisbleColumnIndex = Math.max(lastVisbleColumnIndex, index);
            }
            else {
                hiddenColumns.push(columnInfo);
            }
            if (column.pinned && exportColumn) {
                _this._indexOfLastPinnedColumn = index;
            }
        });
        // Append the hidden columns to the end of the list
        hiddenColumns.forEach(function (hiddenColumn) {
            _this._columnList[++lastVisbleColumnIndex] = hiddenColumn;
        });
        /** @type {?} */
        var data = this.prepareData(grid, options);
        this.exportData(data, options);
    };
    /**
     * Method for exporting any kind of array data.
     * ```typescript
     * this.exporterService.exportData(this.arrayForExport, this.exportOptions);
     * ```
     * @memberof IgxBaseExporter
     */
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
    IgxBaseExporter.prototype.exportData = /**
     * Method for exporting any kind of array data.
     * ```typescript
     * this.exporterService.exportData(this.arrayForExport, this.exportOptions);
     * ```
     * \@memberof IgxBaseExporter
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        if (options === undefined || options === null) {
            throw Error('No options provided!');
        }
        if (!this._columnList || this._columnList.length === 0) {
            /** @type {?} */
            var keys = ExportUtilities.getKeysFromData(data);
            this._columnList = keys.map(function (k) { return ({ header: k, field: k, skip: false }); });
        }
        /** @type {?} */
        var skippedPinnedColumnsCount = 0;
        /** @type {?} */
        var columnsWithoutHeaderCount = 1;
        this._columnList.forEach(function (column, index) {
            if (!column.skip) {
                /** @type {?} */
                var columnExportArgs = {
                    header: ExportUtilities.isNullOrWhitespaces(column.header) ?
                        'Column' + columnsWithoutHeaderCount++ : column.header,
                    field: column.field,
                    columnIndex: index,
                    cancel: false,
                    skipFormatter: false
                };
                _this.onColumnExport.emit(columnExportArgs);
                column.header = columnExportArgs.header;
                column.skip = columnExportArgs.cancel;
                column.skipFormatter = columnExportArgs.skipFormatter;
                if (column.skip && index <= _this._indexOfLastPinnedColumn) {
                    skippedPinnedColumnsCount++;
                }
                if (_this._sort && _this._sort.fieldName === column.field) {
                    if (column.skip) {
                        _this._sort = null;
                    }
                    else {
                        _this._sort.fieldName = column.header;
                    }
                }
            }
        });
        this._indexOfLastPinnedColumn -= skippedPinnedColumnsCount;
        /** @type {?} */
        var dataToExport = new Array();
        /** @type {?} */
        var isSpecialData = ExportUtilities.isSpecialData(data);
        data.forEach(function (row, index) {
            _this.exportRow(dataToExport, row, index, isSpecialData);
        });
        this.exportDataImplementation(dataToExport, options);
        this.resetDefaults();
    };
    /**
     * @private
     * @param {?} data
     * @param {?} rowData
     * @param {?} index
     * @param {?} isSpecialData
     * @return {?}
     */
    IgxBaseExporter.prototype.exportRow = /**
     * @private
     * @param {?} data
     * @param {?} rowData
     * @param {?} index
     * @param {?} isSpecialData
     * @return {?}
     */
    function (data, rowData, index, isSpecialData) {
        var _this = this;
        /** @type {?} */
        var row;
        if (!isSpecialData) {
            row = this._columnList.reduce(function (a, e) {
                if (!e.skip) {
                    /** @type {?} */
                    var rawValue = _this._isTreeGrid ? rowData.data[e.field] : rowData[e.field];
                    a[e.header] = e.formatter && !e.skipFormatter ? e.formatter(rawValue) : rawValue;
                }
                return a;
            }, {});
        }
        else {
            row = this._isTreeGrid ? rowData.data : rowData;
        }
        /** @type {?} */
        var rowArgs = {
            rowData: row,
            rowIndex: index,
            cancel: false
        };
        this.onRowExport.emit(rowArgs);
        if (!rowArgs.cancel) {
            data.push({ rowData: rowArgs.rowData, originalRowData: rowData });
        }
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} options
     * @return {?}
     */
    IgxBaseExporter.prototype.prepareData = /**
     * @private
     * @param {?} grid
     * @param {?} options
     * @return {?}
     */
    function (grid, options) {
        this.flatRecords = [];
        /** @type {?} */
        var rootRecords = grid.rootRecords;
        this._isTreeGrid = rootRecords !== undefined;
        if (this._isTreeGrid) {
            this.prepareHierarchicalData(rootRecords);
        }
        /** @type {?} */
        var data = this._isTreeGrid ? this.flatRecords : grid.data;
        if (grid.filteringExpressionsTree &&
            grid.filteringExpressionsTree.filteringOperands.length > 0 &&
            !options.ignoreFiltering) {
            /** @type {?} */
            var filteringState = {
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
    };
    /**
     * @private
     * @param {?} records
     * @return {?}
     */
    IgxBaseExporter.prototype.prepareHierarchicalData = /**
     * @private
     * @param {?} records
     * @return {?}
     */
    function (records) {
        if (!records) {
            return;
        }
        for (var i = 0; i < records.length; i++) {
            /** @type {?} */
            var hierarchicalRecord = records[i];
            this.flatRecords.push(hierarchicalRecord);
            this.prepareHierarchicalData(hierarchicalRecord.children);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxBaseExporter.prototype.resetDefaults = /**
     * @private
     * @return {?}
     */
    function () {
        this._columnList = [];
        this._indexOfLastPinnedColumn = -1;
        this._sort = null;
        this.flatRecords = [];
    };
    IgxBaseExporter.propDecorators = {
        onRowExport: [{ type: Output }],
        onColumnExport: [{ type: Output }]
    };
    return IgxBaseExporter;
}());
export { IgxBaseExporter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1leHBvcnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhwb3J0ZXItY29tbW9uL2Jhc2UtZXhwb3J0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxZQUFZLEVBQ1osTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQVVyRCw0Q0FlQzs7Ozs7O0lBWEcseUNBQWE7Ozs7O0lBS2IsMENBQWlCOzs7OztJQUtqQix3Q0FBZ0I7Ozs7Ozs7Ozs7O0FBV3BCLCtDQXlCQzs7Ozs7O0lBckJHLDJDQUFlOzs7OztJQUtmLDBDQUFjOzs7OztJQUtkLGdEQUFvQjs7Ozs7SUFLcEIsMkNBQWdCOzs7OztJQUtoQixrREFBdUI7Ozs7O0FBRzNCO0lBQUE7UUFFWSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLDZCQUF3QixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFVBQUssR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7UUFZaEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQzs7Ozs7Ozs7OztRQVl6RCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUE2QixDQUFDO0lBa04xRSxDQUFDO0lBaE5HOzs7Ozs7T0FNRzs7Ozs7Ozs7Ozs7SUFDSSxnQ0FBTTs7Ozs7Ozs7OztJQUFiLFVBQWMsSUFBUyxFQUFFLE9BQStCO1FBQXhELGlCQTJDQztRQTFDRyxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUMz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LENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDL0Isa0JBQWtCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUVyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7Ozs7O0lBRU8sdUNBQWE7Ozs7SUFBckI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OEJBOU5BLE1BQU07aUNBWU4sTUFBTTs7SUFtTlgsc0JBQUM7Q0FBQSxBQWhQRCxJQWdQQztTQWhQcUIsZUFBZTs7Ozs7O0lBQ2pDLHNDQUEyQjs7Ozs7SUFDM0Isc0NBQXlCOzs7OztJQUV6QixzQ0FBOEI7Ozs7O0lBQzlCLG1EQUF3Qzs7Ozs7SUFDeEMsZ0NBQXVCOzs7Ozs7Ozs7OztJQVd2QixzQ0FDZ0U7Ozs7Ozs7Ozs7O0lBV2hFLHlDQUNzRTs7Ozs7Ozs7SUFvSHRFLGtGQUFnRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY2xvbmVWYWx1ZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcblxuaW1wb3J0IHsgRXhwb3J0VXRpbGl0aWVzIH0gZnJvbSAnLi9leHBvcnQtdXRpbGl0aWVzJztcbmltcG9ydCB7IElneEV4cG9ydGVyT3B0aW9uc0Jhc2UgfSBmcm9tICcuL2V4cG9ydGVyLW9wdGlvbnMtYmFzZSc7XG5pbXBvcnQgeyBJVHJlZUdyaWRSZWNvcmQgfSBmcm9tICcuLi8uLi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIG9uUm93RXhwb3J0IGV2ZW50IGFyZ3VtZW50c1xuICogdGhpcy5leHBvcnRlclNlcnZpY2Uub25Sb3dFeHBvcnQuc3Vic2NyaWJlKChhcmdzOiBJUm93RXhwb3J0aW5nRXZlbnRBcmdzKSA9PiB7XG4gKiAvLyBzZXQgYXJncyBwcm9wZXJ0aWVzIGhlcmVcbiAqIH0pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJvd0V4cG9ydGluZ0V2ZW50QXJncyB7XG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgdGhlIGV4cG9ydGluZyByb3cgZGF0YVxuICAgICAqL1xuICAgIHJvd0RhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIHRoZSBleHBvcnRpbmcgcm93IGluZGV4XG4gICAgICovXG4gICAgcm93SW5kZXg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFNraXAgdGhlIGV4cG9ydGluZyByb3cgd2hlbiBzZXQgdG8gdHJ1ZVxuICAgICAqL1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cblxuLyoqXG4gICAgKiBvbkNvbHVtbkV4cG9ydCBldmVudCBhcmd1bWVudHNcbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqIHRoaXMuZXhwb3J0ZXJTZXJ2aWNlLm9uQ29sdW1uRXhwb3J0LnN1YnNjcmliZSgoYXJnczogSUNvbHVtbkV4cG9ydGluZ0V2ZW50QXJncykgPT4ge1xuICAgICogLy8gc2V0IGFyZ3MgcHJvcGVydGllcyBoZXJlXG4gICAgKiB9KTtcbiAgICAqIGBgYFxuICAgICovXG5leHBvcnQgaW50ZXJmYWNlIElDb2x1bW5FeHBvcnRpbmdFdmVudEFyZ3Mge1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIHRoZSBleHBvcnRpbmcgY29sdW1uIGhlYWRlclxuICAgICAqL1xuICAgIGhlYWRlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgdGhlIGV4cG9ydGluZyBjb2x1bW4gZmllbGQgbmFtZVxuICAgICAqL1xuICAgIGZpZWxkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyB0aGUgZXhwb3J0aW5nIGNvbHVtbiBpbmRleFxuICAgICAqL1xuICAgIGNvbHVtbkluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBTa2lwIHRoZSBleHBvcnRpbmcgY29sdW1uIHdoZW4gc2V0IHRvIHRydWVcbiAgICAgKi9cbiAgICBjYW5jZWw6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBFeHBvcnQgdGhlIGNvbHVtbidzIGRhdGEgd2l0aG91dCBhcHBseWluZyBpdHMgZm9ybWF0dGVyLCB3aGVuIHNldCB0byB0cnVlXG4gICAgICovXG4gICAgc2tpcEZvcm1hdHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElneEJhc2VFeHBvcnRlciB7XG4gICAgcHJpdmF0ZSBfY29sdW1uTGlzdDogYW55W107XG4gICAgcHJpdmF0ZSBmbGF0UmVjb3JkcyA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIF9pc1RyZWVHcmlkID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9pbmRleE9mTGFzdFBpbm5lZENvbHVtbiA9IC0xO1xuICAgIHByb3RlY3RlZCBfc29ydCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGVtaXR0ZWQgd2hlbiBhIHJvdyBpcyBleHBvcnRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRlclNlcnZpY2Uub25Sb3dFeHBvcnQuc3Vic2NyaWJlKChhcmdzOiBJUm93RXhwb3J0aW5nRXZlbnRBcmdzKSA9PiB7XG4gICAgICogLy8gcHV0IGV2ZW50IGhhbmRsZXIgY29kZSBoZXJlXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJhc2VFeHBvcnRlclxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblJvd0V4cG9ydCA9IG5ldyBFdmVudEVtaXR0ZXI8SVJvd0V4cG9ydGluZ0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCB3aGVuIGEgY29sdW1uIGlzIGV4cG9ydGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmV4cG9ydGVyU2VydmljZS5vbkNvbHVtbkV4cG9ydC5zdWJzY3JpYmUoKGFyZ3M6IElDb2x1bW5FeHBvcnRpbmdFdmVudEFyZ3MpID0+IHtcbiAgICAgKiAvLyBwdXQgZXZlbnQgaGFuZGxlciBjb2RlIGhlcmVcbiAgICAgKiB9KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QmFzZUV4cG9ydGVyXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ29sdW1uRXhwb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29sdW1uRXhwb3J0aW5nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGZvciBleHBvcnRpbmcgSWd4R3JpZCBjb21wb25lbnQncyBkYXRhLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmV4cG9ydGVyU2VydmljZS5leHBvcnQodGhpcy5pZ3hHcmlkRm9yRXhwb3J0LCB0aGlzLmV4cG9ydE9wdGlvbnMpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCYXNlRXhwb3J0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwb3J0KGdyaWQ6IGFueSwgb3B0aW9uczogSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSk6IHZvaWQge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyBvcHRpb25zIHByb3ZpZGVkIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdyaWQuY29sdW1uTGlzdC50b0FycmF5KCk7XG4gICAgICAgIHRoaXMuX2NvbHVtbkxpc3QgPSBuZXcgQXJyYXk8YW55Pihjb2x1bW5zLmxlbmd0aCk7XG5cbiAgICAgICAgY29uc3QgaGlkZGVuQ29sdW1ucyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFZpc2JsZUNvbHVtbkluZGV4ID0gLTE7XG5cbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlciA9IGNvbHVtbi5oZWFkZXIgIT09ICcnID8gY29sdW1uLmhlYWRlciA6IGNvbHVtbi5maWVsZDtcbiAgICAgICAgICAgIGNvbnN0IGV4cG9ydENvbHVtbiA9ICFjb2x1bW4uaGlkZGVuIHx8IG9wdGlvbnMuaWdub3JlQ29sdW1uc1Zpc2liaWxpdHk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9wdGlvbnMuaWdub3JlQ29sdW1uc09yZGVyID8gY29sdW1uLmluZGV4IDogY29sdW1uLnZpc2libGVJbmRleDtcblxuICAgICAgICAgICAgY29uc3QgY29sdW1uSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGNvbHVtbkhlYWRlcixcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxuICAgICAgICAgICAgICAgIHNraXA6ICFleHBvcnRDb2x1bW4sXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBjb2x1bW4uZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIHNraXBGb3JtYXR0ZXI6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29sdW1uTGlzdFtpbmRleF0gPSBjb2x1bW5JbmZvO1xuICAgICAgICAgICAgICAgIGxhc3RWaXNibGVDb2x1bW5JbmRleCA9IE1hdGgubWF4KGxhc3RWaXNibGVDb2x1bW5JbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5Db2x1bW5zLnB1c2goY29sdW1uSW5mbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW4ucGlubmVkICYmIGV4cG9ydENvbHVtbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4T2ZMYXN0UGlubmVkQ29sdW1uID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgaGlkZGVuIGNvbHVtbnMgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICBoaWRkZW5Db2x1bW5zLmZvckVhY2goKGhpZGRlbkNvbHVtbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uTGlzdFsrK2xhc3RWaXNibGVDb2x1bW5JbmRleF0gPSBoaWRkZW5Db2x1bW47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByZXBhcmVEYXRhKGdyaWQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmV4cG9ydERhdGEoZGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGZvciBleHBvcnRpbmcgYW55IGtpbmQgb2YgYXJyYXkgZGF0YS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRlclNlcnZpY2UuZXhwb3J0RGF0YSh0aGlzLmFycmF5Rm9yRXhwb3J0LCB0aGlzLmV4cG9ydE9wdGlvbnMpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCYXNlRXhwb3J0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShkYXRhOiBhbnlbXSwgb3B0aW9uczogSWd4RXhwb3J0ZXJPcHRpb25zQmFzZSk6IHZvaWQge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyBvcHRpb25zIHByb3ZpZGVkIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jb2x1bW5MaXN0IHx8IHRoaXMuX2NvbHVtbkxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gRXhwb3J0VXRpbGl0aWVzLmdldEtleXNGcm9tRGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbkxpc3QgPSBrZXlzLm1hcCgoaykgPT4gKHsgaGVhZGVyOiBrLCBmaWVsZDogaywgc2tpcDogZmFsc2UgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNraXBwZWRQaW5uZWRDb2x1bW5zQ291bnQgPSAwO1xuICAgICAgICBsZXQgY29sdW1uc1dpdGhvdXRIZWFkZXJDb3VudCA9IDE7XG4gICAgICAgIHRoaXMuX2NvbHVtbkxpc3QuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4uc2tpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkV4cG9ydEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogRXhwb3J0VXRpbGl0aWVzLmlzTnVsbE9yV2hpdGVzcGFjZXMoY29sdW1uLmhlYWRlcikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbHVtbicgKyBjb2x1bW5zV2l0aG91dEhlYWRlckNvdW50KysgOiBjb2x1bW4uaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNraXBGb3JtYXR0ZXI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29sdW1uRXhwb3J0LmVtaXQoY29sdW1uRXhwb3J0QXJncyk7XG5cbiAgICAgICAgICAgICAgICBjb2x1bW4uaGVhZGVyID0gY29sdW1uRXhwb3J0QXJncy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgY29sdW1uLnNraXAgPSBjb2x1bW5FeHBvcnRBcmdzLmNhbmNlbDtcbiAgICAgICAgICAgICAgICBjb2x1bW4uc2tpcEZvcm1hdHRlciA9IGNvbHVtbkV4cG9ydEFyZ3Muc2tpcEZvcm1hdHRlcjtcblxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uc2tpcCAmJiBpbmRleCA8PSB0aGlzLl9pbmRleE9mTGFzdFBpbm5lZENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBza2lwcGVkUGlubmVkQ29sdW1uc0NvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnQgJiYgdGhpcy5fc29ydC5maWVsZE5hbWUgPT09IGNvbHVtbi5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnNraXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydC5maWVsZE5hbWUgPSBjb2x1bW4uaGVhZGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9pbmRleE9mTGFzdFBpbm5lZENvbHVtbiAtPSBza2lwcGVkUGlubmVkQ29sdW1uc0NvdW50O1xuXG4gICAgICAgIGNvbnN0IGRhdGFUb0V4cG9ydCA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgIGNvbnN0IGlzU3BlY2lhbERhdGEgPSBFeHBvcnRVdGlsaXRpZXMuaXNTcGVjaWFsRGF0YShkYXRhKTtcblxuICAgICAgICBkYXRhLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0Um93KGRhdGFUb0V4cG9ydCwgcm93LCBpbmRleCwgaXNTcGVjaWFsRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwb3J0RGF0YUltcGxlbWVudGF0aW9uKGRhdGFUb0V4cG9ydCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucmVzZXREZWZhdWx0cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBleHBvcnREYXRhSW1wbGVtZW50YXRpb24oZGF0YTogYW55W10sIG9wdGlvbnM6IElneEV4cG9ydGVyT3B0aW9uc0Jhc2UpOiB2b2lkO1xuXG4gICAgcHJpdmF0ZSBleHBvcnRSb3coZGF0YTogYW55W10sIHJvd0RhdGE6IGFueSwgaW5kZXg6IG51bWJlciwgaXNTcGVjaWFsRGF0YTogYm9vbGVhbikge1xuICAgICAgICBsZXQgcm93O1xuXG4gICAgICAgIGlmICghaXNTcGVjaWFsRGF0YSkge1xuICAgICAgICAgICAgcm93ID0gdGhpcy5fY29sdW1uTGlzdC5yZWR1Y2UoKGEsIGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWUuc2tpcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuX2lzVHJlZUdyaWQgPyByb3dEYXRhLmRhdGFbZS5maWVsZF0gOiByb3dEYXRhW2UuZmllbGRdO1xuICAgICAgICAgICAgICAgICAgICBhW2UuaGVhZGVyXSA9IGUuZm9ybWF0dGVyICYmICFlLnNraXBGb3JtYXR0ZXIgPyBlLmZvcm1hdHRlcihyYXdWYWx1ZSkgOiByYXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cgPSB0aGlzLl9pc1RyZWVHcmlkID8gcm93RGF0YS5kYXRhIDogcm93RGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvd0FyZ3MgPSB7XG4gICAgICAgICAgICByb3dEYXRhOiByb3csXG4gICAgICAgICAgICByb3dJbmRleDogaW5kZXgsXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Sb3dFeHBvcnQuZW1pdChyb3dBcmdzKTtcblxuICAgICAgICBpZiAoIXJvd0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goeyByb3dEYXRhOiByb3dBcmdzLnJvd0RhdGEsIG9yaWdpbmFsUm93RGF0YTogcm93RGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcHJlcGFyZURhdGEoZ3JpZDogYW55LCBvcHRpb25zOiBJZ3hFeHBvcnRlck9wdGlvbnNCYXNlKTogYW55W10ge1xuICAgICAgICB0aGlzLmZsYXRSZWNvcmRzID0gW107XG4gICAgICAgIGxldCByb290UmVjb3JkcyA9IGdyaWQucm9vdFJlY29yZHM7XG4gICAgICAgIHRoaXMuX2lzVHJlZUdyaWQgPSByb290UmVjb3JkcyAhPT0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1RyZWVHcmlkKSB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVIaWVyYXJjaGljYWxEYXRhKHJvb3RSZWNvcmRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5faXNUcmVlR3JpZCA/IHRoaXMuZmxhdFJlY29yZHMgOiBncmlkLmRhdGE7XG5cbiAgICAgICAgaWYgKGdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlICYmXG4gICAgICAgICAgICBncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAhb3B0aW9ucy5pZ25vcmVGaWx0ZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmluZ1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZTogZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsXG4gICAgICAgICAgICAgICAgbG9naWM6IGdyaWQuZmlsdGVyaW5nTG9naWNcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1RyZWVHcmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGF0UmVjb3JkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJvb3RSZWNvcmRzID0gRGF0YVV0aWwudHJlZUdyaWRGaWx0ZXIocm9vdFJlY29yZHMsIGZpbHRlcmluZ1N0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVIaWVyYXJjaGljYWxEYXRhKHJvb3RSZWNvcmRzKTtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5mbGF0UmVjb3JkcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IERhdGFVdGlsLmZpbHRlcihkYXRhLCBmaWx0ZXJpbmdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMgJiZcbiAgICAgICAgICAgIGdyaWQuc29ydGluZ0V4cHJlc3Npb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICFvcHRpb25zLmlnbm9yZVNvcnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnQgPSBjbG9uZVZhbHVlKGdyaWQuc29ydGluZ0V4cHJlc3Npb25zWzBdKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVHJlZUdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsYXRSZWNvcmRzID0gW107XG4gICAgICAgICAgICAgICAgcm9vdFJlY29yZHMgPSBEYXRhVXRpbC50cmVlR3JpZFNvcnQocm9vdFJlY29yZHMsIGdyaWQuc29ydGluZ0V4cHJlc3Npb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVIaWVyYXJjaGljYWxEYXRhKHJvb3RSZWNvcmRzKTtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5mbGF0UmVjb3JkcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IERhdGFVdGlsLnNvcnQoZGF0YSwgZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmVwYXJlSGllcmFyY2hpY2FsRGF0YShyZWNvcmRzOiBJVHJlZUdyaWRSZWNvcmRbXSkge1xuICAgICAgICBpZiAoIXJlY29yZHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZXJhcmNoaWNhbFJlY29yZCA9IHJlY29yZHNbaV07XG5cbiAgICAgICAgICAgIHRoaXMuZmxhdFJlY29yZHMucHVzaChoaWVyYXJjaGljYWxSZWNvcmQpO1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlSGllcmFyY2hpY2FsRGF0YShoaWVyYXJjaGljYWxSZWNvcmQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldERlZmF1bHRzKCkge1xuICAgICAgICB0aGlzLl9jb2x1bW5MaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2luZGV4T2ZMYXN0UGlubmVkQ29sdW1uID0gLTE7XG4gICAgICAgIHRoaXMuX3NvcnQgPSBudWxsO1xuICAgICAgICB0aGlzLmZsYXRSZWNvcmRzID0gW107XG4gICAgfVxufVxuIl19