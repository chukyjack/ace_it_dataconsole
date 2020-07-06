/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
var CompleterService = /** @class */ (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
    remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.local = /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        /** @type {?} */
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.remote = /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        /** @type {?} */
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompleterService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LocalData,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [RemoteData,] }] }
    ]; };
    return CompleterService;
}());
export { CompleterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompleterService.prototype.localDataFactory;
    /**
     * @type {?}
     * @private
     */
    CompleterService.prototype.remoteDataFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9jb21wbGV0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUduRDtJQUVFLDBCQUM2QixnQkFBcUIsRUFBRSw2REFBNkQ7SUFDbkYsaUJBQXNCLENBQUMsNkRBQTZEOztRQURyRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFLO0lBQ2hELENBQUM7Ozs7Ozs7SUFFRSxnQ0FBSzs7Ozs7O0lBQVosVUFBYSxJQUE2QixFQUFFLFlBQWlCLEVBQUUsVUFBZTtRQUFsQyw2QkFBQSxFQUFBLGlCQUFpQjtRQUFFLDJCQUFBLEVBQUEsZUFBZTs7WUFFdEUsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtRQUN6QyxPQUFPLFNBQVM7YUFDYixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsWUFBWSxDQUFDLFlBQVksQ0FBQzthQUMxQixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUVNLGlDQUFNOzs7Ozs7SUFBYixVQUFjLEdBQVcsRUFBRSxZQUFpQixFQUFFLFVBQWU7UUFBbEMsNkJBQUEsRUFBQSxpQkFBaUI7UUFBRSwyQkFBQSxFQUFBLGVBQWU7O1lBRXJELFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDM0MsT0FBTyxVQUFVO2FBQ2QsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNkLFlBQVksQ0FBQyxZQUFZLENBQUM7YUFDMUIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXZCRixVQUFVOzs7O2dEQUdOLE1BQU0sU0FBQyxTQUFTO2dEQUNoQixNQUFNLFNBQUMsVUFBVTs7SUFvQnRCLHVCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksZ0JBQWdCOzs7Ozs7SUFFekIsNENBQWdEOzs7OztJQUNoRCw2Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9jYWxEYXRhIH0gZnJvbSAnLi9sb2NhbC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVtb3RlRGF0YSB9IGZyb20gJy4vcmVtb3RlLWRhdGEuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBsZXRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExvY2FsRGF0YSkgcHJpdmF0ZSBsb2NhbERhdGFGYWN0b3J5OiBhbnksIC8vIFVzaW5nIGFueSBpbnN0ZWFkIG9mICgpID0+IExvY2FsRGF0YSBiZWNhdXNlIG9uIEFvVCBlcnJvcnNcbiAgICBASW5qZWN0KFJlbW90ZURhdGEpIHByaXZhdGUgcmVtb3RlRGF0YUZhY3Rvcnk6IGFueSAvLyBVc2luZyBhbnkgaW5zdGVhZCBvZiAoKSA9PiBMb2NhbERhdGEgYmVjYXVzZSBvbiBBb1QgZXJyb3JzXG4gICkgeyB9XG5cbiAgcHVibGljIGxvY2FsKGRhdGE6IGFueVtdIHwgT2JzZXJ2YWJsZTxhbnk+LCBzZWFyY2hGaWVsZHMgPSAnJywgdGl0bGVGaWVsZCA9ICcnKTogTG9jYWxEYXRhIHtcblxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IHRoaXMubG9jYWxEYXRhRmFjdG9yeSgpO1xuICAgIHJldHVybiBsb2NhbERhdGFcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuc2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkcylcbiAgICAgIC50aXRsZUZpZWxkKHRpdGxlRmllbGQpO1xuICB9XG5cbiAgcHVibGljIHJlbW90ZSh1cmw6IHN0cmluZywgc2VhcmNoRmllbGRzID0gJycsIHRpdGxlRmllbGQgPSAnJyk6IFJlbW90ZURhdGEge1xuXG4gICAgY29uc3QgcmVtb3RlRGF0YSA9IHRoaXMucmVtb3RlRGF0YUZhY3RvcnkoKTtcbiAgICByZXR1cm4gcmVtb3RlRGF0YVxuICAgICAgLnJlbW90ZVVybCh1cmwpXG4gICAgICAuc2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkcylcbiAgICAgIC50aXRsZUZpZWxkKHRpdGxlRmllbGQpO1xuICB9XG59XG4iXX0=